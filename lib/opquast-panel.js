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
const self = require("self");
const tabs = require("tabs");
const {Ci, Cc, Cu} = require("chrome");

const {NetUtil} = Cu.import("resource://gre/modules/NetUtil.jsm");
const {FileUtils} = Cu.import("resource://gre/modules/FileUtils.jsm");

let {launchTests} = require("tester.js");
let {RequestCache} = require("tools/net-log");
const {WindowCache} = require("tools/window-cache");
let {showFilePicker} = require("tools/file-picker");
const {Debug} = require("tools/debug");
let {getSelectedTabWindow} = require("main-panel.js");

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
        "tooltiptext": _("oqs.close")
    });
    close_button.addEventListener("command", this.close.bind(this));

    // Launch
    let launch_button = _X("toolbarbutton", {
        "id": this.options.id + "-launchbutton",
        "label": _("oqs.launch")
    });
	launch_button.addEventListener("command", function(){
		opquastPanel.erasePanel.call(this);
        opquastPanel.showPanel.call(this, getSelectedTabWindow(this.window), true);
	}, true);

    // Export
    let export_button = _X("toolbarbutton", {
        "id": this.options.id + "-exportbutton",
        "label": _("oqs.export"),
        "type": "menu",
        "disabled": true
    });
    let export_button_popup = _X("menupopup", {
        "id": this.options.id + "-exportmenu"
    });
    export_button.appendChild(export_button_popup);
    let export_button_csv = _X("menuitem", {
        "id": this.options.id + "-exportcsv",
        "label": "CSV"
    });
    export_button_popup.appendChild(export_button_csv);

   // Help
    let help_button = _X("toolbarbutton", {
        "id": this.options.id + "-helpbutton",
        "label": "?",
        "tooltiptext": _("oqs.about_extension")
    });
    help_button.addEventListener("command", function() {
        tabs.open(self.data.url("user/about.html"));
    });

    // Search
    let search_box = _X("textbox", {
        "id": this.options.id + "-searchbox",
        "value": _("oqs.search"),
        "disabled": true
    });
    search_box.addEventListener("focus", function() {
        this.value = "";
    });

    // Show
    let show_button = _X("toolbarbutton", {
        "id": this.options.id + "-showbutton",
        "label": _("oqs.display"),
        "class": "none",
        "type": "menu",
        "disabled": true
    });
    let show_button_popup = _X("menupopup", {
        "id": this.options.id + "-showmenu"
    });
    show_button.appendChild(show_button_popup);
    let show_button_refs = _X("menuitem", {
        "id": this.options.id + "-showrefs",
        "label": _("oqs.references"),
        "type": "checkbox",
        "checked": true,
        "autocheck": false
    });
    show_button_popup.appendChild(show_button_refs);
    let show_button_times = _X("menuitem", {
        "id": this.options.id + "-showtimes",
        "label": _("oqs.times"),
        "type": "checkbox",
        "autocheck": false
    });
    show_button_popup.appendChild(show_button_times);
    let show_button_details = _X("menuitem", {
        "id": this.options.id + "-showdetails",
        "label": _("oqs.details"),
        "type": "checkbox",
        "autocheck": false
    });
    show_button_popup.appendChild(show_button_details);

    $(toolbar, "vbox>hbox")[0].appendChild(close_button);
    $(toolbar, "vbox>hbox")[0].appendChild(_X("spacer", {"flex": "1"}));
    // disabled (not compatible with datatables row details)
    $(toolbar, "vbox>hbox")[0].appendChild(show_button);
    $(toolbar, "vbox>hbox")[0].appendChild(search_box);
    $(toolbar, "vbox>hbox")[0].appendChild(export_button);
    $(toolbar, "vbox>hbox")[0].appendChild(launch_button);
    $(toolbar, "vbox>hbox")[0].appendChild(help_button);

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

