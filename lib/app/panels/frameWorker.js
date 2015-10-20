/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

/*
 * this is a fork of page-worker.js. It works like a page-worker
 * except it uses a given iframe for the content
 */


module.metadata = {
  "stability": "stable"
};

const { Class } = require('sdk/core/heritage');
const { on, emit, off, setListeners } = require('sdk/event/core');
const { filter, pipe, map, merge: streamMerge, stripListeners } = require('sdk/event/utils');
const { detach, attach, destroy, WorkerHost } = require('sdk/content/utils');
const { Worker } = require('sdk/content/worker');
const { Disposable } = require('sdk/core/disposable');
const { WeakReference } = require('sdk/core/reference');
const { EventTarget } = require('sdk/event/target');
const { unload } = require('sdk/system/unload');
const { events, streamEventsFrom } = require('sdk/content/events');
const { window } = require('sdk/addon/window');
const { getParentWindow } = require('sdk/window/utils');
const { getDocShell } = require('sdk/frame/utils');
const { contract } = require('sdk/util/contract');
const { contract: loaderContract } = require('sdk/content/loader');
const { has } = require('sdk/util/array');
const { Rules } = require('sdk/util/rules');
const { merge } = require('sdk/util/object');
const { data } = require('sdk/self');
const { getActiveView } = require("sdk/view/core");

const views = new WeakMap();
const workers = new WeakMap();
const pages = new WeakMap();

function workerFor(page) workers.get(page)
function pageFor(view) pages.get(view)
function viewFor(page) views.get(page)
function isDisposed (page) !views.get(page, false)

let pageContract = contract(merge({
  allow: {
    is: ['object', 'undefined', 'null'],
    map: function (allow) { return { script: !allow || allow.script !== false }}
  },
  onMessage: {
    is: ['function', 'undefined']
  },
  include: {
    is: ['string', 'array', 'regexp', 'undefined']
  },
  contentScriptWhen: {
    is: ['string', 'undefined']
  },
  frame: {
    is: ['object']
  },
  onFrameReady: {
    is: ['function', 'undefined', 'null']
  }
}, loaderContract.rules));

function enableScript (page) {
  getDocShell(viewFor(page)).allowJavascript = true;
}

function disableScript (page) {
  getDocShell(viewFor(page)).allowJavascript = false;
}

function Allow (page) {
  return {
    get script() { return getDocShell(viewFor(page)).allowJavascript; },
    set script(value) { return value ? enableScript(page) : disableScript(page); }
  };
}

function injectWorker ({page}) {
  let worker = workerFor(page);
  let view = viewFor(page);
  if (isValidURL(page, view.contentDocument.URL))
    attach(worker, view.contentWindow);
}

function isValidURL(page, url) !page.rules || page.rules.matchesAny(url)

const Frame = Class({
  implements: [
    EventTarget,
    Disposable,
    WeakReference
  ],
  extends: WorkerHost(workerFor),
  setup: function Frame(options) {
    let page = this;
    options = pageContract(options);

    let uri = options.contentURL;

    let view = options.frame;

    ['contentScriptFile', 'contentScript', 'contentScriptWhen']
      .forEach(prop => page[prop] = options[prop]);

    views.set(this, view);
    pages.set(view, this);

    // Set listeners on the {Page} object itself, not the underlying worker,
    // like `onMessage`, as it gets piped
    setListeners(page, options);

    function frameIsReady(event) {

        let worker = new Worker(stripListeners(options));
        workers.set(page, worker);
        pipe(worker, page);
    
        if (page.include || options.include) {
          page.rules = Rules();
          page.rules.add.apply(page.rules, [].concat(page.include || options.include));
        }
        if (options.onFrameReady) {
            options.onFrameReady(worker);
        }
        if (isValidURL(page, view.contentDocument.URL)) {
            attach(worker, view.contentWindow);
        }
        view.removeEventListener('load', frameIsReady, true);
    }
    view.addEventListener('load', frameIsReady, true);
    view.setAttribute('src', uri);
  },
  get allow() { return Allow(this); },
  set allow(value) {
    let allowJavascript = pageContract({ allow: value }).allow.script;
    return allowJavascript ? enableScript(this) : disableScript(this);
  },
  get contentURL() { return viewFor(this).getAttribute("data-src") },
  set contentURL(value) {
    if (!isValidURL(this, value)) return;
    let view = viewFor(this);
    let contentURL = pageContract({ contentURL: value }).contentURL;

    // page-worker doesn't have a model like other APIs, so to be consitent
    // with the behavior "what you set is what you get", we need to store
    // the original `contentURL` given.
    // Even if XUL elements doesn't support `dataset`, properties, to
    // indicate that is a custom attribute the syntax "data-*" is used.
    view.setAttribute('data-src', contentURL);
    view.setAttribute('src', data.url(contentURL));
  },
  dispose: function () {
    if (isDisposed(this)) return;
    let view = viewFor(this);
    if (view.parentNode) view.parentNode.removeChild(view);
    views.delete(this);
    destroy(workers.get(this));
  },
  toString: function () { return '[object Frame]' }
});

exports.Frame = Frame;

/*
 * Takes a document, finds its doc shell tree root and returns the
 * matching Page instance if found
 */
function pageFromDoc(doc) {
  let parentWindow = getParentWindow(doc.defaultView), page;
  if (!parentWindow) return;

  let frames = parentWindow.document.getElementsByTagName('iframe');
  for (let i = frames.length; i--;)
    if (frames[i].contentDocument === doc && (page = pageFor(frames[i])))
      return page;
  return null;
}

getActiveView.define(Frame, viewFor);
