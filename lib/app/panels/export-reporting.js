/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Opquast Desktop.
 *
 * The Initial Developer of the Original Code is
 * Temesis SAS.
 * Portions created by the Initial Developer are Copyright (C) 2012
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Fabrice Bonny <fabrice.bonny@temesis.com>
 *   Olivier Meunier <olivier.meunier@temesis.com>
 *   Laurent Jouanneau <laurent@innophi.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */
"use strict";

const {components, Ci, Cc, Cu, Cr} = require("chrome");

const b64 = require("sdk/base64");
const {Class} = require("sdk/core/heritage");
const _ = require("sdk/l10n").get;
const self = require("sdk/self");
const {prefs} = require("sdk/simple-prefs");

const {BasePanel} = require("./base");
const content = require("../content");
const {Request} = require("../../tools/chanrequest");

const loginManager = Cc["@mozilla.org/login-manager;1"].getService(Ci.nsILoginManager);
const promptService = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);

const AUTH_HOST = "chrome://" + self.id;
const AUTH_REALM = "Opquast Desktop";
const AUTH_FORM_URL = null;

const NO_SUCH_ACCOUNT = "No such account";

const RESULT_MAP = {
    "c": "p",
    "nc": "f",
    "i": "ct",
    "na": "na",
    "nt": "nt"
};

