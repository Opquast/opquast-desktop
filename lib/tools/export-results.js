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
 * ***** END LICENSE BLOCK ***** */"use strict";

const _ = require("l10n").get;
const {components, Ci, Cc, Cu} = require("chrome");

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

exports.exportEARL = function(aFrame, aWindow, aTests) {
    let req = Cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
    var cookieManager = Cc["@mozilla.org/cookiemanager;1"].getService(Ci.nsICookieManager2);
    var cookies = cookieManager.getCookiesFromHost(require("tools/local").localConf["domain"]);
    var isLogged = false, aContentWindow = aFrame.contentWindow;
    
    req.open("GET", require("tools/local").localConf["host"] + "api/projects/", false);
    
    var now = new Date();
    var _date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), 0).toUTCString();

    while (cookies.hasMoreElements()) {
        var cookie = cookies.getNext().QueryInterface(Ci.nsICookie2);
        
        if(cookie.name == "csrftoken_" + require("tools/local").localConf["cookie"]) {
            req.setRequestHeader("X-CSRF-Token", cookie.value);
        }

        req.setRequestHeader("Cookie", cookie.name + "=" + cookie.value +"; Domain=" + cookie.host + "; Expires=" + _date + "; Path=" + cookie.path);
        if(cookie.expires && cookie.expires > (new Date().getTime() / 1000)) {
            isLogged = true;
        }
    }
    
    if(!isLogged) {
        var promptService = Cc["@mozilla.org/embedcomp/prompt-service;1"].getService(Ci.nsIPromptService);
        promptService.alert(aContentWindow, "Log U", "Tu dois te connecter, petit scarabée…");// @todo i8n
        
        const tabs = require("tabs");
        tabs.open(require("tools/local").localConf["host"]);
        
        return false;
    } else {
        req.setRequestHeader("Accept", "application/json");
        req.send();
        
        let loadProjects = function(evt) {
            try {
                aFrame.removeEventListener("DOMContentLoaded", loadProjects, true);
                let win = aFrame.contentWindow.wrappedJSObject;
                win._ = _;
                win.showProjects(JSON.parse(req.responseText));
                win._sendResults = function(id, url) {
                    /*cookies = cookieManager.getCookiesFromHost(require("tools/local").localConf["domain"]);
                    
                    req.open("GET", require("tools/local").localConf["host"] + "api/inspector/" + id + "/sample/", false);
                    
                    while (cookies.hasMoreElements()) {
                        var cookie = cookies.getNext().QueryInterface(Ci.nsICookie2);
                        
                        if(cookie.name == "csrftoken_" + require("tools/local").localConf["cookie"]) {
                            req.setRequestHeader("X-CSRF-Token", cookie.value);
                        }
                
                        req.setRequestHeader("Cookie", cookie.name + "=" + cookie.value +"; Domain=" + cookie.host + "; Expires=" + _date + "; Path=" + cookie.path);
                    }
                    
                    req.setRequestHeader("Accept", "application/json");
                    req.send();

                    for each(var page in JSON.parse(req.response).pages) {
                        if(page.uri == aWindow.document.location.href) {
                            //page.id;
                            //evaluation.id
                            //criteria
                            cookies = cookieManager.getCookiesFromHost(require("tools/local").localConf["domain"]);
                            
                            req.open("POST", page.resource_uri + "/inject", false);
                            
                            while (cookies.hasMoreElements()) {
                                var cookie = cookies.getNext().QueryInterface(Ci.nsICookie2);
                                
                                if(cookie.name == "csrftoken_" + require("tools/local").localConf["cookie"]) {
                                    req.setRequestHeader("X-CSRF-Token", cookie.value);
                                }
                        
                                req.setRequestHeader("Cookie", cookie.name + "=" + cookie.value +"; Domain=" + cookie.host + "; Expires=" + _date + "; Path=" + cookie.path);
                            }
                    
                            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                            req.send(JSON.stringify(aTests));
                        }
                    }*/
                    cookies = cookieManager.getCookiesFromHost(require("tools/local").localConf["domain"]);
                            
                    req.open("POST", require("tools/local").localConf["host"] + "api/inspector/" + id + "/inject", false);
                    
                    while (cookies.hasMoreElements()) {
                        var cookie = cookies.getNext().QueryInterface(Ci.nsICookie2);
                        
                        if(cookie.name == "csrftoken_" + require("tools/local").localConf["cookie"]) {
                            req.setRequestHeader("X-CSRF-Token", cookie.value);
                        }
                
                        req.setRequestHeader("Cookie", cookie.name + "=" + cookie.value +"; Domain=" + cookie.host + "; Expires=" + _date + "; Path=" + cookie.path);
                    }
            
                    req.setRequestHeader("Accept", "application/json");
                    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req.send(JSON.stringify(aTests));
                }
            } catch(e) { console.exception(e); }
        }.bind(this);
        
        const self = require("self");
        aFrame.addEventListener("DOMContentLoaded", loadProjects, false);
        aFrame.setAttribute("src", self.data.url("ui/projects.html"));
        
        return true;
    }
};
