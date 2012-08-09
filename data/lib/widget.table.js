( function($) {"use strict";
    $.widget("ui.superTable", {
        options: {
            visible: [],
            sortable: [],
            filterable: []
        },

        _activeFilters: {},

        _activeSearch: "",

        _rowCount: {},
        
        _create: function() {
            var self = this;

            // visibility
            $("th, tbody td:not([colspan])", this.element).each(function() {
                for (var item in self.options.visible) {
                    if (this.id == self.options.visible[item] || ($(this).attr("headers") && $(this).attr("headers") == self.options.visible[item])) {
                        $(this).show();
                        break;
                    }
                    $(this).hide();
                }
            });
            $("tfoot").attr("colspan", $("thead th:visible").size());

            // sort
            $("th", this.element).each(function() {
                var id = this.id;

                $(this).wrapInner('<div><span class="text"></span></div>');

                if ($.inArray(this.id, self.options.sortable) != -1) {
                    var div = $("div", this);

                    div.append($('<span class="ui-icon ui-icon-carat-2-n-s" style="float: right;"></span>'));

                    div.mouseover(function() {
                        $(this).css("cursor", "pointer");
                    }).click(function() {
                        self._sortRows(id, $("span.ui-icon", div).hasClass("ui-icon-carat-1-n"));
                    });
                }
            });

            // filter
            for (var item in self.options.filterable) {
                self._activeFilters[self.options.filterable[item]] = "";
                self._rowCount[self.options.filterable[item]] = {};
            }

            $("th", this.element).each(function() {
                var id = this.id, filters = [];

                if ($.inArray(this.id, self.options.filterable) != -1) {
                    $("tbody td[headers=" + id + "]", self.element).each(function() {
                        var text = $(this).text();

                        if ($.inArray(text, filters) == -1) {
                            filters.push(text);
                            self._rowCount[id][text] = 1;
                        } else {
                            self._rowCount[id][text] += 1;
                        }
                    });

                    var select = $('<select style="float: left;"></select>');
                    select.append($('<option class="optAll">' + $("div", this).text() + "</option>").click(function(evt) {
                        self._activeFilters[id] = "";
                        self._filterRows();
                        evt.stopPropagation();
                    }));
                    filters.sort().map(function(text) {
                        select.append($("<option>" + text + "</option>").click(function() {
                            self._activeFilters[id] = text;
                            self._filterRows();
                        }));
                    });
                    $("div span.text", this).replaceWith(select);
                    $("div", this).css("min-width", String(parseInt(select.css("width")) + parseInt($("div span", this).css("width")) + 30) + "px");
                }
            });

            // details
            $("tbody tr").each(function() {
                var aOut = $('<tr class="details"><td colspan="1"></td></tr>'),
                    aDetails = $('<ul></ul>'), 
                    aFeedback = $('<a href="#">' + _("oqs.report_test_problem") + '</a>'), 
                    nodes = $(this).data("details");

                for each (var node in nodes) {
                    var a;

                    if (node.path) {
                        a = $('<a href="#">' + node.text + '</a>');
                        a.get(0).node_path = node.path;
                        a.click(function(evt) {
                            evt.preventDefault();
                            _inspectElement(this.node_path);
                        });
                    } else {
                        a = $('<pre>' + node + '</pre>');
                    }
                    aDetails.append($('<li></li>').append(a));
                };

                $("td", aOut).append('<h2>' + _("oqs.comment") + '</h2><p>' + $(this).data("comment") + '</p>');

                if (nodes.length > 0) {
                    $("td", aOut).append('<h2>' + _("oqs.targeted_elements") + '</h2>').append(aDetails);
                }

                aFeedback.click(function(evt) {
                    evt.preventDefault();
                    _testFeedback({
                        test_id: $(self).data("test_id"),
                        test_name: $("td", self).eq(2).text(),
                        checklist: $("td", self).eq(1).text()
                    });
                });
                $("td", aOut).append('<h2>' + _("oqs.feedback") + "</h2>");
                $("td", aOut).append($('<p></p>').append(aFeedback));
                
                var span = $('<span class="ui-icon ui-icon-circle-triangle-e"></span>').click(function() {
                    if($(this).hasClass("ui-icon-circle-triangle-e")) {
                        var _self = self, colspan = $("thead th:visible").size();
                        $(this).removeClass("ui-icon-circle-triangle-e").addClass("ui-icon-circle-triangle-s");
                        $("td[colspan]", aOut).attr("colspan", colspan);
                        $(this).parent("td").parent("tr").after(aOut);
                    } else {
                        $(this).removeClass("ui-icon-circle-triangle-s").addClass("ui-icon-circle-triangle-e");
                        $(this).parent("td").parent("tr").next("tr.details").remove();                                                   
                    }
                });
                $('td[headers="hResult"]', this).prepend(span);
            });
            
            //
            this._refreshCounts();
            this._refreshColours();
        },

        _setOption: function(key, value) {
            switch(key) {
                case "filter":
                    break;
                case "visible":
                    $("th, tbody td:not([colspan])", this.element).each(function() {
                        for (var item in value) {
                            if (this.id == value[item] || ($(this).attr("headers") && $(this).attr("headers") == value[item])) {
                                $(this).show();
                                break;
                            }
                            $(this).hide();
                        }
                    });
                    $("tr:visible span.ui-icon-circle-triangle-s").click().click();
                    $("tfoot").attr("colspan", $("thead th:visible").size());
            }

            // In jQuery UI 1.8, you have to manually invoke the _setOption method from the base widget
            $.Widget.prototype._setOption.apply(this, arguments);
            // In jQuery UI 1.9 and above, you use the _super method instead
            //this._super("_setOption", key, value);
        },

        _sortRows: function(header, order) {
            $("tr.details").remove();
            
            $("tbody tr:not(.details)", this.element).detach().sort(function(a, b) {
                var rowA = $("td[headers=" + header + "]", a).text();
                var rowB = $("td[headers=" + header + "]", b).text();

                if (parseFloat(rowA) == parseInt(rowA) && !isNaN(rowA) && parseFloat(rowB) == parseInt(rowB) && !isNaN(rowB)) {
                    rowA = parseInt(rowA);
                    rowB = parseInt(rowB);
                }
                
                return order ? rowA < rowB : rowA > rowB;
            }).appendTo(this.element.find("tbody"));

            $("th", this.element).each(function() {
                var span = $("div span.ui-icon", $(this));
                span.removeClass("ui-icon-carat-1-n ui-icon-carat-1-s ui-icon-carat-2-n-s");

                if (this.id == header) {
                    if (order) {
                        span.addClass("ui-icon ui-icon-carat-1-s");
                    } else {
                        span.addClass("ui-icon ui-icon-carat-1-n");
                    }
                } else {
                    span.addClass("ui-icon-carat-2-n-s");
                }
            });
            
            $("td.sorted").removeClass("sorted");
            $("td[headers=" + header + "]").addClass("sorted");
            $("span.ui-icon-circle-triangle-s").click().click();
            
            this._refreshColours();
        },

        _filterRows: function() {
            var self = this;
            
            $("tr.details").remove();

            Object.keys(self._rowCount).forEach(function(element) {
                Object.keys(self._rowCount[element]).forEach(function(subElement) {
                    self._rowCount[element][subElement] = 0;
                });
            });

            $("tbody tr:not(.details)", this.element).each(function() {
                var tr = $(this), bFiltered = false, bMatch = false;

                $("td", this).each(function() {
                    var text = $(this).text(), id = $(this).attr("headers");

                    if ($.inArray(id, Object.keys(self._activeFilters)) != -1 && $.inArray(self._activeFilters[id], ["", $(this).text()]) == -1) {
                        bFiltered = true;
                    } else if (!bFiltered) {
                        if (self._activeSearch == "" || (self._activeSearch != "" && new RegExp(self._activeSearch, "i").test($(this).text()) == true)) {
                            bMatch = true;
                        } else if (!bFiltered && !bMatch && self._activeSearch != "" && new RegExp(self._activeSearch, "i").test($(this).text()) == false) {
                            bMatch = false;
                        }
                    }

                    bFiltered || !bMatch ? tr.hide() : tr.show();

                    if ($.inArray(id, self.options.filterable) != -1) {
                        self._rowCount[id][text] += 1;
                    }
                });
            });
            
            $("tr:visible span.ui-icon-circle-triangle-s").click().click();

            this._refreshCounts();
            this._refreshColours();
        },

        _refreshCounts: function() {
            var self = this;

            $("thead option", this.element).each(function() {
                var id = $(this).parents("th").attr("id"), text = $(this).text().split(" (")[0];

                if ($.inArray(text, Object.keys(self._rowCount[id]) != -1) && $(this).hasClass("optAll") == false) {
                    $(this).text(text + " (" + self._rowCount[id][text] + ")");
                }
            });

            $("tfoot td", this.element).text($("tbody tr:not(.details):visible", this.element).size() + " éléments");
        },
        
        _refreshColours: function() {
            $("tbody tr:visible:odd", this.element).removeClass("even").addClass("odd");
            $("tbody tr:visible:even", this.element).removeClass("odd").addClass("even");
        },

        showColumn: function(colName, bVisible) {
            var optVisible = this.option("visible");

            if (bVisible && $.inArray(colName, optVisible) == -1) {
                optVisible.push(colName);
            } else {
                optVisible = optVisible.filter(function(element) {
                    if (element == colName) {
                        return false;
                    }
                    return true;
                });

                this._activeFilters[colName] = "";
                this._filterRows();
            }

            this.option("visible", optVisible);
        },

        search: function(query) {
            this._activeSearch = query;
            this._filterRows();
        },

        destroy: function() {
            // In jQuery UI 1.8, you must invoke the destroy method from the base widget
            $.Widget.prototype.destroy.call(this);
            // In jQuery UI 1.9 and above, you would define _destroy instead of destroy and not call the base method
        }
    });
}(jQuery));
