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

const {Cc, Ci, Cu} = require("chrome");
const self = require("self");
const {mix} = require("heritage");

const TESTS_ROOT = "tests/";

let testFiles = [
    '../lib/jquery.js',
    'init.js',
    'events.js',
    'extractor.js',
    'cssParser.js',
    'lookup.js',
    "validator.js",
    "tests.js",
    "oqs2.0.js"
];

let rulesFiles = [
    "rules.json",
    "rulesets.json",
    "checklists.json"
]

let launchTests = exports.launchTests = function(aWindow, aRequests) {
    let sandbox = new Cu.Sandbox(Cc["@mozilla.org/systemprincipal;1"].createInstance(Ci.nsIPrincipal));

    sandbox.window = aWindow;

    for each(let filename in rulesFiles) {
        data = self.data.load(TESTS_ROOT + filename);
        sandbox[filename.split(".")[0]] = JSON.parse(data);
    }

    sandbox.__proto__ = sandbox.window;
    sandbox.console = console;
    sandbox.sidecar = {
        'resources': aRequests
    };

    let data,
        _res,
        result = {};

    for each(let filename in testFiles) {
        data = self.data.load(TESTS_ROOT + filename);
        _res = Cu.evalInSandbox(data, sandbox);
        if (typeof(_res) == "object") {
            result = mix(result, _res);
        }
    }

    let cl_ids = Object.keys(sandbox.checklists);
    result["oaa_results"] = result["oaa_results"].filter(function(element){
        return cl_ids.indexOf(element.id) != -1;
    }).map(function(element){
        element["criterion"] = sandbox.checklists[element.id];
        return element;
    });

    return [result, sandbox.checklists];
};
