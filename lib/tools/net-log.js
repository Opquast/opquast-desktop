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

const {Cc, Ci, Cr, Cu} = require("chrome");

const {Class} = require("api-utils/heritage");
const observer = require("api-utils/observer-service");
const tabBrowser = require("api-utils/tab-browser");
const {windowIterator} = require("api-utils/window-utils");

const {WindowCache} = require("tools/window-cache");

const {NetworkHelper} = Cu.import("resource://gre/modules/NetworkHelper.jsm");

const STATE_START = Ci.nsIWebProgressListener.STATE_START;
const STATE_IS_WINDOW = Ci.nsIWebProgressListener.STATE_IS_WINDOW;

const re_charset = new RegExp('charset=([^\s^"]+)', "i");


let _RequestCache = Class({
    extends: WindowCache,

    resetEntry: function(aWindow) {
        this.setEntry(aWindow, []);
    },
    pushData: function(aWindow, aData) {
        let window_id = this.getWindowID(aWindow);
        if (this._data[window_id].push) {
            this._data[window_id].push(aData);
        }
    }
});

let RequestCache = exports.RequestCache = _RequestCache();

exports.TabRequestsLogger = function() {
    // Observers
    observer.add('http-on-examine-response', HttpRequestObserver);
    observer.add('http-on-examine-cached-response', HttpRequestObserver);

    // Add TabProgressListener to all new tabBrowser
    tabBrowser.Tracker({
        onTrack: function(aBrowser) {
            aBrowser.addProgressListener(TabProgressListener);
        },
        onUntrack: function(aBrowser) {}
    });

    // Manage requests cache for each tab
    tabBrowser.TabTracker({
        onTrack: function(aTab) {
            RequestCache.resetEntry(aTab.linkedBrowser.contentWindow);
        },
        onUntrack: function(aTab) {
            RequestCache.dropEntry(aTab.linkedBrowser.contentWindow);
        }
    });
};

let HttpRequestObserver = function(aSubject, aData) {
    let newListener = new TracingListener();
    aSubject.QueryInterface(Ci.nsITraceableChannel);

    newListener.originalListener = aSubject.setNewListener(newListener);
};

let TabProgressListener = {
    QueryInterface: function(aIID) {
        if (aIID.equals(Components.interfaces.nsIWebProgressListener) ||
        aIID.equals(Components.interfaces.nsISupportsWeakReference) ||
        aIID.equals(Components.interfaces.nsISupports))
            return this;
        throw Components.results.NS_NOINTERFACE;
    },

    onStateChange: function(aWebProgress, aRequest, aStateFlags, aStatus) {
        if ((aStateFlags & STATE_START) && (aStateFlags & STATE_IS_WINDOW)) {
            RequestCache.resetEntry(aWebProgress.DOMWindow);
        }
    }
};


function TracingListener() {}
TracingListener.prototype = {
    originalListener: null,
    receivedData: null,
    dataLength: 0,
    DOMWindow: null,

    QueryInterface: function(aIID) {
        if (aIID.equals(Ci.nsIStreamListener) ||
            aIID.equals(Ci.nsISupports)) {
            return this;
        }
        throw Cr.NS_NOINTERFACE;
    },

    onStartRequest: function(aRequest, aContext) {
        this.originalListener.onStartRequest(aRequest, aContext);
        this.receivedData = [];

        aRequest.QueryInterface(Ci.nsIHttpChannel);
        this.DOMWindow = getDOMWindowForRequest(aRequest);
    },

    onDataAvailable: function(aRequest, aContext, aInputStream, aOffset, aCount) {
        if (this.DOMWindow !== null && this.DOMWindow !== undefined) {
            this.dataLength += aCount;

            // We *temporary* store image data as we need to get information when
            // request is done. Then we'll remove this data.
            if (isImage(aRequest)) {
                let [data, newIS] = this._getDataBlock(aInputStream, aCount);
                this.receivedData.push(data);

                // We replace aInputStream by a new one.
                aInputStream = newIS;
            }
        }

        this.originalListener.onDataAvailable(aRequest, aContext, aInputStream, aOffset, aCount);
    },

    onStopRequest: function(aRequest, aContext, aStatusCode) {
        this.originalListener.onStopRequest(aRequest, aContext, aStatusCode);

        try {
            let info = getRequestInfo(aRequest, this);
            RequestCache.pushData(this.DOMWindow, info);
        } catch(e) {
            console.exception(e);
        } finally {
            this.receivedData = null;
        }
    },

    _getDataBlock: function(aInputStream, aCount) {
        let binaryInputStream = Cc["@mozilla.org/binaryinputstream;1"]
                .createInstance(Ci.nsIBinaryInputStream);
        let storageStream = Cc["@mozilla.org/storagestream;1"]
                .createInstance(Ci.nsIStorageStream);
        let binaryOutputStream = Cc["@mozilla.org/binaryoutputstream;1"]
                .createInstance(Ci.nsIBinaryOutputStream);

        binaryInputStream.setInputStream(aInputStream);
        storageStream.init(8192, aCount, null);
        binaryOutputStream.setOutputStream(storageStream.getOutputStream(0));

        // Copy received data as they come.

        let data = binaryInputStream.readBytes(aCount);
        binaryOutputStream.writeBytes(data, aCount);

        return [data, storageStream.newInputStream(0)];
    }
};

