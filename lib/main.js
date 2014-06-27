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

const {ButtonOptions, CtxMenuOptions, DockOptions, HotkeyOptions, MenuOptions, updateActionButtonn} = require("./app/opquast-dock");
let win_utils = require("sdk/window/utils");

var DesktopButton = null;
var DesktopHotkey = null;
var DesktopMenu = null;

exports.main = function(aOptions, aCallback) {
    const SimplePrefs = require("sdk/simple-prefs");
    const {prefs} = SimplePrefs;

    // Log configuration
    if (aOptions.staticArgs.logLevel) {
        prefs['sdk.console.logLevel'] = aOptions.staticArgs.logLevel;
        if (aOptions.staticArgs.logLevel == 'debug') {
            prefs['debug'] = true;
        }
    }

    const contextMenu = require("sdk/context-menu");
    const {Hotkey} = require("sdk/hotkeys");
    const self = require("sdk/self");
    const { ActionButton } = require("sdk/ui/button/action");

    const {SplitDock} = require("./app/dock");
    const {Menuitem} = require("./tools/menu-item");
    const {TabRequestsLogger} = require("./tools/request-cache");

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
    DesktopButton = ActionButton(ButtonOptions);

    // Menu
    Menuitem(MenuOptions);

    // Hotkey
    DesktopHotkey = Hotkey(HotkeyOptions);

    // Context menu
    DesktopMenu = contextMenu.Item(CtxMenuOptions);

    // Open about page on install
    if (self.loadReason == "install") {
        // Show about page
        content.openAbout();

    } else if(self.loadReason == "upgrade") {
        // TODO: show a changelog
    }
    // Prepare API
    require("./api");

    // Opquast Desktop is ready
    require("sdk/system/events").emit(self.id + "-ready", {});
};


exports.onUnload = function(aReason) {
    const {RemoveTabRequestsLogger} = require("./tools/request-cache");

    // Open about page on install
    if (aReason == "upgrade" || aReason == "downgrade") {
        //for each(let wd in win_utils.windows()) {
        console.debug('Removing listeners on button');
        DesktopButton.removeListener();
        DesktopButton.destroy();
        DesktopHotkey.destroy();
        DesktopMenu.destroy();
        RemoveTabRequestsLogger();
        //}
    }
};
