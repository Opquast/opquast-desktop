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
 *   Mickael Hoareau <mickael.hoareau@temesis.com>
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

const {validateOptions} = require("sdk/deprecated/api-utils");
const {WindowTracker} = require("sdk/deprecated/window-utils");

const {domTools} = require("../tools/dom-utils");
const {WindowCache} = require("../tools/window-cache");


let _DockCache = Class({
    extends: WindowCache,

    addDock: function(aWindow, aOptions) {
        let docks = this.getEntry(aWindow) || {};
        docks[aOptions.id] = aOptions.dockClass(aWindow, {
            "id": aOptions.id,
            "stylesheet": aOptions.stylesheet
        });
        this.setEntry(aWindow, docks);
        console.debug('dock added to DockCache');
    },

    removeDock: function(aWindow, aID) {
        let docks = this.getEntry(aWindow);

        if (docks[aID]) {
            docks[aID].close();
            docks[aID].destroy();
            delete(docks[aID]);
            this.setEntry(aWindow, docks);
        }
        console.debug('dock removed from DockCache');
    },

    getDock: function(aWindow, aID) {
        let docks = this.getEntry(aWindow);
        if (docks) {
            return docks[aID];
        }
    }
});

let DockCache = exports.DockCache = _DockCache();


let SplitDock = exports.SplitDock = function SplitDock(aOptions) {
    let options = validateOptions(aOptions, {
        id:         { is: ["string"] },
        dockClass: { is: ["function"] },
        stylesheet: { is: ["undefined", "string"] },
    });

    let delegate = {
        onTrack: function(aWindow) {
            // Create dock on every new window
            if (aWindow.location != "chrome://browser/content/browser.xul") {
                return;
            }

            DockCache.addDock(aWindow, options);
            console.debug('SplitDock created');
        },
        onUntrack: function(aWindow) {
            // Remove dock when extension is disabled or removed
            if (aWindow.location != "chrome://browser/content/browser.xul") {
                return;
            }

            DockCache.removeDock(aWindow, options.id);
            DockCache.dropEntry(aWindow);
            console.debug('SplitDock removed');
        }
    };
    WindowTracker(delegate);
}


let BaseDock = exports.BaseDock = Class({
    insert_before_id: "addon-bar",

    initialize: function initialize(aWindow, aOptions) {
        this.chromeWindow = aWindow;
        this.chromeDoc = aWindow.document;

        this.options = validateOptions(aOptions, {
            id: { is: ["string"] },
            stylesheet: { is: ["undefined", "string"] }
        });

        this.init();

        console.debug('BaseDock initialized');
    },

    init: function init() {
        let {_X} = domTools(this.chromeDoc);

        // Attach stylesheet if any
        this.style_node = null;
        if (this.options.stylesheet) {
            this.style_node = this.chromeDoc.createProcessingInstruction("xml-stylesheet",
                'href="' + this.options.stylesheet + '"' + 'type="text/css"');
            this.chromeDoc.insertBefore(this.style_node, this.chromeDoc.documentElement);
        }

        // Create deck (main dock) element and attach it to chrome document
        this.deck = _X("deck", {
            "id": this.options.id,
            "hidden": "true"
        });

        this.chromeDoc.getElementById("main-window").appendChild(this.deck);

        console.debug('BaseDock initiated');
    },

    destroy: function destroy() {
        if (this.style_node) {
            this.chromeDoc.removeChild(this.style_node);
        }

        console.debug('BaseDock destroyed');
    },

    isVisible: function isVisible() {
        return !this.deck.hasAttribute("hidden");
    },

    show: function show() {
        this.deck.removeAttribute("hidden");
    },

    hide: function hide() {
        this.deck.setAttribute("hidden", "true");
    },

    toggle: function toggle() {
        if (this.isVisible()) {
            this.hide();
        } else {
            this.show();
        }
    },

    createPanel: function createPanel(aPanelElement) {
        let {_X} = domTools(this.chromeDoc);
        let box = _X(aPanelElement || "box");
        this.deck.appendChild(box);
        console.debug('Panel appended');
        return box;
    }
});
