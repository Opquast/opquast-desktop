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
const {components, Ci, Cc, Cu, Cr} = require("chrome");

const b64 = require("base64");
const pref_service = require("preferences-service");
const self = require("self");

const {Request} = require("tools/chanrequest");

const promptService = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);


exports.exportReporting = function(aFrame1, aFrame2, aPanel, aWindow, aTests) {
    let aContentWindow = aFrame1.contentWindow;
    let baseUri = pref_service.get("extensions." + self.id + ".api_url");

    let login = getUserPassword(aWindow);
    if (!login) {
        return false;
    }
    let auth = b64.encode(login.username + ":" + login.password);

    let projectRequest = function() {
        return Request({
            url: baseUri + "projects/",
            contentType: "application/json",
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic " + auth
            }
        });
    };

    let injectRequest = function(projectId) {
        return Request({
            url: baseUri + "inspector/" + projectId + "/items/inject",
            contentType: "application/json",
            content: JSON.parse(unescape(encodeURIComponent(JSON.stringify(aTests)))),
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic " + auth
            }
        });
    };

    let deleteRequest = function(uri) {
        return Request({
            url: uri,
            contentType: "application/json",
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic " + auth
            }
        });
    };

    let onProjectsLoaded = function(response) {
        try {
            if (response.status == 200 || response.status == 304) {
                let projects = response.json;

                if (!projects || projects.length == 0) {
                    promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_no_projects", login.username));
                    aPanel.tbCancelExport();
                } else {
                    aFrame2.addEventListener("DOMContentLoaded", showProjects.bind(null, projects), false);
                    aFrame2.setAttribute("src", self.data.url("ui/projects.html"));
                }
            } else if (response.status == 401) {
                promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_authentication_failed", login.username));
                aPanel.tbCancelExport();
            } else {
                promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_unexpected_error"));
                aPanel.tbCancelExport();
            }
        } catch(e) {
            console.exception(e);
            promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_unexpected_error"));
            aPanel.tbCancelExport();
        }
    };

    let onInjectDone = function(projectId, projectName, response) {
        try {
            if (response.status == 201) {
                promptService.alert(aWindow, "OK", _("oqs.alert_data_send", unescape(projectName)));
                aPanel.tbCancelExport();
            } else if (response.status == 409) {
                let selected = {}, selection = response.json.map(function(item){
                    return item.title + " (" + item.uri + ")"
                });
                let result = promptService.select(aWindow, _("oqs.alert_limit_reached"),
                    _("oqs.alert_page_replacement"),
                    selection.length, selection, selected
                );

                if (result) {
                    let uri = response.json[selected.value].resource_uri;
                    deleteRequest(uri).on("complete", function(_response) {
                        try {
                            if (_response.status == 200) {
                                injectRequest(projectId).on(
                                    "complete", onInjectDone.bind(null, projectId, projectName)
                                ).post();
                            } else {
                                promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_unexpected_error"));
                                aPanel.tbCancelExport();
                            }
                        } catch(e) {
                            console.exception(e);
                            promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_unexpected_error"));
                            aPanel.tbCancelExport();
                        }
                    }).delete();
                }
            } else {
                promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_unexpected_error"));
                aPanel.tbCancelExport();
            }
        } catch(e) {
            console.exception(e);
            promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_unexpected_error"));
            aPanel.tbCancelExport();
        }
    };

    let showProjects = function(projects, evt) {
        aFrame2.removeEventListener("DOMContentLoaded", showProjects, false);
        let win = aFrame2.contentWindow.wrappedJSObject;
        win._ = _;
        win.showProjects(projects);
        win._sendResults = function(projectId, projectName) {
            if(!promptService.confirm(win, "Confirmation", _("oqs.confirmDataSending", unescape(projectName)))) {
                return false;
            }

            aFrame2.setAttribute("src", self.data.url("ui/blank.html?message=" + encodeURIComponent(_("oqs.sending_results"))));
            injectRequest(projectId).on(
                "complete", onInjectDone.bind(null, projectId, projectName)
            ).post();
        };
    }

    aFrame2.setAttribute("src", self.data.url("ui/blank.html?message=" + encodeURIComponent(_("oqs.loading_projects"))));
    aPanel.deck.selectedIndex = 1;

    projectRequest().on("complete", onProjectsLoaded).get();

    return true;
};



function getUserPassword(aWindow) {
    let loginManager = Cc["@mozilla.org/login-manager;1"].getService(Ci.nsILoginManager);
    var hostname = "chrome://opquast-desktop", formSubmitURL = null, httprealm = "Opquast Desktop";
    var logins = loginManager.findLogins({}, hostname, formSubmitURL, httprealm);

    if (logins.length == 0 || logins.length == undefined) {
        return createUser();
    } else {
        var result = chooseUser(logins);

        if(result) {
            return result;
        } else {
            return false;
        }
    }
};

function createUser() {
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
}

function chooseUser(logins) {
    let promptService = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);
    var selected = {}, selection = logins.map(function(item){return item.username});
    selection.push(_("oqs.login_create_or_modify"));
    var result = promptService.select(null, _("oqs.alert_account"), _("oqs.alert_choose_user"), selection.length, selection, selected);

    if (result) {
        if(selected.value == logins.length) {
            return createUser();
        }
        return logins[selected.value];
    } else {
        return false;
    }
}
