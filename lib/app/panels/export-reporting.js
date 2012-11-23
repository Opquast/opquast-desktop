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
const pref_service = require("preferences-service");
const self = require("self");
const {Class} = require("api-utils/heritage");

const {components, Ci, Cc, Cu, Cr} = require("chrome");

const {BasePanel} = require("app/panels/base");
const {Request} = require("tools/chanrequest");

const promptService = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);


let ExportReportingPanel = exports.ExportReportingPanel = Class({
    extends: BasePanel,

    initialize: function initialize(aParent, aTests) {
        BasePanel.prototype.initialize.call(this, aParent);

        this.tests = aTests;
        this.baseURI = pref_service.get("extensions." + self.id + ".api_url");
        this.authInfo = {};
        this.auth = "";

        this.showUI();
    },

    cancel: function cancel() {
        this.tbCancel();
    },

    alert: function alert(aTitle, aText) {
        promptService.alert(this.tabWindow, aTitle, aText);
    },

    showUI: function showUI() {
        this.loadMessage(_("oqs.loading_projects"), function() {
            this.authInfo = this.getUserPassword();
            if (!this.authInfo) {
                this.cancel();
                return;
            }
            this.auth = b64.encode(this.authInfo.username + ":" + this.authInfo.password);
            try{
            this.projectRequest()
                .on("complete", this.onProjectsLoaded.bind(this))
                .get();
            } catch(e) { console.exception(e);}
        }.bind(this));
    },

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

    onInjectDone: function onInjectDone(projectId, projectName, response) {
        try {
            if (response.status == 201) {
                this.alert("OK", _("oqs.alert_data_send", unescape(projectName)));
                this.cancel();
            } else if (response.status == 409) {
                let selected = {}, selection = response.json.map(function(item){
                    return item.title + " (" + item.uri + ")"
                });
                let result = promptService.select(this.tabWindow, _("oqs.alert_limit_reached"),
                    _("oqs.alert_page_replacement"),
                    selection.length, selection, selected
                );

                if (result) {
                    let uri = response.json[selected.value].resource_uri;
                    this.deleteRequest(uri).on("complete", function(_response) {
                        try {
                            if (_response.status == 200) {
                                this.injectRequest(projectId).on(
                                    "complete", onInjectDone.bind(this, projectId, projectName)
                                ).post();
                            } else {
                                this.alert(_("oqs.alert_error"), _("oqs.alert_unexpected_error"));
                                this.cancel();
                            }
                        } catch(e) {
                            console.exception(e);
                            this.alert(_("oqs.alert_error"), _("oqs.alert_unexpected_error"));
                            this.cancel();
                        }
                    }.bind(this)).delete();
                } else {
                    this.cancel();
                }
            } else {
                this.alert(_("oqs.alert_error"), _("oqs.alert_unexpected_error"));
                this.cancel();
            }
        } catch(e) {
            console.exception(e);
            this.alert(_("oqs.alert_error"), _("oqs.alert_unexpected_error"));
            this.cancel();
        }
    },

    onProjectsLoaded: function onProjectsLoaded(response) {
        try {
            if (response.status == 200 || response.status == 304) {
                let projects = response.json;

                if (!projects || projects.length == 0) {
                    this.alert(_("oqs.alert_error"), _("oqs.alert_no_projects", this.authInfo.username));
                    this.cancel();
                } else {
                    this.loadPage("ui/projects.html", this.showProjects.bind(this, projects));
                }
            } else if (response.status == 401) {
                this.alert(_("oqs.alert_error"), _("oqs.alert_authentication_failed", this.authInfo.username));
                this.cancel();
            } else {
                this.alert(_("oqs.alert_error"), _("oqs.alert_unexpected_error"));
                this.cancel();
            }
        } catch(e) {
            console.exception(e);
            this.alert(_("oqs.alert_error"), _("oqs.alert_unexpected_error"));
            this.cancel();
        }
    },

    showProjects: function showProjects(projects) {
        let win = this.iframe.contentWindow.wrappedJSObject;
        win._ = _;
        win.showProjects(projects);
        win._sendResults = function(projectId, projectName) {
            if(!promptService.confirm(win, "Confirmation", _("oqs.confirmDataSending", unescape(projectName)))) {
                return false;
            }

            this.loadMessage(_("oqs.sending_results"), function() {
                this.injectRequest(projectId)
                    .on("complete", this.onInjectDone.bind(this, projectId, projectName))
                    .post();
            }.bind(this));
        }.bind(this);
    },

    getUserPassword : function getUserPassword() {
        let loginManager = Cc["@mozilla.org/login-manager;1"].getService(Ci.nsILoginManager);
        var hostname = "chrome://opquast-desktop", formSubmitURL = null, httprealm = "Opquast Desktop";
        var logins = loginManager.findLogins({}, hostname, formSubmitURL, httprealm);

        if (logins.length == 0 || logins.length == undefined) {
            return this.createUser();
        } else {
            var result = this.chooseUser(logins);

            if(result) {
                return result;
            } else {
                return false;
            }
        }
    },

    createUser: function createUser() {
        let loginManager = Cc["@mozilla.org/login-manager;1"].getService(Ci.nsILoginManager);
        let promptService = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);
        var username = {value: ""}, password = {value: ""}, save = {value: true};
        var hostname = "chrome://opquast-desktop", formSubmitURL = null, httprealm = "Opquast Desktop";
        var result = promptService.promptUsernameAndPassword(null, _("oqs.prompt_login_creation"), _("oqs.prompt_login_informations"), username, password, _("oqs.prompt_login_save"), save);

        if(result) {
            if (save.value) {
                let loginInfo = Cc["@mozilla.org/login-manager/loginInfo;1"].createInstance(Ci.nsILoginInfo);
                loginInfo.init(hostname, null, httprealm, username.value, password.value, "", "");

                try {
                    loginManager.addLogin(loginInfo);
                } catch(e) {
                    var logins = loginManager.findLogins({}, hostname, formSubmitURL, httprealm);
                    for (var i = 0; i < logins.length; i++) {
                        if (logins[i].username == loginInfo.username) {
                            loginManager.modifyLogin(logins[i], loginInfo);
                        }
                    }
                }
            }
        } else {
            return false;
        }

        return {
            username: username.value,
            password: password.value
        };
    },

    chooseUser: function chooseUser(logins) {
        let promptService = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);
        var selected = {}, selection = logins.map(function(item){return item.username});
        selection.push(_("oqs.login_create_or_modify"));
        var result = promptService.select(null, _("oqs.alert_account"), _("oqs.alert_choose_user"), selection.length, selection, selected);

        if (result) {
            if(selected.value == logins.length) {
                return this.createUser();
            }
            return logins[selected.value];
        } else {
            return false;
        }
    }
});
