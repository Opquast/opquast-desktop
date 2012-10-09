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

const {NetUtil} = Cu.import("resource://gre/modules/NetUtil.jsm");
const {FileUtils} = Cu.import("resource://gre/modules/FileUtils.jsm");

let showFilePicker = function showFilePicker(aWindow, aTitle, aMode, aHandler) {
    let nsIFilePicker = Ci.nsIFilePicker;
    let fp = Cc["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);

    fp.init(aWindow, aTitle, aMode);
    fp.defaultExtension = ".csv";
    fp.defaultString = "opquast.csv";
    let res = fp.show();
    if (res == nsIFilePicker.returnOK || res == nsIFilePicker.returnReplace) {
        return aHandler(fp);
    } else {
        return null;
    }
};

exports.exportCSV = function(aContentWindow, aResults) {
    var results = {
        "c": _("oqs.pass"),
        "nc": _("oqs.fail"),
        "i": _("oqs.cannot_tell"),
        "na": _("oqs.not_applicable")
    };
    let labels = [_("oqs.list"), _("oqs.reference"), _("oqs.label"), _("oqs.result"), _("oqs.comment"), _("oqs.details")];
    let  data = labels.join(";") + ";\n" + aResults.map(function(item) {
        return ['"' + item.criterion.checklist.name + '"', '"' + item.criterion.name + '"', '"' + item.criterion.description + '"', '"' + results[item.result] + '"', '"' + item.comment.replace(/"/g, '""') + '"', '"' + item.details.map(function(item) {
            if (item.text) {
                return item.text;
            } else {
                return item;
            }
        }).join("\n").replace(/"/g, '""').replace(/&lt;/g, "<").replace(/&gt;/g, ">") + '"'].join(";");
    }).join("\n");

    var file = showFilePicker(aContentWindow, "saveTestCaseAs", Ci.nsIFilePicker.modeSave, function(fp) {
        return fp.file;
    });
    var ostream = FileUtils.openSafeFileOutputStream(file);

    var converter = Cc["@mozilla.org/intl/scriptableunicodeconverter"].createInstance(Ci.nsIScriptableUnicodeConverter);
    converter.charset = "UTF-8";
    var istream = converter.convertToInputStream(data);

    NetUtil.asyncCopy(istream, ostream, function(status) {
      if (!components.isSuccessCode(status)) {
        return;
      }
    });
};

exports.exportEARL = function(aFrame1, aFrame2, aPanel, aWindow, aTests) {
    var aContentWindow = aFrame1.contentWindow;
    let req = Cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
    let promptService = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);
    const self = require("self");
    
    var login = getUserPassword(aWindow);
    var projects = [];
    
    if(!login) {
        return false;
    }
    
    aFrame2.setAttribute("src", self.data.url("ui/blank.html?message=" + encodeURIComponent(_("oqs.authenticating"))));
    aPanel.deck.selectedIndex = 1;
    
    /*********************/
    Requester('GET', null, require("tools/local").localConf["host"] + "/api/projects/", aWindow.btoa(login.username + ":" + login.password), function(data, status) {
        if (status == 200 || status == 304) {
            aFrame2.setAttribute("src", self.data.url("ui/blank.html?message=" + encodeURIComponent(_("oqs.loading_projects"))));
            
            // dummy timer
            var d = new Date();
            var diff = 0;
            while(diff < 300) {
                var n = new Date();
                diff = n - d;
            }           
    
            /*********************/
            Requester('GET', null, require("tools/local").localConf["host"] + "/api/projects/", aWindow.btoa(login.username + ":" + login.password), function(data, status) {
                if (status == 200 || status == 304) {
                    projects = JSON.parse(data);
                    
                    if(projects.length == 0) {
                        promptService.alert(aWindow, _("oqs.alert_error"), _("alert_no_projects", login.username));
                        aPanel.tbCancelExport();
                    } else {
                        aFrame2.addEventListener("DOMContentLoaded", loadProjects, false);
                        aFrame2.setAttribute("src", self.data.url("ui/projects.html"));
                    }
                } else if(status == 401) {
                    promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_authentication_failed", login.username));
                    aPanel.tbCancelExport();
                } else {
                    promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_unexpected_error"));
                    aPanel.tbCancelExport();
                }
            });
            /*********************/
        } else if(status == 401) {
            promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_authentication_failed", login.username));
            aPanel.tbCancelExport();
        } else {
            promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_unexpected_error"));
            aPanel.tbCancelExport();
        }
    });
    /*********************/
    
    let loadProjects = function(evt) {
        aFrame2.removeEventListener("DOMContentLoaded", loadProjects, false);
        let win = aFrame2.contentWindow.wrappedJSObject;
        win._ = _;
        win.showProjects(projects);
        win._sendResults = function(id, name) {
            if(!promptService.confirm(win, "Confirmation", _("oqs.confirmDataSending", unescape(name)))) {
                return false;
            }
            
            aFrame2.setAttribute("src", self.data.url("ui/blank.html?message=" + encodeURIComponent(_("oqs.limit_verifying"))));
            
            /*********************/
            Requester('POST', unescape(encodeURIComponent(JSON.stringify(aTests))), require("tools/local").localConf["host"] + "/api/inspector/" + id + "/items/inject",
                        aWindow.btoa(login.username + ":" + login.password), function(data, status) {
                if(status === 201) {
                    aFrame2.setAttribute("src", self.data.url("ui/blank.html?message=" + encodeURIComponent(_("oqs.sending_results"))));
                    
                    // dummy timer
                    var d = new Date();
                    var diff = 0;
                    while(diff < 3000) {
                        var n = new Date();
                        diff = n - d;
                    }  
                    
                    promptService.alert(aWindow, "OK", _("oqs.alert_data_send", unescape(name)));
                    aPanel.tbCancelExport();  
                } else if(status === 200) {
                    data = JSON.parse(data);
                    var selected = {}, selection = data.map(function(item){return item.title + " (" + item.uri + ")"});
                    var result = promptService.select(win, _("oqs.alert_limit_reached"), _("oqs.alert_page_replacement"), selection.length, selection, selected);
                   
                    if(result) {
                        /*********************/ 
                        Requester('DELETE', null, require("tools/local").localConf["host"] + "/api/inspector/" + id + "/items/" + data[selected.value].id,
                                    aWindow.btoa(login.username + ":" + login.password), function(data, status) {
                            if(status === 200) {
                                /*********************/                                        
                                Requester('POST', unescape(encodeURIComponent(JSON.stringify(aTests))), require("tools/local").localConf["host"] + "/api/inspector/" + id + "/items/inject",
                                            aWindow.btoa(login.username + ":" + login.password), function(data, status) {
                                    aFrame2.setAttribute("src", self.data.url("ui/blank.html?message=" + encodeURIComponent(_("oqs.deleting_results"))));
                                    
                                    if(status === 201) {
                                        aFrame2.setAttribute("src", self.data.url("ui/blank.html?message=" + encodeURIComponent(_("oqs.sending_results"))));
                                        
                                        // dummy timer
                                        var d = new Date();
                                        var diff = 0;
                                        while(diff < 3000) {
                                            var n = new Date();
                                            diff = n - d;
                                        }  
                    
                                        promptService.alert(aWindow, "OK", _("oqs.alert_data_send", unescape(name)));
                                        aPanel.tbCancelExport();
                                    } else {
                                        promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_unexpected_error"));
                                        aPanel.tbCancelExport();
                                    }
                                });
                                /*********************/
                            } else {
                                promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_unexpected_error"));
                                aPanel.tbCancelExport();
                            }
                        });
                        /*********************/ 
                    } else {
                        aPanel.tbCancelExport();
                    }
                } else {
                    promptService.alert(aWindow, _("oqs.alert_error"), _("oqs.alert_unexpected_error"));
                    aPanel.tbCancelExport();
                }
            });
            /********************************/
        };
    }.bind(this);
    
    return true;
};

function Requester(method, data, url, auth, callback) {
    var ioService = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);
    var observerService = Cc["@mozilla.org/observer-service;1"].getService(Ci.nsIObserverService);
    var uri = ioService.newURI(url, null, null);
    var gChannel = ioService.newChannelFromURI(uri);
    var listener = {
        observe: function(aSubject, aTopic, aData) {
            if (aSubject == this.mChannel) {
                var httpChannel = aSubject.QueryInterface(Ci.nsIHttpChannel);
                if (aTopic == "http-on-modify-request") {
                    httpChannel.setRequestHeader("Authorization", "Basic " + this.mAuth, false);
                    httpChannel.setRequestHeader("Accept", "application/json", false);
                    httpChannel.setRequestHeader("Cookie", "", false);
                } else if (aTopic == "http-on-examine-response") {
                    httpChannel.setResponseHeader("Set-Cookie", "", false);
                    this.mStatus = httpChannel.responseStatus;
                }
            }
        },
        
        mData: "",
        mStatus: 0,
    
        onStartRequest: function(aRequest, aContext) {
            this.mData = "";
        },
    
        onDataAvailable: function(aRequest, aContext, aStream, aSourceOffset, aLength) {
            var scriptableInputStream = Cc["@mozilla.org/scriptableinputstream;1"].createInstance(Ci.nsIScriptableInputStream);
            scriptableInputStream.init(aStream);
    
            this.mData += scriptableInputStream.read(aLength);
        },
    
        onStopRequest: function(aRequest, aContext, aStatus) {
            if (components.isSuccessCode(aStatus)) {
                this.mCallbackFunc(this.mData, this.mStatus);
            } else {
                this.mCallbackFunc(null, this.mStatus);
            }
    
            this.mChannel = null;
        },
    
        onChannelRedirect: function(aOldChannel, aNewChannel, aFlags) {
            this.mChannel = aNewChannel;
        },
        
        getInterface: function(aIID) {
            try {
                return this.QueryInterface(aIID);
            } catch (e) {
                throw Cr.NS_NOINTERFACE;
            }
        },
    
        onProgress: function(aRequest, aContext, aProgress, aProgressMax) {
        },
        
        onStatus: function(aRequest, aContext, aStatus, aStatusArg) {
        },
    
        onRedirect: function(aOldChannel, aNewChannel) {
        },
    
        QueryInterface: function(aIID) {
            if (aIID.equals(Ci.nsISupports) || aIID.equals(Ci.nsIObserver) || aIID.equals(Ci.nsIInterfaceRequestor) || aIID.equals(Ci.nsIChannelEventSink) ||
                    aIID.equals(Ci.nsIProgressEventSink) || aIID.equals(Ci.nsIHttpEventSink) || aIID.equals(Ci.nsIStreamListener))
                return this;
            throw Cr.NS_NOINTERFACE;
        }
    }
    
    listener.mCallbackFunc = callback;
    listener.mChannel = gChannel;
    listener.mAuth = auth;

    observerService.addObserver(listener, "http-on-modify-request", false);
    observerService.addObserver(listener, "http-on-examine-response", false);
    
    if (method == "POST") {
        var inputStream = Cc["@mozilla.org/io/string-input-stream;1"].createInstance(Ci.nsIStringInputStream);
        inputStream.setData(data, data.length);

        var uploadChannel = gChannel.QueryInterface(Ci.nsIUploadChannel);
        uploadChannel.setUploadStream(inputStream, "application/json", inputStream.available());

        var httpChannel = gChannel.QueryInterface(Ci.nsIHttpChannel);
        httpChannel.requestMethod = "POST";
    } else if (method == "DELETE") {
        var httpChannel = gChannel.QueryInterface(Ci.nsIHttpChannel);
        httpChannel.requestMethod = "DELETE";
    }

    gChannel.notificationCallbacks = listener;
    gChannel.asyncOpen(listener, null);
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