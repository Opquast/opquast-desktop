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
/*jshint globalstrict:true, jquery:true */
/*global doT, self */

"use strict";

(function($) {
    function showSaved() {
        $('#pref_saved').stop().show();
        setTimeout(function() {
            $('#pref_saved').fadeOut(500);
        }, 1000);
    }

    $('head title').text(self.options.locales['oqs.preferences_title']);

    var cl_prefs = self.options.prefs.checklists.split(/\s*,\s*/);
    var checklists = self.options.checklists;
    var cl_sorted = {};
    for (var i in checklists) {
        checklists[i].selected = cl_prefs.indexOf(i) != -1;
        checklists[i].langs = checklists[i].langs.map(function(l) {
            return l.split('-')[0];
        });
        if (cl_sorted[checklists[i].category] === undefined) {
            cl_sorted[checklists[i].category] = [];
        }
        cl_sorted[checklists[i].category].push([i, checklists[i]]);
    }

    var tpl = doT.compile(self.options.template)({
        'locales': self.options.locales,
        'prefs': self.options.prefs,
        'checklists': cl_sorted
    });

    $('body').html(tpl);

    $('#prefgen input').change(function() {
        self.port.emit("setPref", this.value, this.checked);
        showSaved();
    });

    $('#prefcl input').change(function() {
        var values = [];
        $('#prefcl input:checked').each(function() {
            values.push(this.value);
        });
        self.port.emit("setPref", "checklists", values.join(","));
        showSaved();
    });
})(jQuery);
