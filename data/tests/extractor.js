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

const xhrMephisto = Components.classes["@mozilla.org/xmlextras/xmlhttprequest;1"].getService(Components.interfaces.nsIXMLHttpRequest);

var links = [], images = [], body;

(function($) {
	body = $('body', document);

	function encoded(val) {
		if (val !== undefined && val !== null) {
			val = unescape(encodeURIComponent(val));
		}
		return val;
	}

	function get_stats(root) {
		return {
			'tables' : $('table', root).length,
			'data_tables' : $('table:has(th, summary)', root).length,
			'forms' : $('form', root).length,
			'lists' : $('ul, ol, dl', root).length,
			'lists_ul' : $('ul', root).length,
			'lists_ol' : $('ol', root).length,
			'lists_dl' : $('dl', root).length,
			'applet' : $('applet', root).length,
			'embed' : $('embed', root).length,
			'object' : $('object', root).length,
			'styles' : {
				'font' : $('font', root).length,
				'tt' : $('tt', root).length,
				'i' : $('i', root).length,
				'b' : $('b', root).length,
				'big' : $('big', root).length,
				'small' : $('small', root).length,
				'strike' : $('strike', root).length,
				's' : $('s', root).length,
				'u' : $('u', root).length
			}
		}
	}

	var link_selection = $('head link[href][rel], body a[href]:not([href^="#"])').each(function() {
		var tag = this.tagName.toLowerCase();
		var label = tag == 'link' && this.getAttribute('title') || this.textContent;
		links.push({
			'tag' : tag,
			'uri' : this.href,
			'href' : encoded(this.getAttribute('href')),
			'label' : encoded(label),
			'rel' : encoded(this.getAttribute('rel')),
			'type' : encoded(this.getAttribute('type'))
		});
	});

	var img_selection = $('img[src]', body).each(function() {
		images.push({
			'uri' : this.src,
			'src' : encoded(this.getAttribute('src')),
			'alt' : encoded(this.getAttribute('alt')),
			'longdesc' : encoded(this.getAttribute('longdesc')),
			'width' : encoded(this.getAttribute('width')),
			'height' : encoded(this.getAttribute('height'))
		})
	});

	var title = $('head>title');
	if (title.length == 0) {
		title = null;
	} else {
		title = encoded(title.text());
	}

	var objects = $('object, embed', body).each(function() {
		var unknown = true, src;

		if ($(this).attr('data')) {
			src = $(this).attr('data');
		} else if ($(this).attr('src')) {
			src = $(this).attr('src');
		} else {
			$("param", this).each(function() {
				var name = $(this).attr('name').toLowerCase();
				if ($.inArray(name, ["src", "movie"]) != -1) {
					src = $(this).attr('value');
				}
			});
		}

		if (src) {
			var a = document.createElement('a');
			a.href = src;
			src = a.href;

			if (unknown) {
				function loadObject(aEvent) {
					var headers = {};
					var _headers = aEvent.target.getAllResponseHeaders().split("\n");

					for (var i in _headers) {
						var _header = _headers[i].split(":");

						try {
							var key = _header[0].toLowerCase();
							_header.shift();
							var value = $.trim(_header.join(":"));

							if (value != "") {
								headers[key] = value.toString();
							}
						} catch(e) {
						}
					}

					sidecar.resources.push({
						"uri" : src,
						"referrer" : document.location.href,
						"method" : "HEAD",
						"status" : aEvent.target.status,
						"status_text" : aEvent.target.statusText,
						"date" : aEvent.target.getResponseHeader("date"),
						"modified" : aEvent.target.getResponseHeader("last-modified"),
						"expires" : aEvent.target.getResponseHeader("expires"),
						"content_type" : aEvent.target.getResponseHeader("content-type").split(";")[0],
						"charset" : null,
						"size" : 0,
						"headers" : headers,
						"stop_time" : 0,
						"start_time" : 0,
						"transfer_time" : 0
					});

					xhrMephisto.removeEventListener("load", loadObject, false);
				}


				xhrMephisto.addEventListener("load", loadObject, false);

				xhrMephisto.open("HEAD", src, false);

				xhrMephisto.send(null);
			}
		}
	});

	//
	var stats = get_stats(body);
	stats['images'] = images.length;
	stats['links'] = links.length;

	window._extractor_result = {
		'link_selection' : link_selection,
		'img_selection' : img_selection
	};

	result = {
		'title' : title,
		'links' : links,
		'images' : images,
		'stats' : stats,
		'resources': sidecar.resources
	};

	$.extend(window._extractor_result, result);

	return result;
})(jQueryMephisto);
