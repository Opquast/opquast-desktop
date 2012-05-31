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

    let close_button = _X("toolbarbutton", {
        "id": this.options.id + "-closebutton",
        "tooltiptext": "Close"
    });
    close_button.addEventListener("command", this.close.bind(this));

    let about_link = _X("toolbarbutton", {
        "id": this.options.id + "-aboutbutton",
        "label": "About/Help"
    });
    about_link.addEventListener("command", function() {
        tabs.open(self.data.url("user/about.html"));
    });

    let product_link = _X("toolbarbutton", {
        "id": this.options.id + "-oqslink",
        "label": "Opquast Project"
    });
    product_link.addEventListener("command", function() {
        tabs.open("http://www.opquast.com/");
    });

    $(toolbar, "vbox>hbox")[0].appendChild(close_button);
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

exports.showPanel = function(aContentWindow, aBody) {
    let {_X} = utils(this.doc);

    let frame = _X("iframe", {
        "flex": "1",
        "src": "data:,"
    });
    this.main.appendChild(frame);
    let ui;

    if (aBody === undefined) {
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
        ui = CacheUI.bind(this, aContentWindow, frame, aBody);

        let loadCache = function(evt) {
            frame.removeEventListener("DOMContentLoaded", loadCache, true);
            try {
                ui();
            } catch(e) { console.exception(e); }
        }

        frame.addEventListener("DOMContentLoaded", loadCache, true);
        frame.setAttribute("src", self.data.url("ui/main.html"));
    }
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

    PanelCache.setEntry(aContentWindow, window.document.body.cloneNode(true));
};

let CacheUI = function(aContentWindow, aFrame, aBody) {
    let window = aFrame.contentWindow.wrappedJSObject;
    window.console = console;

    window.clearContent();
    window.loadBody(aBody.cloneNode(true));
};

let _PanelCache = WindowCache.extend({});
let PanelCache = exports.PanelCache = _PanelCache.new();
