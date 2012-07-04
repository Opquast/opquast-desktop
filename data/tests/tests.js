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

/*global xhrMephisto, CSSParser*/
var langs = ['aa', 'aa-DJ', 'aa-ER', 'aa-ER-SAAHO', 'aa-ET', 'af', 'af-NA', 'af-ZA', 'ak', 'ak-GH', 'am', 'am-ET', 'ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-OM', 'ar-QA', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'as', 'as-IN', 'az', 'az-AZ', 'az-Cyrl', 'az-Cyrl-AZ', 'az-Latn', 'az-Latn-AZ', 'be', 'be-BY', 'bg', 'bg-BG', 'bn', 'bn-BD', 'bn-IN', 'bs', 'bs-BA', 'byn', 'byn-ER', 'ca', 'ca-ES', 'cch', 'cch-NG', 'cop', 'cs', 'cs-CZ', 'cy', 'cy-GB', 'da', 'da-DK', 'de', 'de-AT', 'de-BE', 'de-CH', 'de-DE', 'de-LI', 'de-LU', 'dv', 'dv-MV', 'dz', 'dz-BT', 'ee', 'ee-GH', 'ee-TG', 'el', 'el-CY', 'el-GR', 'el-POLYTON', 'en', 'en-AS', 'en-AU', 'en-BE', 'en-BW', 'en-BZ', 'en-CA', 'en-Dsrt', 'en-Dsrt-US', 'en-GB', 'en-GU', 'en-HK', 'en-IE', 'en-IN', 'en-JM', 'en-MH', 'en-MP', 'en-MT', 'en-NA', 'en-NZ', 'en-PH', 'en-PK', 'en-SG', 'en-Shaw', 'en-TT', 'en-UM', 'en-US', 'en-US-POSIX', 'en-VI', 'en-ZA', 'en-ZW', 'eo', 'es', 'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-ES', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PE', 'es-PR', 'es-PY', 'es-SV', 'es-US', 'es-UY', 'es-VE', 'et', 'et-EE', 'eu', 'eu-ES', 'fa', 'fa-AF', 'fa-IR', 'fi', 'fi-FI', 'fil', 'fil-PH', 'fo', 'fo-FO', 'fr', 'fr-BE', 'fr-CA', 'fr-CH', 'fr-FR', 'fr-LU', 'fr-MC', 'fr-SN', 'fur', 'fur-IT', 'ga', 'ga-IE', 'gaa', 'gaa-GH', 'gez', 'gez-ER', 'gez-ET', 'gl', 'gl-ES', 'gu', 'gu-IN', 'gv', 'gv-GB', 'ha', 'ha-Arab', 'ha-Arab-NG', 'ha-Arab-SD', 'ha-GH', 'ha-Latn', 'ha-Latn-GH', 'ha-Latn-NE', 'ha-Latn-NG', 'ha-NE', 'ha-NG', 'ha-SD', 'haw', 'haw-US', 'he', 'he-IL', 'hi', 'hi-IN', 'hr', 'hr-HR', 'hu', 'hu-HU', 'hy', 'hy-AM', 'hy-AM-REVISED', 'ia', 'id', 'id-ID', 'ig', 'ig-NG', 'ii', 'ii-CN', 'in', 'is', 'is-IS', 'it', 'it-CH', 'it-IT', 'iu', 'iw', 'ja', 'ja-JP', 'ka', 'ka-GE', 'kaj', 'kaj-NG', 'kam', 'kam-KE', 'kcg', 'kcg-NG', 'kfo', 'kfo-CI', 'kk', 'kk-Cyrl', 'kk-Cyrl-KZ', 'kk-KZ', 'kl', 'kl-GL', 'km', 'km-KH', 'kn', 'kn-IN', 'ko', 'ko-KR', 'kok', 'kok-IN', 'kpe', 'kpe-GN', 'kpe-LR', 'ku', 'ku-Arab', 'ku-Latn', 'ku-Latn-TR', 'ku-TR', 'kw', 'kw-GB', 'ky', 'ky-KG', 'ln', 'ln-CD', 'ln-CG', 'lo', 'lo-LA', 'lt', 'lt-LT', 'lv', 'lv-LV', 'mk', 'mk-MK', 'ml', 'ml-IN', 'mn', 'mn-CN', 'mn-Cyrl', 'mn-Cyrl-MN', 'mn-MN', 'mn-Mong', 'mn-Mong-CN', 'mo', 'mr', 'mr-IN', 'ms', 'ms-BN', 'ms-MY', 'mt', 'mt-MT', 'my', 'my-MM', 'nb', 'nb-NO', 'ne', 'ne-IN', 'ne-NP', 'nl', 'nl-BE', 'nl-NL', 'nn', 'nn-NO', 'no', 'nr', 'nr-ZA', 'nso', 'nso-ZA', 'ny', 'ny-MW', 'om', 'om-ET', 'om-KE', 'or', 'or-IN', 'pa', 'pa-Arab', 'pa-Arab-PK', 'pa-Guru', 'pa-Guru-IN', 'pa-IN', 'pa-PK', 'pl', 'pl-PL', 'ps', 'ps-AF', 'pt', 'pt-BR', 'pt-PT', 'ro', 'ro-MD', 'ro-RO', 'ru', 'ru-RU', 'ru-UA', 'rw', 'rw-RW', 'sa', 'sa-IN', 'se', 'se-FI', 'se-NO', 'sh', 'sh-BA', 'sh-CS', 'sh-YU', 'si', 'si-LK', 'sid', 'sid-ET', 'sk', 'sk-SK', 'sl', 'sl-SI', 'so', 'so-DJ', 'so-ET', 'so-KE', 'so-SO', 'sq', 'sq-AL', 'sr', 'sr-BA', 'sr-CS', 'sr-Cyrl', 'sr-Cyrl-BA', 'sr-Cyrl-CS', 'sr-Cyrl-ME', 'sr-Cyrl-RS', 'sr-Cyrl-YU', 'sr-Latn', 'sr-Latn-BA', 'sr-Latn-CS', 'sr-Latn-ME', 'sr-Latn-RS', 'sr-Latn-YU', 'sr-ME', 'sr-RS', 'sr-YU', 'ss', 'ss-SZ', 'ss-ZA', 'st', 'st-LS', 'st-ZA', 'sv', 'sv-FI', 'sv-SE', 'sw', 'sw-KE', 'sw-TZ', 'syr', 'syr-SY', 'ta', 'ta-IN', 'te', 'te-IN', 'tg', 'tg-Cyrl', 'tg-Cyrl-TJ', 'tg-TJ', 'th', 'th-TH', 'ti', 'ti-ER', 'ti-ET', 'tig', 'tig-ER', 'tl', 'tn', 'tn-ZA', 'to', 'to-TO', 'tr', 'tr-TR', 'trv', 'ts', 'ts-ZA', 'tt', 'tt-RU', 'ug', 'ug-Arab', 'ug-Arab-CN', 'ug-CN', 'uk', 'uk-UA', 'ur', 'ur-IN', 'ur-PK', 'uz', 'uz-AF', 'uz-Arab', 'uz-Arab-AF', 'uz-Cyrl', 'uz-Cyrl-UZ', 'uz-Latn', 'uz-Latn-UZ', 'uz-UZ', 've', 've-ZA', 'vi', 'vi-VN', 'wal', 'wal-ET', 'wo', 'wo-Latn', 'wo-Latn-SN', 'wo-SN', 'xh', 'xh-ZA', 'yo', 'yo-NG', 'zh', 'zh-CN', 'zh-Hans', 'zh-Hans-CN', 'zh-Hans-HK', 'zh-Hans-MO', 'zh-Hans-SG', 'zh-Hant', 'zh-Hant-HK', 'zh-Hant-MO', 'zh-Hant-TW', 'zh-HK', 'zh-MO', 'zh-SG', 'zh-TW', 'zu', 'zu-ZA'];
var regFunction = RegExp().compile("([^\\s:{]*)\\(", "i"), badLinks = ['cliquez ici', 'lire la suite', 'en savoir plus', "plus d'infos"];
var cdns = RegExp().compile("^(https?://(ajax.googleapis.com/ajax/libs/|ajax.aspnetcdn.com/ajax/|yui.yahooapis.com/)|(https://ssl|http://www).google-analytics.com/)", "i");
var jsFrameworks = RegExp().compile("/(dojo|ext-core|jquery|jquery-ui|mootools(-(c|m)ore)?|piwik|prototype|modernizr|xtcore|yui).js(\\?[-\\.v0-9]+)?$", "i");
var inlineStyles = jQueryMephisto("*[style]"), onfocusEvents = jQueryMephisto("*[onfocus]"), onblurEvents = jQueryMephisto("*[onblur]"), onchangeEvents = jQueryMephisto("*[onchange]"), onclickEvents = jQueryMephisto("*[onclick]"), onmouseoverEvents = jQueryMephisto("*[onmouseover]"), onmouseoutEvents = jQueryMephisto("*[onmouseout]");

/**
 *
 * @param doc
 * @return
 */
function mobileCss(doc) {
	//
	var result = [];

	//
	try {
		//
		var sheets = doc.styleSheets;

		// sheets walk
		for (var i = 0; i < sheets.length; i++) {
			//
			var sheet = sheets.item(i);

			// media walk
			for (var j = 0; j < sheet.media.length; j++) {
				//
				var _media = sheet.media.item && sheet.media.item(j) || sheet.media[j];
				if (_media.startsWith("screen") || _media.startsWith("only screen")) {
					result.push(sheet.href);
				}
			}

			//
			var rules = sheet.cssRules;

			// rules walk
			for (var j = 0; j < rules.length; j++) {
				if (rules.item(j).type == CSSRule.MEDIA_RULE) {
					// media walk
					for (var k = 0; k < rules.media; k++) {
						//
						var _media = sheet._extra["media"].item && sheet._extra["media"].item(k) || sheet._extra["media"][k];
						if (_media.startsWith("screen") || _media.startsWith("only screen")) {
							result.push(sheet.href);
						}
					}
				}
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("mobileCss", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssNumberOfFonts(doc) {
	//
	var result = [];

	//
	function callback(rule) {
		//
		var result = [];

		//
		if (rule && rule.parentStyleSheet && rule.declarations) {
			//
			for (var i = 0; i < rule.declarations.length; i++) {
				//
				if (rule.declarations[i]["property"] == "font-family" && rule.declarations[i]["valueText"] != "inherit") {
					//
					result.push(rule.declarations[i]["valueText"]);
				}
			}
		}

		//
		return result;
	}

	//
	try {
		//
		result = _analyseStylesheets(doc, "screen", callback);

		// inline style walk
		inlineStyles.each(function() {
			//
			var parser = new CSSParser(), sheet = parser.parse(".style{" + jQueryMephisto(this).attr("style") + "}", false, false), item = this;

			//
			sheet.resolveVariables("screen");

			//
			var rules = sheet.cssRules;

			// rules walk
			for (var k = 0; k < rules.length; k++) {
				//
				var rule = rules[k];

				//
				if (rule && rule.declarations) {
					//
					for (var i = 0; i < rule.declarations.length; i++) {
						//
						if (rule.declarations[i]["property"] == "font-family" && rule.declarations[i]["valueText"] != "inherit") {
							//
							result.push(rule.declarations[i]["valueText"]);
						}
					}
				}
			}
		});

		//
		jQueryMephisto.unique(result);

		//
		if (result.length <= 3) {
			result = [];
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssNumberOfFonts", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssAbsoluteFontSize(doc) {
	//
	var result = [], reg = new RegExp().compile("[0-9.]+(p(t|c|x)|(c|m)m|in)", "i");

	//
	function callback(rule) {
		//
		var result = [];

		//
		if (rule && rule.parentStyleSheet && rule.declarations) {
			//
			for (var i = 0; i < rule.declarations.length; i++) {
				//
				if (rule.declarations[i]["property"] == "font-size" && rule.declarations[i]["valueText"].match(reg)) {
					//
					result.push(_getCssDetails(rule, i));
				}
			}
		}

		//
		return result;
	}

	//
	try {
		//
		result = _analyseStylesheets(doc, "screen", callback);

		// inline style walk
		inlineStyles.each(function() {
			//
			var parser = new CSSParser(), sheet = parser.parse(".style{" + jQueryMephisto(this).attr("style") + "}", false, false), item = this;

			//
			sheet.resolveVariables("screen");

			//
			var rules = sheet.cssRules;

			// rules walk
			for (var k = 0; k < rules.length; k++) {
				//
				var rule = rules[k];

				//
				if (rule && rule.declarations) {
					//
					for (var i = 0; i < rule.declarations.length; i++) {
						//
						if (rule.declarations[i]["property"] == "font-size" && rule.declarations[i]["valueText"].match(reg)) {
							//
							result.push(_getInlineCssDetails(rule, i, item));
						}
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssAbsoluteFontSize", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssAbsoluteFontSizeOnScreen(doc) {
	//
	var result = [], reg = new RegExp().compile("[0-9.]+(p(t|c)|(c|m)m|in)", "i");

	//
	function callback(rule) {
		//
		var result = [];

		//
		if (rule && rule.parentStyleSheet && rule.declarations) {
			//
			for (var i = 0; i < rule.declarations.length; i++) {
				//
				if (rule.declarations[i]["property"] == "font-size" && rule.declarations[i]["valueText"].match(reg)) {
					//
					result.push(_getCssDetails(rule, i));
				}
			}
		}

		//
		return result;
	}

	//
	try {
		//
		result = _analyseStylesheets(doc, "screen", callback).concat(_analyseStylesheets(doc, "tv", callback), _analyseStylesheets(doc, "handheld", callback), _analyseStylesheets(doc, "projection", callback));
		result = result.filter(function(element, index) {
			var occurences = 0;
			for (var i = index; i < result.length; i++) {
				var item = result[i];
				if (element.line == item.line && element.href == item.href && element.rule == item.rule && element.selector == item.selector) {
					occurences++;
				}
			}
			return occurences < 2;
		});

		// inline style walk
		inlineStyles.each(function() {
			//
			var parser = new CSSParser(), sheet = parser.parse(".style{" + jQueryMephisto(this).attr("style") + "}", false, false), item = this;

			//
			sheet.resolveVariables("screen");

			//
			var rules = sheet.cssRules;

			// rules walk
			for (var k = 0; k < rules.length; k++) {
				//
				var rule = rules[k];

				//
				if (rule && rule.declarations) {
					//
					for (var i = 0; i < rule.declarations.length; i++) {
						//
						if (rule.declarations[i]["property"] == "font-size" && rule.declarations[i]["valueText"].match(reg)) {
							//
							result.push(_getInlineCssDetails(rule, i, item));
						}
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssAbsoluteFontSizeOnScreen", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssAbsoluteFontSizeInForm(doc) {
	//
	var result = [], reg = new RegExp().compile("[0-9.]+(p(t|c|x)|(c|m)m|in)", "i");

	//
	function callback(rule) {
		//
		var result = [];

		///
		if (rule && rule.parentStyleSheet && rule.declarations) {
			//
			for (var i = 0; i < rule.declarations.length; i++) {
				//
				if (rule.declarations[i]["property"] == "font-size" && rule.declarations[i]["valueText"].match(reg)) {
					//
					jQueryMephisto(rule.mSelectorText).each(function() {
						//
						if (jQueryMephisto.inArray(this.tagName.toUpperCase(), ["BUTTON", "INPUT", "SELECT", "TEXTAREA"]) != -1) {
							//
							result.push(_getCssDetails(rule, i));

							// break
							return false;
						}
					});
				}
			}
		}

		//
		return result;
	}

	//
	try {
		//
		result = _analyseStylesheets(doc, "screen", callback).concat(_analyseStylesheets(doc, "tv", callback), _analyseStylesheets(doc, "handheld", callback), _analyseStylesheets(doc, "projection", callback));
		result = result.filter(function(element, index) {
			var occurences = 0;
			for (var i = index; i < result.length; i++) {
				var item = result[i];
				if (element.line == item.line && element.href == item.href && element.rule == item.rule && element.selector == item.selector) {
					occurences++;
				}
			}
			return occurences < 2;
		});

		// inline style walk
		jQueryMephisto("button[style], input[style], select[style], textarea[style]").each(function() {
			//
			var parser = new CSSParser(), sheet = parser.parse(".style{" + jQueryMephisto(this).attr("style") + "}", false, false), item = this;

			//
			sheet.resolveVariables("screen");

			//
			var rules = sheet.cssRules;

			// rules walk
			for (var k = 0; k < rules.length; k++) {
				//
				var rule = rules[k];

				//
				if (rule && rule.declarations) {
					//
					for (var i = 0; i < rule.declarations.length; i++) {
						//
						if (rule.declarations[i]["property"] == "font-size" && rule.declarations[i]["valueText"].match(reg)) {
							//
							result.push(_getInlineCssDetails(rule, i, item));
						}
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssAbsoluteFontSizeInForm", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssDirection(doc) {
	//
	var result = [];

	//
	function callback(rule) {
		//
		var result = [];

		//
		if (rule && rule.parentStyleSheet && rule.declarations) {
			//
			for (var i = 0; i < rule.declarations.length; i++) {
				//
				if (rule.declarations[i]["property"] == "direction") {
					//
					result.push(_getCssDetails(rule, i));
				}
			}
		}

		//
		return result;
	}

	//
	try {
		//
		result = _analyseStylesheets(doc, "screen", callback);

		// inline style walk
		inlineStyles.each(function() {
			//
			var parser = new CSSParser(), sheet = parser.parse(".style{" + jQueryMephisto(this).attr("style") + "}", false, false), item = this;

			//
			sheet.resolveVariables("screen");

			//
			var rules = sheet.cssRules;

			// rules walk
			for (var k = 0; k < rules.length; k++) {
				//
				var rule = rules[k];

				//
				if (rule && rule.declarations) {
					//
					for (var i = 0; i < rule.declarations.length; i++) {
						//
						if (rule.declarations[i]["property"] == "direction") {
							//
							result.push(_getInlineCssDetails(rule, i, item));
						}
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssDirection", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssBackgroundColorWoColor(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("body").find(":not(input[type='hidden'])").andSelf().filter(function() {
			//
			var _backgroundColor = jQueryMephisto(this).css("background-color");
			var _color = jQueryMephisto(this).css("color");

			//
			if (_color == "rgb(0, 0, 0)") {
				//
				jQueryMephisto(this).parents().each(function(index, Element) {
					//
					var _parentColor = jQueryMephisto(this).css("color");

					if (_parentColor != "rgb(0, 0, 0)") {
						_color = _parentColor;
						return false;
					}
				});
			}

			//
			if (_backgroundColor != "transparent" && _color == "rgb(0, 0, 0)" && jQueryMephisto(this).clone().children().remove().end().text().trim() != '') {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssBackgroundColorWoColor", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssColorWoBackgroundColor(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("body").find(":not(input[type='hidden'])").andSelf().filter(function() {
			//
			var _backgroundColor = jQueryMephisto(this).css("background-color");
			var _color = jQueryMephisto(this).css("color");

			//
			if (_backgroundColor == "transparent") {
				//
				jQueryMephisto(this).parents().each(function(index, Element) {
					//
					var _parentBackgroundColor = jQueryMephisto(this).css("background-color");

					if (_parentBackgroundColor != "transparent") {
						_backgroundColor = _parentBackgroundColor;
						return false;
					}
				});
			}

			//
			if (_backgroundColor == "transparent" && _color != "rgb(0, 0, 0)" && jQueryMephisto(this).clone().children().remove().end().text().trim() != '') {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssColorWoBackgroundColor", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssBackgroundImageWoBackgroundColor(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("body").find(":not(input[type='hidden'])").andSelf().filter(function() {
			//
			var _backgroundColor = jQueryMephisto(this).css("background-color");
			var _backgroundImage = jQueryMephisto(this).css("background-image");

			//
			if (_backgroundColor == "transparent") {
				//
				jQueryMephisto(this).parents().each(function(index, Element) {
					//
					var _parentBackgroundColor = jQueryMephisto(this).css("background-color");

					if (_parentBackgroundColor != "transparent") {
						_backgroundColor = _parentBackgroundColor;
						return false;
					}
				});
			}

			//
			if (_backgroundColor == "transparent" && _backgroundImage != "none") {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssBackgroundImageWoBackgroundColor", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssDisplayNone(doc) {
	//
	var result = [];

	//
	function callback(rule) {
		//
		var result = [];

		//
		if (rule && rule.parentStyleSheet && rule.declarations) {
			//
			for (var i = 0; i < rule.declarations.length; i++) {
				//
				if (rule.declarations[i]["property"] == "display" && rule.declarations[i]["valueText"] == "none") {
					//
					result.push(_getCssDetails(rule, i));
				}
			}
		}

		//
		return result;
	}

	//
	try {
		//
		result = _analyseStylesheets(doc, "screen", callback);

		// inline style walk
		inlineStyles.each(function() {
			//
			var parser = new CSSParser(), sheet = parser.parse(".style{" + jQueryMephisto(this).attr("style") + "}", false, false), item = this;

			//
			sheet.resolveVariables("screen");

			//
			var rules = sheet.cssRules;

			// rules walk
			for (var k = 0; k < rules.length; k++) {
				//
				var rule = rules[k];

				//
				if (rule && rule.declarations) {
					//
					for (var i = 0; i < rule.declarations.length; i++) {
						//
						if (rule.declarations[i]["property"] == "display" && rule.declarations[i]["valueText"] == "none") {
							//
							result.push(_getInlineCssDetails(rule, i, item));
						}
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssDisplayNone", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssDisplayNone(doc) {
	//
	var result = [];

	//
	function callback(rule) {
		//
		var result = [];

		//
		if (rule && rule.parentStyleSheet && rule.declarations) {
			//
			for (var i = 0; i < rule.declarations.length; i++) {
				//
				if (rule.declarations[i]["property"] == "display" && rule.declarations[i]["valueText"] == "none") {
					//
					result.push(_getCssDetails(rule, i));
				}
			}
		}

		//
		return result;
	}

	//
	try {
		//
		result = _analyseStylesheets(doc, "screen", callback);

		// inline style walk
		inlineStyles.each(function() {
			//
			var parser = new CSSParser(), sheet = parser.parse(".style{" + jQueryMephisto(this).attr("style") + "}", false, false), item = this;

			//
			sheet.resolveVariables("screen");

			//
			var rules = sheet.cssRules;

			// rules walk
			for (var k = 0; k < rules.length; k++) {
				//
				var rule = rules[k];

				//
				if (rule && rule.declarations) {
					//
					for (var i = 0; i < rule.declarations.length; i++) {
						//
						if (rule.declarations[i]["property"] == "display" && rule.declarations[i]["valueText"] == "none") {
							//
							result.push(_getInlineCssDetails(rule, i, item));
						}
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssDisplayNone", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssVisibilityHidden(doc) {
	//
	var result = [];

	//
	function callback(rule) {
		//
		var result = [];

		//
		if (rule && rule.parentStyleSheet && rule.declarations) {
			//
			for (var i = 0; i < rule.declarations.length; i++) {
				//
				if (rule.declarations[i]["property"] == "visibility" && rule.declarations[i]["valueText"] == "hidden") {
					//
					result.push(_getCssDetails(rule, i));
				}
			}
		}

		//
		return result;
	}

	//
	try {
		//
		result = _analyseStylesheets(doc, "screen", callback);

		// inline style walk
		inlineStyles.each(function() {
			//
			var parser = new CSSParser(), sheet = parser.parse(".style{" + jQueryMephisto(this).attr("style") + "}", false, false), item = this;

			//
			sheet.resolveVariables("screen");

			//
			var rules = sheet.cssRules;

			// rules walk
			for (var k = 0; k < rules.length; k++) {
				//
				var rule = rules[k];

				//
				if (rule && rule.declarations) {
					//
					for (var i = 0; i < rule.declarations.length; i++) {
						//
						if (rule.declarations[i]["property"] == "visibility" && rule.declarations[i]["valueText"] == "hidden") {
							//
							result.push(_getInlineCssDetails(rule, i, item));
						}
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssVisibilityHidden", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssHoverLinks(doc) {
	//
	var result = [], reg = new RegExp().compile("(^| )(a((#|\\.)[^ ]+)?|(#|\\.)[^ ]+):hover$", "i"), reg2 = new RegExp().compile("^(font|border|margin|padding)-[-a-z]+$", "i");

	//
	function callback(rule) {
		//
		var result = [], rules = [];

		//
		if (rule && rule.parentStyleSheet && rule.declarations) {
			//
			for (var i = 0; i < rule.declarations.length; i++) {
				//
				if (rule.mSelectorText.match(reg)) {
					//
					for each (selector in rule.mSelectorText.split(",")) {
						//
						if (selector.match(reg)) {
							//
							var selectorWoHover = selector.replace(/:hover$/, "");

							//
							jQueryMephisto(selectorWoHover).each(function() {
								//
								if (this.tagName.toUpperCase() == "A") {
									//
									if (rule.declarations[i]["property"].match(reg2)) {
										//
										if (rule.declarations[i]["valueText"] != jQueryMephisto(this).css(rule.declarations[i]["property"])) {
											//
											result.push(_getCssDetails(rule, i));
										}
									}
								}
							});
						}
					}
				}
			}
		}

		//
		return result;
	}

	//
	try {
		//
		result = _analyseStylesheets(doc, "screen", callback);
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssHoverLinks", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssPixelFontSize(doc) {
	//
	var result = [], reg = new RegExp().compile("[0-9.]+px", "i");

	//
	function callback(rule) {
		//
		var result = [];

		//
		if (rule && rule.parentStyleSheet && rule.declarations) {
			//
			for (var i = 0; i < rule.declarations.length; i++) {
				//
				if (rule.declarations[i]["property"] == "font-size" && rule.declarations[i]["valueText"].match(reg)) {
					//
					result.push(_getCssDetails(rule, i));
				}
			}
		}

		//
		return result;
	}

	//
	try {
		//
		result = _analyseStylesheets(doc, "screen", callback);

		// inline style walk
		inlineStyles.each(function() {
			//
			var parser = new CSSParser(), sheet = parser.parse(".style{" + jQueryMephisto(this).attr("style") + "}", false, false), item = this;

			//
			sheet.resolveVariables("screen");

			//
			var rules = sheet.cssRules;

			// rules walk
			for (var k = 0; k < rules.length; k++) {
				//
				var rule = rules[k];

				//
				if (rule && rule.declarations) {
					//
					for (var i = 0; i < rule.declarations.length; i++) {
						//
						if (rule.declarations[i]["property"] == "font-size" && rule.declarations[i]["valueText"].match(reg)) {
							//
							result.push(_getInlineCssDetails(rule, i, item));
						}
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssPixelFontSize", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function utf8(doc) {
	//
	var result = [];

	//
	try {
		//
		if (doc.characterSet.toLowerCase() == "utf-8") {
			result.push("utf-8");
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("utf8", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function rightCharset(doc) {
	//
	var result = [], reg = new RegExp().compile("[\xC2-\xDF][\x80-\xBF]|\xE0[\xA0-\xBF][\x80-\xBF]|[\xE1-\xEC\xEE\xEF][\x80-\xBF]{2}|\xED[\x80-\x9F][\x80-\xBF]|\xF0[\x90-\xBF][\x80-\xBF]{2}|[\xF1-\xF3][\x80-\xBF]{3}|\xF4[\x80-\x8F][\x80-\xBF]{2}", "m");

	//
	try {
		//
		if (!(reg.test(jQueryMephisto("body").text()))) {
			result.push(doc.characterSet);
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("rightCharset", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlLanguage(doc) {
	//
	var result = [];

	//
	try {
		//
		var _lang = jQueryMephisto.trim(jQueryMephisto("html").attr("lang")), _xml_lang = jQueryMephisto.trim(jQueryMephisto("html").attr("xml:lang"));

		//
		if (_lang != '' || _xml_lang != '') {
			result.push(_getDetails(jQueryMephisto("html").get(0)));
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlLanguage", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlValidLanguage(doc) {
	//
	var result = [];

	//
	try {
		//
		var _lang = jQueryMephisto.trim(jQueryMephisto("html").attr("lang")), _xml_lang = jQueryMephisto.trim(jQueryMephisto("html").attr("xml:lang"));

		//
		if (jQueryMephisto.inArray(_lang, langs) != -1 || jQueryMephisto.inArray(_xml_lang, langs) != -1) {
			result.push(_getDetails(jQueryMephisto("html").get(0)));
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlValidLanguage", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlSpaceBetweenLetters(doc) {
	//
	var result = [], reg = new RegExp().compile("(\s+[A-Za-z]){3,}", "i");

	//
	try {
		//
		jQueryMephisto("pre").each(function() {
			//
			if (re.test(jQueryMephisto(this).text())) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlSpaceBetweenLetters", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlElementLanguage(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("*[lang], *[xml\\:lang]").each(function() {
			//
			var _lang = jQueryMephisto.trim(jQueryMephisto(this).attr("lang")), _xml_lang = jQueryMephisto.trim(jQueryMephisto(this).attr("xml:lang"));

			//
			if ((jQueryMephisto(this).attr("lang") != undefined && jQueryMephisto.inArray(_lang, langs) == -1) || (jQueryMephisto(this).attr("xml:lang") != undefined && jQueryMephisto.inArray(_xml_lang, langs) == -1)) {
				result.push(_getDetails(jQueryMephisto(this).get(0)));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlElementLanguage", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlSpaceBetweenLetters(doc) {
	//
	var result = [], reg = new RegExp().compile("(\s+[A-Za-z]){3,}", "i");

	//
	try {
		//
		jQueryMephisto("pre").each(function() {
			//
			if (re.test(jQueryMephisto(this).text())) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlSpaceBetweenLetters", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function httpLanguage(doc) {
	//
	var result = [];

	//
	try {
		//
		if (sidecar.resources[0]["headers"]["content-language"]) {
			//
			var lang = sidecar.resources[0]["headers"]["content-language"];

			//
			if (jQueryMephisto.inArray(lang, langs) != -1) {
				//
				result.push(_getHttpDetails(sidecar.resources[0]["uri"], sidecar.resources[0]["headers"]));
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("httpLanguage", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function httpCharset(doc) {
	//
	var result = [], reg = new RegExp().compile("[\xC2-\xDF][\x80-\xBF]|\xE0[\xA0-\xBF][\x80-\xBF]|[\xE1-\xEC\xEE\xEF][\x80-\xBF]{2}|\xED[\x80-\x9F][\x80-\xBF]|\xF0[\x90-\xBF][\x80-\xBF]{2}|[\xF1-\xF3][\x80-\xBF]{3}|\xF4[\x80-\x8F][\x80-\xBF]{2}", "m");

	//
	try {
		//
		var charset = sidecar.resources[0]["charset"] == undefined && "undefined" || sidecar.resources[0]["charset"];

		//
		if (charset.toLowerCase() == doc.characterSet.toLowerCase()) {
			//
			if (!(reg.test(jQueryMephisto("body").text()))) {
				result.push(charset);
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("httpCharset", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function httpCache(doc) {
	//
	var result = [];

	//
	try {
		//
		sidecar.resources.forEach(function(element, index, array) {
			//
			if (!(element.headers["cache-control"]) && !(element.headers["etag"]) && !(element.headers["expires"]) && !(element.headers["last-modified"])) {
				//
				_getHttpDetails(element.uri, element.headers);
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("httpCache", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function http404(doc) {
	//
	var result = [];

	//
	try {
		//
		_xhr = _sendXHR("HEAD", doc.location.protocol + "//" + doc.location.host + "/azertyuiopqsdfghjklmwxcvbn");

		//
		if (_xhr.status == 404) {
			result.push(true);
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("http404", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function metaCharset(doc) {
	//
	var result = [], reg = new RegExp().compile("^.+charset=(.+)$", "i");

	//
	try {
		//
		var charset = "";

		// html 4
		if (jQueryMephisto("meta[http-equiv='content-type']")) {
			//
			var meta = jQueryMephisto.trim(jQueryMephisto("meta[http-equiv='content-type']").attr("content"));

			//
			if (reg.test(meta)) {
				charset = RegExp.$1;
			}
		}

		// html 5
		if (charset == '' && jQueryMephisto("meta[charset]")) {
			charset = jQueryMephisto.trim(jQueryMephisto("meta[charset]").attr("charset"));
		}

		//
		if (charset && charset.toLowerCase() == doc.characterSet.toLowerCase()) {
			result.push(charset);
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("metaCharset", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function robotsSitemap(doc) {
	//
	var result = [], reg = new RegExp().compile("^sitemap\s*:(.+)$", "im"), sitemap = false;

	//
	try {
		//
		_xhr = _sendXHR("GET", doc.location.protocol + "//" + doc.location.host + "/robots.txt");

		//
		if (_xhr.status == 200) {
			//
			if (reg.test(_xhr.responseText)) {
				//
				sitemap = jQueryMephisto.trim(RegExp.$1);
			}

		}

		//
		if (sitemap) {
			//
			_xhr = _sendXHR("HEAD", sitemap);

			//
			if (_xhr.status == 200) {
				//
				result.push(sitemap);
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("robotsSitemap", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function robotsPresence(doc) {
	//
	var result = [], reg = new RegExp().compile("^user-agent\s*:(.+)$", "im");

	//
	try {
		//
		_xhr = _sendXHR("GET", doc.location.protocol + "//" + doc.location.host + "/robots.txt");

		//
		if (_xhr.status == 200) {
			//
			if (reg.test(_xhr.responseText)) {
				//
				result.push(RegExp.$1);
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("robotsPresence", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function inlinks(doc) {
	//
	var result = [];

	//
	try {
		//
		_xhr = _sendXHR("GET", "https://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=link:" + doc.location.host);

		//
		if (_xhr.status == 200) {
			//
			data = JSON.parse(_xhr.responseText);
			if (data.responseData.cursor.estimatedResultCount >= 3) {
				//
				result.push(data.responseData.cursor.estimatedResultCount + " liens entrants");
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("inlinks", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlAreaWoAlt(doc) {
	//
	var result = [], area = {};

	//
	try {
		//
		jQueryMephisto("area").each(function() {
			//
			var href = jQueryMephisto.trim(jQueryMephisto(this).attr("href"));
			var alt = jQueryMephisto.trim(jQueryMephisto(this).attr("alt")).toLowerCase();

			//
			if (jQueryMephisto.inArray(alt, Object.keys(area)) != -1 && area[alt] != href) {
				result.push(_getDetails(this));
			} else {
				area[alt] = href;
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlAreaWoAlt", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlDefaultTitle(doc) {
	//
	var result = [], reg = new RegExp().compile("^(untitled( document)?|welcome to adobe golive( \d+)?|default( title| document| page)?|document sans nom|page (sans titre|par défaut))$", "i");

	//
	try {
		//
		if (jQueryMephisto("title")) {
			//
			var title = jQueryMephisto("title").text().trim();

			//
			if (reg.test(title)) {
				result.push(RegExp.$1);
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlDefaultTitle", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlDirAttribute(doc) {
	//
	var result = [], exclusions = ["APPLET", "BASE", "BASEFONT", "BR", "FRAME", "FRAMESET", "IFRAME", "PARAM", "SCRIPT"], values = ["", "ltr", "rtl"];

	//
	try {
		//
		jQueryMephisto("*[dir]").each(function() {
			//
			if (jQueryMephisto.inArray(this.tagName.toUpperCase(), exclusions) == -1 && jQueryMephisto.inArray(jQueryMephisto(this).attr("dir").toLowerCase(), values) == -1) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlDirAttribute", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlAWithShortTitle(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("a[title]").each(function() {
			//
			var _text = jQueryMephisto(this).text().trim();

			//
			jQueryMephisto("img[alt]", this).each(function() {
				_text += " " + jQueryMephisto.trim(jQueryMephisto(this).attr("alt"));
			});
			//
			if (jQueryMephisto.trim(jQueryMephisto(this).attr("title")).length < jQueryMephisto.trim(_text).length) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlDirAttribute", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function metaRefreshShort(doc) {
	//
	var result = [];

	//
	try {
		//
		var value = 0;

		//
		jQueryMephisto("meta[http-equiv='refresh']").each(function() {
			//
			value = parseInt(jQueryMephisto(this).attr("content"), 10);

			//
			if (value < 72000 || isNaN(value)) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("metaRefreshShort", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function metaRefreshUrl(doc) {
	//
	var result = [], reg = new RegExp().compile("^\\d+\\s*;\\s*url=(.+)$", "i");

	//
	try {
		//
		if (jQueryMephisto("meta[http-equiv='refresh']")) {
			//
			var meta = jQueryMephisto.trim(jQueryMephisto("meta[http-equiv='refresh']").attr("content"));

			//
			if (reg.test(meta)) {
				//
				var url = resolveURI(RegExp.$1, doc.location.href);

				//
				if (url && url != doc.location.href) {
					result.push(_getDetails(jQueryMephisto("meta[http-equiv='refresh']").get(0)));
				}
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("metaRefresh", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsRefresh(doc) {
	//
	var result = [], reg1 = new RegExp().compile("\\.location\\.reload\\(", "i"), reg2 = new RegExp().compile("\\.location\\.replace\\(", "i"), reg3 = new RegExp().compile("\\.location\(\\.href\)?\s*=", "i");

	//
	try {
		//
		if (sidecar.resources[0]["uri"] != doc.location.href) {
			result.push(doc.location.href + " > " + sidecar.resources[0]["uri"]);
		}

		//
		else {
			//
			jQueryMephisto("script:not([src])").each(function() {
				//
				if (reg1.test(jQueryMephisto(this).text()) || reg2.test(jQueryMephisto(this).text()) || reg3.test(jQueryMephisto(this).text())) {
					result.push(_getDetails(this));
				}
			});
			//
			sidecar.resources.forEach(function(element, index, array) {
				//
				var content_type = element.content_type == undefined && "undefined" || element.content_type;

				//
				if (content_type.split("/")[1] == "javascript" && !cdns.test(element.uri) && !jsFrameworks.test(element.uri)) {
					//
					_xhr = _sendXHR("GET", element.uri);

					//
					if (_xhr.status == 200) {
						//
						if (reg1.test(_xhr.responseText) || reg2.test(_xhr.responseText) || reg3.test(_xhr.responseText)) {
							result.push(RegExp.$1);
						}
					}

				}
			});
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsRefresh", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function httpRefresh(doc) {
	//
	var result = [], reg1 = new RegExp().compile("^(\\d+)$", "i"), reg2 = new RegExp().compile("^(\\d+)\\s*;\\s*url=(.+)$", "i");

	//
	try {
		//
		if (sidecar.resources[0]["headers"]["refresh"]) {
			//
			var refresh = sidecar.resources[0]["headers"]["refresh"];

			//
			if (reg1.test(refresh)) {
				//
				var delay = parseInt(RegExp.$1, 10);

				//
				if (delay < 72000) {
					//
					result.push(sidecar.resources[0]["headers"]);
				}
			}

			//
			else if (reg2.test(refresh)) {
				//
				var delay = parseInt(RegExp.$1, 10), url = resolveURI(RegExp.$2, doc.location.href);

				//
				if (delay < 72000 && url == doc.location.href) {
					//
					result.push(sidecar.resources[0]["headers"]);
				}
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("httpRefresh", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function httpGzip(doc) {
	//
	var result = [], reg = new RegExp().compile("(gzip|deflate)$", "i");

	//
	try {
		//
		sidecar.resources.forEach(function(element, index, array) {
			//
			var content_type = element.content_type == undefined && "undefined" || element.content_type;

			// is text
			if (content_type.split("/")[0] == "text") {
				//
				var tmp = _getHttpDetails(element.uri, element.headers);

				// has content-encoding
				if (element.headers["content-encoding"]) {
					// gzip or deflate
					if (!(reg.test(element.headers["content-encoding"]))) {
						//
						result.push(tmp);
					}
				} else {
					//
					result.push(tmp);
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("httpGzip", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function resAnimated(doc) {
	//
	var result = [], images = [];

	//
	try {
		//
		sidecar.resources.forEach(function(element, index, array) {
			//
			if (element.image_info) {
				//
				if (element.image_info["animated"]) {
					images.push(element.uri);
				}
			}
		});
		//
		jQueryMephisto("img").each(function() {
			//
			var src = this.src;

			//
			if (jQueryMephisto.inArray(src, images) != -1) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("resAnimated", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function resMultimedia(doc) {
	//
	var result = [], mm_families = ["audio", "video"], mm_types = ["application/x-shockwave-flash", "application/octet-stream", "application/x-silverlight-app", "application/xaml+xml", "application/x-ms-xbap", "application/vnd.rn-realmedia", "application/ogg", "image/svg+xml"], objects = [];

	//
	try {
		//
		sidecar.resources.forEach(function(element, index, array) {
			//
			var content_type = element.content_type == undefined && "undefined" || element.content_type;

			//
			if (jQueryMephisto.inArray(content_type, mm_types) != -1 || jQueryMephisto.inArray(content_type.split("/")[0], mm_families) != -1) {
				objects.push(element.uri);
			}
		});
		//
		jQueryMephisto("embed").each(function() {
			//
			var src = _absolutizeURL(jQueryMephisto(this).attr("src"));

			//
			if (jQueryMephisto.inArray(src, objects) != -1) {
				result.push(_getDetails(this));
			}
		});
		//
		jQueryMephisto("object").each(function() {
			//
			var src = _absolutizeURL(jQueryMephisto(this).attr("data"));

			//
			if (jQueryMephisto.inArray(src, objects) != -1) {
				result.push(_getDetails(this));
			} else {
				jQueryMephisto("param[name]", this).each(function() {
					//
					var src = _absolutizeURL(jQueryMephisto(this).attr("value"));

					//
					if (jQueryMephisto.inArray(src, objects) != -1) {
						result.push(_getDetails(this));
					}
				});
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("resMultimedia", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function resMultimediaWoAudio(doc) {
	//
	var result = [], mm_families = ["video"], mm_types = ["application/x-shockwave-flash", "application/octet-stream", "application/x-silverlight-app", "application/xaml+xml", "application/x-ms-xbap", "application/vnd.rn-realmedia", "application/ogg", "image/svg+xml"], objects = [];

	//
	try {
		//
		sidecar.resources.forEach(function(element, index, array) {
			//
			var content_type = element.content_type == undefined && "undefined" || element.content_type;

			//
			if (jQueryMephisto.inArray(content_type, mm_types) != -1 || jQueryMephisto.inArray(content_type.split("/")[0], mm_families) != -1) {
				objects.push(element.uri);
			}
		});
		//
		jQueryMephisto("embed").each(function() {
			//
			var src = _absolutizeURL(jQueryMephisto(this).attr("src"));

			//
			if (jQueryMephisto.inArray(src, objects) != -1) {
				result.push(_getDetails(this));
			}
		});
		//
		jQueryMephisto("object").each(function() {
			//
			var src = _absolutizeURL(jQueryMephisto(this).attr("data"));

			//
			if (jQueryMephisto.inArray(src, objects) != -1) {
				result.push(_getDetails(this));
			} else {
				jQueryMephisto("param[name]", this).each(function() {
					//
					var src = _absolutizeURL(jQueryMephisto(this).attr("value"));

					//
					if (jQueryMephisto.inArray(src, objects) != -1) {
						result.push(_getDetails(this));
					}
				});
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("resMultimediaWoAudio", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function iframeWithSameTitles(doc) {
	//
	var result = [], iframes = {};

	//
	try {
		//
		jQueryMephisto("iframe[title]").each(function() {
			//
			var title = jQueryMephisto.trim(jQueryMephisto(this).attr("title")).toLowerCase(), src = this.src.split("#")[0];

			//
			if (title == '' || (jQueryMephisto.inArray(title, Object.keys(iframes)) != -1 && iframes[title] != src)) {
				result.push(_getDetails(this));
			} else {
				iframes[title] = src;
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("iframeWithSameTitles", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function frameWithSameTitles(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("frame").each(function() {
			//
			var title = jQueryMephisto.trim(jQueryMephisto(this).attr("title"));
			var src = this.src.split("#")[0];

			//
			jQueryMephisto("frame").each(function() {
				//
				var _title = jQueryMephisto.trim(jQueryMephisto(this).attr("title"));
				var _src = this.src.split("#")[0];

				//
				if ((_title == '' || _title == title) && _src != src) {
					result.push(_getDetails(this));
				}
			});
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("frameWithSameTitles", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlFavicon(doc) {
	//
	var result = [];

	//
	try {
		//
		window._extractor_result.links.forEach(function(element, index, array) {
			//
			if (element.rel) {
				if (jQueryMephisto.inArray(element.rel.toLowerCase(), ["icon", "shortcut icon"]) != -1) {
					//
					_xhr = _sendXHR("HEAD", element.uri);

					//
					if (_xhr.status == 200) {
						//
						result.push(_getDetails(jQueryMephisto(element.tag + "[href='" + element.href + "'][rel='" + element.rel + "']").get(0)));
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlFavicon", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlFormW3Fields(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("form").each(function() {
			//
			if (jQueryMephisto("input:not([type]), input[type='text'], input[type='checkbox'], input[type='radio'], input[type='file'], input[type='password'], select, textarea", jQueryMephisto(this)).size() > 2) {
				//
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlFormW3Fields", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function pingLongdesc(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("img[width!=1][height!=1][longdesc]").each(function() {
			//
			var longdesc = jQueryMephisto.trim(jQueryMephisto(this).attr("longdesc"));
			var _img = this;

			//
			if (longdesc == "") {
				result.push(_getDetails(this));
			}

			//
			else {
				_xhr = _sendXHR("HEAD", longdesc);

				//
				if (_xhr.status == 404) {
					//
					result.push(_getDetails(_img));
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("pingLongdesc", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function countryDomain(doc) {
	//
	var result = [], extensions = ["ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cx", "cy", "cz", "de", "dk", "dj", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "fi", "fj", "fk", "fm", "fo", "fr", "fx", "ga", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mx", "mw", "my", "mz", "na", "nc", "nf", "ne", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "ph", "pk", "pl", "pm", "pn", "pq", "pr", "pt", "py", "pw", "qa", "re", "ro", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "sv", "sy", "sz", "tc", "td", "tf", "th", "tj", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "um", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "yu", "za", "zr", "zm", "zw"];

	//
	try {
		//
		var aDomain = doc.location.host.split(".");

		//
		if (jQueryMephisto.inArray(aDomain[aDomain.length - 1], extensions) != -1) {
			result.push(true);
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("countryDomain", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function countryServer(doc) {
	//
	var result = [];

	//
	try {
		//
		var aDomain = doc.location.host.split(".");
		var country = aDomain[aDomain.length - 1].toLowerCase();
		var ip = lookup(doc.location.host).getNextAddrAsString();

		//
		if (ip != '') {
			_xhr = _sendXHR("GET", "http://www.geoplugin.net/xml.gp?ip=" + ip);

			//
			if (_xhr.status == 200 && _xhr.responseXML.getElementsByTagName("geoplugin_countryCode")[0].firstChild.nodeValue.toLowerCase() == country) {
				//
				result.push(true);
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("countryServer", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function moreExtThenIntLinks(doc) {
	//
	var result = [], int = [], ext = [], domain;

	//
	try {
		//
		var aDomain = doc.location.host.split("."), domain = aDomain.slice(aDomain.length - 2, aDomain.length).join(".");

		//
		jQueryMephisto("a[href]:not([href='')], a[href]:not([href^='#'])").each(function() {
			//
			var uri = resolveURI(jQueryMephisto(this).attr("href").trim(), doc.location.href);

			//
			if (uri) {
				//
				var host = getDomain(uri);

				//
				if (host) {
					//
					aLink = host.split("."), link = aLink.slice(aLink.length - 2, aLink.length).join(".");

					//
					if (link == domain) {
						int.push(this);
					} else {
						ext.push(this);
					}
				}
			}
		});

		//
		if (ext.length > int.length) {
			result = ext.map(_getDetails);
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("moreExtThenIntLinks", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssMediaPrint(doc) {
	//
	var result = [];

	//
	try {
		//
		var sheets = doc.styleSheets;

		// sheets walk
		for (var i = 0; i < sheets.length; i++) {
			//
			var sheet = sheets.item(i);

			// no media
			if (sheet.media.length == 0) {
				//
				var rules = sheet.cssRules;

				// rules walk
				for (var k = 0; k < rules.length; k++) {
					//
					var rule = rules[k];

					//
					if (jQueryMephisto.inArray(rule.type, [CSSRule.MEDIA_RULE, CSSRule.IMPORT_RULE]) != -1) {
						// media walk
						for (var l = 0; l < rule.media.length; l++) {
							//
							var _media = rule.media.item && rule.media.item(l) || rule.media[l];
							if (_media.startsWith("print") || _media.startsWith("only print")) {
								result.push(rule.parentStyleSheet.href);
							}
						}
					}
				}
			}

			//
			else {
				// media walk
				for (var j = 0; j < sheet.media.length; j++) {
					//
					var _media = sheet.media.item && sheet.media.item(j) || sheet.media[j];
					if (_media.startsWith("print") || _media.startsWith("only print")) {
						result.push(sheet.href);
					}
				}
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssMediaPrint", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssInternalStyles(doc) {
	//
	var result = [];

	//
	try {
		//
		var sheets = doc.styleSheets;

		// sheets walk
		for (var i = 0; i < sheets.length; i++) {
			//
			var sheet = sheets.item(i);

			//
			if (sheet.ownerNode.tagName.toUpperCase() == "STYLE") {
				//
				var rules = sheet.cssRules;

				// rules walk
				for (var k = 0; k < rules.length; k++) {
					//
					var rule = rules[k];

					//
					if (jQueryMephisto.inArray(rule.type, [CSSRule.MEDIA_RULE, CSSRule.IMPORT_RULE]) == -1) {
						result.push(_getDetails(sheet.ownerNode));
					}
				}
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssInternalStyles", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 resultoc
 * @return
 */
function cssContent(doc) {
	//
	var result = [], exclusions = ["", '', " ", ' ', '" "', "' '", '"."', "'.'", "none"];

	//
	try {
		//
		jQueryMephisto("body").find("*").andSelf().each(function() {
			var _before = getComputedStyle(this, ':before').getPropertyCSSValue('content').cssText;
			var _after = getComputedStyle(this, ':after').getPropertyCSSValue('content').cssText;

			if (jQueryMephisto.inArray(_before, exclusions) == -1 || jQueryMephisto.inArray(_after, exclusions) == -1) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssContent", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 resultoc
 * @return
 */
function cssMediaHandheld(doc) {
	//
	var result = [];

	//
	try {
		//
		var sheets = doc.styleSheets;

		// sheets walk
		for (var i = 0; i < sheets.length; i++) {
			//
			var sheet = sheets.item(i);

			// no media
			if (sheet.media.length == 0) {
				//
				var rules = sheet.cssRules;

				// rules walk
				for (var k = 0; k < rules.length; k++) {
					//
					var rule = rules[k];

					//
					if (jQueryMephisto.inArray(rule.type, [CSSRule.MEDIA_RULE, CSSRule.IMPORT_RULE]) != -1) {
						// media walk
						for (var l = 0; l < rule.media.length; l++) {
							//
							var _media = rule.media.item && rule.media.item(l) || rule.media[l];
							if (_media.startsWith("handheld") || _media.startsWith("only handheld")) {
								result.push(rule.parentStyleSheet.href);
							}
						}
					}
				}
			}

			//
			else {
				// media walk
				for (var j = 0; j < sheet.media.length; j++) {
					//
					var _media = sheet.media.item && sheet.media.item(j) || sheet.media[j];
					if (_media.startsWith("handheld") || _media.startsWith("only handheld")) {
						result.push(sheet.href);
					}
				}
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssMediaHandheld", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssGenericFont(doc) {
	//
	var result = [];

	//
	function callback(rule) {
		//
		var result = [], generics = ["serif", "sans-serif", "cursive", "fantasy", "monospace", "inherit"];

		//
		if (rule && rule.parentStyleSheet && rule.declarations) {
			//
			for (var i = 0; i < rule.declarations.length; i++) {
				//
				if (rule.declarations[i]["property"] == "font-family") {
					//
					var fontFamily = rule.declarations[i]["valueText"].split(","), font = fontFamily[fontFamily.length - 1].replace(/['"]/g, "").trim();

					//
					if (jQueryMephisto.inArray(font, generics) == -1) {
						//
						result.push(_getCssDetails(rule, i));
					}
				}
			}
		}

		//
		return result;
	}

	//
	try {
		//
		result = _analyseStylesheets(doc, "screen", callback), generics = ["serif", "sans-serif", "cursive", "fantasy", "monospace", "inherit"];

		// inline style walk
		inlineStyles.each(function() {
			//
			var parser = new CSSParser(), sheet = parser.parse(".style{" + jQueryMephisto(this).attr("style") + "}", false, false), item = this;

			//
			sheet.resolveVariables("screen");

			//
			var rules = sheet.cssRules;

			// rules walk
			for (var k = 0; k < rules.length; k++) {
				//
				var rule = rules[k];

				//
				if (rule && rule.declarations) {
					//
					for (var i = 0; i < rule.declarations.length; i++) {
						//
						if (rule.declarations[i]["property"] == "font-family") {
							//
							var fontFamily = rule.declarations[i]["valueText"].split(","), font = fontFamily[fontFamily.length - 1].replace(/['"]/g, "").trim();

							//
							if (jQueryMephisto.inArray(font, generics) == -1) {
								//
								result.push(_getInlineCssDetails(rule, i, item));
							}
						}
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssGenericFont", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssBackgroundImage(doc) {
	//
	var result = [], reg = new RegExp().compile('^url\\(', "i");

	//
	function callback(rule) {
		//
		var result = [];

		//
		if (rule && rule.parentStyleSheet && rule.declarations) {
			//
			for (var i = 0; i < rule.declarations.length; i++) {
				//
				if (rule.declarations[i]["property"] == "background-image" && rule.declarations[i]["valueText"].match(reg)) {
					//
					result.push(_getCssDetails(rule, i));
				}
			}
		}

		//
		return result;
	}

	//
	try {
		//
		result = _analyseStylesheets(doc, "screen", callback), reg = new RegExp().compile('^url\\(', "i");

		// inline style walk
		inlineStyles.each(function() {
			//
			var parser = new CSSParser(), sheet = parser.parse(".style{" + jQueryMephisto(this).attr("style") + "}", false, false), item = this;

			//
			sheet.resolveVariables("screen");

			//
			var rules = sheet.cssRules;

			// rules walk
			for (var k = 0; k < rules.length; k++) {
				//
				var rule = rules[k];

				//
				if (rule && rule.declarations) {
					//
					for (var i = 0; i < rule.declarations.length; i++) {
						//
						if (rule.declarations[i]["property"] == "background-image" && rule.declarations[i]["valueText"].match(reg)) {
							//
							result.push(_getInlineCssDetails(rule, i, item));
						}
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssBackgroundImage", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssUnderline(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto(":not(a)").filter(function() {
			if (jQueryMephisto(this).text().trim() != "" && jQueryMephisto(this).css("text-decoration") == "underline" && jQueryMephisto(this).parents("a").size() == 0) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssUnderline", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssUppercase(doc) {
	//
	var result = [];
	var exclusions = ["ABBR", "ACRONYM", "ADDRESS", "BLOCKQUOTE", "CITE", "CODE", "KBD", "PRE", "Q", "RP", "RT", "RUBY", "SAMP", "SUB", "SUP", "TIME", "VAR", "IFRAME", "SCRIPT"];
	var reg = new RegExp().compile("^[^a-z]*[A-Z][^a-z]*[A-Z][^a-z]*[A-Z][^a-z]*$", "g");

	//
	try {
		//
		var treeWalker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT, {
			acceptNode : function(_node) {
				//
				if (jQueryMephisto.inArray(_node.tagName.toUpperCase(), exclusions) != -1) {
					return NodeFilter.FILTER_REJECT;
				}

				//
				else if (reg.test(jQueryMephisto(_node).text()) && jQueryMephisto(_node).css("text-decoration") != "uppercase") {
					return NodeFilter.FILTER_ACCEPT;
				}
			}
		}, false);

		//
		while (treeWalker.nextNode()) {
			result.push(_getDetails(treeWalker.currentNode));
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssUppercase", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssTextAlignJustify(doc) {
	//
	var result = [];

	//
	function callback(rule) {
		//
		var result = [];

		//
		if (rule && rule.parentStyleSheet && rule.declarations) {
			//
			for (var i = 0; i < rule.declarations.length; i++) {
				//
				if (rule.declarations[i]["property"] == "text-align" && rule.declarations[i]["valueText"] == "justify") {
					//
					result.push(_getCssDetails(rule, i));
				}
			}
		}

		//
		return result;
	}

	//
	try {
		//
		result = _analyseStylesheets(doc, "screen", callback);

		// inline style walk
		inlineStyles.each(function() {
			//
			var parser = new CSSParser(), sheet = parser.parse(".style{" + jQueryMephisto(this).attr("style") + "}", false, false), item = this;

			//
			sheet.resolveVariables("screen");

			//
			var rules = sheet.cssRules;

			// rules walk
			for (var k = 0; k < rules.length; k++) {
				//
				var rule = rules[k];

				//
				if (rule && rule.declarations) {
					//
					for (var i = 0; i < rule.declarations.length; i++) {
						//
						if (rule.declarations[i]["property"] == "text-align" && rule.declarations[i]["valueText"] == "justify") {
							//
							result.push(_getInlineCssDetails(rule, i, item));
						}
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssTextAlignJustify", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssTextIndentNegative(doc) {
	//
	var result = [];

	//
	//
	try {
		//
		jQueryMephisto("body").find("*").andSelf().each(function() {
			//
			var _backgroundImage = jQueryMephisto(this).css("background-image");
			var _textIndent = jQueryMephisto(this).css("text-indent");

			//
			if (_backgroundImage != "none" && parseFloat(_textIndent) < 0) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssTextIndentNegative", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function cssImageSize(doc) {
	//
	var result = [], images = {};

	//
	try {
		//
		sidecar.resources.forEach(function(element, index, array) {
			//
			if (element.image_info) {
				//
				images[element.uri] = {
					"width" : element.image_info["width"] + "px",
					"height" : element.image_info["height"] + "px"
				};
			}
		});
		//
		jQueryMephisto("img").each(function() {
			//
			var src = this.src;

			//
			if (jQueryMephisto.inArray(src, Object.keys(images)) != -1) {
				//
				if (images[src]["width"] != jQueryMephisto(this).css("width") || images[src]["height"] != jQueryMephisto(this).css("height")) {
					result.push(_getDetails(this));
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("cssImageSize", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsSetTimeout(doc) {
	//
	var result = [], reg = new RegExp().compile("setTimeout\\(", "i");

	//
	try {
		//
		jQueryMephisto("script:not([src])").each(function() {
			//
			if (reg.test(jQueryMephisto(this).text())) {
				result.push(_getDetails(this));
			}
		});
		//
		for (var idx in sidecar.events) {
			//
			sidecar.events[idx].events.forEach(function(element, index, array) {
				//
			});
		}
		//
		sidecar.resources.forEach(function(element, index, array) {
			//
			var content_type = element.content_type == undefined && "undefined" || element.content_type;

			//
			if (content_type.split("/")[1] == "javascript" && !cdns.test(element.uri) && !jsFrameworks.test(element.uri)) {
				//
				_xhr = _sendXHR("GET", element.uri);

				//
				if (_xhr.status == 200) {
					//
					if (reg.test(_xhr.responseText)) {
						result.push(element.uri);
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsSetTimeout", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsSetInterval(doc) {
	//
	var result = [], reg = new RegExp().compile("setInterval\\(", "i");

	//
	try {
		//
		jQueryMephisto("script:not([src])").each(function() {
			//
			if (reg.test(jQueryMephisto(this).text())) {
				result.push(_getDetails(this));
			}
		});
		//
		sidecar.resources.forEach(function(element, index, array) {
			//
			var content_type = element.content_type == undefined && "undefined" || element.content_type;

			//
			if (content_type.split("/")[1] == "javascript" && !cdns.test(element.uri) && !jsFrameworks.test(element.uri)) {
				//
				_xhr = _sendXHR("GET", element.uri);

				//
				if (_xhr.status == 200) {
					//
					if (reg.test(_xhr.responseText)) {
						result.push(element.uri);
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsSetInterval", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsWindowOpen(doc) {
	//
	var result = [], reg = RegExp().compile("(window|document)\\.open\\(", "i");

	//
	try {
		//
		jQueryMephisto("script:not([src])").each(function() {
			//
			if (reg.test(jQueryMephisto(this).text())) {
				result.push(_getDetails(this));
			}
		});
		//
		sidecar.resources.forEach(function(element, index, array) {
			//
			var content_type = element.content_type == undefined && "undefined" || element.content_type;

			//
			if (content_type.split("/")[1] == "javascript" && !cdns.test(element.uri) && !jsFrameworks.test(element.uri)) {
				//
				_xhr = _sendXHR("GET", element.uri);

				//
				if (_xhr.status == 200) {
					//
					if (reg.test(_xhr.responseText)) {
						result.push(element.uri);
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsWindowOpen", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlNewWindow(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("a[target='_blank'], area[target='_blank'], form[target='_blank']").each(function() {
			result.push(_getDetails(this));
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlNewWindow", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @todo à vérifier
 * @return
 */
function jsNewWindow(doc) {
	//
	var result = [];

	//
	try {
		//
		for (var idx in sidecar.events) {
			//
			sidecar.events[idx].events.forEach(function(element, index, array) {
				if (jQueryMephisto.inArray(element.type, ["click", "mouseover", "mouseout", "focus", "blur"]) != -1) {
					result.push(_getDetails(sidecar.events[idx].node));
				}
			});
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsNewWindow", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsClickEvent(doc) {
	//
	var result = [], types = ["button", "submit", "reset", "file", "image", "password", "radio", "checkbox"], tags = ["A", "AREA", "BUTTON", "INPUT"];

	//
	try {
		//
		for (var idx in sidecar.events) {
			//
			var found = false, node = sidecar.events[idx].node;

			//
			if (node.tagName) {
				//
				var tag = node.tagName.toUpperCase();

				//
				if (jQueryMephisto.inArray(tag, tags) == -1) {
					found = true;
				}

				//
				if (tag == "INPUT" && jQueryMephisto.inArray(node.getAttribute("type"), types) == -1) {
					found = true;
				}

				//
				sidecar.events[idx].events.forEach(function(element, index, array) {
					//
					if (found && element.type == "click") {
						result.push(_getDetails(node));
					}
				});
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsClickEvent", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsKeyboardOrMouseEvent(doc) {
	//
	var result = [];

	//
	try {
		//
		for (var idx in sidecar.events) {
			//
			sidecar.events[idx].events.forEach(function(element, index, array) {
				if (jQueryMephisto.inArray(element.type, ["mousedown", "mouseup", "mouseover", "mouseout", "focus", "blur", "keyup", "keydown"]) != -1) {
					result.push(_getDetails(sidecar.events[idx].node));
				}
			});
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsKeyboardOrMouseEvent", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsSpecificEvent(doc) {
	//
	var result = [];

	//
	try {
		//
		for (var idx in sidecar.events) {
			//
			sidecar.events[idx].events.forEach(function(element, index, array) {
				if (jQueryMephisto.inArray(element.type, ["dblclick", "change", "scroll"]) != -1) {
					result.push(_getDetails(sidecar.events[idx].node));
				}
			});
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsSpecificEvent", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsBlurOnFocusEvent(doc) {
	//
	var result = [];

	//
	try {
		//
		for (var idx in sidecar.events) {
			//
			sidecar.events[idx].events.forEach(function(element, index, array) {
				if (element.type == "focus") {
					result.push(_getDetails(sidecar.events[idx].node));
				}
			});
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsBlurOnFocusEvent", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOnscroll(doc) {
	//
	var result = [];

	//
	try {
		//
		for (var idx in sidecar.events) {
			//
			sidecar.events[idx].events.forEach(function(element, index, array) {
				if (element.type == "scroll") {
					result.push(_getDetails(sidecar.events[idx].node));
				}
			});
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOnscroll", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsEvents(doc) {
	//
	var result = [], nodes = [];

	//
	try {
		//
		jQueryMephisto.merge(nodes, onclickEvents);
		jQueryMephisto.merge(nodes, onchangeEvents);
		jQueryMephisto.merge(nodes, onfocusEvents);
		jQueryMephisto.merge(nodes, onblurEvents);
		jQueryMephisto.merge(nodes, onmouseoverEvents);
		jQueryMephisto.merge(nodes, onmouseoutEvents);

		result = nodes.map(_getDetails);
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsEvents", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOnchangeLocation(doc) {
	//
	var result = [], reg = new RegExp().compile("\\.location[\\.=\\s]", "i"), exclusions = ["if", "while", "for", "switch"];

	//
	try {
		//
		onchangeEvents.each(function() {
			//
			var _onchange = jQueryMephisto.trim(jQueryMephisto(this).attr("onchange")), functions = _onchange.split(";");

			//
			functions.forEach(function(element, index, array) {
				//
				var aFunction = element.match(regFunction);

				//
				if (aFunction && aFunction.length > 0) {
					//
					var _function = jQueryMephisto.trim(aFunction[1]);

					//
					if (_function != "") {
						//
						if (reg.test(_function)) {
							result.push(_onchange);
						}

						//
						else if (jQueryMephisto.inArray(_function, exclusions) == -1) {
							try {
								if (reg.test(eval(_function).toString())) {
									result.push(_function);
								}
							} catch(err) {
							}
						}
					}
				}
			});
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOnchangeLocation", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOnclick(doc) {
	//
	var result = [], tags = ["A", "BUTTON", "SELECT", "TEXTAREA", "INPUT"];

	//
	try {
		//
		for (var idx in sidecar.events) {
			//
			var found = false, node = sidecar.events[idx].node;

			//
			if (node.tagName) {
				//
				var tag = node.tagName.toUpperCase();

				//
				if (jQueryMephisto.inArray(tag, tags) == -1) {
					found = true;
				}

				//
				sidecar.events[idx].events.forEach(function(element, index, array) {
					//
					if (found && element.type == "click") {
						result.push(_getDetails(node));
					}
				});
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOnclick", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOndoubleclick(doc) {
	//
	var result = [];

	//
	try {
		//
		for (var idx in sidecar.events) {
			//
			sidecar.events[idx].events.forEach(function(element, index, array) {
				if (element.type == "dblclick") {
					result.push(_getDetails(sidecar.events[idx].node));
				}
			});
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOndoubleclick", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOnblurWoOnmouseout(doc) {
	//
	var result = [];

	//
	try {
		//
		for (var idx in sidecar.events) {
			//
			var events = [];

			//
			sidecar.events[idx].events.forEach(function(element, index, array) {
				if (jQueryMephisto.inArray(element.type, ["blur", "mouseout"]) != -1) {
					events.push(element.type);
				}
			});
			if (jQueryMephisto.inArray("blur", events) != -1 && events.length == 1) {
				//
				result.push(_getDetails(sidecar.events[idx].node));
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOnblurWoOnmouseout", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOnblurSubmit(doc) {
	//
	var result = [], reg = new RegExp().compile("\\.submit\\s?", "i"), exclusions = ["if", "while", "for", "switch"];

	//
	try {
		//
		onblurEvents.each(function() {
			//
			var _onblur = jQueryMephisto.trim(jQueryMephisto(this).attr("onblur")), functions = _onblur.split(";");

			//
			functions.forEach(function(element, index, array) {
				//
				var aFunction = element.match(regFunction);

				//
				if (aFunction && aFunction.length > 0) {
					//
					var _function = jQueryMephisto.trim(aFunction[1]);

					//
					if (_function != "") {
						//
						if (reg.test(_function)) {
							result.push(_onblur);
						}

						//
						else if (jQueryMephisto.inArray(_function, exclusions) == -1) {
							try {
								if (reg.test(eval(_function).toString())) {
									result.push(_function);
								}
							} catch(err) {
							}
						}
					}
				}
			});
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOnblurSubmit", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOnchangeSubmit(doc) {
	//
	var result = [], reg = new RegExp().compile("\\.submit\\s?", "i"), exclusions = ["if", "while", "for", "switch"];

	//
	try {
		//
		onchangeEvents.each(function() {
			//
			var _onchange = jQueryMephisto.trim(jQueryMephisto(this).attr("onchange")), functions = _onchange.split(";");

			//
			functions.forEach(function(element, index, array) {
				//
				var aFunction = element.match(regFunction);

				//
				if (aFunction && aFunction.length > 0) {
					//
					var _function = jQueryMephisto.trim(aFunction[1]);

					//
					if (_function != "") {
						//
						if (reg.test(_function)) {
							result.push(_onchange);
						}

						//
						else if (jQueryMephisto.inArray(_function, exclusions) == -1) {
							try {
								if (reg.test(eval(_function).toString())) {
									result.push(_function);
								}
							} catch(err) {
							}
						}
					}
				}
			});
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOnchangeSubmit", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOnfocusBlur(doc) {
	//
	var result = [], reg = new RegExp().compile("\\.blur\\s?", "i"), exclusions = ["if", "while", "for", "switch"];

	//
	try {
		//
		onfocusEvents.each(function() {
			//
			var _onfocus = jQueryMephisto.trim(jQueryMephisto(this).attr("onfocus")), functions = _onfocus.split(";");

			//
			functions.forEach(function(element, index, array) {
				//
				var aFunction = element.match(regFunction);

				//
				if (aFunction && aFunction.length > 0) {
					//
					var _function = jQueryMephisto.trim(aFunction[1]);

					//
					if (_function != "") {
						//
						if (reg.test(_function)) {
							result.push(_onfocus);
						}

						//
						else if (jQueryMephisto.inArray(_function, exclusions) == -1) {
							try {
								if (reg.test(eval(_function).toString())) {
									result.push(_function);
								}
							} catch(err) {
							}
						}
					}
				}
			});
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOnfocusBlur", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOnfocusSubmit(doc) {
	//
	var result = [], reg = new RegExp().compile("\\.submit\\s?", "i"), exclusions = ["if", "while", "for", "switch"];

	//
	try {
		//
		onfocusEvents.each(function() {
			//
			var _onfocus = jQueryMephisto.trim(jQueryMephisto(this).attr("onfocus")), functions = _onfocus.split(";");

			//
			functions.forEach(function(element, index, array) {
				//
				var aFunction = element.match(regFunction);

				//
				if (aFunction && aFunction.length > 0) {
					//
					var _function = jQueryMephisto.trim(aFunction[1]);

					//
					if (_function != "") {
						//
						if (reg.test(_function)) {
							result.push(_onfocus);
						}

						//
						else if (jQueryMephisto.inArray(_function, exclusions) == -1) {
							try {
								if (reg.test(eval(_function).toString())) {
									result.push(_function);
								}
							} catch(err) {
							}
						}
					}
				}
			});
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOnfocusSubmit", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOnmouseoutSubmit(doc) {
	//
	var result = [], reg = new RegExp().compile("\\.submit\\s?", "i"), exclusions = ["if", "while", "for", "switch"];

	//
	try {
		//
		onmouseoutEvents.each(function() {
			//
			var _onmouseout = jQueryMephisto.trim(jQueryMephisto(this).attr("onmouseout")), functions = _onmouseout.split(";");

			//
			functions.forEach(function(element, index, array) {
				//
				var aFunction = element.match(regFunction);

				//
				if (aFunction && aFunction.length > 0) {
					//
					var _function = jQueryMephisto.trim(aFunction[1]);

					//
					if (_function != "") {
						//
						if (reg.test(_function)) {
							result.push(_onmouseout);
						}

						//
						else if (jQueryMephisto.inArray(_function, exclusions) == -1) {
							try {
								if (reg.test(eval(_function).toString())) {
									result.push(_function);
								}
							} catch(err) {
							}
						}
					}
				}
			});
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOnmouseoutSubmit", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOnmouseoverSubmit(doc) {
	//
	var result = [], reg = new RegExp().compile("\\.submit\\s?", "i"), exclusions = ["if", "while", "for", "switch"];

	//
	try {
		//
		onmouseoverEvents.each(function() {
			//
			var _onmouseover = jQueryMephisto.trim(jQueryMephisto(this).attr("onmouseover")), functions = _onmouseover.split(";");

			//
			functions.forEach(function(element, index, array) {
				//
				var aFunction = element.match(regFunction);

				//
				if (aFunction && aFunction.length > 0) {
					//
					var _function = jQueryMephisto.trim(aFunction[1]);

					//
					if (_function != "") {
						//
						if (reg.test(_function)) {
							result.push(_onmouseover);
						}

						//
						else if (jQueryMephisto.inArray(_function, exclusions) == -1) {
							try {
								if (reg.test(eval(_function).toString())) {
									result.push(_function);
								}
							} catch(err) {
							}
						}
					}
				}
			});
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOnmouseoverSubmit", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOnmouseoutWoOnblur(doc) {
	//
	var result = [];

	//
	try {
		//
		for (var idx in sidecar.events) {
			//
			var events = [];

			//
			sidecar.events[idx].events.forEach(function(element, index, array) {
				if (jQueryMephisto.inArray(element.type, ["blur", "mouseout"]) != -1) {
					events.push(element.type);
				}
			});
			if (jQueryMephisto.inArray("mouseout", events) != -1 && events.length == 1) {
				//
				result.push(_getDetails(sidecar.events[idx].node));
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOnmouseoutWoOnblur", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOnfocusWoOnmouseover(doc) {
	//
	var result = [];

	//
	try {
		//
		for (var idx in sidecar.events) {
			//
			var events = [];

			//
			sidecar.events[idx].events.forEach(function(element, index, array) {
				if (jQueryMephisto.inArray(element.type, ["focus", "mouseover"]) != -1) {
					events.push(element.type);
				}
			});
			if (jQueryMephisto.inArray("focus", events) != -1 && events.length == 1) {
				//
				result.push(_getDetails(sidecar.events[idx].node));
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOnfocusWoOnmouseover", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsOnmouseoverWoOnfocus(doc) {
	//
	var result = [];

	//
	try {
		//
		for (var idx in sidecar.events) {
			//
			var events = [];

			//
			sidecar.events[idx].events.forEach(function(element, index, array) {
				if (jQueryMephisto.inArray(element.type, ["focus", "mouseover"]) != -1) {
					events.push(element.type);
				}
			});
			if (jQueryMephisto.inArray("mouseover", events) != -1 && events.length == 1) {
				//
				result.push(_getDetails(sidecar.events[idx].node));
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsOnmouseoverWoOnfocus", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsPopUp(doc) {
	//
	var result = [], reg = RegExp().compile("(window|document)\\.open\\s?", "i"), exclusions = ["if", "while", "for", "switch"];

	//
	try {
		//
		if (jQueryMephisto("body").attr("onload")) {
			//
			var _onload = jQueryMephisto("body").attr("onload"), functions = _onload.split(";");

			//
			functions.forEach(function(element, index, array) {
				//
				var aFunction = element.match(regFunction);

				//
				if (aFunction && aFunction.length > 0) {
					//
					var _function = jQueryMephisto.trim(aFunction[1]);

					//
					if (_function != "") {
						//
						if (reg.test(_function)) {
							result.push(_onload);
						}

						//
						else if (jQueryMephisto.inArray(_function, exclusions) == -1) {
							try {
								if (reg.test(eval(_function).toString())) {
									result.push(_function);
								}
							} catch(err) {
							}
						}
					}
				}
			});
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsPopUp", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function jsResize(doc) {
	//
	var result = [], reg = RegExp().compile("window\\.resizeTo\\s?", "i"), exclusions = ["if", "while", "for", "switch"];

	//
	try {
		//
		if (jQueryMephisto("body").attr("onload")) {
			//
			var _onload = jQueryMephisto("body").attr("onload"), functions = _onload.split(";");

			//
			functions.forEach(function(element, index, array) {
				//
				var aFunction = element.match(regFunction);

				//
				if (aFunction && aFunction.length > 0) {
					//
					var _function = jQueryMephisto.trim(aFunction[1]);

					//
					if (_function != "") {
						//
						if (reg.test(_function)) {
							result.push(_onload);
						}

						//
						else if (jQueryMephisto.inArray(_function, exclusions) == -1) {
							try {
								if (reg.test(eval(_function).toString())) {
									result.push(_function);
								}
							} catch(err) {
							}
						}
					}
				}
			});
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("jsResize", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function html404(doc) {
	//
	var result = [];
	var regApache = RegExp().compile("<h1>\\s*Not Found\\s*</h1>\\s*<p>\\s*The requested URL /\\w+ was not found on this server.\\s*</p>\\s*<hr>\\s*<address>\\s*Apache/.* \\(.*\\) Server at .* Port \\d+\\s*</address>", "i");
	var regIIS = RegExp().compile("<h1>\\s*The page cannot be found\\s*</h1>[\\s|\\S]*<h2>\\s*HTTP Error 404 - File or directory not found.\\s*<br>\\s*Internet Information Services \\(IIS\\)\\s*</h2>\\s*<hr>\\s*<p>\\s*Technical Information \\(for support personnel\\)\\s*</p>", "i");
	var regNginx = RegExp().compile("<center>\\s*<h1>\\s*404 Not Found\\s*</h1>\\s*</center>\\s*<hr>\\s*<center>\\s*nginx\\s*</center>", "i");

	//
	try {
		//
		_xhr = _sendXHR("GET", doc.location.protocol + "//" + doc.location.host + "/azertyuiopqsdfghjklmwxcvbn");

		//
		if (_xhr.responseText) {
			//
			if (regApache.test(_xhr.responseText)) {
				result.push("Apache");
			} else if (regIIS.test(_xhr.responseText)) {
				result.push("IIS");
			} else if (regNginx.test(_xhr.responseText)) {
				result.push("Nginx");
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("html404", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlFakeList(doc) {
	//
	var result = [], reg1 = RegExp().compile("^(\\s*(-|\\*|\\+|#|>|&gt;|•|&bullet;).+\\s*(<br ?\?>)+){2,}$", "im"), reg2 = RegExp().compile("^(\\s*(-|\\*|\\+|#|>|&gt;|•|&bullet;).+\\s*){2,}$", "im");

	//
	try {
		//
		jQueryMephisto("p, div").each(function() {
			if (reg1.test(jQueryMephisto(this).html())) {
				result.push(_getDetails(this));
			}
		});

		//
		jQueryMephisto("pre").each(function() {
			if (reg2.test(jQueryMephisto(this).html())) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlFakeList", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlFakeOrderedList(doc) {
	//
	var result = [], reg1 = RegExp().compile("^(\\s*(\\d|i|v|x)+\\s*(-|\\)|\\]).+\\s*(<br ?\?>)+){2,}$", "im"), reg2 = RegExp().compile("^(\\s*(\\d|i|v|x)+\\s*(-|\\)|\\]).+\\s*){2,}$", "im");

	//
	try {
		//
		jQueryMephisto("p, div").each(function() {
			if (reg1.test(jQueryMephisto(this).html())) {
				result.push(_getDetails(this));
			}
		});

		//
		jQueryMephisto("pre").each(function() {
			if (reg2.test(jQueryMephisto(this).html())) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlFakeOrderedList", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function _htmlFieldWithoutTitleAndLabel(type, implicit) {
	//
	var result = [], fields = {}, i = 0, j = 0;

	//
	try {
		//
		jQueryMephisto("form").each(function() {
			//
			fields[i] = {}, fields[i][j] = {};

			//
			if (jQueryMephisto("fieldset", jQueryMephisto(this)).size() == 0) {
				//
				jQueryMephisto("input:not([type='hidden']), select, textarea", jQueryMephisto(this)).each(function() {
					//
					var id = jQueryMephisto.trim(jQueryMephisto(this).attr("id"));
					var title = jQueryMephisto.trim(jQueryMephisto(this).attr("title")).toLowerCase();
					var label = _getAllText(jQueryMephisto("label[for='" + id + "']").get(0));

					//
					if (implicit && label == "") {
						label = _getAllText(jQueryMephisto(this).parents("label").get(0));
					}

					//
					if (fields[i][j][title] == undefined) {
						fields[i][j][title] = {};
					}

					//
					if (fields[i][j][title][label] == undefined) {
						fields[i][j][title][label] = [];
					}

					//
					fields[i][j][title][label].push(_getDetails(this));
				});
				//
				i++;
			}

			//
			else {
				jQueryMephisto("fieldset").each(function() {
					//
					jQueryMephisto("input:not([type='hidden']), select, textarea", jQueryMephisto(this)).each(function() {
						//
						var id = jQueryMephisto.trim(jQueryMephisto(this).attr("id"));
						var title = jQueryMephisto.trim(jQueryMephisto(this).attr("title")).toLowerCase();
						var label = _getAllText(jQueryMephisto("label[for='" + id + "']").get(0));

						//
						if (implicit && label == "") {
							label = _getAllText(jQueryMephisto(this).parents("label").get(0));
						}

						//
						if (fields[i][title] == undefined) {
							fields[i][title] = {};
						}

						//
						if (fields[i][title][label] == undefined) {
							fields[i][title][label] = [];
						}

						//
						fields[i][title][label].push(_getDetails(this));
					});
					//
					i++;
				});
				//
				j++;
			}
		});
		//
		for (var idx_form in fields) {
			//
			for (var idx_fieldset in fields[idx_form]) {
				//
				for (var idx1 in fields[idx_form][idx_fieldset]) {
					//
					for (var idx2 in fields[idx_form][idx_fieldset][idx1]) {
						//
						if (fields[idx_form][idx_fieldset][idx1][idx2].length > 1) {
							//
							for (var idx3 in fields[idx_form][idx_fieldset][idx1][idx2]) {
								//
								var _tmp = fields[idx_form][idx_fieldset][idx1][idx2][idx3];

								//
								if (_tmp["attributes"]) {
									//
									if (type != "select" && type != "textarea") {
										//
										var _type = "text";

										//
										for each (attribute in _tmp["attributes"]) {
											if (attribute["name"] == "type") {
												_type = attribute["value"];
											}
										}

										//
										if (_type == type) {
											result.push(_tmp);
										}
									}

									//
									else if ((type == "select" || type == "textarea") && _tmp["tag"] == type) {
										result.push(_tmp);
									}
								}
							}
						}
					}
				}
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("_htmlFieldWithoutTitleAndLabel", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlInputTextWithoutTitleAndLabel(doc) {
	//
	return _htmlFieldWithoutTitleAndLabel("text", false);
}

/**
 *
 * @param doc
 * @return
 */
function htmlInputCheckboxWithoutTitleAndLabel(doc) {
	//
	return _htmlFieldWithoutTitleAndLabel("checkbox", false);
}

/**
 *
 * @param doc
 * @return
 */
function htmlInputFileWithoutTitleAndLabel(doc) {
	//
	return _htmlFieldWithoutTitleAndLabel("file", false);
}

/**
 *
 * @param doc
 * @return
 */
function htmlInputRadioWithoutTitleAndLabel(doc) {
	//
	return _htmlFieldWithoutTitleAndLabel("radio", false);
}

/**
 *
 * @param doc
 * @return
 */
function htmlInputPasswordWithoutTitleAndLabel(doc) {
	//
	return _htmlFieldWithoutTitleAndLabel("password", false);
}

/**
 *
 * @param doc
 * @return
 */
function htmlSelectWithoutTitleAndLabel(doc) {
	//
	return _htmlFieldWithoutTitleAndLabel("select", false);
}

/**
 *
 * @param doc
 * @return
 */
function htmlTextareaWithoutTitleAndLabel(doc) {
	//
	return _htmlFieldWithoutTitleAndLabel("textarea", false);
}

/**
 *
 * @param doc
 * @return
 */
function htmlTdHeadersNotInThIds(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("table").each(function() {
			//
			var th = [];

			//
			jQueryMephisto("th[id]", this).each(function() {
				//
				th.push(jQueryMephisto.trim(jQueryMephisto(this).attr("id")));
			});
			//
			jQueryMephisto("td[headers]", this).each(function() {
				//
				var headers = jQueryMephisto.trim(jQueryMephisto(this).attr("headers")).split(" ");

				//
				for (var i in headers) {
					//
					if (jQueryMephisto.inArray(headers[i], th) == -1) {
						//
						result.push(_getDetails(this));
					}
				}
			});
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlTdHeadersNotInThIds", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlImageWithAlternativeNotInContent(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("img[alt!='']").each(function() {
			//
			var content = jQueryMephisto("body").text().trim().toLowerCase().split(" ");
			var terms = jQueryMephisto.trim(jQueryMephisto(this).attr("alt")).toLowerCase().split(" ");
			var found = false;

			//
			terms.some(function(value) {
				//
				if (jQueryMephisto.inArray(value, content) != -1) {
					found = true;
					return true;
				} else {
					return false;
				}
			});
			//
			if (!found) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlImageWithAlternativeNotInContent", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlAreaWithAlternativeNotInContent(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("area[alt!='']").each(function() {
			//
			var content = jQueryMephisto("body").text().trim().toLowerCase().split(" ");
			var terms = jQueryMephisto.trim(jQueryMephisto(this).attr("alt")).toLowerCase().split(" ");
			var found = false;

			//
			terms.some(function(value) {
				//
				if (jQueryMephisto.inArray(value, content) != -1) {
					found = true;
					return true;
				} else {
					return false;
				}
			});
			//
			if (!found) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlAreaWithAlternativeNotInContent", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlAppletWithAlternativeNotInContent(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("applet[alt!='']").each(function() {
			//
			var content = jQueryMephisto("body").text().trim().toLowerCase().split(" ");
			var terms = jQueryMephisto.trim(jQueryMephisto(this).attr("alt")).toLowerCase().split(" ");
			var found = false;

			//
			terms.some(function(value) {
				//
				if (jQueryMephisto.inArray(value, content) != -1) {
					found = true;
					return true;
				} else {
					return false;
				}
			});
			//
			if (!found) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlAppletWithAlternativeNotInContent", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function _htmlHeaderWithTermsNotInContent(level) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("h" + level).each(function() {
			//
			var content = jQueryMephisto("body :not(h1, h2, h3, h4, h5, h6)").text().trim().toLowerCase().split(" ");
			var terms = jQueryMephisto(this).text().trim().split(" ");
			try {
				terms = jQueryMephisto.merge(terms, jQueryMephisto.trim(jQueryMephisto("img", this).attr("alt")).toLowerCase().split(" "));
			} catch(e) {
			}
			var found = false;

			//
			terms.some(function(value) {
				//
				if (jQueryMephisto.inArray(value, content) != -1) {
					found = true;
					return true;
				} else {
					return false;
				}
			});
			//
			if (!found) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlHeaderWithTermsNotInContent", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlH1WithTermsNotInContent(doc) {
	//
	return _htmlHeaderWithTermsNotInContent("1");
}

/**
 *
 * @param doc
 * @return
 */
function htmlH2WithTermsNotInContent(doc) {
	//
	return _htmlHeaderWithTermsNotInContent("2");
}

/**
 *
 * @param doc
 * @return
 */
function htmlH3WithTermsNotInContent(doc) {
	//
	return _htmlHeaderWithTermsNotInContent("3");
}

/**
 *
 * @param doc
 * @return
 */
function htmlH4WithTermsNotInContent(doc) {
	//
	return _htmlHeaderWithTermsNotInContent("4");
}

/**
 *
 * @param doc
 * @return
 */
function htmlH5WithTermsNotInContent(doc) {
	//
	return _htmlHeaderWithTermsNotInContent("5");
}

/**
 *
 * @param doc
 * @return
 */
function htmlH6WithTermsNotInContent(doc) {
	//
	return _htmlHeaderWithTermsNotInContent("6");
}

/**
 *
 * @param doc
 * @return
 */
function htmlH1(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto(":header").each(function() {
			//
			if (this.tagName.toUpperCase() == "H1") {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlH1", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlH2(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto(":header").each(function() {
			//
			if (this.tagName.toUpperCase() == "H2") {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlH2", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlH3(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto(":header").each(function() {
			//
			if (this.tagName.toUpperCase() == "H3") {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlH3", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlH4(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto(":header").each(function() {
			//
			if (this.tagName.toUpperCase() == "H4") {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlH4", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlH5(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto(":header").each(function() {
			//
			if (this.tagName.toUpperCase() == "H5") {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlH5", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlH6(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto(":header").each(function() {
			//
			if (this.tagName.toUpperCase() == "H6") {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlH6", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlImageNotIndexable(doc) {
	//
	var result = [], formats = ["image/png", "image/gif", "image/jpeg", "image/svg+xml"], images = [];

	//
	try {
		//
		sidecar.resources.forEach(function(element, index, array) {
			//
			if (element.image_info) {
				//
				var content_type = element.content_type == undefined && "undefined" || element.content_type;

				//
				if (jQueryMephisto.inArray(content_type, formats) == -1) {
					images.push(element.uri);
				}
			}
		});
		//
		jQueryMephisto("img").each(function() {
			//
			var src = this.src;

			//
			if (jQueryMephisto.inArray(src, images) != -1) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlImageNotIndexable", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlUrlWithUnsafeChars(doc) {
	//
	var result = [], reg = new RegExp().compile("[^a-z0-9\\$\\-\\_\\.\\+\\!\\*\\'\\(\\)\\,\\&\\/\\:\\;\\=\\?\\@\\#\\%\\[\\]]", "i");

	//
	try {
		//
		jQueryMephisto("*[href]").each(function() {
			//
			if (jQueryMephisto(this).attr("href").match(reg)) {
				result.push(_getDetails(this));
			}
		});
		//
		jQueryMephisto("*[src]").each(function() {
			//
			if (jQueryMephisto(this).attr("src").match(reg)) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlUrlWithUnsafeChars", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlUrlWithTermsNotInTitle(doc) {
	//
	var result = [];
	var reg1 = new RegExp().compile("[\\-\\_\\.\\+\\!\\*\\'\\(\\)\\,\\&\\/\\:\\;\\=\\?\\@\\#\\%\\[\\]]", "ig");
	var url = doc.location.href.toLowerCase().replace(/[àáâãäå]/ig, "a").replace(/æ/ig, "ae").replace(/ç/ig, "c").replace(/[èéêë]/ig, "e").replace(/[ìíîï]/ig, "i").replace(/ñ/ig, "n").replace(/[òóôõö]/ig, "o").replace(/œ/ig, "oe").replace(/[ùúûü]/ig, "u").replace(/[ýÿ]/ig, "y");
	var terms = url.split(reg1);
	var reg2 = new RegExp().compile("[^a-zA-Z0-9àáâãäåæçèéêëìíîïñòóôõöùúûüýÿ]", "ig");
	var title = jQueryMephisto("title").text().trim().toLowerCase().split(reg2);

	//
	try {
		//
		terms = terms.filter(function(element) {
			return element.length >= 3;
		});

		//
		if (terms.some(function(element) {
			return jQueryMephisto.inArray(element, title) != -1;
		})) {
			result.push(true);
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlUrlWithTermsNotInTitle", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlLabelForNotInFieldIds(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("form").each(function() {
			//
			var fields = [];

			//
			jQueryMephisto("input[id], select[id], textarea[id]", this).each(function() {
				//
				fields.push(jQueryMephisto.trim(jQueryMephisto(this).attr("id")));
			});
			//
			jQueryMephisto("label[for]", this).each(function() {
				//
				if (jQueryMephisto.inArray(jQueryMephisto.trim(jQueryMephisto(this).attr("for")), fields) == -1) {
					//
					result.push(_getDetails(this));
				}
			});
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlLabelForNotInFieldIds", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlImageSize(doc) {
	//
	var result = [], images = {};

	//
	try {
		//
		sidecar.resources.forEach(function(element, index, array) {
			//
			if (element.image_info) {
				//
				images[element.uri] = {
					"width" : element.image_info["width"],
					"height" : element.image_info["height"]
				};
			}
		});
		//
		jQueryMephisto("img[width][height]").each(function() {
			//
			var src = this.src, keys = Object.keys(images);

			//
			if (jQueryMephisto.inArray(src, keys) != -1 && (images[src]["width"] != jQueryMephisto.trim(jQueryMephisto(this).attr("width")) || images[src]["height"] != jQueryMephisto.trim(jQueryMephisto(this).attr("height")))) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlImageSize", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlNonHttpLinks(doc) {
	//
	var result = [], protocols = ["http:", "https:", "javascript:"];

	//
	try {
		//
		jQueryMephisto("a[href]").each(function() {
			//
			if (jQueryMephisto.inArray(this.protocol, protocols) == -1) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlNonHttpLinks", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlNonHttpAreaLinks(doc) {
	//
	var result = [], protocols = ["http:", "https:", "javascript:"];

	//
	try {
		//
		jQueryMephisto("area[href^='ftp://'], area[href^='ftps://']").each(function() {
			//
			if (jQueryMephisto.inArray(this.protocol, protocols) == -1) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlNonHttpAreaLinks", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlImageAnimatedNotInButtonOrA(doc) {
	//
	var result = [], animated = [];

	//
	try {
		//
		sidecar.resources.forEach(function(element, index, array) {
			//
			if (element.image_info) {
				//
				if (element.image_info.animated) {
					animated.push(element.uri);
				}
			}
		});
		//
		jQueryMephisto("img").each(function() {
			if (jQueryMephisto.inArray(this.src, animated) != -1) {
				if (jQueryMephisto(this).parents("a:not([href^='#'])").size() == 0 && jQueryMephisto(this).parents("button:not([href^='#'])").size() == 0) {
					result.push(_getDetails(this));
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlImageAnimatedNotInButtonOrA", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlScript(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("script").each(function() {
			//
			var src = jQueryMephisto.trim(jQueryMephisto(this).attr("src"));

			//
			if ((src != '' && !cdns.test(src) && !jsFrameworks.test(src)) || jQueryMephisto.trim(jQueryMephisto(this).text()) != '') {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlScript", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlLinksTextWithInvalidTitle(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("a[title]:not(:has(img))").each(function() {
			//
			var text = jQueryMephisto.trim(jQueryMephisto(this).text()), title = jQueryMephisto.trim(jQueryMephisto(this).attr("title"));

			//
			if (text != '' && (title == '' || title == text || jQueryMephisto.inArray(title, badLinks) != -1)) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlLinksTextWithInvalidTitle", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlLinksTextInvalid(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("a:not(:has(img))").each(function() {
			//
			var text = jQueryMephisto.trim(jQueryMephisto(this).text());

			//
			if (text != '' && jQueryMephisto.inArray(text, badLinks) != -1) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlLinksTextInvalid", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlLinksTextNotUnique(doc) {
	//
	var result = [], links = {};

	//
	try {
		//
		jQueryMephisto("a:not(:has(img))").each(function() {
			//
			var text = jQueryMephisto.trim(jQueryMephisto(this).text()), title = jQueryMephisto.trim(jQueryMephisto(this).attr("title"));
			var context = text + "%|%" + title, href = resolveURI(jQueryMephisto.trim(jQueryMephisto(this).attr("href")), doc.location.href), _this = this;

			//
			if (jQueryMephisto.inArray(context, Object.keys(links)) == -1) {
				links[context] = [];
			}

			//
			if (text != '') {
				links[context].push({
					"href" : href,
					"node" : _this
				});
			}
		});

		//
		for each (var context in Object.keys(links)) {
			//
			if (links[context].length > 1) {
				//
				var href = "", _tmp = [], diff = false;

				//
				for each (var obj in links[context]) {
					//
					_tmp.push(obj["node"]);

					//
					if (href != "" && href != obj["href"]) {
						diff = true;
					}

					//
					href = obj["href"];
				}

				//
				if (diff) {
					//
					for each (var node in _tmp) {
						result.push(_getDetails(node));
					}
				}
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlLinksTextNotUnique", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlLinksImageWithInvalidAlt(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("a").has("img[alt]").filter(function() {
			return jQueryMephisto.trim(jQueryMephisto(this).text()) == "";
		}).each(function() {
			if (jQueryMephisto.inArray(jQueryMephisto.trim(jQueryMephisto("img", this).attr("alt")), badLinks) != -1) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlLinksImageWithInvalidAlt", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlLinksImageWithInvalidTitle(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("a[title]").has("img").filter(function() {
			return jQueryMephisto.trim(jQueryMephisto(this).text()) == "";
		}).each(function() {
			if (jQueryMephisto.trim(jQueryMephisto(this).attr("title")) == '' || jQueryMephisto.trim(jQueryMephisto(this).attr("title")) == jQueryMephisto.trim(jQueryMephisto("img", this).attr("alt")) || jQueryMephisto.inArray(jQueryMephisto.trim(jQueryMephisto(this).attr("title")), badLinks) != -1) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlLinksImageWithInvalidTitle", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlLinksImageNotUnique(doc) {
	//
	var result = [], links = {};

	//
	try {
		//
		jQueryMephisto("a").has("img").filter(function() {
			return jQueryMephisto.trim(jQueryMephisto(this).text()) == "";
		}).each(function() {
			//
			var context = jQueryMephisto.trim(jQueryMephisto("img", this).attr("alt")) + "%|%" + jQueryMephisto.trim(jQueryMephisto(this).attr("title")), href = jQueryMephisto.trim(jQueryMephisto(this).attr("href"));

			//
			if (jQueryMephisto.inArray(context, Object.keys(links)) != -1) {
				//
				if (links[context] != href) {
					result.push(_getDetails(this));
				}
			}

			//
			else {
				links[context] = href;
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlLinksImageNotUnique", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlLinksWithInvalidText(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("a").has("img").filter(function() {
			return jQueryMephisto.trim(jQueryMephisto(this).text()) != "";
		}).each(function() {
			if ((jQueryMephisto.inArray(jQueryMephisto.trim(jQueryMephisto(this).text()), badLinks) != -1 && (jQueryMephisto.trim(jQueryMephisto("img", this).attr("alt")) == '' || jQueryMephisto.trim(jQueryMephisto("img", this).attr("alt")), badLinks) != -1) || jQueryMephisto.inArray(jQueryMephisto.trim(jQueryMephisto(this).text() + " " + jQueryMephisto.trim(jQueryMephisto("img", this).attr("alt"))), badLinks) != -1 || jQueryMephisto.inArray(jQueryMephisto.trim(jQueryMephisto("img", this).attr("alt")) + " " + jQueryMephisto.trim(jQueryMephisto(this).text()), badLinks) != -1) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlLinksWithInvalidText", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlLinksNotUnique(doc) {
	//
	var result = [], links = {};

	//
	try {
		//
		jQueryMephisto("a").has("img").filter(function() {
			return jQueryMephisto.trim(jQueryMephisto(this).text()) != "";
		}).each(function() {
			//
			var context = jQueryMephisto.trim(jQueryMephisto(this).text()) + "%|%" + jQueryMephisto.trim(jQueryMephisto("img", this).attr("alt")) + "%|%" + jQueryMephisto.trim(jQueryMephisto(this).attr("title"));
			var href = jQueryMephisto.trim(jQueryMephisto(this).attr("href"));

			//
			if (jQueryMephisto.inArray(context, Object.keys(links)) != -1) {
				//
				if (links[context] != href) {
					result.push(_getDetails(this));
				}
			}

			//
			else {
				links[context] = href;
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlLinksNotUnique", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlAreaWithInvalidAlt(doc) {
	//
	var result = [];

	//
	try {
		//
		jQueryMephisto("area[alt]").each(function() {
			if (jQueryMephisto.inArray(jQueryMephisto.trim(jQueryMephisto(this).attr("alt")), badLinks) != -1) {
				result.push(_getDetails(this));
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlAreaWithInvalidAlt", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function htmlAreaNotUnique(doc) {
	//
	var result = [], links = {};

	//
	try {
		//
		jQueryMephisto("area[alt]").each(function() {
			//
			var context = jQueryMephisto.trim(jQueryMephisto(this).attr("alt")) + "%|%" + jQueryMephisto.trim(jQueryMephisto(this).attr("title")), href = jQueryMephisto.trim(jQueryMephisto(this).attr("href"));

			//
			if (jQueryMephisto.inArray(context, Object.keys(links)) != -1) {
				//
				if (links[context] != href) {
					result.push(_getDetails(this));
				}
			}

			//
			else {
				links[context] = href;
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("htmlAreaNotUnique", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function syndicationCache(doc) {
	//
	var result = [], syNS = "http://purl.org/rss/1.0/modules/syndication/", mime = ["application/rss+xml", "application/atom+xml", "application/xml", "text/xml"];

	//
	try {
		//
		window._extractor_result.links.forEach(function(element, index, array) {
			//
			if (element.rel == "alternate" && jQueryMephisto.inArray(element.type, mime) != -1) {
				//
				_xhr = _sendXHR("GET", element.uri);

				//
				if (_xhr.status == 200 && jQueryMephisto.inArray(_xhr.contentType, mime) != -1) {
					// RSS
					if (element.type == "application/rss+xml") {
						// RSS 2
						if (jQueryMephisto.trim(jQueryMephisto("rss", _xhr.responseXML).attr("version")) == "2.0") {
							//
							jQueryMephisto.each(_xhr.responseXML.getElementsByTagName("ttl"), function() {
								result.push(_getDetails(this));
							});
						}

						// RSS 1 et 2
						jQueryMephisto.each(_xhr.responseXML.getElementsByTagNameNS(syNS, 'updatePeriod'), function() {
							result.push(_getDetails(this));
						});
						//
						jQueryMephisto.each(_xhr.responseXML.getElementsByTagNameNS(syNS, 'updateFrequency'), function() {
							result.push(_getDetails(this));
						});
						//
						jQueryMephisto.each(_xhr.responseXML.getElementsByTagNameNS(syNS, 'updateBase'), function() {
							result.push(_getDetails(this));
						});
					}

					// Atom
					else if (element.type == "application/atom+xml") {
						//
						jQueryMephisto.each(_xhr.responseXML.getElementsByTagNameNS(syNS, 'updatePeriod'), function() {
							result.push(_getDetails(this));
						});
						//
						jQueryMephisto.each(_xhr.responseXML.getElementsByTagNameNS(syNS, 'updateFrequency'), function() {
							result.push(_getDetails(this));
						});
						//
						jQueryMephisto.each(_xhr.responseXML.getElementsByTagNameNS(syNS, 'updateBase'), function() {
							result.push(_getDetails(this));
						});
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("syndicationCache", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function syndicationAbsoluteLinks(doc) {
	//
	var result = [], mime = ["application/rss+xml", "application/atom+xml", "application/xml", "text/xml"];

	//
	try {
		//
		window._extractor_result.links.forEach(function(element, index, array) {
			//
			if (element.rel == "alternate" && jQueryMephisto.inArray(element.type, mime) != -1) {
				//
				_xhr = _sendXHR("GET", element.uri);

				//
				if (_xhr.status == 200 && jQueryMephisto.inArray(_xhr.contentType, mime) != -1) {
					// RSS
					if (element.type == "application/rss+xml") {
						// RSS 2
						if (jQueryMephisto.trim(jQueryMephisto("rss", _xhr.responseXML).attr("version")) == "2.0") {
							//
							jQueryMephisto.each(_xhr.responseXML.getElementsByTagName('link'), function() {
								//
								if (jQueryMephisto(this).text().trim().substr(0, 1) == ".") {
									result.push(_getDetails(this));
								}
							});
						}

						// RSS 1
						else {
							//
							jQueryMephisto.each(_xhr.responseXML.getElementsByTagName('link'), function() {
								//
								if (jQueryMephisto(this).text().trim().substr(0, 1) == ".") {
									result.push(_getDetails(this));
								}
							});
						}
					}

					// Atom
					else if (element.type == "application/atom+xml") {
						//
						jQueryMephisto.each(_xhr.responseXML.getElementsByTagName("link"), function() {
							//
							if (jQueryMephisto.trim(jQueryMephisto(this).attr("href")).substr(0, 1) == ".") {
								result.push(_getDetails(this));
							}
						});
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("syndicationAbsoluteLinks", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function syndicationPresence(doc) {
	//
	var result = [];

	//
	try {
		//
		window._extractor_result.links.forEach(function(element, index, array) {
			//
			if (element.rel == "alternate") {
				//
				if (jQueryMephisto.inArray(element.type, ["application/rss+xml", "application/atom+xml"]) != -1) {
					result.push(_getDetails(jQueryMephisto("link[rel='alternate'][href='" + element.href + "'][type='" + element.type + "']").get(0)));
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("syndicationPresence", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function syndicationSummary(doc) {
	//
	var result = [], mime = ["application/rss+xml", "application/atom+xml", "application/xml", "text/xml"];

	//
	try {
		//
		window._extractor_result.links.forEach(function(element, index, array) {
			//
			if (element.rel == "alternate" && jQueryMephisto.inArray(element.type, mime) != -1) {
				//
				_xhr = _sendXHR("GET", element.uri);

				//
				if (_xhr.status == 200 && jQueryMephisto.inArray(_xhr.contentType, mime) != -1) {
					// RSS
					if (element.type == "application/rss+xml") {
						//
						jQueryMephisto.each(_xhr.responseXML.getElementsByTagName("item"), function() {
							//
							if (jQueryMephisto(this).find("description").size() == 0) {
								result.push(_getDetails(this));
							}
						});
					}

					// Atom
					else if (element.type == "application/atom+xml") {
						//
						jQueryMephisto.each(_xhr.responseXML.getElementsByTagName("entry"), function() {
							//
							if (jQueryMephisto(this).find("summary").size() == 0) {
								result.push(_getDetails(this));
							}
						});
					}
				}
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("syndicationSummary", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 * @todo manage attachments
 */
function resDownloadable(doc) {
	//
	var result = [], dl_families = ["application"], dl_types = ["msword", "pdf", "zip", "octet-stream"], dl_reg = new RegExp().compile("^vnd\.(oasis\.opendocument\.|\.ms-|openxmlformats-officedocument\.)", "i");

	//
	try {
		//
		window._extractor_result.links.forEach(function(element, index, array) {
			//
			_xhr = _sendXHR("HEAD", element.uri);

			//
			if (_xhr.status == 200 && jQueryMephisto.inArray(_xhr.contentType.split("/")[0], dl_families) != -1 && (jQueryMephisto.inArray(_xhr.contentType.split("/")[1], dl_types) != -1 || dl_reg.test(_xhr.contentType.split("/")[1]))) {
				//
				result.push(element.uri);
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("resDownloadable", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function resPdf(doc) {
	//
	var result = [];

	//
	try {
		//
		window._extractor_result.links.forEach(function(element, index, array) {
			//
			_xhr = _sendXHR("HEAD", element.uri);

			//
			if (_xhr.status == 200 && _xhr.contentType == "application/pdf") {
				//
				result.push(element.uri);
			}
		});
	}

	//
	catch (err) {
		// Error Logging
		logger.error("resPdf", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function httpWithAndWoWww(doc) {
	//
	var result = [];

	//
	try {
		//
		var arrDomain = doc.location.host.split(".");

		// with www
		if (arrDomain[0] == "www") {
			//
			arrDomain.shift();
		} else {
			//
			arrDomain.unshift("www");
		}

		//
		_xhr = _sendXHR("HEAD", "http://" + arrDomain.join("."));

		//
		if (jQueryMephisto.inArray(_xhr.status, [200, 301, 302, 304, 307]) != -1) {
			//
			result.push(arrDomain.join("."));
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("httpWithAndWoWww", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function _sameLabelsTitles2(type) {
	//
	var result = [], fields = {}, i = 0, j = 0;

	//
	try {
		//
		jQueryMephisto("form").each(function() {
			//
			fields[i] = {};

			//
			if (jQueryMephisto("fieldset", jQueryMephisto(this)).size() == 0) {
				//
				fields[i][j] = {};

				//
				jQueryMephisto("input, select, textarea", jQueryMephisto(this)).each(function() {
					//
					var id = jQueryMephisto.trim(jQueryMephisto(this).attr("id"));
					var title = jQueryMephisto.trim(jQueryMephisto(this).attr("title"));
					var label = jQueryMephisto("label[for=" + id + "]").text().trim().toLowerCase();

					//
					if (title) {
						title = title.toLowerCase();
					} else {
						title = "";
					}

					//
					if (fields[i][j][title] == undefined) {
						fields[i][j][title] = {};
					}

					//
					if (fields[i][j][title][label] == undefined) {
						fields[i][j][title][label] = [];
					}

					//
					fields[i][j][title][label].push(_getDetails(this));
				});
				//
				i++;
			}

			//
			else {
				jQueryMephisto("fieldset").each(function() {
					//
					fields[i][j] = {};

					//
					jQueryMephisto("input, select, textarea", jQueryMephisto(this)).each(function() {
						//
						var id = jQueryMephisto.trim(jQueryMephisto(this).attr("id"));
						var title = jQueryMephisto.trim(jQueryMephisto(this).attr("title"));
						var label = jQueryMephisto("label[for=" + id + "]").text().trim().toLowerCase();

						//
						if (title) {
							title = title.toLowerCase();
						} else {
							title = "";
						}

						/*//
						if(label == "" && title == ""){
						result.push(_getDetails(this));
						}*/

						//
						if (fields[i][title] == undefined) {
							fields[i][title] = {};
						}

						//
						if (fields[i][title][label] == undefined) {
							fields[i][title][label] = [];
						}

						//
						fields[i][title][label].push(_getDetails(this));
					});
					//
					i++;
				});
				//
				j++;
			}
		});
		//
		for (var idx_form in fields) {
			//
			for (var idx_fieldset in fields[idx_form]) {
				//
				for (var idx1 in fields[idx_form][idx_fieldset]) {
					//
					for (var idx2 in fields[idx_form][idx_fieldset][idx1]) {
						//
						if (fields[idx_form][idx_fieldset][idx1][idx2].length > 1) {
							//
							for (var idx3 in fields[idx_form][idx_fieldset][idx1][idx2]) {
								//
								var _tmp = fields[idx_form][idx_fieldset][idx1][idx2][idx3], _type = "text";

								//
								if (_tmp["tag"] == "input") {
									//
									for (var key in _tmp["attributes"]) {
										//
										if (key.name == "type") {
											_type = key.value;
										}
									}
								}

								//
								if ((jQueryMephisto.inArray(type, ["select", "textarea"]) == -1 && _type == type) || (jQueryMephisto.inArray(type, ["select", "textarea"]) != -1 && _tmp["tag"] == type)) {
									result.push(_tmp);
								}
							}
						}
					}
				}
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("_sameLabelsTitles", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function _sameLabelsTitles(type) {
	//
	var result = [], labels = [], titles = [], nodes = [];

	//
	try {
		//
		jQueryMephisto("form").each(function() {
			//
			if (jQueryMephisto("fieldset", jQueryMephisto(this)).size() == 0) {
				//
				jQueryMephisto("input, select, textarea", jQueryMephisto(this)).each(function() {
					//
					var id = jQueryMephisto.trim(jQueryMephisto(this).attr("id"));
					var oLabel = jQueryMephisto("label[for=" + id + "]");
					var label = oLabel ? jQueryMephisto.trim(oLabel.text()).toLowerCase() : "";
					var title = jQueryMephisto.trim(jQueryMephisto(this).attr("title"));

					// label hidden
					if (oLabel && (oLabel.css("display") == "none" || oLabel.css("visibility") == "hidden")) {
						label = "";
					}

					// no label and no title or both
					if ((label == "" && title == "") || (label != "" && title != "")) {
						//
						nodes.push(this);
					}

					//
					else {
						// duplicate label
						if (jQueryMephisto.inArray(label, labels) != -1) {
							//
							nodes.push(this);
						} else if (label != "") {
							//
							labels.push(label);
						}

						// duplicate title
						if (jQueryMephisto.inArray(title, titles) != -1) {
							//
							nodes.push(this);
						} else if (title != "") {
							//
							titles.push(title);
						}
					}
				});
			}

			//
			else {
				jQueryMephisto("fieldset").each(function() {
					//
					labels = [];

					//
					jQueryMephisto("input, select, textarea", jQueryMephisto(this)).each(function() {
						//
						var id = jQueryMephisto.trim(jQueryMephisto(this).attr("id"));
						var oLabel = jQueryMephisto("label[for=" + id + "]");
						var label = oLabel ? jQueryMephisto.trim(oLabel.text()).toLowerCase() : "";
						var title = jQueryMephisto.trim(jQueryMephisto(this).attr("title"));

						// label hidden
						if (oLabel && (oLabel.css("display") == "none" || oLabel.css("visibility") == "hidden")) {
							label = "";
						}

						// no label and no title or both
						if ((label == "" && title == "") || (label != "" && title != "")) {
							//
							nodes.push(this);
						}

						//
						else {
							// duplicate label
							if (jQueryMephisto.inArray(label, labels) != -1) {
								//
								nodes.push(this);
							} else if (label != "") {
								//
								labels.push(label);
							}

							// duplicate title
							if (jQueryMephisto.inArray(title, titles) != -1) {
								//
								nodes.push(this);
							} else if (title != "") {
								//
								titles.push(title);
							}
						}
					});
				});
			}
		});

		//
		nodes = jQueryMephisto.unique(nodes)

		//
		for (var node in nodes) {
			// text is default type
			var _tmp = _getDetails(nodes[node]), _type = "text";

			//
			if (_tmp["tag"] == "input") {
				//
				for (var key in Object.keys(_tmp["attributes"])) {
					//
					if (_tmp["attributes"][key].name == "type") {
						//
						_type = _tmp["attributes"][key].value;
					}
				}

				//
				if (_type == type) {
					//
					result.push(_tmp);
				}
			}

			//
			else {
				//
				if (_tmp["tag"] == type) {
					//
					result.push(_tmp);
				}
			}
		}
	}

	//
	catch (err) {
		// Error Logging
		logger.error("_sameLabelsTitles", err);
		result = false;
	}

	//
	return result;
}

/**
 *
 * @param doc
 * @return
 */
function textSameLabelsTitles(doc) {
	return _sameLabelsTitles("text");
}

/**
 *
 * @param doc
 * @return
 */
function checkboxSameLabelsTitles(doc) {
	return _sameLabelsTitles("checkbox");
}

/**
 *
 * @param doc
 * @return
 */
function radioSameLabelsTitles(doc) {
	return _sameLabelsTitles("radio");
}

/**
 *
 * @param doc
 * @return
 */
function fileSameLabelsTitles(doc) {
	return _sameLabelsTitles("file");
}

/**
 *
 * @param doc
 * @return
 */
function passwordSameLabelsTitles(doc) {
	return _sameLabelsTitles("password");
}

/**
 *
 * @param doc
 * @return
 */
function textareaSameLabelsTitles(doc) {
	return _sameLabelsTitles("textarea");
}

/**
 *
 * @param doc
 * @return
 */
function selectSameLabelsTitles(doc) {
	return _sameLabelsTitles("select");
}