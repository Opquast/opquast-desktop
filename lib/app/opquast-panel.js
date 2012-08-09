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
const {prefs} = require("simple-prefs");
const self = require("self");
const tabs = require("tabs");
const {setTimeout} = require("timers");

const {Class} = require("api-utils/heritage");

const {launchTests} = require("app/tester.js");
const {domTools} = require("tools/dom-utils");
const {exportCSV} = require("tools/export-results");
const {RequestCache} = require("tools/net-log");
const {SQLite} = require("tools/sqlite");

let OpquastPanel = exports.OpquastPanel = Class({
    initialize: function initialize(aDock, aBox) {
        this.dock = aDock;
        this.box = aBox;
        this.controls = {};
        this.scroll_position = [0, 0];

        this.initUI();
    },

    initUI: function initUI() {
        let {$, _X} = domTools(this.dock.chromeDoc);

        this.initToolbar();

        // Panel content
        let base = _X('hbox', {"flex": "1"});
        let main = _X('vbox', {
            "flex": "1",
            "class": this.dock.options.id + "-main"
        });

        base.appendChild(main);
        this.box.appendChild(base);
        this.main = main;

        this.iframe = _X("iframe", {
            "flex": 1,
            "class": this.dock.options.id + "-frame"
        });

        // Keep a scroll position cache
        this.iframe.addEventListener("scroll", this.saveScroll.bind(this), false);

        this.main.appendChild(this.iframe);
    },

    initToolbar: function initToolbar() {
        let {$, _X} = domTools(this.dock.chromeDoc);

        // Toolbar
        let toolbar = _X('vbox', {
            "class": this.dock.options.id + "-toolbar"
        });
        toolbar.appendChild(_X('resizer', {
            "class": this.dock.options.id + "-resizer",
            "element": this.dock.options.id
        }));

        toolbar.appendChild(_X('vbox', {
            "flex": "1"
        }));
        $(toolbar, "vbox")[0].appendChild(_X("hbox", {
            "flex": "1"
        }));

        // Close
        this.controls.close = _X("toolbarbutton", {
            "class": this.dock.options.id + "-closebutton",
            "tooltiptext": _("oqs.close")
        });
        this.controls.close.addEventListener("command", this.dock.close.bind(this.dock), false);

        // Info
        this.controls.info = _X("label", {
            "class": this.dock.options.id + "-infobox",
            "value": ""
        });

        // Launch
        this.controls.launch = _X("toolbarbutton", {
            "class": this.dock.options.id + "-launchbutton button",
            "label": _("oqs.launch")
        });
        this.controls.launch.addEventListener("command", this.tbLaunch.bind(this), false);

        // Export
        this.controls.exp = _X("toolbarbutton", {
            "class": this.dock.options.id + "-exportbutton button",
            "label": _("oqs.export"),
            "type": "menu",
            "disabled": true
        });
        let exp_popup = _X("menupopup", {
            "class": this.dock.options.id + "-exportmenu"
        });
        this.controls.exp.appendChild(exp_popup);
        this.controls.exp_csv = _X("menuitem", {
            "class": this.dock.options.id + "-exportcsv",
            "label": "CSV"
        });
        this.controls.exp_csv.addEventListener("command", this.tbExportCSV.bind(this), false);
        exp_popup.appendChild(this.controls.exp_csv);

        // Help
        this.controls.help = _X("toolbarbutton", {
            "class": this.dock.options.id + "-helpbutton button",
            "label": "?",
            "tooltiptext": _("oqs.about_extension")
        });
        this.controls.help.addEventListener("command", this.tbHelp.bind(this), false);

        // Search
        this.controls.search = _X("textbox", {
            "class": this.dock.options.id + "-searchbox",
            "placeholder": _("oqs.search"),
            "disabled": true
        });
        this.controls.search.addEventListener("input", this.tbSearch.bind(this), false);

        // Show
        this.controls.show = _X("toolbarbutton", {
            "class": this.dock.options.id + "-showbutton button",
            "label": _("oqs.show_cols"),
            "type": "menu"
        });
        let show_popup = _X("menupopup", {
            "class": this.dock.options.id + "-showmenu"
        });
        this.controls.show.appendChild(show_popup);

        this.controls.show_refs = _X("menuitem", {
            "class": this.dock.options.id + "-showrefs",
            "label": _("oqs.references"),
            "type": "checkbox",
            "checked": prefs.showRefs,
            "autocheck": true
        });
        this.controls.show_refs.addEventListener("command", this.tbShow.bind(this, "showRefs", "hRef"), false);
        show_popup.appendChild(this.controls.show_refs);

        this.controls.show_themas = _X("menuitem", {
            "class": this.dock.options.id + "-showthemas",
            "label": _("oqs.themas"),
            "type": "checkbox",
            "checked": prefs.showThemas,
            "autocheck": true
        });
        this.controls.show_themas.addEventListener("command", this.tbShow.bind(this, "showThemas", "hThema"), false);
        show_popup.appendChild(this.controls.show_themas);

        this.controls.show_times = _X("menuitem", {
            "class": this.dock.options.id + "-showtimes",
            "label": _("oqs.durations"),
            "type": "checkbox",
            "checked": prefs.showTimes,
            "autocheck": true,
            "hidden": !prefs.debug
        });
        this.controls.show_times.addEventListener("command", this.tbShow.bind(this, "showTimes", "hDuration"), false);
        show_popup.appendChild(this.controls.show_times);

        $(toolbar, "vbox>hbox")[0].appendChild(this.controls.close);
        $(toolbar, "vbox>hbox")[0].appendChild(this.controls.info);
        $(toolbar, "vbox>hbox")[0].appendChild(this.controls.launch);
        $(toolbar, "vbox>hbox")[0].appendChild(_X("spacer", {"flex": "1"}));
        $(toolbar, "vbox>hbox")[0].appendChild(this.controls.show);
        $(toolbar, "vbox>hbox")[0].appendChild(this.controls.search);
        $(toolbar, "vbox>hbox")[0].appendChild(this.controls.exp);
        $(toolbar, "vbox>hbox")[0].appendChild(this.controls.help);

        this.box.appendChild(toolbar);
    },

    enableControls: function enableControls() {
        this.controls.search.removeAttribute("disabled");
        this.controls.exp.removeAttribute("disabled");
        this.controls.show.removeAttribute("disabled");
        this.controls.launch.removeAttribute("hidden");
        this.controls.launch.setAttribute("label", _("oqs.relaunch"));

        if (prefs.debug) {
            this.controls.show_times.removeAttribute("hidden");
        }
    },

    disableControls: function disableControls() {
        this.controls.search.setAttribute("disabled", true);
        this.controls.search.reset();
        this.controls.exp.setAttribute("disabled", true);
        this.controls.show.setAttribute("disabled", true);
        this.controls.launch.setAttribute("hidden", true);
        this.controls.launch.setAttribute("label", _("oqs.launch"));
        this.showInfo("");

        if (!prefs.debug) {
            this.controls.show_times.setAttribute("hidden", true);
        }
    },

    saveScroll: function saveScroll(evt) {
        let win = evt.target.defaultView;
        this.scroll_position = [win.scrollX, win.scrollY];
    },

    setScroll: function setScroll() {
        if (this.iframe.contentWindow === undefined) {
            return;
        }

        this.iframe.contentWindow.wrappedJSObject.scroll(this.scroll_position[0], this.scroll_position[1]);
    },

    showUI: function showUI(aForce) {
        let domWindow = this.dock.getCurrentTabWindow();
        let entry = ResultStore.getEntry(domWindow.location.href);
        if(entry && entry.tests.oaa_results[0].criterion == undefined){
            entry = null;
        }
        let cache = !aForce && entry || null;

        // Disable controls and change frame url
        this.disableControls();
        this.iframe.setAttribute("src", "about:blank");

        if (aForce || cache) {
            // Display test results (with ou without running them)
            let load_msg = cache && _("oqs.loading_cache") || _("oqs.loading_tests");
            let ui = this.resultsUI.bind(this, cache);

            let loadResults = function(evt) {
                try {
                    this.iframe.removeEventListener("DOMContentLoaded", loadResults, true);
                    let doc = evt.target;
                    let {_H, _T} = domTools(doc);
                    let e = _H("p", {"id": "loader"})
                    e.appendChild(_T(load_msg));
                    doc.body.appendChild(e);

                    // A little timer to avoid immediate blocking
                    setTimeout(ui, 100);
                } catch(e) { console.exception(e); }
            }.bind(this);

            this.iframe.addEventListener("DOMContentLoaded", loadResults, true);
        } else {
            // No cache, not forcing tests, show landing page
            let loadMain = function(evt) {
                try {
                    this.iframe.removeEventListener("DOMContentLoaded", loadMain, false);
                    let doc = evt.target;
                    let {_H, _T} = domTools(doc);

                    let e = _H("p", {"id": "noresults"});
                    e.appendChild(_T(_("oqs.no_result_yet")));
                    e.appendChild(_H("br"));

                    let b = _H("button", {"class": "launch"});
                    b.appendChild(_H("span"));
                    b.appendChild(_T(_("oqs.launch")));
                    b.addEventListener("click", this.tbLaunch.bind(this), false);

                    e.appendChild(b);

                    doc.body.appendChild(e);
                } catch(e) { console.exception(e); }
            }.bind(this);

            this.iframe.addEventListener("DOMContentLoaded", loadMain, false);
        }

        this.iframe.setAttribute("src", self.data.url("ui/blank.html"));
    },

    showInfo: function showInfo(aText) {
        this.controls.info.setAttribute("value", aText);
    },

    resultsUI: function resultsUI(aCache) {
        let domWindow = this.dock.getCurrentTabWindow();
        let tests = {}, checklists = {};

        if (aCache) {
            tests = aCache.tests;

            require("tools/debug").debug("Results from cache for " + domWindow.location);
        } else {
            let requests = RequestCache.getEntry(domWindow);

            try {
                [tests, checklists] = launchTests(domWindow, requests);
            } catch(e) {
                console.exception(e);
            }

            ResultStore.setEntry(domWindow.location.href, {
                "tests": tests,
                "checklists": checklists
            });

            require("tools/debug").debug("Analyze done on " + domWindow.location);
        }

        let load = function() {
            this.iframe.removeEventListener("DOMContentLoaded", load, false);

            let win = this.iframe.contentWindow.wrappedJSObject;
            win.console = console;
            win._ = _;
            win._inspectElement = this.inspectElement.bind(this);
            win._testFeedback = this.testFeedback.bind(this);
            win._showInfo = this.showInfo.bind(this);

            win.showResults(tests, prefs);
            this.enableControls();
        }.bind(this);

        this.iframe.addEventListener("DOMContentLoaded", load, false);
        this.iframe.setAttribute("src", self.data.url("ui/results.html"));
    },

    tbLaunch: function tbLaunch(evt) {
        this.showUI(true);
    },

    tbHelp: function tbHelp(evt) {
        tabs.open(self.data.url("pages/about.html"));
    },

    tbExportCSV: function tbExportCSV(evt) {
        let win = this.iframe.contentWindow.wrappedJSObject;
        exportCSV(this.dock.getCurrentTabWindow(), win.tests.oaa_results);
    },

    tbSearch: function tbSearch(evt) {
        let win = this.iframe.contentWindow.wrappedJSObject;
        
        win.table.superTable("search", evt.target.value);
    },

    tbShow: function tbShow(aPrefName, aColName, evt) {
        let win = this.iframe.contentWindow.wrappedJSObject;
        prefs[aPrefName] = evt.target.hasAttribute("checked");

        win.table.superTable("showColumn", aColName, prefs[aPrefName]);
    },

    inspectElement: function inspectElement(aPath) {
        try {
            let domWindow = this.dock.getCurrentTabWindow(false);
            let node = domWindow.document.querySelector(aPath);
            if (node === null) {
                return;
            }

            let ui = this.dock.chromeWindow.InspectorUI;

            if (!ui.isTreePanelOpen) {
                ui.openInspectorUI(node);
            }
            // We force scroll on every case because openInspectorUI has no option for it.
            ui.inspectNode(node, true);
            ui.stopInspecting();
        } catch(e) { console.exception(e);}
    },

    testFeedback: function testFeedback(aValue) {
        let domWindow = this.dock.getCurrentTabWindow();

        let feedback_url = _("oqs.feedback_url")
            + "?title=" + encodeURIComponent(_("oqs.feedback_title", aValue.test_id))
            + "&desc=" + encodeURIComponent(_("oqs.feedback_content",
                domWindow.location.href, aValue.test_id, aValue.test_name, aValue.checklist
            ));

        tabs.open(feedback_url);
    }
});


