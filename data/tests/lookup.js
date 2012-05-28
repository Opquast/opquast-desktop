const dnsService = Components.classes["@mozilla.org/network/dns-service;1"].createInstance(Components.interfaces.nsIDNSService);
const ioService = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);

function lookup(domain) {
	return dnsService.resolve(domain, 0);
}