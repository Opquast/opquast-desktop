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

const {components, Ci, Cc, Cu, Cr} = require("chrome");
const {emit} = require("api-utils/event/core");
const {Class} = require("api-utils/heritage");
const {stringify} = require("api-utils/querystring");

const {Request: _Request} = require("request");

const {NetUtil} = Cu.import("resource://gre/modules/NetUtil.jsm", {});
const observerService = Cc["@mozilla.org/observer-service;1"].getService(Ci.nsIObserverService);

const Request = Class({
    extends: _Request,
    initialize: function initialize(options) {
        _Request.prototype.initialize.call(this, options);
        this.channel = null;
    },

    on: function() {
        _Request.prototype.on.apply(this, arguments);
        return this;
    },
    once: function() {
        _Request.prototype.once.apply(this, arguments);
        return this;
    },

    get: function() {
        runRequest('GET', this);
        return this;
    },
    post: function() {
        runRequest('POST', this);
        return this;
    },
    put: function() {
        runRequest('PUT', this);
        return this;
    },
    delete: function() {
        runRequest('DELETE', this);
        return this;
    },

    get contentString() {
        let data = this.content;
        if (this.contentType == "application/x-www-form-urlencoded") {
            data = stringify(data);
        } else if (this.contentType == "application/json") {
            data = JSON.stringify(data);
        }

        // Force UTF8 encoding
        data = unescape(encodeURIComponent(data));

        return data;
    }
});
exports.Request = Request;

const StreamListener = function(target) {
    this.target = target;
};
StreamListener.prototype = {
    observe: function(aSubject, aTopic, aData) {
        if (aSubject == this.target.channel) {
            var httpChannel = aSubject.QueryInterface(Ci.nsIHttpChannel);
            if (aTopic == "http-on-modify-request") {
                httpChannel.setRequestHeader("Cookie", "", false);

                for (let i in this.target.headers) {
                    httpChannel.setRequestHeader(i, this.target.headers[i], false);
                }
            } else if (aTopic == "http-on-examine-response") {
                httpChannel.setResponseHeader("Set-Cookie", "", false);
                this.mStatus = httpChannel.responseStatus;
            }
        }
    },

    mData: "",
    mStatus: 0,

    onStartRequest: function(aRequest, aContext) {
        this.mData = "";
    },

    onDataAvailable: function(aRequest, aContext, aStream, aSourceOffset, aLength) {
        var scriptableInputStream = Cc["@mozilla.org/scriptableinputstream;1"]
                                    .createInstance(Ci.nsIScriptableInputStream);
        scriptableInputStream.init(aStream);

        this.mData += scriptableInputStream.read(aLength);
    },

    onStopRequest: function(aRequest, aContext, aStatus) {
        let response = Response(this.target.channel, this.mData, this.mStatus);
        this.target.channel = null;
        this.mData = null;

        observerService.removeObserver(this, "http-on-modify-request");
        observerService.removeObserver(this, "http-on-examine-response");

        if (components.isSuccessCode(aStatus)) {
            emit(this.target, 'complete', response);
        } else {
            emit(this.target, 'complete', null);
        }
    },

    onChannelRedirect: function(aOldChannel, aNewChannel, aFlags) {
        this.target.channel = aNewChannel;
    },

    getInterface: function(aIID) {
        try {
            return this.QueryInterface(aIID);
        } catch (e) {
            throw Cr.NS_NOINTERFACE;
        }
    },

    onProgress: function(aRequest, aContext, aProgress, aProgressMax) {},
    onStatus: function(aRequest, aContext, aStatus, aStatusArg) {},
    onRedirect: function(aOldChannel, aNewChannel) {},

    QueryInterface: function(aIID) {
        if (aIID.equals(Ci.nsISupports) || aIID.equals(Ci.nsIObserver) ||
        aIID.equals(Ci.nsIInterfaceRequestor) || aIID.equals(Ci.nsIChannelEventSink) ||
        aIID.equals(Ci.nsIProgressEventSink) || aIID.equals(Ci.nsIHttpEventSink) ||
        aIID.equals(Ci.nsIStreamListener))
            return this;

        throw Cr.NS_NOINTERFACE;
    }
};

const runRequest = function(mode, target) {
    let url = target.url;
    let with_data_body = (target.content && (mode == 'POST' || mode == 'PUT'));

    if (!with_data_body && target.content) {
        url += '?' + target.contentString;
    }
    target.channel = NetUtil.newChannel(url);

    let listener = new StreamListener(target);

    observerService.addObserver(listener, "http-on-modify-request", false);
    observerService.addObserver(listener, "http-on-examine-response", false);

    if (with_data_body) {
        let data = target.contentString;
        let inputStream = Cc["@mozilla.org/io/string-input-stream;1"]
                            .createInstance(Ci.nsIStringInputStream);
        inputStream.setData(data, data.length);

        let uploadChannel = target.channel.QueryInterface(Ci.nsIUploadChannel);
        uploadChannel.setUploadStream(inputStream, target.contentType, inputStream.available());
    }

    let httpChannel = target.channel.QueryInterface(Ci.nsIHttpChannel);
    httpChannel.requestMethod = mode;

    target.channel.notificationCallbacks = listener;
    target.channel.asyncOpen(listener, null);
}

const Response = Class({
    initialize: function(aChannel, aData, aStatus) {
        let channel = aChannel.QueryInterface(Ci.nsIHttpChannel);
        this.data = aData;
        this.headers = {};
        this.status = channel.responseStatus;
        this.statusText = channel.responseStatusText;

        channel.visitResponseHeaders(function(aName, aValue) {
            this.headers[aName] = aValue;
        }.bind(this))
    },

    get json() {
        try {
            return JSON.parse(this.data);
        } catch(error) {
            return null;
        }
    }
});
