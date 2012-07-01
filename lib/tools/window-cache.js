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

const {Class} = require("heritage");
const {Ci, Cu} = require("chrome");

const {FileUtils} = Cu.import("resource://gre/modules/FileUtils.jsm");
const {Services} =Cu.import("resource://gre/modules/Services.jsm");

//let {SQLite} = require("sqlite");

let WindowCache = exports.WindowCache = Class({
    initialize : function() {
        let    file = FileUtils.getFile("ProfD", ["opquast-desktop.sqlite"]);
        this.mDBConn = Services.storage.openDatabase(file);
        this.mDBConn.executeSimpleSQL("CREATE TABLE IF NOT EXISTS results (url TEXT, data TEXT)");
    },

    dropEntry : function(aUrl) {
        try {
            var statement = this.mDBConn.createStatement("DELETE FROM results WHERE url = :url");
            statement.params.url = String(aUrl);
            statement.execute();
        } catch(e) {
            console.exception(e);
        }
    },

    setEntry : function(aUrl, aData) {
        try {
            this.dropEntry(aUrl);

            var statement = this.mDBConn.createStatement("INSERT INTO results VALUES (:url, :data)");
            statement.params.url = String(aUrl);
            statement.params.data = JSON.stringify(aData);
            statement.execute();
        } catch(e) {
            console.exception(e);
        }
    },

    getEntry : function(aUrl) {
        try {
            var statement = this.mDBConn.createStatement("SELECT * FROM results WHERE url = :url");
            statement.params.url = String(aUrl);
            if (statement.executeStep()) {
                return JSON.parse(statement.row.data);
            } else {
                return null;
            }
        } catch(e) {
            console.exception(e);
        }
    }
});

let Activator = exports.Activator = Class({
    initialize : function() { let
        file = FileUtils.getFile("ProfD", ["opquast-desktop.sqlite"]);
        this.mDBConn = Services.storage.openDatabase(file);
        this.mDBConn.executeSimpleSQL("CREATE TABLE IF NOT EXISTS active (url TEXT)");
    },


    dropEntry : function(aUrl) {
        try {
            var statement = this.mDBConn.createStatement("DELETE FROM active WHERE url = :url");
            statement.params.url = String(aUrl);
            statement.execute();
        } catch(e) {
            console.exception(e);
        }
    },

    setEntry : function(aUrl, aData) {
        try {
            this.dropEntry(aUrl);

            var statement = this.mDBConn.createStatement("INSERT INTO active VALUES (:url)");
            statement.params.url = String(aUrl);
            statement.execute();
        } catch(e) {
            console.exception(e);
        }
    },

    hasEntry : function(aUrl) {
        try {
            var statement = this.mDBConn.createStatement("SELECT * FROM active WHERE url = :url");
            statement.params.url = String(aUrl);
            if (statement.executeStep()) {
                return true;
            } else {
                return false;
            }
        } catch(e) {
            console.exception(e);
        }
    }
});