let ExportReportingPanel = exports.ExportReportingPanel = Class({
    extends: BasePanel,

    initialize: function initialize(aParent, aTests) {
        BasePanel.prototype.initialize.call(this, aParent);

        this.tests = aTests;
        this.baseURI = prefs.api_url;
        this.auth = null;
        this.username = null;

        let results = {}, checklists = {};
        this.tests.oaa_results.forEach(function(v) {
            let clID = v.criterion.checklist.id;
            if (typeof(results[clID]) === 'undefined') {
                results[clID] = {};
            }
            results[clID][v.id] = {
                'result': RESULT_MAP[v.result]
            };
            if (v.comment) {
                results[clID][v.id].comment = v.comment;
            }
            checklists[clID] = v.criterion.checklist.name;
        });

        this.results = results;
        this.checklists = checklists;

        this.showUI();
    },

    cancel: function cancel() {
        this.tbCancel();
    },

    showUI: function showUI() {

        // Events
        function onFrameReady(worker) {
            worker.port.on("cancel", this.cancel.bind(this));
            worker.port.on("messageButton", this.cancel.bind(this));
            worker.port.on("showProjects", this.showProjects.bind(this));
            worker.port.on("showSamples", this.showSamples.bind(this));
            worker.port.on("sendResults", this.sendResults.bind(this));
            worker.port.on("removeAccount", function(username) {
                this.removeAccount(username);
                worker.port.emit("accountRemoved", username);
            }.bind(this));
            worker.port.on("openPreferences", content.openPreferences);

            // Start display
            worker.port.on("ready", this.showAccounts.bind(this));
        }
        this._worker = this.frameWorker({
                onFrameReady: onFrameReady.bind(this)
            }, self.data.url("ui/export-reporting.js"));

    },

    showError: function showError(msg) {
        this._worker.port.emit("showMessage", msg, "error", "OK");
    },

    showAccounts: function showAccounts(error, username) {
        let accounts = this.getAccountList();
        this._worker.port.emit("showAccounts", accounts, error, username);
    },

    showProjects: function showProjects(username, password, saveAccount) {
        try {
            this.getAuth(username, password, saveAccount);
        } catch(e) {
            this.showError(_("oqs.alert_unexpected_error"));
            throw(e);
        }
        this._worker.port.emit("showMessage", _('oqs.loading_projects'));

        this.projectRequest()
        .on("complete", this.onProjectsLoaded.bind(this))
        .get();
    },

    showSamples: function showSamples(projectID, projectName) {
        this._worker.port.emit("showMessage", _('oqs.loading_projects'));

        this.samplesRequest(projectID)
        .on("complete", this.onSamplesLoaded.bind(this, projectID, projectName))
        .get();
    },

    sendResults: function sendResults(projectID, projectName, urls) {
        this._worker.port.emit("showMessage", _("oqs.sending_results"));

        // Remove "not tested" results
        let results = {};
        for (let i in this.results) {
            results[i] = {};
            for (let j in this.results[i]) {
                if (this.results[i][j] !== 'nt') {
                    results[i][j] = this.results[i][j];
                }
            }
        }

        let toSend = urls.map(function(v) {
            return [results[v[0]], v[1]];
        });

        let self = this;
        (function _send() {
            var def = toSend.shift();
            if (def) {
                self.injectRequest(def[1], def[0]).on("complete", function() {
                    _send();
                }).put();
            } else {
                self._worker.port.emit("showMessage",
                    _("oqs.alert_data_send", projectName),
                    'sent',
                    "OK"
                );
            }
        })();
    },

    onProjectsLoaded: function onProjectsLoaded(response) {
        try {
            if (response.status == 200 || response.status == 304) {
                let projects = response.json;

                if (!projects || projects.length === 0) {
                    this.showAccounts(_("oqs.alert_no_projects", this.username));
                } else {
                    this._worker.port.emit("showProjects", projects);
                }
            } else if (response.status == 401) {
                this.showAccounts(_("oqs.alert_authentication_failed", this.username), this.username);
            } else {
                this.showError(_("oqs.alert_unexpected_error"));
            }
        } catch(e) {
            this.showError(_("oqs.alert_unexpected_error"));
            throw(e);
        }
    },

    onSamplesLoaded: function onSamplesLoaded(projectID, projectName, response) {
        try {
            if (response.status == 200 || response.status == 304) {
                let samples = response.json;
                let checklists = this.checklists;
                let pageUrl = this.tabURL;

                samples.forEach(function(sample) {
                    // Filter evaluations
                    sample.evaluations = sample.evaluations.filter(function(evaluation) {
                        return typeof(checklists[evaluation.checklist.id]) !== 'undefined';
                    });

                    // Filter pages
                    sample.pages = sample.pages.filter(function(page) {
                        return page.url === pageUrl;
                    });
                });

                samples = samples.filter(function(sample) {
                    return sample.evaluations.length > 0 && sample.pages.length > 0;
                });

                this._worker.port.emit("showSamples", pageUrl, checklists, samples, projectID, projectName);
            } else {
                this.showError(_("oqs.alert_unexpected_error"));
            }
        } catch(e) {
            this.showError(_("oqs.alert_unexpected_error"));
            throw(e);
        }
    },

    //
    // Request handlers
    //
    projectRequest: function projectRequest() {
        return Request({
            url: this.baseURI + "projects/",
            contentType: "application/json",
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic " + this.auth
            }
        });
    },

    samplesRequest: function samplesRequest(projectId) {
        return Request({
            url: this.baseURI + "projects/" + projectId + "/samples?full=1",
            contentType: "application/json",
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic " + this.auth
            }
        });
    },

    injectRequest: function injectRequest(uri, data) {
        return Request({
            url: uri,
            contentType: "application/json",
            content: data,
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic " + this.auth
            }
        });
    },

    deleteRequest: function deleteRequest(uri) {
        return Request({
            url: uri,
            contentType: "application/json",
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic " + this.auth
            }
        });
    },

    //
    // Account management
    //
    getAccountList: function getAccountList() {
        return loginManager.findLogins({}, AUTH_HOST, AUTH_FORM_URL, AUTH_REALM);
    },

    getAccount: function getAccount(username) {
        let accounts = this.getAccountList();
        for (let i=0; i<accounts.length; i++) {
            if (accounts[i].username == username) {
                return accounts[i];
            }
        }

        throw NO_SUCH_ACCOUNT;
    },

    getAuth: function getAuth(username, password, saveAccount) {
        let account;
        if (password !== undefined) {
            account = {'username': username, 'password': password};
            if (saveAccount) {
                this.createAccount(username, password);
                account = this.getAccount(username);
            }
        } else {
            account = this.getAccount(username);
        }

        this.auth = b64.encode(account.username + ":" + account.password);
        this.username = username;
    },

    createAccount: function createAccount(username, password) {
        let loginInfo = Cc["@mozilla.org/login-manager/loginInfo;1"].createInstance(Ci.nsILoginInfo);
        loginInfo.init(AUTH_HOST, AUTH_FORM_URL, AUTH_REALM, username, password, "", "");
        try {
            loginManager.addLogin(loginInfo);
        } catch(e) {
            let accounts = this.getAccountList();
            for (let i=0; i<accounts.length; i++) {
                if (accounts[i].username == username) {
                    loginManager.modifyLogin(accounts[i], loginInfo);
                }
            }
        }
    },

    removeAccount: function removeAccount(username) {
        let accounts = this.getAccountList();
        for (let i=0; i<accounts.length; i++) {
            if (accounts[i].username == username) {
                loginManager.removeLogin(accounts[i]);
            }
        }
    }
});
