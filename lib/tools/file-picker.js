"use strict";

const {Ci, Cc, Cu} = require("chrome");

exports.showFilePicker = function showFilePicker(window, title, mode, defaultDirPrefName, handler) {
	var nsIFilePicker = Ci.nsIFilePicker;
	var fp = Cc["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);

	fp.init(window, title, mode);
	fp.defaultExtension = ".csv";
	fp.defaultString = "opquast.csv";

	var res = fp.show();
	if(res == nsIFilePicker.returnOK || res == nsIFilePicker.returnReplace) {
		return handler(fp);
	} else {
		return null;
	}
}