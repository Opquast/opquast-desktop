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
 * ***** END LICENSE BLOCK ***** */"use strict";

const _ = require("l10n").get;
const {Ci, Cc, Cu} = require("chrome");

const {NetUtil} = Cu.import("resource://gre/modules/NetUtil.jsm");
const {FileUtils} = Cu.import("resource://gre/modules/FileUtils.jsm");

let showFilePicker = function showFilePicker(aWindow, aTitle, aMode, aHandler) {
    let nsIFilePicker = Ci.nsIFilePicker;
    let fp = Cc["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);

    fp.init(aWindow, aTitle, aMode);
    fp.defaultExtension = ".csv";
    fp.defaultString = "opquast.csv";
    let res = fp.show();
    if (res == nsIFilePicker.returnOK || res == nsIFilePicker.returnReplace) {
        return aHandler(fp);
    } else {
        return null;
    }
};

exports.exportCSV = function(aContentWindow, aResults) {
    var results = {
        "c": _("oqs.pass"),
        "nc": _("oqs.fail"),
        "i": _("oqs.cannot_tell"),
        "na": _("oqs.not_applicable")
    };
    let labels = [_("oqs.list"), _("oqs.reference"), _("oqs.label"), _("oqs.result"), _("oqs.comment"), _("oqs.details")];
    let  data = labels.join(";") + ";\n" + aResults.map(function(item) {
        return ['"' + item.criterion.checklist.name + '"', '"' + item.criterion.name + '"', '"' + item.criterion.description + '"', '"' + results[item.result] + '"', '"' + item.comment.replace(/"/g, '""') + '"', '"' + item.details.map(function(item) {
            if (item.text) {
                return item.text;
            } else {
                return item;
            }
        }).join("\n").replace(/"/g, '""').replace(/&lt;/g, "<").replace(/&gt;/g, ">") + '"'].join(";");
    }).join("\n");

    var file = showFilePicker(aContentWindow, "saveTestCaseAs", Ci.nsIFilePicker.modeSave, function(fp) {
        return fp.file;
    });
    var ostream = FileUtils.openSafeFileOutputStream(file);

    var converter = Cc["@mozilla.org/intl/scriptableunicodeconverter"].createInstance(Ci.nsIScriptableUnicodeConverter);
    converter.charset = "UTF-8";
    var istream = converter.convertToInputStream(data);

    NetUtil.asyncCopy(istream, ostream, function(status) {
        if (!Components.isSuccessCode(status)) {
            return;
        }
    });
};

exports.exportEARL = function(aContentWindow, aResults) {
    var results = {
        "c": "pass",
        "nc": "fail",
        "i": "cannotTell",
        "na": "notApplicable"
    },
        out = '<rdf:RDF xmlns="http://www.w3.org/ns/earl#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dct="http://purl.org/dc/dcmitype/" xmlns:doap="http://usefulinc.com/ns/doap#" xmlns:ptr="http://www.w3.org/2009/pointers#">\
            <Assertor>',
        earlNS = new Namespace("http://www.w3.org/ns/earl#"),
        rdfNS = new Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),
        dctNS = new Namespace("http://purl.org/dc/dcmitype/"),
        doapNS = new Namespace("http://usefulinc.com/ns/doap#"),
        ptrNS = new Namespace("http://www.w3.org/2009/pointers#"),
        url = aContentWindow.document.location.href;

    out += '<Software>\
        <doap:name xml:lang="en">Opquast Desktop</doap:name>\
        <doap:description xml:lang="en">Desc</doap:description>\
        <doap:created>2012-08-01</doap:created>\
        <doap:homepage rdf:resource="https://addons.mozilla.org/en/firefox/addon/opquast-desktop/"/>\
        <doap:release><doap:revision>0.3</doap:revision></doap:release>\
        </Software>';
        
    out += aResults.map(function(item){
        /*var _out = item.details.map(function(item){
            if(item.text) {
                return item.text;
            } else {
                return item;
            }
        }).join("").replace(/&lt;/g, "<").replace(/&gt;/g, ">");console.log(_out);console.log("----");*/
        
        return '<asserts>\
            <Assertion>\
            <mode rdf:resource="http://www.w3.org/ns/earl#automatic"/>\
            <rdf:subject rdf:resource="' + url +'"/>\
            <rdf:predicate rdf:resource="http://www.w3.org/ns/earl#' + results[item.result] + '"/>\
            <info rdf:parseType="Literal" xml:lang="en">' + item.comment + '</info>\
            <rdf:object rdf:resource="http://reporting.opquast.com/checklists/' + item.criterion.checklist.id + '/criteria/' + item.criterion.name + '"/>\
            </Assertion>\
            </asserts>';
     }).join("");
    
    out += '</Assertor>\
        <TestSubject rdf:resource="' + url + '">\
        <dct:date>2010-08-14T23:07:35Z</dct:date>\
        </TestSubject>';
    
    /*
    <TestSubject rdf:resource="http://example.org/">
        <dct:date>2010-08-14T23:07:35Z</dct:date>
        <dct:hasPart rdf:resource="http://www.example.org/style.css"/>
        <dct:hasPart rdf:resource="http://www.example.org/image1.png"/>
        <dct:hasPart rdf:resource="http://www.example.org/image2.png"/>
    </TestSubject>
    <TestCase rdf:about="!http://reporting.opquast.com/checklists/11/criteria/500/">
        <dct:title xml:lang="en">Opquast 1</dct:title>
        <dct:description xml:lang="en">Desc</dct:description>
        <dct:isPartOf rdf:resource="!http://reporting.opquast.com/checklists/11/"/>
    </TestCase>
    <TestCase rdf:about="!http://reporting.opquast.com/checklists/11/criteria/501/">
        <dct:title xml:lang="en">Opquast 2</dct:title>
        <dct:description xml:lang="en">Desc</dct:description>
        <dct:isPartOf rdf:resource="!http://reporting.opquast.com/checklists/11/"/>
    </TestCase>
    */

    out += '</rdf:RDF>';

    var oParser = Cc["@mozilla.org/xmlextras/domparser;1"].createInstance(Ci.nsIDOMParser);
    var oDOM = oParser.parseFromString(out, "text/xml");
    var oSerializer = Cc["@mozilla.org/xmlextras/xmlserializer;1"].createInstance(Ci.nsIDOMSerializer);
    var sXML = oSerializer.serializeToString(oDOM);
};
