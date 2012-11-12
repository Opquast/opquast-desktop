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

var table;

(function($) {
    window.tests = null;

    window.showResults = function(tests, prefs) {
        window.tests = tests;

        // Localize column titles
        $("#test_result thead th:eq(0)").text(_("oqs.results"));
        $("#test_result thead th:eq(1)").text(_("oqs.checklists"));
        $("#test_result thead th:eq(2)").text(_("oqs.references"));
        $("#test_result thead th:eq(3)").text(_("oqs.themas"));
        $("#test_result thead th:eq(4)").text(_("oqs.test_label"));
        $("#test_result thead th:eq(5)").text(_("oqs.test_duration"));

        try {
            var _date = new Date(tests.datetime), tbody = $('tbody');
            table = $('table');

            window._showInfo(_("oqs.analyze_info",
                _date.toLocaleFormat(_("oqs.date_format")), _date.toLocaleTimeString(), Math.round(tests.timer*10)/10
            ));

            for each (var result in tests.oaa_results) {
                var results = {
                    "c" : _("oqs.pass"),
                    "nc" : _("oqs.fail"),
                    "i" : _("oqs.cannot_tell"),
                    "na" : _("oqs.not_applicable")
                };

                var tr = $('<tr></tr>');
                tbody.append(tr);

                // @formatter:off
                tr.append(
                    $("<td></td>")
                        .attr("headers", "hResult")
                        .append(
                            $("<img/>")
                                .attr("src", "img/" + result.result + ".png")
                                .attr("alt", results[result.result]),
                            $("<span></span>")
                                .attr("style", "display:none").text(results[result.result])
                        ),
                    $("<td></td>")
                        .attr("headers", "hChecklist")
                        .text(result.criterion.checklist.name),
                    $("<td></td>")
                        .attr("headers", "hRef")
                        .text(result.criterion.name),
                    $("<td></td>")
                        .attr("headers", "hThema")
                        .text($.trim(result.criterion.thema)),
                    $("<td></td>")
                        .attr("headers", "hLabel")
                        .text(result.criterion.description),
                    $("<td></td>")
                        .attr("headers", "hDuration")
                        .text(result.time)
                );
                // @formatter:on

                tr.data("test_id", result.id);
                tr.data("details", result.details);
                tr.data("comment", result.comment);
                tr.data("is_open", false);
            }

            table.superTable({
                visible: ["hResult", "hChecklist", "hRef", "hThema", "hLabel", "hDuration"].filter(function(element){
                    if(element == "hRef" && !prefs.showRefs) {
                        return false;
                    } else if(element == "hThema" && !prefs.showThemas) {
                        return false;
                    } else if(element == "hDuration" && !prefs.showTimes) {
                        return false;
                    }
                    return true;
                }),
                sortable: ["hResult", "hChecklist", "hRef", "hThema"],
                filterable: ["hResult", "hChecklist", "hThema"]
            });
        } catch(e) {
            console.error(e);
        };
    };
})(jQuery);
