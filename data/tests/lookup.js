const dnsService = Components.classes["@mozilla.org/network/dns-service;1"].createInstance(Components.interfaces.nsIDNSService);
const ioService = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);

function lookup(domain) {
	return dnsService.resolve(domain, 0);
}

function _makeURI(spec, base) {
	if(base) {
		return ioService.newURI(spec, null, ioService.newURI(base, null, null));
	} else {
		return ioService.newURI(spec, null, null);
	}
}

function resolveURI(spec, base) {
	try {
		return _makeURI(spec, base).spec;
	} catch(e) {
		return null;
	}
}

function getDomain(uri) {
	try {
		return _makeURI(uri, null).host;
	} catch(e) {
		return null;
	}
}