exports.showPanel = function(aContentWindow, aForce) {
    let _this = this, {_X, $} = utils(this.doc);

    let frame = _X("iframe", {
        "flex": "1",
        "id": this.options.id + "-frame"
    });
    this.main.appendChild(frame);

	// Cache
    aCache = PanelCache.getEntry(aContentWindow.location) || null;
    
    if (!aForce && aCache) {
        ui = CacheUI.bind(this, aContentWindow, frame, aCache);

        let loadCache = function(evt) {
            _this.doc.getElementById(_this.options.id + "-frame").removeEventListener("DOMContentLoaded", loadCache, true);
            try {
                ui();
            } catch(e) { console.exception(e); }
        }

        frame.addEventListener("DOMContentLoaded", loadCache, true);
        frame.setAttribute("src", self.data.url("ui/cache.html"));
        
        _this.doc.getElementById(_this.options.id + "-searchbox").removeAttribute("disabled");
        _this.doc.getElementById(_this.options.id + "-exportbutton").removeAttribute("disabled");
        _this.doc.getElementById(_this.options.id + "-showbutton").removeAttribute("disabled");
        _this.doc.getElementById(_this.options.id + "-launchbutton").label = _("oqs.relaunch");
    } else if(aForce) {
    	ui = MainUI.bind(this, aContentWindow, frame, null);

        let loadResults = function(evt) {
            _this.doc.getElementById(_this.options.id + "-frame").removeEventListener("DOMContentLoaded", loadCache, true);
            try {
                ui();
            } catch(e) { console.exception(e); }
        }

        frame.addEventListener("DOMContentLoaded", loadResults, true);
        frame.setAttribute("src", self.data.url("ui/loading.html"));
        
        _this.doc.getElementById(_this.options.id + "-searchbox").removeAttribute("disabled");
        _this.doc.getElementById(_this.options.id + "-exportbutton").removeAttribute("disabled");
        _this.doc.getElementById(_this.options.id + "-showbutton").removeAttribute("disabled");
        _this.doc.getElementById(_this.options.id + "-launchbutton").label = _("oqs.relaunch");
    } else {
    	frame.setAttribute("src", self.data.url("ui/main.html"));
    	
    	_this.doc.getElementById(_this.options.id + "-searchbox").setAttribute("disabled", true);
        _this.doc.getElementById(_this.options.id + "-exportbutton").setAttribute("disabled", true);
        _this.doc.getElementById(_this.options.id + "-showbutton").setAttribute("disabled", true);
        _this.doc.getElementById(_this.options.id + "-launchbutton").label = _("oqs.launch");
    }

    let ui;

    // Export
    this.doc.getElementById(this.options.id + "-exportcsv").addEventListener("command", function() {
        var results = {
            "c": _("oqs.pass"),
            "nc": _("oqs.fail"),
            "i": _("oqs.cannot_tell"),
            "na": _("oqs.not_applicable")
        };
        var checklists = PanelCache.getEntry(aContentWindow.location).checklists;
        var criteria = Object.keys(checklists);

        var file = showFilePicker(aContentWindow, "saveTestCaseAs", Ci.nsIFilePicker.modeSave, null, function(fp) {
            return fp.file;
        });

        let labels = [
            _("oqs.list"),
            _("oqs.reference"),
            _("oqs.label"),
            _("oqs.result"),
            _("oqs.comment"),
            _("oqs.details")
        ];

        let data = labels.join(";") + ";\n" +
        PanelCache.getEntry(aContentWindow.location).tests.oaa_results
            .filter(function(element, index, array){
                return criteria.indexOf(String(element.id)) != -1;
            })
            .map(function(item){
                var criterion = checklists[String(item.id)];
                return [
                    '"' + criterion.checklist.name + '"',
                    '"' + criterion.name + '"',
                    '"' + criterion.description + '"',
                    '"' + results[item.result] + '"',
                    '"' + item.comment.replace(/"/g, '""') + '"',
                    '"' + item.details.map(function(item){
                        if(item.text) {
                            return item.text;
                        } else {
                            return item;
                        }
                    }).join("\n").replace(/"/g, '""').replace(/&lt;/g, "<").replace(/&gt;/g, ">") + '"'
                ].join(";");
            })
            .join("\n");

        var ostream = FileUtils.openSafeFileOutputStream(file);

        var converter = Cc["@mozilla.org/intl/scriptableunicodeconverter"].createInstance(Ci.nsIScriptableUnicodeConverter);
        converter.charset = "UTF-8";
        var istream = converter.convertToInputStream(data);

        NetUtil.asyncCopy(istream, ostream, function(status) {
          if (!Components.isSuccessCode(status)) {
            return;
          }
        });
    });

    // Search
    this.doc.getElementById(this.options.id + "-searchbox").addEventListener("input", function(event){
        let window = _this.doc.getElementById(_this.options.id + "-frame").contentWindow.wrappedJSObject;
        window.oTable.fnFilter(event.target.value);
    });

    // Show
    this.doc.getElementById(this.options.id + "-showrefs").addEventListener("command", function(event) {
        let window = _this.doc.getElementById(_this.options.id + "-frame").contentWindow.wrappedJSObject;

        if(event.target.hasAttribute("checked")) {
            event.target.removeAttribute("checked");
            window.oTable.fnSetColumnVis(2, false);
        } else {
            event.target.setAttribute("checked", true);
            window.oTable.fnSetColumnVis(2, true);
        }
    });

    this.doc.getElementById(this.options.id + "-showtimes").addEventListener("command", function(event) {
        let window = _this.doc.getElementById(_this.options.id + "-frame").contentWindow.wrappedJSObject;

        if(event.target.hasAttribute("checked")) {
            event.target.removeAttribute("checked");
            window.oTable.fnSetColumnVis(4, false);
        } else {
            event.target.setAttribute("checked", true);
            window.oTable.fnSetColumnVis(4, true);
        }
    });

    this.doc.getElementById(this.options.id + "-showdetails").addEventListener("command", function(event) {
        let window = _this.doc.getElementById(_this.options.id + "-frame").contentWindow.wrappedJSObject;

        if(event.target.hasAttribute("checked")) {
            event.target.removeAttribute("checked");
            window.oTable.fnSetColumnVis(5, false);
        } else {
            event.target.setAttribute("checked", true);
            window.oTable.fnSetColumnVis(5, true);
        }
    });
};

exports.hidePanel = function(aContentWindow) {
    // Launch
    var _Launch = Launch.bind(aContentWindow, this.doc.getElementById(this.options.id + "-frame"), null);
    this.doc.getElementById(this.options.id + "-launchbutton").removeEventListener("command", _Launch, true);
}

let MainUI = function(aContentWindow, aFrame) {
    try{
        let window = aFrame.contentWindow.wrappedJSObject;
        let _this = this;

        let requests = RequestCache.getEntry(aContentWindow);
        let tests = {};
        try {
            tests = launchTests(aContentWindow, requests);
        } catch(e) {
            console.exception(e);
        }

        PanelCache.setEntry(aContentWindow.location, {
            "tests": tests,
            "checklists": window.checklists
        });

        let load = function() {
            aFrame.removeEventListener("DOMContentLoaded", load, true);

            let win = aFrame.contentWindow.wrappedJSObject;
            win.console = console;
            win._inspectElement = InspectElement.bind(_this, aContentWindow);

            Prefs(_this, win);
            win.showResults(tests);
            Debug("Opquast Desktop", "Analyze done on " + aContentWindow.location);
        }

        aFrame.addEventListener("DOMContentLoaded", load, true);
        aFrame.setAttribute("src", self.data.url("ui/results.html"));
    } catch(e) {console.exception(e);}
};

let CacheUI = function(aContentWindow, aFrame, aCache) {
    try{
        let window = aFrame.contentWindow.wrappedJSObject;

        let _this = this;

        let load = function() {
            aFrame.removeEventListener("DOMContentLoaded", load, true);

            let win = aFrame.contentWindow.wrappedJSObject;
            win.console = console;
            win._inspectElement = InspectElement.bind(_this, aContentWindow);

            Prefs(_this, win);
            win.showResults(aCache.tests);
            Debug("Opquast Desktop", "Results from cache for " + aContentWindow.location);
        }

        aFrame.addEventListener("DOMContentLoaded", load, true);
        aFrame.setAttribute("src", self.data.url("ui/results.html"));
    } catch(e) {console.exception(e);}
};

let InspectElement = function(aContentWindow, aPath) {
    try {
        let node = aContentWindow.document.querySelector(aPath);
        if (node === null) {
            return;
        }

        if (aContentWindow._FirebugCommandLine !== undefined) {
            // Use Firebug first
            aContentWindow._FirebugCommandLine.inspect(node);
        } else {
            // Fallback on webdev tools
            if (this.window.InspectorUI.isTreePanelOpen) {
                this.window.InspectorUI.inspectNode(node);
                this.window.InspectorUI.stopInspecting();
            } else {
                this.window.InspectorUI.openInspectorUI(node);
            }
        }
    } catch(e) { console.exception(e);}
};

function Prefs(_this, win) {
    try {
        let {get, set} = require("preferences-service");

        if (get("extensions.opquast-desktop.debug") == undefined) {
            set("extensions.opquast-desktop.debug", false);
        }

        if (get("extensions.opquast-desktop.showRefs") == undefined) {
            set("extensions.opquast-desktop.showRefs", _this.doc.getElementById(_this.options.id + "-showrefs").hasAttribute("checked"));
        } else {
            if (get("extensions.opquast-desktop.showRefs") == true) {
                _this.doc.getElementById(_this.options.id + "-showrefs").setAttribute("checked", true);
                win.aoColumns[2] = null;
            } else {
                _this.doc.getElementById(_this.options.id + "-showrefs").removeAttribute("checked");
                win.aoColumns[2] = {bVisible: false};
            }
        }

        if (get("extensions.opquast-desktop.showTimes") == undefined) {
            set("extensions.opquast-desktop.showTimes", _this.doc.getElementById(_this.options.id + "-showtimes").hasAttribute("checked"));
        } else {
            if (get("extensions.opquast-desktop.showTimes") == true) {
                _this.doc.getElementById(_this.options.id + "-showtimes").setAttribute("checked", true);
                win.aoColumns[4] = null;
            } else {
                _this.doc.getElementById(_this.options.id + "-showtimes").removeAttribute("checked");
                win.aoColumns[4] = {bVisible: false};
            }
        }

        if (get("extensions.opquast-desktop.showDetails") == undefined) {
            set("extensions.opquast-desktop.showDetails", _this.doc.getElementById(_this.options.id + "-showdetails").hasAttribute("checked"));
        } else {
            if (get("extensions.opquast-desktop.showDetails") == true) {
                _this.doc.getElementById(_this.options.id + "-showdetails").setAttribute("checked", true);
                win.aoColumns[5] = null;
            } else {
                _this.doc.getElementById(_this.options.id + "-showdetails").removeAttribute("checked");
                win.aoColumns[5] = {bVisible: false};
            }
        }
    } catch(e) {console.exception(e);}
}

let Launch = function(aContentWindow, aFrame, aCache) {
    try{
        let _this = this;

        if (aCache === undefined || aCache === null) {
            var ui = MainUI.bind(_this, aContentWindow, aFrame);

            let loadUI = function(evt) {
                aFrame.removeEventListener("DOMContentLoaded", loadUI, true);
                try {
                    ui();
                } catch(e) { console.exception(e); }
            };

            aFrame.addEventListener("DOMContentLoaded", loadUI, true);
            aFrame.setAttribute("src", self.data.url("ui/loading.html"));
        } else {
            var ui = CacheUI.bind(_this, aContentWindow, aFrame, aCache);

            let loadCache = function(evt) {
                aFrame.removeEventListener("DOMContentLoaded", loadCache, true);
                try {
                    ui();
                } catch(e) { console.exception(e); }
            }

            aFrame.addEventListener("DOMContentLoaded", loadCache, true);
            aFrame.setAttribute("src", self.data.url("ui/cache.html"));
        }
    } catch(e) {console.exception(e);}
}

let _PanelCache = WindowCache.extend({});
let PanelCache = exports.PanelCache = _PanelCache.new();
