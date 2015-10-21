/* ***** BEGIN LICENSE BLOCK *****
 * Version: MIT/X11 License
 *
 * Copyright (c) 2010 Erik Vold
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Contributor(s):
 *   Erik Vold <erikvvold@gmail.com> (Original Author)
 *
 * ***** END LICENSE BLOCK ***** */

const {WindowTracker} = require("sdk/deprecated/window-utils");

const NS_XUL = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";

exports.Menuitem = function Menuitem(options) {
    var onCmd = function() {
        options.onCommand && options.onCommand();
    };
    var menuitem = null;

    var delegate = {
        onTrack: function (window) {
            if ("chrome://browser/content/browser.xul" != window.location) return;

            var $ = function(id) window.document.getElementById(id);

            // add the new menuitem to a menu
            menuitem = window.document.createElementNS(NS_XUL, "menuitem");
            menuitem.setAttribute("id", options.id);
            menuitem.setAttribute("label", options.label);
            if (options.accesskey)
                menuitem.setAttribute("accesskey", options.accesskey);
            if (options.key)
                menuitem.setAttribute("key", options.key);
            if (options.image) {
                menuitem.setAttribute("class", "menuitem-iconic");
                menuitem.style.listStyleImage = "url('" + options.image + "')";
            }
            menuitem.addEventListener("command", onCmd, true);

            $(options.menuid).insertBefore(menuitem, $(options.insertbefore));

            // add unloader: when the module is unload, we should remove the menuitem
            require("sdk/system/unload").when(function() {
                if (menuitem && menuitem.parentNode) {
                    menuitem.parentNode.removeChild(menuitem);
                }
                menuitem = null;
            }, window);
        },
        onUntrack: function (window) {
            if (menuitem) {
                menuitem.removeEventListener("command", onCmd, true);
            }
        }
    };
    var tracker = new WindowTracker(delegate);
};
