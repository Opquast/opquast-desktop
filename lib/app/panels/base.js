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

let {Symbiont} = require('sdk/content/content');
const {Class, mix} = require("sdk/core/heritage");
const {emit} = require("sdk/event/core");
const tabs = require("sdk/tabs");
const {EventTarget} = require("sdk/event/target");
const self = require("sdk/self");
const {prefs} = require("sdk/simple-prefs");

const {catchAndLog} = require("sdk/deprecated/errors");

const testRunner = require("opquast-tests/test-runner");

const {domTools} = require("../../tools/dom-utils");


const BasePanel = exports.BasePanel = Class({
    extends: EventTarget,

    withToolbar: true,
    withCancel: true,

    initialize: function initialize(aParent, aOptions) {
        EventTarget.prototype.initialize.call(this, aOptions);

        this.controls = {};
        this.scroll_position = [0, 0];

        this.parent = aParent;
        this.deck = this.parent.deck;

        this.initUI();
    },

    attachPanel: function attachPanel(aBox) {
        aBox.panelInstance = this;
        this.deck.appendChild(aBox);
    },

    initUI: function initUI() {
        let {$, _X} = domTools(this.parent.dock.chromeDoc);

        let outerBox = _X('vbox', {'flex': 1});
        this.attachPanel(outerBox);

        if (this.withToolbar) {
            outerBox.appendChild(this.initToolbar());
        }

        let base = _X('hbox', {"flex": "1"});
        let main = _X('vbox', {
            "flex": "1",
            "class": this.parent.dock.options.id + "-main"
        });

        base.appendChild(main);
        outerBox.appendChild(base);
        this.main = main;

        this.iframe = _X("iframe", {
            "flex": 1,
            "class": this.parent.dock.options.id + "-frame"
        });

        // Save iframe scroll position
        this.iframe.addEventListener("scroll", this.saveScroll.bind(this), false);

        // Add iframe
        let loaded = catchAndLog(function() {
            this.iframe.removeEventListener("DOMContentLoaded", loaded, false);
            emit(this, "ready");
        }).bind(this);
        this.main.appendChild(this.iframe);
        this.iframe.addEventListener("DOMContentLoaded", loaded, false);

        this.iframe.setAttribute("src", "about:blank");
    },

    saveScroll: catchAndLog(function saveScroll(evt) {
        let win = evt.target.defaultView;
        this.scroll_position = [win.scrollX, win.scrollY];
    }),

    setScroll: function setScroll() {
        if (this.iframe.contentWindow === undefined) {
            return;
        }

        this.iframe.contentWindow.scroll(this.scroll_position[0], this.scroll_position[1]);
    },

    initToolbar: function initToolbar() {
        let {$, _X} = domTools(this.parent.dock.chromeDoc);

        // Toolbar
        let toolbar = _X('vbox', {
            "class": this.parent.dock.options.id + "-toolbar"
        });
        this.controls.resizer = _X('resizer', {
            "class": this.parent.dock.options.id + "-resizer",
            "element": this.parent.dock.options.id
        });
        this.controls.resizer.addEventListener("command", this.tbResize.bind(this));
        toolbar.appendChild(this.controls.resizer);

        toolbar.appendChild(_X('vbox', {
            "flex": "1"
        }));
        $(toolbar, "vbox")[0].appendChild(_X("hbox", {
            "flex": "1"
        }));

        if (this.withCancel) {
            this.controls.cancel = _X("toolbarbutton", {
                "class": this.parent.dock.options.id + "-pref button",
                "label": "cancel",
                "id": "tbCancel"
            });
            this.controls.cancel.addEventListener("command", this.tbCancel.bind(this), false);

            $(toolbar, "vbox>hbox")[0].appendChild(_X("spacer", {"flex": "1"}));
            $(toolbar, "vbox>hbox")[0].appendChild(this.controls.cancel);
        }

        return toolbar;
    },

    tbCancel: catchAndLog(function tbCancel(evt) {
        this.deck.removeChild(this.deck.selectedPanel);
        this.deck.selectedIndex = 0;
    }),

    tbResize: catchAndLog(function tbResize(evt) {
        prefs.panelHeight = this.deck.clientHeight;
    }),

    frameWorker: function frameWorker(options, additionalScripts) {
        options = mix({
            "frame": this.iframe,
            "contentURL": self.data.url("ui/main.html"),
            "contentScriptWhen": "ready",
            "contentScriptFile": [
                testRunner.dataRoot + "/lib/jquery-1.9.1.min.js",
                self.data.url("lib/doT.js"),
                self.data.url("lib/jquery-ui-1.8.23.js"),
                self.data.url("ui/main.js")
            ],
            "contentScriptOptions": {
                "locales": require("@l10n/data").hash,
                "templates": {
                    'tplMessage': self.data.load("ui/templates/message.tpl"),
                    'tplResultDetails': self.data.load("ui/templates/resultDetails.tpl"),
                    'tplResults': self.data.load("ui/templates/results.tpl"),
                    'tplAccountList': self.data.load("ui/templates/accountList.tpl"),
                    'tplSampleList': self.data.load("ui/templates/sampleList.tpl"),
                    'tplProjectList': self.data.load("ui/templates/projectList.tpl")
                }
            }
        }, options || {});

        if (additionalScripts) {
            options.contentScriptFile = options.contentScriptFile.concat(additionalScripts);
        }

        let worker = Symbiont(options);

        worker.port.on("openLink", function(url) {
            tabs.open(url);
        });

        return worker;
    },

    get tabWindow() {
        return this.parent.dock.getCurrentTabWindow();
    }
});
