/*jshint asi:true globalstrict:true*/

'use strict';

// Workaround for Bug 785891
// and sugar around: https://developer.mozilla.org/en-US/docs/XPCOM_Interface_Reference/nsIComponentManager#addBootstrappedManifestLocation%28

let { Cc, Ci, Cm } = require('chrome')
let ioService = Cc['@mozilla.org/network/io-service;1'].
                getService(Ci.nsIIOService)
let { pathFor } = require('api-utils/system')

function makeURI(uri) {
  try { return ioService.newURI(uri, null, null) }
  catch (error) { return null }
}

function nsIURI(location) {
  return !location ? null :
         location instanceof Ci.nsIURI ? location :
         makeURI(location) || makeURI('file://'  + location)
}

function createMappingEntry(root, section) {
  // Create path to directory in the profile associated with mapping being
  // registered:
  // foo, file://path/to/foo, content -> `chrome.manifest.content.foo`
  let path = pathFor('ProfLD') + '/chrome.manifest.' + section + '.' + root
  let directory = Cc['@mozilla.org/file/local;1'].
                  createInstance(Ci.nsILocalFile)
  directory.initWithPath(path)

  return directory
}

function set(root, uri, section) {
  /**
  Registers mapping for the chrome URI. If `uri` is `null` and mapping was
  registered through this API, registered mapping will be unregistered.
  Example:

      chrome_map.set('foo', 'file:///path/to/foo/', 'content')

  Supported sections values are:
  - `content`
  - `locale`
  - `skin`

  If `section` is omitted, then `content` is used.
  **/
  uri = nsIURI(uri).spec

  section = section || 'content'
  let directory = createMappingEntry(root, section)
  if (uri) {
    let mapping = section + ' ' + root + ' ' + uri + '\n'
    // Remove directory in case it already there
    if (directory.exists()) directory.remove(true)
    // Create directory and `chrome.manifest` file in it.
    directory.create(Ci.nsIFile.DIRECTORY_TYPE, parseInt('0777', 8))
    let file = directory.clone()
    file.append('chrome.manifest')
    file.create(Ci.nsIFile.NORMAL_FILE_TYPE, parseInt('0666', 8))
    let stream = Cc["@mozilla.org/network/file-output-stream;1"].
                 createInstance(Ci.nsIFileOutputStream)
    stream.init(file, 0x02, parseInt('0666', 8, 0), 0)
    stream.write(mapping, mapping.length)
    stream.flush()
    stream.close()
    Cm.addBootstrappedManifestLocation(directory)
  }
  else {
    Cm.removeBootstrappedManifestLocation(directory)
    directory.remove(true)
  }
}
exports.set = set
