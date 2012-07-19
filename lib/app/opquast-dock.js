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

const {Ci, Cc, Cr} = require("chrome");
const self = require("self");

const _ = require("l10n").get;
const tabs = require("tabs");
const {setTimeout} = require("timers");

const {Class} = require("api-utils/heritage");

const {BaseDock, DockCache} = require("app/dock");
const {OpquastPanel} = require("app/opquast-panel");

const wm = Cc["@mozilla.org/appshell/window-mediator;1"].getService(Ci.nsIWindowMediator);

const dock_id = "opquast-desktop-dock";
const button_id = "opquast-desktop-button";


//
// Tab monitoring system
//
let tabListener = function(aDock) {
    this.dock = aDock;
};
tabListener.prototype = {
    QueryInterface: function(aIID) {
        if (aIID.equals(Ci.nsIWebProgressListener) ||
            aIID.equals(Ci.nsISupportsWeakReference) ||
            aIID.equals(Ci.nsISupports))
                return this;
        throw Cr.NS_NOINTERFACE;
    },

    onLocationChange: function(aProgress, aRequest, aURI) {
        try {
            let location = aProgress.DOMWindow.location;

            // Allways hide first
            this.dock.hide();

            // If panel is found, show it
            let index = this.dock.selectPanel(location);
            if (index !== undefined) {
                this.dock.show(index);
            }
        } catch(e) {
            console.exception(e);
        }
    },
};

let TabMonitor = function TabMonitor(aDock) {
    this.dock = aDock;
};
TabMonitor.prototype = {
    init: function init() {
        this.listener = new tabListener(this.dock);

        this.onTabClose = function onTabClose(evt) {
            let location = this.dock.chromeWindow.gBrowser.getBrowserForTab(evt.target)
                            .contentWindow.location.href;

            // On tab close, we remove panel if this is the only tab with this URL
            let last = true;
            for each(let tab in tabs) {
                if (tab.url == location) {
                    found = false;
                    break;
                }
            }

            if (last) {
                this.dock.removePanel(location);
            }
        }.bind(this);

        this.dock.chromeWindow.gBrowser.addProgressListener(this.listener);
        this.dock.chromeWindow.gBrowser.tabContainer.addEventListener("TabClose", this.onTabClose, false);
    },

    destroy: function destroy() {
        this.dock.chromeWindow.gBrowser.removeProgressListener(this.listener);
        this.dock.chromeWindow.gBrowser.tabContainer.removeEventListener("TabClose", this.onTabClose, false);
    }
};


//
// Our dock with everything in it
//
let OpquastDock = Class({
    extends: BaseDock,

    init: function init() {
        BaseDock.prototype.init.call(this);
        this.tabMonitor = new TabMonitor(this);
        this.tabMonitor.init();
        require("tools/debug").debug("Dock created");
    },

    destroy: function destroy() {
        BaseDock.prototype.destroy.call(this);
        this.tabMonitor.destroy();
        require("tools/debug").debug("Dock destroyed");
    },

    getCurrentTabWindow: function getCurrentTabWindow(aWrapped) {
        let wrapped = (aWrapped == undefined) ? true : false;

        let domWindow = this.chromeWindow.gBrowser
                        .getBrowserForTab(this.chromeWindow.gBrowser.selectedTab)
                        .contentWindow;

        return wrapped ? domWindow.wrappedJSObject : domWindow;
    },

    createPanel: function createPanel(aRunTests) {
        let box = BaseDock.prototype.createPanel.call(this, "vbox");
        box._url = this.getCurrentTabWindow().location.href;
        try {
            box._panel = OpquastPanel(this, box);

            // Timer is required to let UI be ready (??)
            setTimeout(box._panel.showUI.bind(box._panel, aRunTests), 100);
        } catch (e) { console.exception(e); }

        require("tools/debug").debug("Panel created");

        return box;
    },

    findPanel: function findPanel(aURL) {
        require("tools/debug").debug("Search panel with URL: " + aURL);
        if (this.deck.childElementCount) {
            for (let i=0; i<this.deck.children.length; i++) {
                if (this.deck.children[i]._url == aURL) {
                    return i;
                }
            }
        }
    },

    selectPanel: function selectPanel(aURL) {
        let index = this.findPanel(aURL);
        if (index !== undefined) {
            // Restore scroll position
            this.deck.selectedIndex = index;
            let panel = this.deck.children[index]._panel;
            setTimeout(panel.setScroll.bind(panel), 50);

            return index;
        }
    },

    removePanel: function(aURL) {
        let index = this.findPanel(aURL);
        if (index !== undefined) {
            let box = this.deck.children[index];
            this.deck.removeChild(box);
        }
    },

    open: function open() {
        this.show();
    },

    close: function close() {
        this.removePanel(this.getCurrentTabWindow().location.href);
        this.hide();
    },

    show: function show(aIndex, aRunTests) {
        BaseDock.prototype.show.call(this);

        let index = (aIndex !== undefined) ? aIndex : this.selectPanel(this.getCurrentTabWindow().location.href);

        // Panel does not exist, create it
        if (index === undefined) {
            this.createPanel(aRunTests);
            this.deck.selectedIndex = this.deck.childElementCount - 1;
        }
    },

    showAndRun: function showAndRun() {
        if (!this.isVisible()) {
            this.show(undefined, true);
        } else {
            let index = this.selectPanel(this.getCurrentTabWindow().location.href);
            this.deck.children[index]._panel.showUI(true);
        }
    }
});


//
// Dock options
//
exports.DockOptions = {
    "id": dock_id,
    "dockClass": OpquastDock,
    "stylesheet": self.data.url("panel/panel.css"),
};


//
// Button options
//
exports.ButtonOptions = {
    id: button_id,
    label: "Opquast Desktop",
    image: self.data.url("icon16.png"),
    onCommand: function() {
        try {
            let win = wm.getMostRecentWindow("navigator:browser");
            let dock = DockCache.getDock(win, dock_id);
            if (dock) {
                dock.isVisible() ? dock.close() : dock.open();
            }
        } catch(e) {
            console.exception(e);
        }
    }
};


//
// Context menu
//
exports.MenuOptions = {
    label: _("oqs.analyze_with_opquast"),
    contentScript: 'self.on("click", self.postMessage);',
    onMessage: function() {
        try {
            let win = wm.getMostRecentWindow("navigator:browser");
            let dock = DockCache.getDock(win, dock_id);
            if (dock) {
                dock.showAndRun();
            }
        } catch(e){
            console.exception(e);
        }
    }
};
