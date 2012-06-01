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
 *   Olivier Meunier <olivier.meunier@temesis.com> (Original Author)
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

const self = require("self");
const tabs = require("tabs");
const {Ci, Cc} = require("chrome");

let {launchTests} = require("tester.js");
let {RequestCache} = require("tools/net-log");
const {WindowCache} = require("tools/window-cache");

const NS_XUL = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
const NS_HTML = "http://www.w3.org/1999/xhtml";


const utils = function(aDocument) {
    // Utility functions to get and create elements
    let $ = function(aElement, aSelector) {
        if (!aSelector) {
            aSelector = aElement;
            aElement = this;
        }
        let nodes = aElement.querySelectorAll(aSelector);
        let res = [];
        for (let i=0; i<nodes.length; i++) {
            res.push(nodes[i]);
        }

        return res;
    };

    let setAttrs = function(aElement, aAttrs) {
        for (let i in aAttrs) {
            aElement.setAttribute(i, aAttrs[i]);
        }
        return aElement;
    };

    let _X = function(aName, aAttrs) {
        return setAttrs(this.createElementNS(NS_XUL, aName), aAttrs);
    };

    let _H = function(aName, aAttrs) {
        return setAttrs(this.createElementNS(NS_HTML, aName), aAttrs);
    };

    let _T = function(aText) {
        return this.createTextNode(aText);
    };

    return {
        "$": $.bind(aDocument),
        "_X": _X.bind(aDocument),
        "_H": _H.bind(aDocument),
        "_T": _T.bind(aDocument)
    };
};


exports.createPanel = function() {
    let {$, _X} = utils(this.doc);

    // Toolbar
    let toolbar = _X('vbox', {
        "id": this.options.id + "-toolbar"
    });
    toolbar.appendChild(_X('resizer', {
        "id": this.options.id + "-resizer",
        "element": this.options.id
    }));
    toolbar.appendChild(_X('vbox', {
        "flex": "1"
    }));
    $(toolbar, "vbox")[0].appendChild(_X("hbox", {
        "flex": "1"
    }));

	// Close
    let close_button = _X("toolbarbutton", {
        "id": this.options.id + "-closebutton",
        "tooltiptext": "Close"
    });
    close_button.addEventListener("command", this.close.bind(this));

	// Export
    let export_link = _X("toolbarbutton", {
        "id": this.options.id + "-exportbutton",
        "label": "Exporter",
        "type": "menu",
        "disabled": true
    });
    let export_link_popup = _X("menupopup", {
        "id": this.options.id + "-exportmenu"
    });
    let export_link_csv = _X("menuitem", {
        "id": this.options.id + "-exportcsv",
        "label": "CSV"
    });
    export_link_popup.appendChild(export_link_csv);
    export_link.appendChild(export_link_popup);
   
   // About
    let about_link = _X("toolbarbutton", {
        "id": this.options.id + "-aboutbutton",
        "label": "About/Help"
    });
    about_link.addEventListener("command", function() {
        tabs.open(self.data.url("user/about.html"));
    });

	// Opquast
    let product_link = _X("toolbarbutton", {
        "id": this.options.id + "-oqslink",
        "label": "Opquast Project"
    });
    product_link.addEventListener("command", function() {
        tabs.open("http://www.opquast.com/");
    });

    $(toolbar, "vbox>hbox")[0].appendChild(close_button);
    $(toolbar, "vbox>hbox")[0].appendChild(export_link);
    $(toolbar, "vbox>hbox")[0].appendChild(about_link);
    $(toolbar, "vbox>hbox")[0].appendChild(_X("spacer", {"flex": "1"}));
    $(toolbar, "vbox>hbox")[0].appendChild(product_link);

    this.box.appendChild(toolbar);

    // Panel content
    let base = _X('hbox', {"flex": "1"});
    let main = _X('vbox', {
        "flex": "1",
        "id": this.options.id + "-main"
    });

    base.appendChild(main);
    this.box.appendChild(base);

    this.main = main;
};

exports.erasePanel = function() {
    while (this.main.firstChild) {
        this.main.removeChild(this.main.firstChild);
    }
};

