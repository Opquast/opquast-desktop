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

const {Cc, Ci, Cu} = require("chrome");
const {PageMod} = require("sdk/page-mod");
const {prefs} = require("sdk/simple-prefs");
const self = require("sdk/self");
const tabs = require("sdk/tabs");

const testRunner = require("opquast-tests/test-runner");

const {checklists} = require("./tester");


const openAbout = exports.openAbout = function() {
    tabs.open(self.data.url('content/about.html'));
};

const openChangelog = exports.openChangelog = function() {
    tabs.open(self.data.url('content/changelog.html'));
};

const openPreferences = exports.openPreferences = function() {
    tabs.open(self.data.url('content/preferences.html'));
};


// About pageMod
PageMod({
    include: self.data.url('content/about.html'),
    contentScriptWhen: "ready",
    contentScriptFile: [
        testRunner.dataRoot + "/lib/jquery-1.9.1.min.js",
        self.data.url('lib/doT.js'),
        self.data.url('content/about.js')
    ],
    contentScriptOptions: {
        "version": self.version,
        "platform": require("sdk/system").platform
    },
    onAttach: function(worker) {
        let lang = Cc["@mozilla.org/chrome/chrome-registry;1"]
                    .getService(Ci.nsIXULChromeRegistry)
                    .getSelectedLocale('global'); // e.g "en-US"

        lang = (lang == "fr") ? "fr" : "en";
        let template = self.data.load("content/templates/about-" + lang + ".tpl");
        worker.port.emit("attached", template, lang);
    }
});


// Preferences pageMod
PageMod({
    include: self.data.url('content/preferences.html'),
    contentScriptWhen: "ready",
    contentScriptFile: [
        testRunner.dataRoot + "/lib/jquery-1.9.1.min.js",
        self.data.url('lib/doT.js'),
        self.data.url('content/preferences.js')
    ],
    contentScriptOptions: {
        "locales": require("@l10n/data").hash,
        "prefs": prefs,
        "checklists": checklists,
        "template": self.data.load("content/templates/preferences.tpl")
    },
    onAttach: function(worker) {
        let lang = Cc["@mozilla.org/chrome/chrome-registry;1"]
                    .getService(Ci.nsIXULChromeRegistry)
                    .getSelectedLocale('global'); // e.g "en-US"
        lang = (lang == "fr") ? "fr" : "en";
        worker.port.emit("attached", lang);
        worker.port.on("setPref", function(name, value) {
            prefs[name] = value;
        });
    }
});
