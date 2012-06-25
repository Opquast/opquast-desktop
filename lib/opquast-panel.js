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
let {prefs} = require("simple-prefs");
const self = require("self");
const tabs = require("tabs");
const {Ci, Cc, Cu} = require("chrome");

const {launchTests} = require("tester.js");
const {RequestCache} = require("tools/net-log");
const {WindowCache} = require("tools/window-cache");
const {exportCSV} = require("tools/export-results");
const {Debug} = require("tools/debug");

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

/*
Toolbar buttons event handlers

Should be binded to panel ("this")
*/
let tbLaunch = function(evt) {
    erasePanel.call(this);
    showPanel.call(this, this.getContentWindow(), true);
};

let tbHelp = function(evt) {
    tabs.open(self.data.url("user/about.html"));
};

let tbExportCSV = function(evt) {
    let win = this.getContentWindow();
    let frame_win = this.getFrameWindow();
    exportCSV(win, frame_win.checklists, frame_win.tests.oaa_results);
};

let tbSearch = function(evt) {
    let frame_win = this.getFrameWindow();
    frame_win.jQuery("#test_result").dataTable().fnFilter(evt.target.value);
};

let tbShow = function(aPrefName, aColNum, evt) {
    let frame_win = this.getFrameWindow();

    let oTable = frame_win.jQuery("#test_result").dataTable();
    let bVis = oTable.fnSettings().aoColumns[aColNum].bVisible;
    oTable.fnSetColumnVis(aColNum, bVis ? false : true);

    prefs[aPrefName] = evt.target.hasAttribute("checked");
};

