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

const {Class} = require("sdk/core/heritage");
const Q = require("sdk/core/promise");
const _ = require("sdk/l10n").get;
const self = require("sdk/self");
const {prefs} = require("sdk/simple-prefs");
const tabs = require("sdk/tabs");
const {setTimeout} = require("sdk/timers");

const {catchAndLog} = require("sdk/deprecated/errors");

const {BasePanel} = require("./base");
const content = require("../content");
const {ExportReportingPanel} = require("./export-reporting");
const {launchTests} = require("../tester");
const {debug} = require("../../tools/debug");
const {domTools} = require("../../tools/dom-utils");
const {exportCSV} = require("../../tools/export/csv");
const {RequestCache} = require("../../tools/request-cache");
const {SQLite} = require("../../tools/sqlite");


const ResultPanel = exports.ResultPanel = Class({
    extends: BasePanel,

    withToolbar: true,
    withCancel: false,

    tableOptions: {
        visible: ["hResult", "hChecklist", "hRef", "hThema", "hLabel", "hDuration"],
        sortable: ["hResult", "hChecklist", "hRef", "hThema", "hDuration"],
        filterable: ["hResult", "hChecklist", "hThema"]
    },

    initialize: function initialize(aParent, aOptions) {
        BasePanel.prototype.initialize.call(this, aParent, aOptions);
        this._worker = null;
        this._tests = null;
    },

    initToolbar: function initToolbar() {
        let {$, _X} = domTools(this.parent.dock.chromeDoc);
        let toolbar = BasePanel.prototype.initToolbar.call(this);

        let _dock = this.parent.dock;

        // Close
        this.controls.close = _X("toolbarbutton", {
            "class": _dock.options.id + "-closebutton",
            "tooltiptext": _("oqs.close")
        });
        this.controls.close.addEventListener("command", catchAndLog(_dock.close).bind(_dock), false);

        // Info
        this.controls.info = _X("label", {
            "class": _dock.options.id + "-infobox",
            "value": ""
        });

        // Launch
        this.controls.launch = _X("toolbarbutton", {
            "class": _dock.options.id + "-launchbutton button",
            "label": _("oqs.launch")
        });
        this.controls.launch.addEventListener("command", this.tbLaunch.bind(this), false);

        // Export
        this.controls.exp = _X("toolbarbutton", {
            "class": _dock.options.id + "-exportbutton button",
            "label": _("oqs.export"),
            "type": "menu",
            "disabled": true
        });
        let exp_popup = _X("menupopup", {
            "class": _dock.options.id + "-exportmenu"
        });
        this.controls.exp.appendChild(exp_popup);
        this.controls.exp_csv = _X("menuitem", {
            "class": _dock.options.id + "-exportcsv",
            "label": "CSV"
        });
        this.controls.exp_csv.addEventListener("command", this.tbExportCSV.bind(this), false);
        exp_popup.appendChild(this.controls.exp_csv);
        this.controls.exp_reporting = _X("menuitem", {
            "class": _dock.options.id + "-exportreporting",
            "label": "Opquast Reporting"
        });
        this.controls.exp_reporting.addEventListener("command", this.tbExportReporting.bind(this), false);
        exp_popup.appendChild(this.controls.exp_reporting);

        // Help
        this.controls.help = _X("toolbarbutton", {
            "class": _dock.options.id + "-helpbutton button",
            "label": "?",
            "tooltiptext": _("oqs.about_extension")
        });
        this.controls.help.addEventListener("command", this.tbHelp.bind(this), false);

        // Preferences
        this.controls.preferences = _X("toolbarbutton", {
            "class": _dock.options.id + "-prefbutton button",
            "tooltiptext": _("oqs.preferences")
        });
        this.controls.preferences.addEventListener("command", this.tbPreferences.bind(this), false);

        // Search
        this.controls.search = _X("textbox", {
            "class": _dock.options.id + "-searchbox",
            "placeholder": _("oqs.search"),
            "searchbutton": false,
            "type": "search",
            "timeout": "500",
            "disabled": true
        });
        this.controls.search.addEventListener("command", this.tbSearch.bind(this), false);

        // Show
        this.controls.show = _X("toolbarbutton", {
            "class": _dock.options.id + "-showbutton button",
            "label": _("oqs.show_cols"),
            "type": "menu"
        });
        let show_popup = _X("menupopup", {
            "class": _dock.options.id + "-showmenu"
        });
        this.controls.show.appendChild(show_popup);

        this.controls.show_refs = _X("menuitem", {
            "class": _dock.options.id + "-showrefs",
            "label": _("oqs.references"),
            "type": "checkbox",
            "checked": prefs.showRefs,
            "autocheck": true
        });
        this.controls.show_refs.addEventListener("command", this.tbShow.bind(this, "showRefs", "hRef"), false);
        show_popup.appendChild(this.controls.show_refs);

        this.controls.show_themas = _X("menuitem", {
            "class": _dock.options.id + "-showthemas",
            "label": _("oqs.themas"),
            "type": "checkbox",
            "checked": prefs.showThemas,
            "autocheck": true
        });
        this.controls.show_themas.addEventListener("command", this.tbShow.bind(this, "showThemas", "hThema"), false);
        show_popup.appendChild(this.controls.show_themas);

        this.controls.show_times = _X("menuitem", {
            "class": _dock.options.id + "-showtimes",
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
        $(toolbar, "vbox>hbox")[0].appendChild(this.controls.preferences);
        $(toolbar, "vbox>hbox")[0].appendChild(this.controls.help);

        return toolbar;
    },

    showUI: function showUI(aForce) {
        let domWindow = this.tabWindow;

        ResultStore.getEntry(domWindow.location.href)
        .then(function(entry) {
            if(entry && (entry.tests === undefined || entry.tests.oaa_results === undefined || entry.tests.oaa_results.length == 0 || entry.tests.oaa_results[0].criterion === undefined)) {
                entry = null;
            }
            if(entry && entry.tests && (entry.tests.resources === undefined || entry.tests.resources.length == 0)) {
                entry = null;
            }
            let cache = !aForce && entry || null;

            // Disable controls and events
            this.disableControls();
            let worker = this.frameWorker(null, [
                self.data.url("lib/superTable.js"),
                self.data.url("ui/results.js")
            ]);
            this._worker = worker;
            this._tests = null;

            // Worker events
            worker.port.on("launch", function() {
                this.showUI(true);
            }.bind(this));

            worker.port.on("showInfo", function(date, time, duration) {
                this.showInfo(_('oqs.analyze_info', date, time, duration));
            }.bind(this));

            worker.port.on("resultLoaded", function() {
                this.enableControls(worker);
            }.bind(this));

            worker.port.on("inspectNode", function(path) {
                this.inspectElement(path);
            }.bind(this));

            worker.port.on("feedback", function(testID, testName, checklist) {
                this.testFeedback(testID, testName, checklist);
            }.bind(this));

            worker.port.on("resultCounter", function(count, total) {
                worker.port.emit("showResultCount", _("oqs.display_info", count, total));
            });

            worker.port.on("ready", function() {
                if (aForce || cache) {
                    let load_msg = cache && _("oqs.loading_cache") || _("oqs.loading_tests");
                    worker.port.emit("showMessage", load_msg);
                    this.resultUI(cache);
                } else {
                    worker.port.emit("showLandingUI");
                }
            }.bind(this));
        }.bind(this));
    },

    enableControls: function enableControls(worker) {
        this.controls.search.removeAttribute("disabled");
        this.controls.exp.removeAttribute("disabled");
        this.controls.show.removeAttribute("disabled");
        this.controls.launch.removeAttribute("hidden");
        this.controls.launch.setAttribute("label", _("oqs.relaunch"));

        if (prefs.debug) {
            this.controls.show_times.removeAttribute("hidden");
        }

        this.controls.exp.removeAttribute("hidden");
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

    resultUI: function resultUI(aCache) {
        let domWindow = this.tabWindow;
        let tests = {}, checklists = {};

        let deferred = Q.defer();

        if (aCache) {
            setTimeout(function(d, c) {
                // Let some time to show loader
                d.resolve(c.tests);
            }.bind(null, deferred, aCache), 100);

            debug.debug("Results from cache for " + domWindow.location.href);
        } else {
            setTimeout(function(d) {
                let har = RequestCache.getEntry(domWindow);
                launchTests(domWindow, har).then(function(result) {
                    debug.debug("Analyze done on " + domWindow.location.href);

                    ResultStore.setEntry(domWindow.location.href, result);
                    d.resolve(result.tests);
                }).then(null, function(err) {
                    if (prefs.debug) console.exception(err);
                });
            }.bind(null, deferred), 100);
        }

        let tableOptions = this.tableOptions;
        tableOptions.visible = tableOptions.visible.filter(function(e){
            if(e == "hRef" && !prefs.showRefs) {
                return false;
            } else if(e == "hThema" && !prefs.showThemas) {
                return false;
            } else if(e == "hDuration" && !prefs.showTimes) {
                return false;
            }
            return true;
        });

        deferred.promise.then(function(result) {
            this._tests = result;
            this._worker.port.emit("showResults", result, tableOptions);
        }.bind(this));
    },

    tbLaunch: catchAndLog(function tbLaunch(evt) {
        this.showUI(true);
    }),

    tbPreferences: catchAndLog(function tbPreferences(evt) {
        content.openPreferences();
    }),

    tbHelp: catchAndLog(function tbHelp(evt) {
        content.openAbout();
    }),

    tbExportCSV: catchAndLog(function tbExportCSV(evt) {
        if (this._tests) {
            exportCSV(this.tabWindow, this._tests.oaa_results);
        }
    }),

    tbExportReporting: catchAndLog(function tbExportReporting(evt) {
        if (this._tests) {
            ExportReportingPanel(this.parent, this._tests);
            this.deck.selectedIndex = this.deck.childNodes.length - 1;
        }
    }),

    tbSearch: catchAndLog(function tbSearch(evt) {
        if (this._worker) {
            this._worker.port.emit("resultSearch", evt.target.value);
        }
    }),

    tbShow: catchAndLog(function tbShow(aPrefName, aColName, evt) {
        if (this._worker) {
            prefs[aPrefName] = evt.target.hasAttribute("checked");
            this._worker.port.emit("changeColVisibility", aColName, prefs[aPrefName]);
        }
    }),

    showInfo: catchAndLog(function showInfo(aText) {
        this.controls.info.setAttribute("value", aText);
    }),

    inspectElement: function inspectElement(aPath) {
        try {
            let domWindow = this.tabWindow;
            let node = domWindow.document.querySelector(aPath);
            if (node === null) {
                return;
            }

            let ui = this.parent.dock.chromeWindow.InspectorUI;

            if (!ui.isTreePanelOpen) {
                ui.openInspectorUI(node);
            }
            // We force scroll on every case because openInspectorUI has no option for it.
            ui.inspectNode(node, true);
            ui.stopInspecting();
        } catch(e) {
            debug.error("Error with selector:", aPath);
            debug.exception(e);
        }
    },

    testFeedback: catchAndLog(function testFeedback(testID, testName, checklist) {
        let domWindow = this.tabWindow;

        let feedback_url = _("oqs.feedback_url")
            + "?title=" + encodeURIComponent(_("oqs.feedback_title", testID))
            + "&desc=" + encodeURIComponent(_("oqs.feedback_content",
                domWindow.location.href, testID, testName, checklist
            ));

        tabs.open(feedback_url);
    })
});


// Keeping results in a database
let Store = Class({
    initialize : function(aTable) {
        this.db = new SQLite("opquast-desktop.sqlite");
        this.table = aTable;
        this.db.query("CREATE TABLE IF NOT EXISTS " + this.table + " (url TEXT, data TEXT)")
        .then(null, function(e) {
            debug.exception(e);
        });
    },

    dropEntry : function(aURL) {
        return this.db.query("DELETE FROM " + this.table + " WHERE url = :url", {
            "url": aURL
        }).then(null, function(e) {
            debug.exception(e);
        });
    },

    setEntry : function(aURL, aData) {
        return this.dropEntry(aURL).then(function() {
            return this.db.query("INSERT INTO " + this.table + " VALUES (:url, :data)", {
                "url": aURL,
                "data": JSON.stringify(aData)
            });
        }.bind(this)).then(null, function(e) {
            debug.exception(e);
        });
    },

    getEntry : function(aURL) {
        return this.db.query("SELECT * FROM " + this.table + " WHERE url = :url", {
            "url": aURL
        })
        .then(function(data) {
            if (data.length == 1) {
                return JSON.parse(data[0].data) || null;
            }
        })
        .then(null, function(e) {
            debug.exception(e);
        });
    }
});

let ResultStore = Store("results");
