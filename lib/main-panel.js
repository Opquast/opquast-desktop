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

const {Ci, Cc, Cr} = require("chrome");
const self = require("self");
const {listen} = require("tools/listen");
const opquastPanel = require("opquast-panel");

const wm = Cc["@mozilla.org/appshell/window-mediator;1"].getService(Ci.nsIWindowMediator);

const panel_id = "opquast-desktop-panel";
const button_id = "opquast-desktop-button";


let getSelectedTabWindow = function(aWindow) {
    return aWindow.gBrowser.getBrowserForTab(aWindow.gBrowser.selectedTab)
            .contentWindow.wrappedJSObject;
};


let panelCache = function() {
    this.hosts = [];
    this.pages = {};
};
panelCache.prototype = {
    hasHost: function(aHost) {
        return this.hosts.indexOf(aHost) != -1;
    },
    addHost: function(aHost) {
        if (aHost && !this.hasHost(aHost)) {
            this.hosts.push(aHost);
        }
    },
    removeHost: function(aHost) {
        let i = this.hosts.indexOf(aHost);
        if (i != -1) {
            this.hosts.splice(i, 1);
        }
    },
    hasPage: function(aURL) {
        return (aURL in this.pages);
    },
    addPage: function(aURL, main_frame) {
        this.pages[aURL] = main_frame;
    },
    removePage: function(aURL) {
        if (this.hasPage(aURL)) {
            delete(this.pages[aURL]);
        }
    }
};

const cache = exports.cache = new panelCache();


let onTabActivity = function(aType, aPanel, aEvent) {
    // Event listener on tab change and document load to show or hide
    // panel.
    if (aPanel.window.location != "chrome://browser/content/browser.xul") {
        return;
    }

    let win;
    if (aType == "tabSelect") {
        win = aPanel.window.gBrowser.getBrowserForTab(aEvent.target).contentWindow.wrappedJSObject;
    } else {
        win = aEvent.originalTarget.defaultView.wrappedJSObject;
    }

    if (win.frameElement !== null) {
        return;
    }

    if (cache.hasHost(win.document.location.hostname)) {
        aPanel.show();
    } else {
        aPanel.hide();
    }
};

let tabListener = {
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
            win._split_panels[panel_id].hide();
        } catch(e) {}
    }
};

let tabMonitor = function(aPanel) {
    let tabSelect = onTabActivity.bind(null, "tabSelect", aPanel);
    let documentLoad = onTabActivity.bind(null, "documentLoad", aPanel);

    listen(aPanel.window, aPanel.window.gBrowser.tabContainer, "TabSelect", tabSelect, false);
    listen(aPanel.window, aPanel.window, "DOMContentLoaded", documentLoad, false);

    aPanel.window.gBrowser.addProgressListener(tabListener, Ci.nsIWebProgress.NOTIFY_LOCATION);
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
        cache.addHost(win.document.location.hostname);
    },
    onClose: function() {
        let win = getSelectedTabWindow(this.window);
        cache.removeHost(win.document.location.hostname);
    },
    onShow: function() {
        opquastPanel.erasePanel.call(this);
        opquastPanel.showPanel.call(this, getSelectedTabWindow(this.window));
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
