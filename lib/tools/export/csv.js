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
 *   Mickaël Hoareau <mickael.hoareau@temesis.com>
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
const file = require("sdk/io/file");

const _ = require("sdk/l10n").get;


let showFilePicker = function showFilePicker(siteUrl, aTitle, aMode) {
    let windowMediator = Cc["@mozilla.org/appshell/window-mediator;1"]
        .getService(Ci.nsIWindowMediator);
    let browserWindow = windowMediator.getMostRecentWindow("navigator:browser");

    let nsIFilePicker = Ci.nsIFilePicker;
    let fp = Cc["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
    let filename = siteUrl
        .split("?")[0]
        .replace(/([^a-z0-9-_]+)/g, '_').replace(/_$/, '').replace(/^https?_/, '')
        + ".csv";

    fp.init(browserWindow, aTitle, aMode);
    fp.defaultExtension = ".csv";
    fp.defaultString = filename;
    return new Promise(function(resolve, reject){
        fp.open(function(res) {
            if (res == nsIFilePicker.returnOK || res == nsIFilePicker.returnReplace) {
                resolve(fp.file.path);
            } else {
                reject();
            }
        });

    });
};


const exportCSV = function(siteUrl, results) {
    showFilePicker(siteUrl, 'saveTestCaseAs', Ci.nsIFilePicker.modeSave)
        .then(function(filename) {
            saveToCSV(filename, results);
        });
};
exports.exportCSV = exportCSV;

const saveToCSV = function(filename, results) {
    console.debug('Saving resuls to ' + filename);

    let separator = "\r\n";
    let charset = 'ISO-8859-1';  // Excel bullshit

    let resMap = {
        "c": _("oqs.pass"),
        "nc": _("oqs.fail"),
        "i": _("oqs.cannot_tell"),
        "na": _("oqs.not_applicable"),
        "nt": _("oqs.not_tested")
    };
    let labels = [
        "ID", _("oqs.list"), _("oqs.reference"), _("oqs.label"), _("oqs.changed"), _("oqs.code"),
        _("oqs.result"), _("oqs.comment"), _("oqs.details")
    ];

    let  data = labels.join(";") + ";" + separator + results.map(function(item) {
        return [
            '"' + item.id + '"',
            '"' + item.criterion.checklist.name + '"',
            '"' + item.criterion.name + '"',
            '"' + item.criterion.description + '"',
            '"' + (item.auto === false ? '*' : '') + '"',
            '"' + item.result + '"',
            '"' + resMap[item.result] + '"',
            '"' + item.comment.replace(/"/g, '""') + '"',
            '"' + item.details.map(function(item) {
                if (item.text) {
                    return item.text;
                } else {
                    return item;
                }
            }).join("\n").replace(/"/g, '""').replace(/&lt;/g, "<").replace(/&gt;/g, ">")
            + '"'
        ].join(";");
    }).join(separator);

    let converter = Cc["@mozilla.org/intl/scriptableunicodeconverter"]
                    .createInstance(Ci.nsIScriptableUnicodeConverter);

    converter.charset = charset;
    data = converter.ConvertFromUnicode(data);

    try {
        let fp = file.open(filename, 'wb');
        fp.write(data);
        fp.close();
        console.debug('CSV saved to ' + filename);
    }
    catch(e) {
        console.exception(e);
        throw e;
    }
};
exports.saveToCSV = saveToCSV;
