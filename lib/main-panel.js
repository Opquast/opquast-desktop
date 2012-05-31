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

const {Ci, Cc} = require("chrome");
const self = require("self");

const opquastPanel = require("opquast-panel");

const wm = Cc["@mozilla.org/appshell/window-mediator;1"].getService(Ci.nsIWindowMediator);

const panel_id = "opquast-desktop-panel";
const button_id = "opquast-desktop-button";


let getSelectedTabWindow = function(aWindow) {
    return aWindow.gBrowser.getBrowserForTab(aWindow.gBrowser.selectedTab)
            .contentWindow.wrappedJSObject;
};


let panelActivator = function() {
    this.entries = [];
};
panelActivator.prototype = {
    getKey: function(aLocation) {
        return aLocation.href;
    },
    hasEntry: function(aLocation) {
        return this.entries.indexOf(this.getKey(aLocation)) != -1;
    },
    addEntry: function(aLocation) {
        let key = this.getKey(aLocation);
        if (key && !this.hasEntry(aLocation)) {
            this.entries.push(key);
        }
    },
    removeEntry: function(aLocation) {
        let index = this.entries.indexOf(this.getKey(aLocation));
        if (index != -1) {
            this.entries.splice(index, 1);
        }
    }
};

const activator = new panelActivator();

let tabListener = function(aPanel) {
    this.panel = aPanel;
};
tabListener.prototype = {
    // Hide panel on location change
    QueryInterface: function(aIID) {
        if (aIID.equals(Ci.nsIWebProgressListener) ||
            aIID.equals(Ci.nsISupportsWeakReference) ||
            aIID.equals(Ci.nsISupports))
                return this;
        throw Components.results.NS_NOINTERFACE;
    },

    onLocationChange: function(aProgress, aRequest, aURI) {
        let win = wm.getMostRecentWindow("navigator:browser");
        try {
            let DOMWindow = aProgress.DOMWindow;
            let location = DOMWindow.location;
            let panel = win._split_panels[panel_id];

            if (DOMWindow.location.protocol == "about:") {
                // Don't show panel for all "about:" pages
                panel.hide();
                return;
            }

            let panelWorker = function(loading) {
                let cached_doc;

                if (!loading) { // evt is present if we are loading the page
                    cached_doc = opquastPanel.PanelCache.getEntry(DOMWindow) || null;
                }

                panel.show(cached_doc);
            };

            if (!activator.hasEntry(location)) {
                // If location has no entry, hide panel (it will erase it)
                panel.hide();
            } else {
                // If location has an entry, show panel
                opquastPanel.erasePanel.call(panel);
                panel.is_open = false; // Needed hack to call panel.show() in panelWorker

                if (aProgress.isLoadingDocument) {
                    // Document is reloading and panel is open
                    let _worker = panelWorker.bind(null, true);
                    aProgress.DOMWindow.addEventListener("load", function() {
                        require("timers").setTimeout(_worker, 1000);
                    }, false);
                } else {
                    panelWorker();
                }
            }
        } catch(e) { console.exception(e); }
    }
};


let tabMonitor = function(aPanel) {
    let listener = new tabListener(aPanel);
    aPanel.window.gBrowser.addProgressListener(listener, Ci.nsIWebProgress.NOTIFY_LOCATION);
};


//
// Panel and Toolbar button creation
//
exports.panelOptions = {
    id: panel_id,
    stylesheet: self.data.url("panel.css"),
    onCreate: function() {
        tabMonitor(this);

        opquastPanel.createPanel.call(this);
    },
    onDestroy: function() {
        this.window.gBrowser.removeProgressListener(tabListener);
    },
    onOpen: function() {
        let win = getSelectedTabWindow(this.window);
        activator.addEntry(win.location);
    },
    onClose: function() {
        let win = getSelectedTabWindow(this.window);
        activator.removeEntry(win.location);
    },
    onShow: function(aCache) {
        opquastPanel.erasePanel.call(this);
        opquastPanel.showPanel.call(this, getSelectedTabWindow(this.window), aCache);
    },
    onHide: function() {
        opquastPanel.erasePanel.call(this);
    }
};

exports.buttonOptions = {
    id: button_id,
    label: "Opquast Desktop",
    image: self.data.url("toolbar-button.png"),
    onCommand: function(aWindow) {
        aWindow._split_panels[panel_id].toggle();
    }
};
