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

exports.exportEARL = function(aFrame1, aFrame2, aDeck, aWindow, aTests) {
    var aContentWindow = aFrame1.contentWindow;
    let req = Cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
    let promptService = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);
    const self = require("self");

    let loadingProjects = function(evt) {
        aFrame2.removeEventListener("DOMContentLoaded", loadingProjects, false);
        const {domTools} = require("tools/dom-utils");
        let doc = evt.target;
        let {_H, _T} = domTools(doc);
        let e = _H("p", {"id": "loader"})
        e.appendChild(_T(_("oqs.loading_projects")));
        doc.body.appendChild(e);
    }.bind(this);
    
    aFrame2.addEventListener("DOMContentLoaded", loadingProjects, false);
    aFrame2.setAttribute("src", self.data.url("ui/blank.html"));
    aDeck.selectedIndex = 1;
    
    var login = getUserPassword(aWindow);
    /*req.open("GET", require("tools/local").localConf["host"] + "/api/projects/", false);
    req.setRequestHeader("Authorization", "Basic " + aWindow.btoa(login.username + ":" + login.password));
    req.setRequestHeader("Accept", "application/json");
    req.send();*/
   
    //@formatter:off
    var projects = new connection(
        require("tools/local").localConf["host"] + "/api/projects/", 
        "GET", 
        {
            "Authorization": "Basic " + aWindow.btoa(login.username + ":" + login.password),
            "Accept": "application/json"
        },
        null
    );
    //@formatter:on
    
    let loadProjects = function(evt) {
        aFrame2.removeEventListener("DOMContentLoaded", loadProjects, false);
        let win = aFrame2.contentWindow.wrappedJSObject;
        win._ = _;
        win.showProjects(projects);
        win._sendResults = function(id, name) {
            if(!promptService.confirm(win, "Confirmation", _("oqs.confirmDataSending", unescape(name)))) { // @todo i18n
                return false;
            }
            
            let sendingResults = function(evt) {
                aFrame2.removeEventListener("DOMContentLoaded", sendingResults, false);
                const {domTools} = require("tools/dom-utils");
                let doc = evt.target;
                let {_H, _T} = domTools(doc);
                let e = _H("p", {"id": "loader"})
                e.appendChild(_T(_("oqs.sending_results")));
                doc.body.appendChild(e);
            }.bind(this);
            
            aFrame2.addEventListener("DOMContentLoaded", sendingResults, false);
            aFrame2.setAttribute("src", self.data.url("ui/blank.html"));
            
            /*req.open("POST", require("tools/local").localConf["host"] + "/api/inspector/" + id + "/items/inject", false, login.username, login.password);
            req.setRequestHeader("Authorization", "Basic " + aWindow.btoa(login.username + ":" + login.password));
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json");
            req.send(JSON.stringify(aTests));*/
            
            //@formatter:off
            var injection = new connection(
                require("tools/local").localConf["host"] + "/api/inspector/" + id + "/items/inject", 
                "POST", 
                {
                    "Authorization": "Basic " + aWindow.btoa(login.username + ":" + login.password),
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                aTests
            );
            //@formatter:on
            
            /*if(req.status === 201) {
                promptService.alert(aWindow, "Résultat", "OK"); // @todo i18n    
            } else if(req.status === 200) {
                promptService.alert(aWindow, "Résultat", "Vous avez atteint la limite"); // @todo i18n
            } else {
                promptService.alert(aWindow, "Résultat", "Erreur"); // @todo i18n
            }*/
            
            /* req.open("GET", require("tools/local").localConf["host"] + "/api/inspector/" + id + "/sample/", false, login.username, login.password);
            req.setRequestHeader("Accept", "application/json");
            req.send();

            for each(var page in JSON.parse(req.response).pages) {
                if(page.uri == aWindow.document.location.href) {
                    //page.id;
                    //evaluation.id
                    //criteria
                    req.open("POST", page.resource_uri + "/inject", false, login.username, login.password);
                    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req.send(JSON.stringify(aTests));
                }
            }*/

        };
    }.bind(this);
    
    aFrame2.addEventListener("DOMContentLoaded", loadProjects, false);
    aFrame2.setAttribute("src", self.data.url("ui/projects.html"));
    
    return true;
};

function getUserPassword(aWindow) {
    let loginManager = Cc["@mozilla.org/login-manager;1"].getService(Ci.nsILoginManager);
    var hostname = "chrome://opquast-desktop", formSubmitURL = null, httprealm = "User registration";
    var logins = loginManager.findLogins({}, hostname, formSubmitURL, httprealm);
    
    if (logins.length == 0 || logins.length == undefined) {
        return createUser();
    } else {
        var result = chooseUser(logins);
        
        if(result) {
            return result;
        } else {
            return createUser();
        }
    }
};