let getDOMWindowForRequest = function(aRequest) {
    // Find DOMWindow for a request
    let window = NetworkHelper.getWindowForRequest(aRequest);
    let browser;

    for (let _win in windowIterator()) {
        if (_win == window) {
            // This is a chromewindow
            // Is there a way to get browser for this ? Not sure.
            continue;
        }

        try {
            browser = _win.gBrowser.getBrowserForDocument(window.top.document);
        } catch(e) {
            continue;
        }
        if (browser === null) {
            // Wrong window
            continue;
        }

        return browser.contentWindow;
    }
};


let getRequestInfo = function(aRequest, aListener) {
    let out = {
        uri: aRequest.URI.spec,
        referrer: aRequest.referrer != null ? aRequest.referrer.spec : "",
        method: aRequest.requestMethod,
        status: aRequest.responseStatus,
        status_text: unescape(encodeURIComponent(aRequest.responseStatusText)),
        date: null,
        modified: null,
        expires: null,
        content_type: null,
        charset: null,
        size: aListener.dataLength,
        headers: {}
    };

    let visit_header = (function(name, value) {
        this.headers[name.toLowerCase()] = value;
    }).bind(out);

    aRequest.visitResponseHeaders({
        visitHeader: visit_header
    });

    [out.content_type, out.charset] = getContentType(out.headers);

    out.date = getDate(out.headers, 'date');
    out.modified = getDate(out.headers, 'last-modified');
    out.expires = getDate(out.headers, 'expires');

    if (aListener.receivedData.length > 0 && isImage(aRequest)) {
        out.image_info = {width:0, height: 0, animated: false};
        if (out.size > 0) {
            [out.image_info.width, out.image_info.height, out.image_info.animated]
            = getImageInfo(out.uri, out.content_type, aListener.receivedData);
        }
    }
    return out;
};

let getContentType = function(aHeaders) {
    let charset = null;
    let content_type = null;

    if (typeof(aHeaders['content-type']) !== "undefined") {
        content_type = aHeaders['content-type'].split(';',2);

        if (content_type.length > 1) {
            let match = re_charset.exec(content_type[1]);
            if(match) {
                charset = match[1].trim();
            }
        }
        content_type = content_type[0].trim();
    }

    return [content_type, charset]
};

let isImage = function(aRequest) {
    let c_type = aRequest.getResponseHeader("content-type");
    if (c_type) {
        return c_type.search(/^image\//) !== -1;
    }
    return false;
};

let getDate = function(aHeaders, aName) {
    if (typeof(aHeaders[aName]) !== 'undefined') {
        if (isNaN(Date.parse(aHeaders[aName]))) {
            return null;
        }
        return aHeaders[aName];
    }
    return null;
};

let getImageInfo = function(aURI, aContentType, aData) {
    /*
    I know what you think: "Why all this mess? Couldn't Image() do the same job?"
    Image(), even with a data uri, is async and we need to return a response
    not to fire a callback.
    Then, the only way is to decode image from its content.
    */
    let imgTools = Cc["@mozilla.org/image/tools;1"].getService(Ci.imgITools);

    let imgData = aData.join('');

    let binaryOutputStream = Cc["@mozilla.org/binaryoutputstream;1"].createInstance(Ci.nsIBinaryOutputStream);
    let storageStream = Cc["@mozilla.org/storagestream;1"].createInstance(Ci.nsIStorageStream);
    storageStream.init(4096, imgData.length, null);
    binaryOutputStream.setOutputStream(storageStream.getOutputStream(0));
    binaryOutputStream.writeBytes(imgData, imgData.length);
    binaryOutputStream.close();

    let inputStream = storageStream.newInputStream(0);

    let bInputStream = Cc["@mozilla.org/network/buffered-input-stream;1"].createInstance(Ci.nsIBufferedInputStream);
    bInputStream.init(inputStream, 1024);

    try {
        let outParam = {value: null};
        imgTools.decodeImageData(bInputStream, aContentType, outParam);
        return [outParam.value.width, outParam.value.height, outParam.value.animated];
    } catch(e) {
        require("tools/debug").debug("Failed to load image information - " + aURI);
        return [0,0, false];
    }
};
