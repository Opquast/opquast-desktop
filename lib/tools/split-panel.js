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
"use strict";

const apiUtils = require("api-utils");
const {WindowTracker} = require("window-utils");

const NS_XUL = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";


exports.SplitPanel = function SplitPanel(aOptions) {
    let options = apiUtils.validateOptions(aOptions, {
        id:         { is: ["string"] },
        stylesheet: { is: ["undefined", "string"] },
        onCreate:   { is: ["undefined", "function"] },
        onOpen:     { is: ["undefined", "function"] },
        onClose:    { is: ["undefined", "function"] },
        onShow:     { is: ["undefined", "function"] },
        onHide:     { is: ["undefined", "function"] },
        onDestroy:  { is: ["undefined", "function"] },
    });

    let delegate = {
        onTrack: function(aWindow) {
            if (aWindow.location != "chrome://browser/content/browser.xul") {
                return;
            }

            let panel = new Panel(aWindow, options);

            // Attach panel to window
            if (!aWindow._split_panels) { aWindow._split_panels = {}; }
            aWindow._split_panels[options.id] = panel;

            panel.callback("onCreate");
        },
        onUntrack: function(aWindow) {
            // Remove panel when extension is disabled or removed
            if (aWindow.location != "chrome://browser/content/browser.xul") {
                return;
            }

            let panel = aWindow._split_panels[options.id];
            panel.destroy();
        }
    };
    WindowTracker(delegate);
};


let Panel = function(aWindow, aOptions) {
    this.window = aWindow;
    this.options = aOptions;
    this.is_open = false;

    this.doc = this.window.document;

    let bottombox = this.doc.getElementById("browser-bottombox");
    let inspector_toolbar = this.doc.getElementById("inspector-toolbar");

    this.box = this.doc.createElementNS(NS_XUL, "vbox");
    this.box.setAttribute("id", this.options.id);
    this.box.setAttribute("flex", "1");

    bottombox.insertBefore(this.box, inspector_toolbar);

    this.style_node = null;
    if (this.options.stylesheet) {
        this.style_node = this.doc.createProcessingInstruction("xml-stylesheet",
            'href="' + this.options.stylesheet + '"' + 'type="text/css"');
        this.doc.insertBefore(this.style_node, this.doc.documentElement);
    }
};
Panel.prototype = {
    callback: function(aName) {
        if (typeof(this.options[aName]) == "function") {
            let args = Array.prototype.slice.call(arguments);
            args.shift();
            try {
                this.options[aName].apply(this, args);
            } catch(e) {
                console.exception(e);
            }
        }
    },
    destroy: function() {
        // Remove element
        this.box.parentNode.removeChild(this.box);

        // Remove stylesheet
        if (this.style_node) {
            this.doc.removeChild(this.style_node);
        }
        this.callback("onDestroy");
    },
    show: function(aBody) {
        if (!this.is_open) {
            this.box.setAttribute("visible", "true");
            this.is_open = true;
            this.callback("onShow", aBody);
            return true;
        }
        return false;
    },
    hide: function() {
        if (this.is_open) {
            this.box.removeAttribute("visible");
            this.is_open = false;
            this.callback("onHide");
            return true;
        }
        return false;
    },
    open: function() {
        if (this.show()) {
            this.callback("onOpen");
        }
    },
    close: function() {
        if (this.hide()) {
            this.callback("onClose");
        }
    },
    toggle: function() {
        if (this.is_open) {
            this.close();
        } else {
            this.open();
        }
    }
};
