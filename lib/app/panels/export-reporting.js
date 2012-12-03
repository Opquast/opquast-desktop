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

const _ = require("l10n").get;
const b64 = require("base64");
const {prefs} = require("simple-prefs");
const self = require("self");
const {catchAndLog} = require("api-utils/errors");
const {Class} = require("api-utils/heritage");

const {components, Ci, Cc, Cu, Cr} = require("chrome");

const {BasePanel} = require("app/panels/base");
const {Request} = require("tools/chanrequest");

const loginManager = Cc["@mozilla.org/login-manager;1"].getService(Ci.nsILoginManager);
const promptService = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);

const internals = require("namespace").ns();

const AUTH_HOST = "chrome://" + self.id;
const AUTH_REALM = "Opquast Desktop";
const AUTH_FORM_URL = null;

const NO_SUCH_ACCOUNT = "No such account";

let ExportReportingPanel = exports.ExportReportingPanel = Class({
    extends: BasePanel,

    initialize: function initialize(aParent, aTests) {
        BasePanel.prototype.initialize.call(this, aParent);

        this.tests = aTests;
        this.baseURI = prefs.api_url;
        this.auth = null;
        this.username = null;

        this.showUI();
    },

    cancel: function cancel() {
        this.tbCancel();
    },

    showUI: function showUI() {
        let worker = this.frameWorker(null, self.data.url("ui/export-reporting.js"));
        internals(this).worker = worker;

        // Events
        worker.port.on("cancel", this.cancel.bind(this));
        worker.port.on("messageButton", this.cancel.bind(this));
        worker.port.on("showProjects", this.showProjects.bind(this));
        worker.port.on("sendResults", this.sendResults.bind(this));
        worker.port.on("removePage", this.removePage.bind(this));
        worker.port.on("removeAccount", function(username) {
            this.removeAccount(username);
            worker.port.emit("accountRemoved", username);
        }.bind(this));

        // Start display
        worker.port.on("ready", this.showAccounts.bind(this));
    },

    showError: function showError(msg) {
        internals(this).worker.port.emit("showMessage", msg, "error", "OK");
    },

    showAccounts: function showAccounts(error, username) {
        let accounts = this.getAccountList();
        internals(this).worker.port.emit("showAccounts", accounts, error, username);
    },

    showProjects: function showProjects(username, password, saveAccount) {
        try {
            this.getAuth(username, password, saveAccount);
        } catch(e) {
            this.showError(_("oqs.alert_unexpected_error"));
            throw(e);
        }
        internals(this).worker.port.emit("showMessage", _('oqs.loading_projects'));

        this.projectRequest()
        .on("complete", this.onProjectsLoaded.bind(this))
        .get();
    },

    sendResults: function sendResults(projectID, projectName) {
        internals(this).worker.port.emit("showMessage", _("oqs.sending_results"));

        this.injectRequest(projectID)
        .on("complete", this.onInjectDone.bind(this, projectID, projectName))
        .post();
    },

    removePage: function removePage(resource_uri, projectID, projectName) {
        internals(this).worker.port.emit("showMessage", _("oqs.sending_results"));

        this.deleteRequest(resource_uri)
        .on("complete", this.onPageRemoved.bind(this, projectID, projectName))
        .delete();
    },

    onProjectsLoaded: function onProjectsLoaded(response) {
        try {
            if (response.status == 200 || response.status == 304) {
                let projects = response.json;

                if (!projects || projects.length == 0) {
                    this.showAccounts(_("oqs.alert_no_projects", this.username));
                    return
                } else {
                    internals(this).worker.port.emit("showProjects", projects);
                }
            } else if (response.status == 401) {
                this.showAccounts(_("oqs.alert_authentication_failed", this.username), this.username);
                return;
            } else {
                this.showError(_("oqs.alert_unexpected_error"));
            }
        } catch(e) {
            this.showError(_("oqs.alert_unexpected_error"));
            throw(e);
        }
    },

    onInjectDone: function onInjectDone(projectID, projectName, response) {
        try {
            if (response.status == 201) {
                internals(this).worker.port.emit("showMessage",
                    _("oqs.alert_data_send", unescape(projectName)),
                    'sent',
                    "OK"
                );
                return;
            } else if (response.status == 409) {
                internals(this).worker.port.emit("showPages", response.json, projectID, projectName);
                return;
            } else {
                this.showError(_("oqs.alert_unexpected_error"));
            }
        } catch(e) {
            this.showError(_("oqs.alert_unexpected_error"));
            throw(e);
        }
    },

    onPageRemoved: function onPageRemoved(projectID, projectName, response) {
        try {
            if (response.status == 200) {
                this.sendResults(projectID, projectName);
                return;
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

    injectRequest: function injectRequest(projectId) {
        return Request({
            url: this.baseURI + "inspector/" + projectId + "/items/inject",
            contentType: "application/json",
            content: this.tests,
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
