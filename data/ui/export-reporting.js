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
/*globals self */
"use strict";

(function($) {
//----

self.port.on("showAccounts", function(accounts, error, username) {
    $('body').doT('tplAccountList', {
        'accounts': accounts,
        'error': error
    });

    if (username) {
        $('#username').val(username);
    }
    $('#username').focus();

    $('#accounts td>a.use').click(function(evt) {
        evt.preventDefault();
        self.port.emit("showProjects", $(this).text());
    });

    $('#accounts td>a.edit').click(function(evt) {
        evt.preventDefault();
        $('#username').val($(evt.target).parents('tr:eq(0)').data('username'));
        $('#keep')[0].checked = true;
        $('#password').focus();
    });

    $('#accounts td>a.remove').click(function(evt) {
        evt.preventDefault();
        self.port.emit('removeAccount', $(evt.target).parents('tr:eq(0)').data('username'));
    });

    $('#loginForm form').submit(function(evt) {
        evt.preventDefault();
        if ($('#username').val() === '') {
            $('div.error').remove();
            $(evt.target).prepend('<div class="error">' + self.options.locales['oqs.provide_username'] + '</div>');
            return;
        }
        if ($('#password').val() === '') {
            $('div.error').remove();
            $(evt.target).prepend('<div class="error">' + self.options.locales['oqs.provide_password'] + '</div>');
            return;
        }

        self.port.emit("showProjects",
            $('#username').val(), $('#password').val(), $('#keep')[0].checked
        );
    });
});

self.port.on("accountRemoved", function(username) {
    $('#accounts tr').filter(function() {
        return $(this).data('username') == username;
    }).fadeOut(500, function() {
        $(this).remove();
    });
});


self.port.on("showProjects", function(projects) {
    function showConfirm(question, row) {
        var projectID = row.data('project_id'),
            projectName = $('td[headers~="hName"]', row).text();

        question = question.replace("%s", projectName);

        var hidden = $('body *').hide();
        var confirm = $($.doT('tplMessage', {
            'message': question,
            'class': ''
        }));
        $('body').append(confirm);

        var bt_ok = $('<button class="action">OK</button>');
        var bt_cancel = $('<button class="action">Cancel</button>');

        bt_cancel.click(function() {
            hidden.show();
            confirm.remove();
        });

        bt_ok.click(function() {
            self.port.emit("sendResults", projectID, projectName);
        });

        confirm.append('<br />').append(bt_ok).append(' ').append(bt_cancel);
    }

    $('body').doT('tplProjectList', {
        'projects': projects
    });

    $('#projects tbody td button').click(function(evt) {
        var row = $(evt.target).parents('tr');

        showConfirm(self.options.locales['oqs.confirmDataSending'], row);
    });
});

self.port.on("showPages", function(pages, projectID, projectName) {
    $('body').doT('tplPageList', {
        'pages': pages
    });

    $('#pages tbody td button').click(function(evt) {
        var resource_uri = $(evt.target).parents('tr').data('resource_uri');

        self.port.emit("removePage", resource_uri, projectID, projectName);
    });
});


//----
})(jQuery);
