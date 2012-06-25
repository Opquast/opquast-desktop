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

(function() {
    window.tests = null;

    window.showResults = function(tests, prefs) {
        window.tests = tests;
        var column_def = [null, null, null, null, null, null, {bSortable: false}];

        // Setting some column visibilty
        column_def[2] = prefs.showRefs ? null : {bVisible: false};
        column_def[4] = prefs.showTimes ? null : {bVisible: false};
        column_def[5] = prefs.showDetails ? null : {bVisible: false};

        // Localize column titles
        $("#test_result thead th:eq(0)").text(_("oqs.all_results"));
        $("#test_result thead th:eq(1)").text(_("oqs.all_checklists"));
        $("#test_result thead th:eq(2)").text(_("oqs.references"));
        $("#test_result thead th:eq(3)").text(_("oqs.test_label"));
        $("#test_result thead th:eq(4)").text(_("oqs.test_duration"));
        $("#test_result thead th:eq(5)").text(_("oqs.details"));

        try {
            var _date = new Date(tests.datetime), table = $('table'), tbody = $('tbody');
            $("#test_result caption").text(_("oqs.analyze_info",
                _date.toLocaleDateString(), _date.toLocaleTimeString(), tests.timer
            ));

            for each (var result in tests.oaa_results) {
                if (!(result.id in window.checklists)) {
                    continue;
                }

                var criterion = window.checklists[result.id];
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
                    '<td><img src="img/' + result.result + '.png" alt="' + results[result.result] + '" /><span style="display:none">' + results[result.result] + '</span></td>',
                    '<td>' + criterion.checklist.name + '</td>',
                    '<td>' + criterion.name + '</td>',
                    '<td>' + criterion.description + '</td>',
                    '<td>' + result.time + '</td>',
                    '<td>' + result.comment + '</td>',
                    '<td></td>'
                );
                // @formatter:on

                tr.data("details", result.details);
            }

            var values = [];

            for each (var checklist in checklists) {
                var value = checklist.checklist.name;
                if ($.inArray(value, values) == -1) {
                    values.push(value);
                }
            }

            values.sort(function(a, b) {
                var a = a.toLowerCase();
                var b = b.toLowerCase();
                return ((a < b) ? -1 : ((a > b) ? 1 : 0));
            });

            oTable = table.dataTable({
                bPaginate : false,
                bDestroy : true,
                sDom : "lrtip",
                oLanguage : {
                    sZeroRecords : _("oqs.no_result"),
                    sInfo : _("oqs.display_info"),
                    sInfoEmpty : _("oqs.display_empty"),
                    sInfoFiltered : _("oqs.display_filtered"),
                    sSearch : _("oqs.search")
                },
                aoColumns : column_def
            })

            oTable.columnFilter({
                sPlaceHolder : "head:before",
                aoColumns : [{
                    type : "select",
                    bRegex : true,
                    values : [{
                        value : '^' + _("oqs.pass"),
                        label : _("oqs.pass")
                    }, {
                        value : '^' + _("oqs.fail"),
                        label : _("oqs.fail")
                    }, {
                        value : '^' + _("oqs.cannot_tell"),
                        label : _("oqs.cannot_tell")
                    }, {
                        value : '^' + _("oqs.not_applicable"),
                        label : _("oqs.not_applicable")
                    }]
                }, {
                    type : "select",
                    values : values
                }, null, null, null, null, null]
            });

            // bug : filtering trigger sorting
            $("select").click(function(event) {
                event.stopPropagation();
                return true;
            });


            function fnFormatDetails(oTable, nTr) {
                var aData = oTable.fnGetData(nTr), aOut = $('<div><div>'), aDetails = $('<ul></ul>'), nodes = $(nTr).data("details");

                for each (var node in nodes) {
                    var a;

                    if(node.path) {
                        a = $('<a href="#">' + node.text + '</a>');
                        a.get(0).node_path = node.path;
                        a.click(function(evt) {
                            evt.preventDefault();
                            _inspectElement(this.node_path);
                        });
                    } else {
                        a = $('<a>' + node + '</a>');
                    }
                    aDetails.append($('<li></li>').append(a));
                };

                aOut.append('<h1>' + _("oqs.comment") + '</h1><p>' + aData[5] + '</p>');

                if (nodes.length > 0) {
                    aOut.append('<h2>' + _("oqs.targeted_elements") + '</h2>').append(aDetails);
                }

                return aOut;
            }

            $('#test_result tbody tr td:last-child').each(function() {
                var img = $('<img src="img/details_open.png" alt="" />');
                img.addClass("center");

                img.click(function() {
                    var nTr = this.parentNode.parentNode;
                    if (this.src.match('details_close')) {
                       this.src = "img/details_open.png";
                       oTable.fnClose(nTr);
                    } else {
                       this.src = "img/details_close.png";
                       oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), 'details');
                    }
                });
                $(this).append(img);
            });
        } catch(e) {
            console.error(e);
        };
    }
})();