function createUser() {
    let loginManager = Cc["@mozilla.org/login-manager;1"].getService(Ci.nsILoginManager);
    let promptService = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);
    var username = {value: ""}, password = {value: ""}, save = {value: true};
    var hostname = require("tools/local").localConf["host"], formSubmitURL = require("tools/local").localConf["host"], httprealm = "";
    var result = promptService.promptUsernameAndPassword(null, "Title", "Enter username and password:", username, password, "Save", save); // @todo i8n
    
    if(result && save.value) {
        let loginInfo = Cc["@mozilla.org/login-manager/loginInfo;1"].createInstance(Ci.nsILoginInfo);
        loginInfo.init("chrome://opquast-desktop", null, "User registration", username.value, password.value, "", "");
        loginManager.addLogin(loginInfo);
    }
            
    return {
        username: username.value,
        password: password.value
    };
}

function chooseUser(logins) {
    let promptService = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);
    var selected = {};
    var result = promptService.select(null, "Title", "What username do you want to use? (cancel to create a new one)", logins.length, logins.map(function(item){return item.username}), selected); // @todo i8n
    
    if (result) {
        return logins[selected.value];
    } else {
        return false;
    }
}

function connection(url, method, headers, data) {
    try {
        let ioService = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);
        let inputStream = Cc["@mozilla.org/io/string-input-stream;1"].createInstance(Ci.nsIStringInputStream);
        
        var uri = ioService.newURI(url, null, null);
        this.mChannel = ioService.newChannelFromURI(uri);
        this.mChannel.QueryInterface(Ci.nsIHttpChannel);
        
        if(method == "POST") {
            data = JSON.stringify(data); // @todo ne pas toujours faire le JSON.stringify, tester headers
            inputStream.setData(data, data.length);
            this.mChannel.QueryInterface(Ci.nsIUploadChannel);
            this.mChannel.setUploadStream(inputStream, "application/json", -1);
            this.mChannel.requestMethod = "POST";
        }
        
        for(var header in headers) {
            this.mChannel.setRequestHeader(header, headers[header], false);
        }
        
        var stream = this.mChannel.open();
    
        return JSON.parse(consumeStream(stream)); // @todo ne pas toujours faire le JSON.parse, tester headers
    } catch(e) {
        console.error(e);
        return false;
    }
}

function consumeStream(aStream) {
    var rv = "";
    
    while (aStream && aStream.available()) {
        rv += NetUtil.readInputStreamToString(aStream, aStream.available());
    }
    
    return rv;
}

/*connection.prototype.StreamListener = function(aCallbackFunc) {
    return ( {
        mData: "",

        // nsIStreamListener
        onStartRequest: function(aRequest, aContext) {
            this.mData = "";
        },

        onDataAvailable: function(aRequest, aContext, aStream, aSourceOffset, aLength) { let
            scriptableInputStream = Cc["http://mozilla.org/scriptableinputstream;1"].createInstance(Ci.nsIScriptableInputStream);
            scriptableInputStream.init(aStream);

            this.mData += scriptableInputStream.read(aLength);
        },

        onStopRequest: function(aRequest, aContext, aStatus) {
            if (components.isSuccessCode(aStatus)) {
                // request was successfull
                this.mCallbackFunc(this.mData);
            } else {
                // request failed
                this.mCallbackFunc(null);
            }

            gChannel = null;
        },

        // nsIChannelEventSink
        onChannelRedirect: function(aOldChannel, aNewChannel, aFlags) {
            // if redirecting, store the new channel
            gChannel = aNewChannel;
        },

        // nsIInterfaceRequestor
        getInterface: function(aIID) {
            try {
                return this.QueryInterface(aIID);
            } catch (e) {
                throw Cr.NS_NOINTERFACE;
            }
        },

        // nsIProgressEventSink (not implementing will cause annoying exceptions)
        onProgress: function(aRequest, aContext, aProgress, aProgressMax) {
        },
        onStatus: function(aRequest, aContext, aStatus, aStatusArg) {
        },

        // nsIHttpEventSink (not implementing will cause annoying exceptions)
        onRedirect: function(aOldChannel, aNewChannel) {
        },

        // we are faking an XPCOM interface, so we need to implement QI
        QueryInterface: function(aIID) {
            if (aIID.equals(Ci.nsISupports) || aIID.equals(Ci.nsIInterfaceRequestor) || aIID.equals(Ci.nsIChannelEventSink) || aIID.equals(Ci.nsIProgressEventSink) || aIID.equals(Ci.nsIHttpEventSink) || aIID.equals(Ci.nsIStreamListener))
                return this;

            throw Cr.NS_NOINTERFACE;
        }
    })
}*/