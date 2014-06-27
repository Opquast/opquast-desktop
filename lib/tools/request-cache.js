"use strict";

const {Cc, Ci} = require('chrome');

const {Class} = require("sdk/core/heritage");
const tabs = require("sdk/tabs/utils");

const wm = Cc["@mozilla.org/appshell/window-mediator;1"].getService(Ci.nsIWindowMediator);

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

function trackTab(event) {
    // During initialization
    let win = wm.getMostRecentWindow('navigator:browser');
    var browser = win.gBrowser.getBrowserForTab(event.target);
    RequestCache.initBrowser(browser);
}

function unTrackTab(event) {
    // During initialization
    let win = wm.getMostRecentWindow('navigator:browser');
    var browser = win.gBrowser.getBrowserForTab(event.target);
    RequestCache.removeBrowser(browser);
}

const TabRequestsLogger = function() {
    let win = wm.getMostRecentWindow('navigator:browser');
    let container = win.gBrowser.tabContainer;
    container.addEventListener("TabOpen", trackTab, false);
    container.addEventListener("TabClose", unTrackTab, false);

    var open_tabs = tabs.getTabs(win)
    for (let tab_index in open_tabs) {
        var browser = win.gBrowser.getBrowserForTab(open_tabs[tab_index]);
        RequestCache.initBrowser(browser);
    }
};

const RemoveTabRequestsLogger = function() {
    let win = wm.getMostRecentWindow('navigator:browser');
    let container = win.gBrowser.tabContainer;
    container.removeEventListener("TabOpen", trackTab, false);
    container.removeEventListener("TabClose", unTrackTab, false);
};

exports.TabRequestsLogger = TabRequestsLogger;
exports.RemoveTabRequestsLogger = RemoveTabRequestsLogger;
