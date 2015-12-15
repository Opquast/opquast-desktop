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

const {WindowCache} = require("./window-cache");


let _RequestCache = Class({
    extends: WindowCache,

    initBrowser: function(browser) {
        this.removeBrowser(browser);
        let collector = Har.startCollector(browser, {
            autoStart: false,
            wait: 1000,
            withImageInfo: true
        });

        this.setEntry(browser.contentWindow, collector);
        collector.listener.on('loadstarted', function(url) {
            collector.start(url);
        });
    },

    removeBrowser: function(browser) {
        if (this.entryExists(browser.contentWindow)) {
            this.getEntry(browser.contentWindow).stop();
            this.dropEntry(browser.contentWindow);
        }

        PageProgress.unregisterBrowser(browser);
        NetLog.unregisterBrowser(browser);
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
