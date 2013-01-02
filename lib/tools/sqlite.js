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

const {Cc, Ci} = require("chrome");


var row_result = function(statement) {
    let cname,
        data = {};

    for (var i=0; i<statement.columnCount; i++) {
        cname = statement.getColumnName(i);
        data[cname] = statement.row[cname];
    }
    return data;
};


var SQLite = exports.SQLite = function(database) {
    this.connection = null;
    if (database != undefined) {
        this.connect(database);
    }
};


SQLite.prototype.connect = function(database) {
    let fs = Cc["@mozilla.org/file/directory_service;1"].
                getService(Ci.nsIProperties).
                get("ProfD",Ci.nsIFile);

    let storage = Cc["@mozilla.org/storage/service;1"].
                getService(Ci.mozIStorageService);

    fs.append(database);
    this.connection = storage.openDatabase(fs);
};


SQLite.prototype.close = function(callback) {
    let self = this;
    this.connection.asyncClose(function() {
        self.connection = null;
        if (callback !== undefined) {
            callback.call(self);
        }
    });
};


SQLite.prototype._make_statement = function(sql, data) {
    let statement = this.connection.createStatement(sql);
    data = data || null;
    if (typeof(data) == "object") {
        for (var i in data) {
            try {
                statement.params[i] = data[i];
            } catch(e) {
                throw new Error("Invalid statement parameters");
            }
        }
    }

    return statement;
};


SQLite.prototype.execute = function(sql, params) {
    /* Sync execution without result */
    this._make_statement(sql, params).execute();
};


SQLite.prototype.query = function(sql, params) {
    /* Sync query with iterator */
    return new ResultSet(this._make_statement(sql, params));
};


SQLite.prototype.queryOne = function(sql, params) {
    let statement = this._make_statement(sql, params);
    if (statement.executeStep()) {
        return row_result(statement);
    }
}


SQLite.prototype.queryAsync = function(sql, params, success, error) {
    /* Async query */
    if (typeof(params) == "function") {
        error = success;
        success = params;
        params = null;
    }

    let statement = this._make_statement(sql, params);
    let self = this;
    let result = new Array();

    statement.executeAsync({
        handleResult: function(rs) {
            for (var row=rs.getNextRow(); row; row=rs.getNextRow()) {
                let data = {};
                for (var i=0; i<statement.columnCount; i++) {
                    let cname = statement.getColumnName(i);
                    data[cname] = row.getResultByName(cname);
                }
                result.push(data);
            }
        },
        handleError: function(err) {
            if (error) {
                error.call(self, err);
            } else {
                throw new Error(err);
            }
        },
        handleCompletion: function(reason) {
            success.call(self, result, reason);
        }
    });
};


var ResultSet = function(statement) {
    this.statement = statement;
};


ResultSet.prototype.__iterator__ = function() {
    while (this.statement.executeStep()) {
        yield row_result(this.statement);
    }
};