// Keeping results in a database
let Store = Class({
    initialize : function(aTable) {
        this.db = new SQLite("opquast-desktop.sqlite");
        this.table = aTable;
        this.db.execute("CREATE TABLE IF NOT EXISTS " + this.table + " (url TEXT, data TEXT)");
    },

    dropEntry : function(aURL) {
        try {
            this.db.execute("DELETE FROM " + this.table + " WHERE url = :url", {
                "url": aURL
            });
        } catch(e) {
            console.exception(e);
        }
    },

    setEntry : function(aURL, aData) {
        try {
            this.dropEntry(aURL);

            this.db.execute("INSERT INTO " + this.table + " VALUES (:url, :data)", {
                "url": aURL,
                "data": JSON.stringify(aData)
            });
        } catch(e) {
            console.exception(e);
        }
    },

    getEntry : function(aURL) {
        try {
            let result = this.db.queryOne("SELECT * FROM " + this.table + " WHERE url = :url", {
                "url": aURL
            });
            return result && JSON.parse(result.data) || null;
        } catch(e) {
            console.exception(e);
        }
    },

    dropAll : function() {
        try {
            this.db.execute("DELETE FROM " + this.table + ";");
        } catch(e) {
            console.exception(e);
        }
    },
});

let ResultStore = Store("results");
