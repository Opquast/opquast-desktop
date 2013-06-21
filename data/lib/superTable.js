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
/*jshint jquery:true */

(function($) {
    "use strict";

    $.widget("ui.superTable", {
        widgetEventPrefix: "supertable",

        options: {
            visible: null,
            sortable: [],
            filterable: [],

            // Events
            rownew: null,
            sorted: null,
            filtered: null
        },

        _create: function() {
            this._initTable();
        },

        _setOption: function(key, value) {
            $.Widget.prototype._setOption.apply(this, arguments);

            if (key == 'visible') {
                this._setVisible();
            } else if (key == 'sortable') {
                this._setSortable();
            } else if (key == 'filterable') {
                this._setFilterable();
                this._setFilterControls();
            }
        },

        // Table init
        _initTable: function() {
            var _this = this;

            // Add search query value
            this.element.data('stSearch', '');

            // Mark data rows
            $('tbody tr', this.element).each(function(i) {
                var row = $(this);
                var terms = {};

                // Push terms to terms in row
                $('td[headers]', this).each(function() {
                    var _td = $(this);
                    var headers = _td.attr('headers').split(/\s+/);

                    _td.data('stHeaders', headers);
                    $.each(headers, function(i, v) {
                        terms[v] = _td.data('stlabel') || _td.text();
                    });
                });

                row.data('stTerms', terms);

                _this._trigger("rownew", null, {"row": this, "index": i, "init": true});
            });

            // Keep original header content
            this.getHeaders().each(function() {
                $(this).data('stOrigin', $(this).contents().clone());
                _this._formatHeader($(this));
            });

            // Set visible headers
            this._setVisible();

            // Set sortable headers
            this._setSortable();

            // Set filters
            this._setFilterable();
            this._setFilterControls();
        },

        _formatHeader: function(cell) {
            cell.empty().append('<div><span class="stHeader"></span></div>');
            $('>div', cell).css({
                'white-space': 'nowrap'
            });
            $('>div span.stHeader', cell).css({
                'display': 'inline',
                'vertical-align': 'middle'
            }).append(cell.data('stOrigin').clone());
        },

        _setVisible: function() {
            var _this = this;
            if (this.options.visible === null || this.options.visible === undefined) {
                this.options.visible = $.map(this.getHeaders(), function(v) {
                    return v.getAttribute('id');
                });
            }

            this.getHeaders().each(function() {
                // Visible?
                if ($.inArray(this.id, _this.options.visible) == -1) {
                    _this.hideCol(this.id);
                } else {
                    _this.showCol(this.id);
                }
            });
        },

        _setFilterable: function() {
            var _this = this;

            // Reset all filters
            this.resetFilters();

            // Set controls
            this.getHeaders().each(function() {
                $('span.stHeader', this).empty().append($(this).data('stOrigin').clone());

                if ($.inArray(this.id, _this.options.filterable) != -1) {
                    var select = $('<select></select>');
                    select.append($('<option class="optAll">' + $(this).text() + '</option>'));

                    select.change(function(evt) {
                        _this._filterRows();
                    });

                    $('span.stHeader', this).empty().append(select);
                }
            });
        },

        _setSortable: function() {
            var _this = this,
                evt_id = 'click.superTable.sort';

            this.getHeaders().each(function() {
                $(this).css("cursor", "default").off(evt_id);
                $('>div span.ui-icon', this).remove();

                if ($.inArray(this.id, _this.options.sortable) != -1) {
                    $(this)
                    .css("cursor", "pointer")
                    .on(evt_id, {'id': this.id}, function(evt) {
                        if ($.inArray(evt.target.tagName, ['SELECT', 'OPTION']) == -1) {
                            evt.preventDefault();
                            _this.sortCol(evt.data.id);
                        }
                    });
                    $('>div', this).append($('<span class="ui-icon ui-icon-carat-2-n-s"></span>'));
                    $('>div span.ui-icon', this).css({
                        'display': 'inline-block',
                        'vertical-align': 'middle',
                        'margin-left': '5px'
                    });
                }
            });
        },

        // Sort object by keys
        _sortObject: function(o) {
            var sorted = {},
                key, a = [];

            for (key in o) {
                if (o.hasOwnProperty(key)) {
                    a.push(key);
                }
            }

            a.sort();

            for (key = 0; key < a.length; key++) {
                sorted[a[key]] = o[a[key]];
            }
            return sorted;
        },

        _joinObject: function(o, sep) {
            sep = sep || ",";
            var res = [];
            for (var k in o) {
                res.push(o[k]);
            }
            return res.join(sep);
        },

        // Adjust colspan(s)
        _adjustColspan: function(delta) {
            $('tr', this.element).each(function() {
                $('td[colspan], th[colspan]', this).eq(0).each(function() {
                    $(this).attr('colspan', parseInt($(this).attr('colspan'), 10) + delta);
                });
            });
        },

        _filterRows: function() {
            var filters = {};
            $('thead select', this.element).each(function() {
                if($('option.optAll:selected', this).length > 0) {
                    return;
                }
                filters[$(this).parents('th:eq(0)').attr('id')] = this.value;
            });
            this.setFilters(filters, this.element.data('stSearch'));
            this._trigger("filtered");
        },

        _setFilterControls: function() {
            var filters = {},
                query = this.element.data('stSearch'),
                _this = this;

            query = query ? new RegExp(query, "i") : false;

            $('thead select', this.element).each(function() {
                if($('option.optAll:selected', this).length > 0) {
                    return;
                }
                filters[$(this).parents('th:eq(0)').attr('id')] = this.value;
            });

            this.getHeaders().filter(function() {
                return $.inArray(this.id, _this.options.filterable) != -1;
            }).each(function() {
                var f = {},
                    _header = this,
                    items = {};

                $.each(filters, function(k, v) {
                    if (k != _header.id) {
                        f[k] = v;
                    }
                });

                _this.getRows().each(function() {
                    var k = $(this).data('stTerms')[_header.id];
                    if (items[k] === undefined) {
                        items[k] = 0;
                    }

                    // Check search query first
                    if (query && !query.test(_this._joinObject($(this).data('stTerms')))) {
                        return;
                    }

                    // Check filters
                    var founded = 1;
                    for (var i in f) {
                        if ($(this).data('stTerms')[i] != f[i]) {
                            founded = 0;
                            break;
                        }
                        founded = 1;
                    }
                    items[k] += founded;
                });

                items = _this._sortObject(items);

                $('option:gt(0)', _header).remove();
                $.each(items, function(k, v) {
                    var e = $('<option value="' + k + '">' + k + ' (' + v + ')</option>');
                    if (filters[_header.id] == k) {
                        e.attr('selected', 'selected');
                    }

                    $('select', _header).append(e);
                });
            });
        },

        // Get headers
        getHeaders: function() {
            return $('thead th[id]', this.element);
        },

        // Get column by ID
        getColumn: function(id) {
            return $('tbody', this.element).find('td[headers~="' + id + '"]');
        },

        // Get header by ID
        getHeader: function(id) {
            return $('thead th#' + id, this.element);
        },

        // Get all data rows
        getRows: function() {
            return $('tbody tr', this.element).filter(function() {
                return $(this).data('stTerms') !== undefined && $(this).data('stDisabled') !== true;
            });
        },

        findRows: function(index, value) {
            return $('tbody tr', this.element).filter(function() {
                return $(this).data('stTerms') !== undefined && $(this).data('stTerms')[index] == value;
            });
        },

        disableRows: function(rows) {
            $(rows).data('stDisabled', true).hide();

            this.element.on(this.widgetEventPrefix + "rowsdisabled", function(evt) {
                // Reset filters
                this.resetFilters();
                //$('thead select option:first', this.element).prop('selected', true).change();
                this._setFilterControls();
            }.bind(this));

            this._trigger("rowsdisabled", null, {"rows": rows});
        },

        enableRows: function(rows) {
            $(rows).data('stDisabled', false).show();

            this.element.on(this.widgetEventPrefix + "rowsenabled", function(evt) {
                // Reset filters
                this.resetFilters();
                //$('thead select option:first', this.element).prop('selected', true).change();
                this._setFilterControls();
            }.bind(this));

            this._trigger("rowsenabled", null, {"rows": rows});
        },

        // Hide column
        hideCol: function(id) {
            if (this.getHeader(id).is(':visible')) {
                this.getHeader(id).hide();
                this.getColumn(id).hide();
                this._adjustColspan(-1);
            }
        },

        // Show column
        showCol: function(id) {
            if (!this.getHeader(id).is(':visible')) {
                this.getHeader(id).show();
                this.getColumn(id).show();
                this._adjustColspan(+1);
            }
        },

        // Sort column
        sortCol: function(id) {
            var header = this.getHeader(id);
            var dir = header.data('stSortdir');

            dir = (dir === undefined || dir == -1) ? 1 : -1;
            header.data('stSortdir', dir);

            this.getRows().detach().sort(function(a, b) {
                var rowA = $(a).data('stTerms')[id];
                var rowB = $(b).data('stTerms')[id];

                if (parseFloat(rowA) == parseInt(rowA, 10) && !isNaN(rowA) && parseFloat(rowB) == parseInt(rowB, 10) && !isNaN(rowB)) {
                    rowA = parseInt(rowA, 10);
                    rowB = parseInt(rowB, 10);
                }

                return dir < 0 ? rowA < rowB : rowA > rowB;
            }).appendTo($('tbody', this.element));

            // Set sort icon
            $('>div span.ui-icon', header).removeClass().addClass(function() {
                if (dir == 1) {
                    return 'ui-icon ui-icon-carat-1-s';
                }
                return 'ui-icon ui-icon-carat-1-n';
            });

            // Restore other sortable headers
            this.getHeaders().each(function() {
                if (this.id == id) {
                    return;
                }
                $('>div span.ui-icon', this).removeClass().addClass('ui-icon ui-icon-carat-2-n-s');
            });

            this._trigger("sorted", null, {"column": id, "dir": dir});
        },

        // Fitler column
        setFilters: function(filters, query) {
            filters = filters || {};
            query = query ? new RegExp(query, "i") : false;

            var _this = this;

            // No filter, quick way
            if ($.isEmptyObject(filters) && !query) {
                this.getRows().filter(':hidden').show();
                this._setFilterControls();
                return;
            }

            // Apply selected filters
            this.getRows().each(function() {
                var hide_row = false;
                for (var i in filters) {
                    if ($(this).data('stTerms')[i] != filters[i]) {
                        hide_row = true;
                        break;
                    }
                }

                if (!hide_row && query) {
                    hide_row = !query.test(_this._joinObject($(this).data('stTerms')));
                }

                $(this).toggle(!hide_row);
            });

            this._setFilterControls();
        },

        resetFilters: function() {
            this.getHeaders().each(function() {
                var el = $('span.stHeader select option:first', this);
                if (!el.prop('selected')) {
                    el.prop('selected', true).change();
                }
            });
        },

        search: function(query) {
            this.element.data('stSearch', query);
            this._filterRows();
        },

        destroy: function() {
            // In jQuery UI 1.8, you must invoke the destroy method from the base widget
            $.Widget.prototype.destroy.call(this);
            // In jQuery UI 1.9 and above, you would define _destroy instead of destroy and not call the base method
        }
    });
})(jQuery);
