"use strict";

const {Class} = require("sdk/core/heritage");

const tabBrowser = require("sdk/deprecated/tab-browser");

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

const TabRequestsLogger = function() {
    tabBrowser.TabTracker({
        onTrack: function(tab) {
            RequestCache.initBrowser(tab.linkedBrowser);
        },
        onUntrack: function(tab) {
            RequestCache.removeBrowser(tab.linkedBrowser);
        }
    });
};
exports.TabRequestsLogger = TabRequestsLogger;
