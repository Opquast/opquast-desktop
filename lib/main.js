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

const self = require("self");

const contextMenu = require("context-menu");
const tabs = require("tabs");
const {prefs} = require("simple-prefs");

const {SplitDock} = require("app/dock");
const {ButtonOptions, DockOptions, MenuOptions} = require("app/opquast-dock");
const {configDebug} = require("tools/debug");
const {TabRequestsLogger} = require("tools/net-log");
const {ToolbarButton} = require("toolbarbutton/toolbarbutton");

exports.main = function(aOptions, aCallback) {
    // Debug configuration
    if (aOptions.staticArgs.debug) {
        require("tools/debug").debugConf["func"] = console.debug;
    }

    // Debug configuration
    if (aOptions.staticArgs.local) {
        require("tools/local").localConf["host"] = aOptions.staticArgs.local.host;
        require("tools/local").localConf["domain"] = aOptions.staticArgs.local.domain;
        require("tools/local").localConf["cookie"] = aOptions.staticArgs.local.cookie;
    }

    // Requests logger
    TabRequestsLogger();

    // Dock
    SplitDock(DockOptions);

    // Toolbar Button
    ToolbarButton(ButtonOptions);

    // Context menu
    contextMenu.Item(MenuOptions);

    // Open about page on install
    if (self.loadReason == "install") {
        tabs.open(self.data.url("pages/about.html"));

        // l10n
        let lang = require("preferences-service").get("general.useragent.locale").toLowerCase();
        if (lang.split("-")[0] == "fr") {
            prefs["use11-opquastFr"] = true;
            prefs["use478-seoFr"] = true;
            prefs["use562-webperfsFr"] = true;
            prefs["use568-firstStepFr"] = true;
            prefs["use567-secondStepFr"] = true;
            prefs["use597-accessiwebFr"] = true;
            prefs["use599-accessiwebFr"] = true;

            if(lang == "fr-fr") {
                prefs["use9-rgaaFr"] = true;
            } else if(lang == "fr-ca") {
                prefs["use601-sgqriFr"] = true;
            }
        } else {
            prefs["use11-opquastEn"] = true;
            prefs["use568-firstStepEn"] = true;
            prefs["use567-secondStepEn"] = true;
        }
    }/* else if(self.loadReason == "upgrade") {
        tabs.open(self.data.url("pages/changelog.html"));
    }*/
};

exports.onUnload = function(aReason) {
};