/*
Panel creation
*/
exports.createPanel = function() {
    let {$, _X} = utils(this.doc);

    this.controls = {};

    // Utility methods
    this.getContentWindow = function() {
        // We require main-panel here to avoid circular require calls.
        return require("main-panel").getSelectedTabWindow(this.window);
    };

    this.getFrameWindow = function() {
        // Find panel frame and return its window
        return this.window.document.getElementById(this.options.id + "-frame").contentWindow.wrappedJSObject;
    };

    this.enableControls = function() {
        this.controls.search.removeAttribute("disabled");
        this.controls.exp.removeAttribute("disabled");
        this.controls.show.removeAttribute("disabled");
        this.controls.launch.removeAttribute("hidden");
        this.controls.launch.label = _("oqs.relaunch");
    };

    this.disableControls = function() {
        this.controls.search.setAttribute("disabled", true);
        this.controls.exp.setAttribute("disabled", true);
        this.controls.show.setAttribute("disabled", true);
        this.controls.launch.setAttribute("hidden", true);
        this.controls.launch.label = _("oqs.launch");
    };

    this.showInfo = function(aText) {
        this.controls.info.setAttribute("value", aText);
    };

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
    this.controls.close = _X("toolbarbutton", {
        "id": this.options.id + "-closebutton",
        "tooltiptext": _("oqs.close")
    });
    this.controls.close.addEventListener("command", this.close.bind(this));

    this.controls.info = _X("label", {
        "id": this.options.id + "-infobox",
        "value": ""
    });

    // Launch
    this.controls.launch = _X("toolbarbutton", {
        "id": this.options.id + "-launchbutton",
        "label": _("oqs.launch")
    });
    this.controls.launch.addEventListener("command", tbLaunch.bind(this));

    // Export
    this.controls.exp = _X("toolbarbutton", {
        "id": this.options.id + "-exportbutton",
        "label": _("oqs.export"),
        "type": "menu",
        "disabled": true
    });
    let exp_popup = _X("menupopup", {
        "id": this.options.id + "-exportmenu"
    });
    this.controls.exp.appendChild(exp_popup);
    this.controls.exp_csv = _X("menuitem", {
        "id": this.options.id + "-exportcsv",
        "label": "CSV"
    });
    this.controls.exp_csv.addEventListener("command", tbExportCSV.bind(this));
    exp_popup.appendChild(this.controls.exp_csv);

    // Help
    this.controls.help = _X("toolbarbutton", {
        "id": this.options.id + "-helpbutton",
        "label": "?",
        "tooltiptext": _("oqs.about_extension")
    });
    this.controls.help.addEventListener("command", tbHelp.bind(this));

    // Search
    this.controls.search = _X("textbox", {
        "id": this.options.id + "-searchbox",
        "value": _("oqs.search"),
        "disabled": true
    });
    this.controls.search.addEventListener("focus", function() {
        this.value = "";
    });
    this.controls.search.addEventListener("input", tbSearch.bind(this));

    // Show
    this.controls.show = _X("toolbarbutton", {
        "id": this.options.id + "-showbutton",
        "label": _("oqs.show_cols"),
        "type": "menu",
        "disabled": true
    });
    let show_popup = _X("menupopup", {
        "id": this.options.id + "-showmenu"
    });
    this.controls.show.appendChild(show_popup);

    this.controls.show_refs = _X("menuitem", {
        "id": this.options.id + "-showrefs",
        "label": _("oqs.references"),
        "type": "checkbox",
        "checked": prefs.showRefs,
        "autocheck": true
    });
    this.controls.show_refs.addEventListener("command", tbShow.bind(this, "showRefs", 2));
    show_popup.appendChild(this.controls.show_refs);

    this.controls.show_times = _X("menuitem", {
        "id": this.options.id + "-showtimes",
        "label": _("oqs.durations"),
        "type": "checkbox",
        "checked": prefs.showTimes,
        "autocheck": true
    });
    this.controls.show_times.addEventListener("command", tbShow.bind(this, "showTimes", 4));
    show_popup.appendChild(this.controls.show_times);

    this.controls.show_details = _X("menuitem", {
        "id": this.options.id + "-showdetails",
        "label": _("oqs.details"),
        "type": "checkbox",
        "checked": prefs.showDetails,
        "autocheck": true
    });
    this.controls.show_details.addEventListener("command", tbShow.bind(this, "showDetails", 5));
    show_popup.appendChild(this.controls.show_details);

    $(toolbar, "vbox>hbox")[0].appendChild(this.controls.close);
    $(toolbar, "vbox>hbox")[0].appendChild(this.controls.info);
    $(toolbar, "vbox>hbox")[0].appendChild(this.controls.launch);
    $(toolbar, "vbox>hbox")[0].appendChild(_X("spacer", {"flex": "1"}));
    $(toolbar, "vbox>hbox")[0].appendChild(this.controls.show);
    $(toolbar, "vbox>hbox")[0].appendChild(this.controls.search);
    $(toolbar, "vbox>hbox")[0].appendChild(this.controls.exp);
    $(toolbar, "vbox>hbox")[0].appendChild(this.controls.help);

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


let erasePanel = exports.erasePanel = function() {
    while (this.main.firstChild) {
        this.main.removeChild(this.main.firstChild);
    }
};


let showPanel = exports.showPanel = function(aContentWindow, aForce) {
    let {_X, $} = utils(this.doc);

    let frame = _X("iframe", {
        "flex": "1",
        "id": this.options.id + "-frame"
    });
    this.main.appendChild(frame);

    // Cache
    let cache = (!aForce && PanelCache.getEntry(aContentWindow.location)) || null;
    let ui;

    // Disable controls
    this.disableControls();
    this.showInfo("");

    if (aForce || cache) {
        // Display results
        let load_msg = cache && _("oqs.loading_cache") || _("oqs.loading_tests");

        let ui = ResultsUI.bind(this, aContentWindow, frame, cache);

        let loadResults = function(evt) {
            try {
                frame.removeEventListener("DOMContentLoaded", loadResults, true);
                let win = frame.contentWindow.wrappedJSObject;
                let {_H, _T} = utils(win.document);
                let e = _H("p", {"id": "loader"})
                e.appendChild(_T(load_msg));
                win.document.body.appendChild(e);
                ui();
            } catch(e) { console.exception(e); }
        }.bind(this);

        frame.addEventListener("DOMContentLoaded", loadResults, true);
    } else {
        // Display main page (with start button)
        let loadMain = function(evt) {
            try {
                frame.removeEventListener("DOMContentLoaded", loadMain, true);
                let win = frame.contentWindow.wrappedJSObject;
                let {_H, _T} = utils(win.document);

                let e = _H("p", {"id": "noresults"});
                e.appendChild(_T(_("oqs.no_result_yet")));
                e.appendChild(_H("br"));

                let b = _H("button");
                b.appendChild(_T(_("oqs.launch")));
                b.addEventListener("click", tbLaunch.bind(this), true);

                e.appendChild(b);

                win.document.body.appendChild(e);
            } catch(e) { console.exception(e); }
        }.bind(this);

        frame.addEventListener("DOMContentLoaded", loadMain, true);
    }
    frame.setAttribute("src", self.data.url("ui/blank.html"));
};


let ResultsUI = function(aContentWindow, aFrame, aCache) {
    let window = aFrame.contentWindow.wrappedJSObject;
    let tests = {};

    if (aCache) {
        tests = aCache.tests;

        Debug("Opquast Desktop", "Results from cache for " + aContentWindow.location);
    } else {
        let requests = RequestCache.getEntry(aContentWindow);
        try {
            tests = launchTests(aContentWindow, requests);
        } catch(e) {
            console.exception(e);
        }

        PanelCache.setEntry(aContentWindow.location, {
            "tests": tests,
            "checklists": window.checklists
        });

        Debug("Opquast Desktop", "Analyze done on " + aContentWindow.location);
    }

    let load = function() {
        aFrame.removeEventListener("DOMContentLoaded", load, true);

        let win = aFrame.contentWindow.wrappedJSObject;
        win.console = console;
        win._ = _;
        win._inspectElement = InspectElement.bind(this, aContentWindow);
        win._showInfo = this.showInfo.bind(this);

        win.showResults(tests, prefs);
        this.enableControls();
    }.bind(this);

    aFrame.addEventListener("DOMContentLoaded", load, true);
    aFrame.setAttribute("src", self.data.url("ui/results.html"));
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


let _PanelCache = WindowCache.extend({});
let PanelCache = exports.PanelCache = _PanelCache.new();
