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

const {mix} = require("sdk/core/heritage");
const _ = require("sdk/l10n").get;
const SandBox = require("sdk/loader/sandbox");
const {readURISync} = require("sdk/net/url");
const self = require("sdk/self");
const {prefs} = require("sdk/simple-prefs");

const testRunner = require("opquast-tests/test-runner");

const CL_ROOT = self.data.url("checklists/");


const checklists = {
    "667-website": {
        name: "Opquast Website",
        langs: ["en", "fr"],
        category: _("oqs.check_quality"),
        sub: _("oqs.sub_quality"),
        default: true
    },
    "11-opquast": {
        name: "Opquast Qualité Web",
        langs: ["en", "fr"],
        category: _("oqs.check_quality"),
        sub: _("oqs.sub_quality")
    },
    "568-firstStep": {
        name: "First Step to WCAG",
        html: 'First Step to <acronym title="Web Content Accessibility Guidelines">WCAG</acronym>',
        langs: ["en", "fr"],
        category: _("oqs.check_a11y"),
        sub: _("oqs.sub_errors_auto")
    },
    "567-secondStep": {
        name: "Second Step to WCAG",
        html: 'Second Step to <acronym title="Web Content Accessibility Guidelines">WCAG</acronym>',
        langs: ["en", "fr"],
        category: _("oqs.check_a11y"),
        sub: _("oqs.sub_risks_auto")
    },
    "9-rgaa": {
        name: "RGAA",
        html: '<acronym title="Référentiel Général d\'Accessibilité pour les Administrations">RGAA</acronym>',
        langs: ["fr-fr"],
        category: _("oqs.check_a11y"),
        sub: _("oqs.sub_fr_ref")
    },
    "597-accessiweb": {
        name: "Accessiweb Liste deployée",
        langs: ["fr"],
        category: _("oqs.check_a11y"),
        sub: _("oqs.sub_fr_label")
    },
    "599-accessiweb": {
        name: "Accessiweb Liste générale",
        langs: ["fr"],
        category: _("oqs.check_a11y"),
        sub: _("oqs.sub_fr_label")
    },
    "601-sgqri": {
        name: "SGQRI",
        html: '<acronym title="Standard du gouvernement du Québec sur les ressources informationnelles">SGQRI</acronym>',
        langs: ["fr-ca"],
        category: _("oqs.check_a11y"),
        sub: _("oqs.sub_qc_ref")
    },
    "478-seo": {
        name: "Opquast SEO",
        langs: ["fr"],
        category: _("oqs.check_others"),
        sub: _("oqs.sub_seo")
    },
    "562-webperfs": {
        name: "Opquast Webperf",
        langs: ["fr"],
        category: _("oqs.check_others"),
        sub: _("oqs.sub_perf")
    },
    "658-opendata": {
        name: "OpenData",
        langs: ["en", "fr"],
        category: _("oqs.check_others"),
        sub: _("oqs.sub_opendata")
    }
};
exports.checklists = checklists;

// Make default checklists if pref is not defined
if (prefs.checklists === undefined) {
    let cl = [];

    for (let i in checklists) {
        if (checklists[i].default) {
            cl.push(i);
        }
    }

    prefs.checklists = cl.join(",");
}


const getChecklistFiles = function() {
    let lang = Cc["@mozilla.org/chrome/chrome-registry;1"]
                .getService(Ci.nsIXULChromeRegistry)
                .getSelectedLocale('global'); // e.g "en-US"
    let cl = prefs.checklists.split(/\s*,\s*/);
    let res = [];
    let langs, uri;

    for each(let l in cl) {
        if (checklists[l] === undefined) {
            continue;
        }
        langs = checklists[l].langs.map(function(v) {
            return v.split("-")[0];
        });

        uri = (
            (checklists[l].rootURI || CL_ROOT)
            + (langs.indexOf(lang) != -1 ? langs[langs.indexOf(lang)] : langs[0])
            + "/" + l + ".json"
        );

        res.push(uri);
    }

    return res;
};



let launchTests = function(domWindow, har, testList) {
    let startTime = new Date();

    // Prepare checklists
    let _checklists = {};
    getChecklistFiles().forEach(function(filename) {
        try {
            let cl = JSON.parse(readURISync(filename));
            for (let k in cl) {
                _checklists[String(k)] = cl[k];
            }
        }
        catch(e) {
            console.error("Unable to load checklist file: " + filename);
            console.exception(e);
        }
    });

    // New sandbox for testRunner
    let sandbox = SandBox.sandbox(null, {
        sandboxPrototype: domWindow,
        wantXrays: false,
        wantComponents: false
    });

    // Get page code
    let plainText = "";
    har.entries.forEach(function(entry) {
        if (plainText !== "") return;
        if (entry._url === domWindow.location.href) {
            plainText = entry.response.content.text || "";
        }
    });

    // Set test list
    testList = Array.isArray(testList) && testList || Object.keys(_checklists);

    // Launch tests
    let runner = testRunner.create({
        sandbox: sandbox,
        har: har,
        plainText: plainText,
        extractObjects: false
    });

    return runner.init()
    .then(function() {
        // Create a fake first request if void
        if (runner.resources.length === 0) {
            runner.resources.push({
                date: domWindow.document.lastModified,
                modified: domWindow.document.lastModified,
                expires: null,
                content_type: domWindow.document.contentType,
                charset: domWindow.document.characterSet,
                size: domWindow.XMLSerializer().serializeToString(domWindow.document).length,
                headers: {},
                uri: domWindow.location.href,
                referrer: "",
                method: "GET",
                status: 200,
                status_text: "200 OK"
            });
        }

        startTime = new Date();
        return runner.run(testList);
    })
    .then(function(results) {
        let datetime = (new Date()).toISOString(),
            timer = Math.round((new Date() - startTime) / 10) / 100,
            _res,
            _allIDs = [],

        // Automated results
        _res = results.filter(function(v) {
            return String(v.id) in _checklists;
        }).map(function(v) {
            v.id = String(v.id);
            v["criterion"] = _checklists[v.id];
            v["details"] = v.details.map(function(d) {
                if (typeof(d.selector) !== "undefined") {
                    return {
                        "selector": d.selector,
                        "text": d.text,
                        "extra": d.extra
                    };
                }
                return d;
            });
            _allIDs.push(v.id);
            return v;
        });

        // Not tested results
        for (var id in _checklists) {
            if (_allIDs.indexOf(id) >= 0) {
                continue;
            }

            _res.push({
                "id": id,
                "result": "nt",
                "results_list": ["nt"],
                "time": 0,
                "comment": "",
                "details": [],
                "criterion": _checklists[id]
            });
        }

        // Format result set
        return {
            "tests": {
                "title": runner.pageInfo.title || "",
                "links": runner.pageInfo.links || [],
                "images": runner.pageInfo.images || [],
                "stats": runner.pageInfo.stats,
                "resources": runner.resources || [],
                "oaa_results": _res,
                "datetime": datetime,
                "timer": timer
            }
        };
    });
};

exports.launchTests = launchTests;
