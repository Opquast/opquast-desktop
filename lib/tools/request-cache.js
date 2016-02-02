"use strict";
/**
 * This module enables the HAR collector on new tabs.
 *
 * Call TabRequestsLogger or RemoveTabRequestsLogger
 * to enable HAR collecting on each tabs.
 *
 * Use RequestCache to retrieve HAR results for each
 * browser window
 */
const {Class} = require("sdk/core/heritage");
const tabsUtils = require("sdk/tabs/utils");
var { viewFor } = require("sdk/view/core");

const NetLog = require("net-log/net-log");
const PageProgress = require("net-log/page-progress");
const Har = require("net-log/har");

let _RequestCache = Class({
    initialize: function() {
        this._data = new WeakMap();
    },

    getEntry: function(aBrowser) {
        if (this._data.has(aBrowser)) {
            return this._data.get(aBrowser);
        }
        else {
            return null;
        }
    },

    initBrowser: function(browser) {
        this.removeBrowser(browser);
        let collector = Har.startCollector(browser, {
            autoStart: false,
            wait: 1000,
            withImageInfo: true
        });

        this._data.set(browser, collector);
        collector.getListener().on('loadstarted', function(url) {
            collector.start(url);
        });
    },

    removeBrowser: function(browser) {
        if (this._data.has(browser)) {
            this._data.get(browser).unregister();
            this._data.delete(browser);
        }
    }
});
let RequestCache = _RequestCache();
exports.RequestCache = RequestCache;


function trackTab(tab) {
    let xulTab = viewFor(tab);
    let browser = tabsUtils.getBrowserForTab(xulTab);
    RequestCache.initBrowser(browser);
}

function unTrackTab(tab) {
    let xulTab = viewFor(tab);
    let browser = tabsUtils.getBrowserForTab(xulTab);
    RequestCache.removeBrowser(browser);
}

const TabRequestsLogger = function() {
    var tabs = require("sdk/tabs");

    for (let tab of tabs) {
        trackTab(tab);
    }

    tabs.on('open', trackTab);
    tabs.on('close', unTrackTab);
};

const RemoveTabRequestsLogger = function() {
    var tabs = require("sdk/tabs");
    for (let tab of tabs) {
        unTrackTab(tab);
    }
    tabs.off('open', trackTab);
    tabs.off('close', unTrackTab);
};

exports.TabRequestsLogger = TabRequestsLogger;
exports.RemoveTabRequestsLogger = RemoveTabRequestsLogger;
