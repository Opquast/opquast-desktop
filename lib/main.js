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

const contextMenu = require("sdk/context-menu");
const self = require("sdk/self");
const SimplePrefs = require("sdk/simple-prefs");

const {ToolbarButton} = require("tbb/tbb");

const {SplitDock} = require("./app/dock");
const {ButtonOptions, DockOptions, MenuOptions} = require("./app/opquast-dock");
const {debugConf} = require("./tools/debug")
const {TabRequestsLogger} = require("./tools/net-log");

const {prefs} = SimplePrefs;


exports.main = function(aOptions, aCallback) {
    // Debug configuration
    if (aOptions.staticArgs.debug) {
        debugConf["obj"] = console;
    }

    // Init content URIs
    const content = require("./app/content");

    // Some default preferences
    // Note: checklists pref is set in tester.js
    if (aOptions.staticArgs.api) {
        prefs.api_url = aOptions.staticArgs.api;
    } else {
        prefs.api_url = prefs.api_url || 'https://reporting.opquast.com/api/';
    }

    if (prefs.debug === undefined) {
        prefs.debug = false;
    }

    if (prefs.showRefs === undefined) {
        prefs.showRefs = false;
    }

    if (prefs.showThemas === undefined) {
        prefs.showThemas = false;
    }

    if (prefs.panelHeight === undefined) {
        prefs.panelHeight = 300;
    }

    SimplePrefs.on("full_preferences", function() {
        content.openPreferences();
    });

    // Requests logger
    TabRequestsLogger();

    // Dock
    SplitDock(DockOptions);

    // Toolbar Button
    let button = ToolbarButton(ButtonOptions);

    // Context menu
    contextMenu.Item(MenuOptions);

    // Open about page on install
    if (self.loadReason == "install") {
        // Install button on first run
        button.moveTo({
            toolbarID: "nav-bar",
            forceMove: false
        });

        // Show about page
        content.openAbout();
    } else if(self.loadReason == "upgrade") {
        // TODO: show a changelog
    }
};


exports.onUnload = function(aReason) {
};
