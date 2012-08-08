(function($) {
    "use strict";

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
            $("th, tbody td", this.element).each(function() {
                for (var item in self.options.visible) {
                    if (this.id == self.options.visible[item] || ($(this).attr("headers") && $(this).attr("headers") == self.options.visible[item])) {
                        $(this).show();
                        break;
                    }
                    $(this).hide();
                }
            });

            // sort
            $("th", this.element).each(function() {
                var id = this.id;
                
                $(this).wrapInner("<div></div>");

                if ($.inArray(this.id, self.options.sortable) != -1) {
                    var div = $("div", this);
                    
                    div.append($('<span class="ui-icon ui-icon-carat-2-n-s" style="float: right;"></span>'));

                    div.mouseover(function() {
                        $(this).css("cursor", "pointer");
                    }).click(function() {
                        self._sortRows(id, $("span", div).hasClass("ui-icon-carat-1-n"));
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
                        
                        if($.inArray(text, filters) == -1) {
                            filters.push(text);
                            self._rowCount[id][text] = 1;
                        } else {
                            self._rowCount[id][text] += 1;
                        }
                    });
                    
                    var select = $('<select style="float: right;"></select>');
                    select.append($('<option class="optAll">' + $("div", this).text() + "</option>").click(function(){
                        self._activeFilters[id] = "";
                        self._filterRows();
                    }));
                    filters.sort().map(function(text) {
                        select.append($("<option>" + text + "</option>").click(function(){
                            self._activeFilters[id] = text;
                            self._filterRows();
                        }));
                    });
                    $(this).append(select);
                    //$("div", this).text("");
                }
            });
            
            //
            this._refreshCounts();
            
            //
            $("thead tr").append($("<th></th>"));
            $("tbody tr").append(
                $('<td></td>').append($('<span class="ui-icon ui-icon-circle-plus"></span>').click(function() {
                    $(this).toggleClass("ui-icon-circle-plus ui-icon-circle-minus");
                }))
            );
        },

        _setOption: function(key, value) {
            switch(key) {
                case "filter":
                    break;
                case "visible":
                    $("th, tbody td", this.element).each(function() {
                        for (var item in value) {
                            if (this.id == value[item] || ($(this).attr("headers") && $(this).attr("headers") == value[item])) {
                                $(this).show();
                                break;
                            }
                            $(this).hide();
                        }
                    });
            }

            // In jQuery UI 1.8, you have to manually invoke the _setOption method from the base widget
            $.Widget.prototype._setOption.apply(this, arguments);
            // In jQuery UI 1.9 and above, you use the _super method instead
            //this._super("_setOption", key, value);
        },

        _sortRows: function(header, order) {
            $("tbody tr", this.element).detach().sort(function(a, b) {
                var rowA = $("td[headers=" + header + "]", a).text();
                var rowB = $("td[headers=" + header + "]", b).text();
                
                if(parseFloat(rowA) == parseInt(rowA) && !isNaN(rowA) && parseFloat(rowB) == parseInt(rowB) && !isNaN(rowB)) {
                    rowA = parseInt(rowA);
                    rowB = parseInt(rowB);
                }

                return order ? rowA < rowB : rowA > rowB;
            }).appendTo(this.element.find("tbody"));

            $("th", this.element).each(function() {
                var span = $("div span", $(this));
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
        },
        
        _filterRows: function() {
            var self = this;
            
            Object.keys(self._rowCount).forEach(function(element){
                Object.keys(self._rowCount[element]).forEach(function(subElement){
                    self._rowCount[element][subElement] = 0;
                });
            });
            
            $("tbody tr", this.element).each(function() {
                var tr = $(this), bFiltered = false, bMatch = false;
                
                $("td", this).each(function() {
                    var text = $(this).text(), id = $(this).attr("headers");
                    
                    if($.inArray(id, Object.keys(self._activeFilters)) != -1 &&
                            $.inArray(self._activeFilters[id], ["", $(this).text()]) == -1) {
                        bFiltered = true;
                    } else if (!bFiltered) {
                        if (self._activeSearch == ""
                            ||
                            (self._activeSearch != "" && new RegExp(self._activeSearch, "i").test($(this).text()) == true)) {
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
            
            this._refreshCounts();
        },

        _refreshCounts: function() {
            var self = this;
            
            $("thead option", this.element).each(function() {
                var id = $(this).parents("th").attr("id"), text = $(this).text().split(" (")[0];
                
                if($.inArray(text, Object.keys(self._rowCount[id]) != -1) && $(this).hasClass("optAll") == false) {
                    $(this).text(text + " (" + self._rowCount[id][text] + ")");
                }
            });
            
            $("tfoot tr td", this.element).text($("tbody tr:visible", this.element).size() + " éléments");
        },
        
        showColumn: function(colName, bVisible) {
            var optVisible = this.option("visible");
            
            if(bVisible && $.inArray(colName, optVisible) == -1) {
                optVisible.push(colName);
            } else {
                optVisible = optVisible.filter(function(element) {
                    if(element == colName) {
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
