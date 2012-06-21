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
    var oTable;

    window.aoColumns = [null, null, null, null, {
        bVisible : false
    }, {
        bVisible : false
    }];

    window.tests = null;

    window.showResults = function(tests) {
        window.tests = tests;
        try {
            function pad(number) {
                return (number < 10 ? '0' : '') + number
            }

            var _date = new Date(tests.datetime), table = $('table'), tbody = $('tbody');
            $('caption').text('analyse du ' + pad(_date.getDate()) + "/" + pad(_date.getMonth() + 1) + "/" + _date.getFullYear() + " à " + _date.toLocaleTimeString() + ' (durée : ' + tests.timer + ' secondes)');
            //$("tbody").empty();

            for each (var result in tests.oaa_results) {
                if (!(result.id in window.checklists)) {
                    continue;
                }

                var criterion = window.checklists[result.id];
                var results = {
                    "c" : "Conforme",
                    "nc" : "Non conforme",
                    "i" : "Indéterminé",
                    "na" : "Non applicable"
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
                    '<td>' + result.comment + '</td>'
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
                    sZeroRecords : "Aucun résultat",
                    sInfo : "Affichage des résultats _START_ à _END_ sur _TOTAL_",
                    sInfoEmpty : "Affichage de 0 résultat",
                    sInfoFiltered : "(filtré de _MAX_ résultats)",
                    sSearch : "Rechercher"
                },
                aoColumns : aoColumns
            })

            oTable.columnFilter({
                sPlaceHolder : "head:before",
                aoColumns : [{
                    type : "select",
                    bRegex : true,
                    values : [{
                        value : '^Conforme',
                        label : 'Conforme'
                    }, {
                        value : '^Non conforme',
                        label : 'Non conforme'
                    }, {
                        value : '^Indéterminé',
                        label : 'Indéterminé'
                    }, {
                        value : '^Non applicable',
                        label : 'Non applicable'
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

            //
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

                aOut.append('<h1>Commentaires</h1><p>' + aData[5] + '</p>');

                if (nodes.length > 0) {
                    aOut.append('<h2>Éléments concernés</h2>').append(aDetails);
                }

                return aOut;
            }

            //
            var nCloneTh = $('<th>Détails</th>');
            var nCloneTd = document.createElement('td');
            nCloneTd.innerHTML = '<img src="img/details_open.png">';
            nCloneTd.className = "center";

            $('#test_result thead tr').each(function() {
                $(this).append(nCloneTh);
            });

            $('#test_result tbody tr').each(function() {
                $(this).append(nCloneTd.cloneNode(true));
            });

            //
            $('#test_result tbody td img').live('click', function() {
                var nTr = this.parentNode.parentNode;
                if (this.src.match('details_close')) {
                    this.src = "img/details_open.png";
                    oTable.fnClose(nTr);
                } else {
                    this.src = "img/details_close.png";
                    oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), 'details');
                }
            });
        } catch(e) {
            console.error(e);
        };
    }
})();