exports.showPanel = function(aContentWindow, aCache) {
    let {_X} = utils(this.doc);

    let frame = _X("iframe", {
        "flex": "1",
        "src": "data:,"
    });
    this.main.appendChild(frame);
    let ui;

    if (aCache === undefined) {
        ui = MainUI.bind(this, aContentWindow, frame);

        let loadUI = function(evt) {
            frame.removeEventListener("DOMContentLoaded", loadUI, true);
            try {
                ui();
            } catch(e) { console.exception(e); }
        };

        frame.addEventListener("DOMContentLoaded", loadUI, true);
        frame.setAttribute("src", self.data.url("ui/main.html"));
    } else {
        ui = CacheUI.bind(this, aContentWindow, frame, aCache);

        let loadCache = function(evt) {
            frame.removeEventListener("DOMContentLoaded", loadCache, true);
            try {
                ui();
            } catch(e) { console.exception(e); }
        }

        frame.addEventListener("DOMContentLoaded", loadCache, true);
        frame.setAttribute("src", self.data.url("ui/main.html"));
    }
    
    //
    this.doc.getElementById(this.options.id + "-exportcsv").addEventListener("command", function() {
		//
        function showFilePicker(window, title, mode, defaultDirPrefName, handler) {
			var nsIFilePicker = Ci.nsIFilePicker;
			var fp = Cc["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
			fp.init(window, title, mode);
			fp.defaultExtension = ".csv";
			fp.defaultString = "opquast.csv";
		    var res = fp.show();
		    if (res == nsIFilePicker.returnOK || res == nsIFilePicker.returnReplace) {
		        return handler(fp);
		    } else {
		        return null;
		    }
		 }
        
        var results = {"c": "Conforme", "nc": "Non conforme", "i": "Indéterminé", "na": "Non applicable"};
		try{
			console.log(aContentWindow.document);
		}catch(e){
			
		}
		try{
			console.log(aContentWindow.document.title);
		}catch(e){
			
		}
        
        var file = showFilePicker(aContentWindow, "saveTestCaseAs", Ci.nsIFilePicker.modeSave, null, function(fp) {return fp.file;});
        var data = "Liste;Critère;Résultat;Commentaires;Détails;\n" + PanelCache.getEntry(aContentWindow).tests.oaa_results.map(function(item){
        	//var criterion = checklists[item.id];
        	var criterion = {"name": "nom", "checklist": {"name": "nom"}, "description": "description"}
        	
        	return criterion.checklist.name + ';"' + criterion.name + " - " + criterion.description + '";' + results[item.result] + ';"' + item.comment.replace('"', '\"') + '";"' + JSON.stringify(item.details, null, 4).replace('"', '\"') + '";';
        }).join("\n");
		
	    Components.utils.import("resource://gre/modules/NetUtil.jsm");  
	    Components.utils.import("resource://gre/modules/FileUtils.jsm");  
	      
	    var ostream = FileUtils.openSafeFileOutputStream(file);
	      
	    var converter = Cc["@mozilla.org/intl/scriptableunicodeconverter"].createInstance(Ci.nsIScriptableUnicodeConverter);  
	    converter.charset = "UTF-8";  
	    var istream = converter.convertToInputStream(data);
	      
	    // The last argument (the callback) is optional.  
	    NetUtil.asyncCopy(istream, ostream, function(status) {  
	      if (!Components.isSuccessCode(status)) {  
	        // Handle error!  
	        return;  
	      }  
	      
	      // Data has been written to the file.  
	    });
    });
    this.doc.getElementById(this.options.id + "-exportbutton").disabled = false;
};

let MainUI = function(aContentWindow, aFrame) {
    let window = aFrame.contentWindow.wrappedJSObject;
    window.showLoader();

    let requests = RequestCache.getEntry(aContentWindow);
    let tests = {};
    try {
        tests = launchTests(aContentWindow, requests);
    } catch(e) {
        console.exception(e);
    }

    window.console = console;

    window.clearContent();
    window.showResults(tests);

    PanelCache.setEntry(aContentWindow, {
        "tests": tests,
        "body": window.document.body.cloneNode(true)
    });
};

let CacheUI = function(aContentWindow, aFrame, aCache) {
    let window = aFrame.contentWindow.wrappedJSObject;
    window.console = console;

    window.clearContent();
    window.loadBody(aCache.body.cloneNode(true));
};

let _PanelCache = WindowCache.extend({});
let PanelCache = exports.PanelCache = _PanelCache.new();
