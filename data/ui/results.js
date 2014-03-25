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
/*globals self:true, _:true, window:true, document:true */

"use strict";

(function($) {
//----

$.widget("ui.detailsViewer",{
    _create: function() {
        this.element.hide();
        this._modalizer = $('<div></div>').css({
            'z-index': '100',
            'background': '#000',
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'right': '0',
            'bottom': '0',
            'opacity': '0.3'
        }).hide().appendTo('body');
    },

    _handleKey: function(evt) {
        if (evt.which == 27) {
            this.close();
            return;
        }

        var row = this.element.data('origin');
        var sibling;

        if (evt.which == 37) { // previous row
            this.showSibling(row, -1);
        } else if (evt.which == 39) { // next row
            this.showSibling(row, 1);
        }
    },

    getSibling: function(row, dir) {
        if (dir == -1) {
            return $(row).prevAll(':visible');
        } else {
            return $(row).nextAll(':visible');
        }
    },

    showSibling: function(row, dir) {
        var sibling = this.getSibling(row, dir);
        if (sibling.length > 0) {
            this.open(sibling[0]);
            $(window).scrollTop($(sibling[0]).offset().top);
        }
    },

    open: function(targetRow) {
        var _this = this;
        this.element.data('origin', targetRow);

        $('#content', this.element)
        .empty()
        .append($.doT('tplResultDetails', $(targetRow).data()));
        this._trigger("content");

        if (!this.element.is(':visible')) {
            this._modalizer.show();
            $('body').css('overflow', 'hidden');

            this.element
            .css({
                'bottom': '100%',
                'z-index': '200'
            })
            .show()
            .animate({'bottom': '5px', 'top': '5px'}, 400);

            this.element.promise().done(function() {
                _this._trigger("open");

                $(document).on('keydown.detailsViewer', _this._handleKey.bind(_this));
                $(document).on('click.detailsViewer', function(evt) {
                    if ($(evt.target).parents().index(_this.element) === -1) {
                        _this.close();
                    }
                });
            });
        }
    },

    close: function() {
        var _this = this;
        if (this.element.is(':visible')) {
            this._modalizer.hide();
            $('body').css('overflow', 'visible');

            $('#resultDetails')
            .animate({'bottom': '100%'}, 200)
            .promise().done(function() {
                $('#content', _this.element).empty();
                $(this).hide();
            });

            this._trigger("close");

            $(document).off('keydown.detailsViewer');
            $(document).off('click.detailsViewer');
        }
    }
});

// Compute scores
let getScores = function(results) {
    let scores = {},
        global_score = {'c': 0, 'nc': 0},
        labels = {'c': LABELS.c, 'nc': LABELS.nc};

    let getScoreDetails = function(checklist, c, nc) {
        let res = {
            'checklist': checklist,
            'c': c,
            'nc': nc
        };
        res.value = Math.round(10 * (10 * c) / (c + nc)) / 10;

        res.class = 'fatal';
        if (res.value >= 6) {
            res.class = 'good';
        } else if (res.value >= 4) {
            res.class = 'warn';
        }

        // Stupid l10n system
        res.c_label = (c > 1 ? self.options.locales['oqs.pass_n'] : self.options.locales['oqs.pass_1']).replace('%s', c);
        res.nc_label = (nc > 1 ? self.options.locales['oqs.fail_n'] : self.options.locales['oqs.fail_1']).replace('%s', nc);

        return res;
    };

    results.forEach(function(r) {
        let cl = r.criterion.checklist.name;
        if (typeof(scores[cl]) === 'undefined') {
            scores[cl] = {
                'c': 0,
                'nc': 0
            };
        }
        if (['nc', 'c'].indexOf(r.result) !== -1) {
            scores[cl][r.result] += 1;
            global_score[r.result] += 1;
            labels[r.result] = r.label;
        }
    });

    let _s = [];
    for (let cl in scores) {
        _s.push(getScoreDetails(cl, scores[cl].c, scores[cl].nc));
    }
    scores = _s;

    return {
        'global': getScoreDetails(null, global_score.c, global_score.nc),
        'details': scores,
        'labels': labels
    };
};

//
// Display test results
//
const LABELS = {
    'c': _('oqs.pass'),
    'nc': _('oqs.fail'),
    'i': _('oqs.cannot_tell'),
    'na': _('oqs.not_applicable'),
    'nt': _('oqs.not_tested')
};

self.port.on("showResults", function(tests, tableOptions) {
    // Prepare results
    let allCL = [];
    tests.oaa_results.map(function(r) {
        r.label = LABELS[r.result];

        r.criterion.thema = $.trim(r.criterion.thema);
        if (r.criterion.thema === '') {
            r.criterion.thema = r.criterion.checklist.name;
        }
        if (allCL.indexOf(r.criterion.checklist.name) === -1) {
            allCL.push(r.criterion.checklist.name);
        }
    });

    if (allCL.length <= 1) {
        // Show checklist choice if more than one
        tableOptions.filterable.splice(tableOptions.filterable.indexOf('hChecklist'), 1);
        tableOptions.sortable.splice(tableOptions.sortable.indexOf('hChecklist'), 1);
    }

    // Show date
    var _date = new Date(tests.datetime);
    self.port.emit("showInfo",
        _date.toLocaleFormat(_("oqs.date_format")), _date.toLocaleTimeString(), Math.round(tests.timer*10)/10
    );

    // Show result list
    $('body').doT('tplResults', {
        'tests': tests,
        'scores': getScores(tests.oaa_results)
    });

    // Tabs
    $('#tabs').tabs({active: 0})
    .css('margin-top', $('#tabs>ul').height() + 'px');

    // Switch to result tab on score click
    $('#scores td').on('click', 'a.score', function(evt) {
        evt.preventDefault();
        $('#tabs').tabs('option', 'active', 1);
        $('#hChecklist select').val($(this).data('cl')).change();
        $('#hResult select').val($(this).data('result')).change();
    });

    // Pref
    $('body').on('click', 'a.preferences', function(evt) {
        evt.preventDefault();
        self.port.emit('openPreferences');
    });

    // Prepare modalizer
    $('#resultDetails').detailsViewer({
        content: function(evt) {
            var _this = this,
                row = $($(this).data('origin'));

            $('a.inspect', this).click(function(evt) {
                evt.preventDefault();
                self.port.emit('inspectNode', $(evt.target).data('path'));
            });

            $('a.prev', this).parent().toggle($(this).detailsViewer('getSibling', row, -1).length > 0);
            $('a.next', this).parent().toggle($(this).detailsViewer('getSibling', row, 1).length > 0);
            evt.target.focus();
        },
        open: function(evt) {
            evt.target.focus();
        },
        close: function(evt) {
            var orig_row = $(evt.target).data('origin');
            $('a', orig_row).focus();
        }
    });
    $('#resultDetails').on('click', 'a.close', function(evt) {
        evt.preventDefault();
        $('#resultDetails').detailsViewer('close');
    });
    $('#resultDetails').on('click', 'a.prev, a.next', function(evt) {
        evt.preventDefault();
        $('#resultDetails').detailsViewer('showSibling',
            $('#resultDetails').data('origin'),
            $(evt.target).hasClass('prev') ? -1 : 1
        );
    });
    $('#resultDetails').on('click', 'a.feedback', function(evt) {
        evt.preventDefault();
        var row = $($('#resultDetails').data('origin'));
        self.port.emit('feedback',
            row.data('test_id'),
            row.data('stTerms').hRef,
            row.data('stTerms').hChecklist
        );
    });

    // Editable status
    var changeResult = function(row, result) {
        let data = row.data();

        self.port.emit("setUserData", data.test_id, {
            result: result
        });

        // Update row image
        $("td[headers=hResult] img.result", row).each(function() {
            this.src = this.src.replace(/\w+.png*$/, result + '.png');
        });

        // Update data and filters
        data.result = result;
        data.label = LABELS[result];
        data.stTerms.hResult = data.label;
        row.data(data);

        // Update filters values
        $('#test_result').superTable('setFilterControls');

        // Set user-defined visibility
        $("td[headers=hResult] span.user-defined", row).css("visibility", "visible");
    };

    var changeComment = function(row, comment) {
        let data = row.data();

        self.port.emit("setUserData", data.test_id, {
            comment: comment
        }, "restoreCommentButton");

        // Update data
        data.comment = comment;
        row.data(data);

        // Set user-defined visibility
        $("td[headers=hResult] span.user-defined", row).css("visibility", "visible");
    };

    var actionToolbar = function(selector, target, callback) {
        let old;

        $(selector).on("mouseenter", target, function(evt) {
            let img = $(evt.target);
            let base = img.parent();
            let row = img.parents('tr').eq(0);

            let toolbar = base.data('toolbar');
            let item, action;

            if (typeof(toolbar) === 'undefined') {
                toolbar = $('<ul class="action_toolbar"></ul>').hide();
                base.data('toolbar', toolbar).append(toolbar);
            }
            toolbar.empty();
            for (var k in LABELS) {
                if (row.data('result') === k) {
                    continue;
                }
                item = $('<li></li>');
                action = $('<img src="img/' + k + '.png" alt="' + LABELS[k] + '" />');
                action.data('result', k).appendTo(item);
                toolbar.append(item);

                action.click(function(evt) {
                    evt.stopPropagation();
                    callback.call(null, row, $(evt.target).data('result'));
                    removeTimeout(toolbar.hide());
                });
            }
            toolbar.css({
                'top': img.offset().top - toolbar.outerHeight()/2 + img.outerHeight()/2,
                'left': img.offset().left - toolbar.outerWidth(true),
            });

            let removeTimeout = function(el) {
                let timeout = el.data("timeout_hide");
                if (timeout) {
                    clearTimeout(timeout);
                    el.removeData("timeout_hide");
                    return true;
                }
                return false;
            };

            let onOut = function() {
                old = toolbar;
                toolbar.data("timeout_hide", setTimeout(function() {
                    toolbar.removeData("timeout_hide").hide();
                    old = undefined;
                }, 1000));
                toolbar.one("mouseenter", onEnter);
            };

            let onEnter = function() {
                if (removeTimeout(toolbar)) {
                    base.one("mouseleave", onOut);
                }
            };

            removeTimeout(toolbar);
            if (old) {
                removeTimeout(old);
                old.hide();
            }
            toolbar.show();

            base.one("mouseleave", onOut);
        });
    };

    // Table events
    var display_counter = function(evt, data) {
        self.port.emit("resultCounter",
            $(evt.target).superTable('getRows').filter(':visible').length,
            $(evt.target).superTable('getRows').length
        );
    };

    var odd_even = function(evt) {
        $(evt.target).superTable('getRows').filter(':visible').each(function(i) {
            $(this).removeClass('odd even').addClass(i%2 === 0 ? 'odd' : 'even');
        });
    };

    var sorted_col = function(evt, data) {
        $('td', evt.target).removeClass('sorted');
        $(evt.target).superTable('getColumn', data.column).addClass('sorted');
    };

    var new_row = function(evt, data) {
        var _r = tests.oaa_results[data.index];
        $(data.row).data({
            'comment': _r.comment,
            'nodes': _r.details,
            'result': _r.result,
            'label': _r.label,
            'test_id': _r.id
        });
        $(data.row).click(show_details);
    };

    var show_details = function(evt) {
        evt.preventDefault();
        $('#resultDetails').detailsViewer('open', evt.delegateTarget);
    };

    // Common superTable events
    $('#test_result')
    .on('supertablecreate', display_counter)
    .on('supertablefiltered', display_counter)
    .on('supertablerowsdisabled', display_counter)
    .on('supertablerowsenabled', display_counter)
    .on('supertablecreate', odd_even)
    .on('supertablefiltered', odd_even)
    .on('supertablesorted', odd_even)
    .on('supertablesorted', sorted_col)
    .on('supertablerownew', new_row);

    // Table display
    $('#test_result').superTable(tableOptions);
    self.port.emit("resultLoaded");


    // Change status with icon in list
    actionToolbar("#test_result tbody td[headers=hResult]", "img.result", function(row, result) {
        changeResult(row, result);
    });

    // Change status within details view
    $("#resultDetails").on("change", "#testStatus", function(evt) {
        let result = evt.target.value;
        let row = $($("#resultDetails").data("origin"));

        // Set new result
        changeResult(row, result);

        // Update details icon
        $(evt.target).parent().removeClass(Object.keys(LABELS).join(' ')).addClass(result);
    });

    // Edit comment
    $("#resultDetails").on("click", "#saveComment", function(evt) {
        let comment = $('#editComment').val();
        let row = $($("#resultDetails").data("origin"));

        // Disable button
        $(this).data('original-text', $(this).text())
        .text(_('oqs.saving'))
        .attr('disabled', true);

        // Set new comment
        changeComment(row, comment);
    });

    // Various worker events
    self.port.on("showResultCount", function(count_string) {
        $('#test_result tfoot td').empty().append(count_string);
    });

    self.port.on("changeColVisibility", function(name, visible) {
        $('#test_result').superTable(visible ? "showCol" : "hideCol", name);
    });

    self.port.on("toggleResults", function(value, visible) {
        let rows = $("#test_result tbody tr").filter(function() {
            return $(this).data("result") == value;
        });
        let func = visible && "enableRows" || "disableRows";
        $('#test_result').superTable(func, rows);
    });

    self.port.on("resultSearch", function(q) {
        $('#test_result').superTable('search', q);
    });

    self.port.on("restoreCommentButton", function() {
        setTimeout(function() {
            let btn = $('#saveComment');
            btn.text(btn.data('original-text')).removeAttr('disabled');
        }, 1000);
    });
});


//
// Landing page (to launch tests)
//
self.port.on("showLandingUI", function() {
    $('body').doT('tplMessage', {
        'message': self.options.locales['oqs.no_result_yet'],
        'class': '',
        'button': self.options.locales['oqs.launch']
    });

    $('button').prepend('<span></span>').addClass('launch').click(function() {
        self.port.emit("launch");
    });
});

self.port.on("showConfirmDelete", function() {
    $('body').doT('tplConfirmDelete', {});

    $('button[name=keep]').click(function() {
        self.port.emit("launch", false);
    });

    $('button[name=erase]').click(function() {
        self.port.emit("launch", true);
    });
});

//----
})(jQuery);
