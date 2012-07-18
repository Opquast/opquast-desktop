"use strict";

const {Ci, Cc, Cu} = require("chrome");

var table = null;
var data = null;
var tree;
var filterText = "";
var _document;

let init = exports.init = function(_tree) {
	_document = _tree.ownerDocument;
	tree = _tree;
	loadTable();
}

//this function is called every time the tree is sorted, filtered, or reloaded
function loadTable() {
	//remember scroll position. this is useful if this is an editable table
	//to prevent the user from losing the row they edited
	var topVisibleRow = null;
	if (table) {
		topVisibleRow = getTopVisibleRow();
	}
	if (data == null) {
		//put object loading code here. for our purposes, we'll hard code it.
		data = [];
		//the property names match the column ids in the xul. this way, we don't have to deal with
		//mapping between the two
		data.push({
			"t_name" : "Leonardo",
			"t_description" : "Leader",
			"t_weapon" : "Dual katanas"
		});
		data.push({
			"t_name" : "Michaelangelo",
			"t_description" : "Party dude",
			"t_weapon" : "Nunchaku"
		});
		data.push({
			"t_name" : "Donatello",
			"t_description" : "Does machines",
			"t_weapon" : "Bo"
		});
		data.push({
			"t_name" : "Raphael",
			"t_description" : "Cool, but rude",
			"t_weapon" : "Sai"
		});
		data.push({
			"t_name" : "Splinter",
			"t_description" : "Rat",
			"t_weapon" : "Walking stick"
		});
		data.push({
			"t_name" : "Shredder",
			"t_description" : "Armored man",
			"t_weapon" : "Blades"
		});
		data.push({
			"t_name" : "Casey Jones",
			"t_description" : "Goalie masked man",
			"t_weapon" : "Hockey stick"
		});
		data.push({
			"t_name" : "April O'Neil",
			"t_description" : "Journalist",
			"t_weapon" : "None"
		});
	}
	if (filterText == "") {
		//show all of them
		table = data;
	} else {
		//filter out the ones we want to display
		table = [];
		data.forEach(function(element) {
			//we'll match on every property
			for (var i in element) {
				if (prepareForComparison(element[i]).indexOf(filterText) != -1) {
					table.push(element);
					break;
				}
			}
		});
	}

	sortRows();
	//restore scroll position
	if (topVisibleRow) {
		setTopVisibleRow(topVisibleRow);
	}
}

var treeSelection = {
    adjustSelection: function(index, count) {
    },
    clearRange: function(startIndex, endIndex) {
    },
    clearSelection: function() {
    },
    getRangeAt: function(i, min, max) {
    },
    getRangeCount: function() {
    },
    invalidateSelection: function() {
    },
    invertSelection: function() {
    },
    isSelected: function(index) {
    },
    rangedSelect: function(startIndex, endIndex, augment) {
    },
    select: function(index) {
    },
    selectAll: function() {
    },
    timedSelect: function(index, delay) {
    },
    toggleSelect: function(index) {
    }
}

//generic custom tree view stuff
var treeView = {
    selection: treeSelection,  
    get rowCount(){
        return table.length;
    }, 
	getCellText: function(row, col) {
		return table[row][col.id];
	},
	/*getCellValue: function(row, col) {
		return table[row][col.id];
	},*/
	setTree: function(treebox) {
		this.treebox = treebox;
	},
	/*isEditable: function(row, col) {
		return false;
	},*/
	isContainer: function(row) {
		return false;
	},
	isSeparator: function(row) {
		return false;
	},
	isSorted: function() {
		return false;
	},
	getLevel: function(row) {
		return 0;
	},
	getImageSrc: function(row, col) {
		return null;
	},
	getRowProperties: function(row, props) {
	},
	getCellProperties: function(row, col, props) {
	},
	getColumnProperties: function(colid, col, props) {
	},
	cycleHeader: function(column) {
	}
}

let sortRows = exports.sortRows = function(column) {
	var columnName;
	var order = tree.getAttribute("sortDirection") == "ascending" ? 1 : -1;
	//if the column is passed and it's already sorted by that column, reverse sort
	if (column) {
		columnName = column.id;
		if (tree.getAttribute("sortResource") == columnName) {
			order *= -1;
		}
	} else {
		columnName = tree.getAttribute("sortResource");
	}

	function columnSort(a, b) {
		if (prepareForComparison(a[columnName]) > prepareForComparison(b[columnName]))
			return 1 * order;
		if (prepareForComparison(a[columnName]) < prepareForComparison(b[columnName]))
			return -1 * order;
		//tie breaker: name ascending is the second level sort
		if (columnName != "t_name") {
			if (prepareForComparison(a["t_name"]) > prepareForComparison(b["t_name"]))
				return 1;
			if (prepareForComparison(a["t_name"]) < prepareForComparison(b["t_name"]))
				return -1;
		}
		return 0;
	}

	table.sort(columnSort);
	//setting these will make the sort option persist
	tree.setAttribute("sortDirection", order == 1 ? "ascending" : "descending");
	tree.setAttribute("sortResource", columnName);
	tree.view = treeView;
	//set the appropriate attributes to show to indicator
	var cols = tree.getElementsByTagName("treecol");
	for (var i = 0; i < cols.length; i++) {
		cols[i].removeAttribute("sortDirection");
	}
	_document.getElementById(columnName).setAttribute("sortDirection", order == 1 ? "ascending" : "descending");
}

//prepares an object for easy comparison against another. for strings, lowercases them
function prepareForComparison(o) {
	if ( typeof o == "string") {
		return o.toLowerCase();
	}
	return o;
}

function getTopVisibleRow() {
	return tree.treeBoxObject.getFirstVisibleRow();
}

function setTopVisibleRow(topVisibleRow) {
	return tree.treeBoxObject.scrollToRow(topVisibleRow);
}

let inputFilter = exports.inputFilter = function(event) {
	//do this now rather than doing it at every comparison
	var value = prepareForComparison(event.target.value);
	setFilter(value);
	_document.getElementById("clearFilter").disabled = value.length == 0;
}

let clearFilter = exports.clearFilter = function() {
	_document.getElementById("clearFilter").disabled = true;
	var filterElement = _document.getElementById("filter");
	filterElement.focus();
	filterElement.value = "";
	setFilter("");
}

function setFilter(text) {
	filterText = text;
	loadTable();
}