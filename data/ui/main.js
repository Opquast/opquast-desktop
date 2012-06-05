(function() {
	var oTable;
	
	window.clearContent = function() {
		$("body").empty();
	};

	window.showLoader = function() {
		window.clearContent();
		$("body").append('<div id="loader">Results are loading. This may take a while…</div>');
	};

	window.loadBody = function(aBody) {
		var nodes = aBody.childNodes;
		for(var i = 0; i < nodes.length; i++) {
			document.body.appendChild(nodes[i]);
		}
	};

	window.showResults = function(tests) {
		var table = $('<table id="test_result"></table>');
		var caption = ('<caption>' + tests.datetime.toLocaleDateString() + " " + tests.datetime.toLocaleTimeString() + '</caption>');
		var thead = $('<thead></thead>');
		var tbody = $('<tbody></tbody>');
		var tr;
		var criterion;

		tr = $("<tr></tr>");
		thead.append(tr);

		// @formatter:off
		tr.append(
			'<th>Résultat</th>',
			'<th>Checklist</th>',
			'<th>Référence</th>',
			'<th>Libellé du test</th>',
			'<th>Détails</th>'
		);
		// @formatter:on

		table.append(caption).append(thead).append(tbody);

		for each(result in tests.oaa_results) {
			if(!(result.id in window.checklists)) {
				continue;
			}

			criterion = window.checklists[result.id];
			var results = {
				"c" : "Conforme",
				"nc" : "Non conforme",
				"i" : "Indéterminé",
				"na" : "Non applicable"
			};

			tr = $("<tr></tr>");
			tbody.append(tr);

			// @formatter:off
			tr.append(
				'<td><img src="img/' + result.result + '.png" alt="' + results[result.result] + '" /><span style="display:none">' + results[result.result] + '</span></td>',
				'<td>' + criterion.checklist.name + '</td>',
				'<td>' + criterion.name + '</td>',
				'<td>' + criterion.description + '</td>',
				'<td>' + result.comment + '</td>'
			);
			// @formatter:on

			tr.data("details", result.details);
		}

		$("body").append(table);

		var values = [];

		for each(checklist in checklists) {
			var value = checklist.checklist.name;
			if($.inArray(value, values) == -1) {
				values.push(value);
			}
		}

		values.sort(function(a, b) {
			var a = a.toLowerCase();
			var b = b.toLowerCase();
			return ((a < b) ? -1 : ((a > b) ? 1 : 0));
		});

		oTable = table.dataTable({
			bPaginate : false,
			sDom: "lrtip",
			oLanguage : {
				sZeroRecords : "Aucun résultat",
				sInfo : "Affichage des résultats _START_ à _END_ sur _TOTAL_",
				sInfoEmpty : "Affichage de 0 résultat",
				sInfoFiltered : "(filtré de _MAX_ résultats)",
				sSearch : "Rechercher"
			},
			aoColumns : [null, null, null, null, {
				"bVisible" : false
			}]
		})

		oTable.columnFilter({
			sPlaceHolder : "head:before",
			aoColumns : [{
				type : "select",
				values : ["Conforme", "Non conforme", "Indéterminé", "Non applicable"]
			}, {
				type : "select",
				values : values
			}, null, null, null, null]
		});

		// bug : filtering trigger sorting
		$("select").click(function(event) {
			event.stopPropagation();
			return true;
		});

		//
		function fnFormatDetails(oTable, nTr) {
			var aData = oTable.fnGetData(nTr);
			var aOut = $('<table class="details"><thead><tr><th>Commentaires</th><th>Éléments concernés</th></tr></thead><tbody><tr><td>' + aData[4] + '</td></tr></tbody></table>');
			var aDetails = $('<td><ul></ul></td>');

			var nodes = $(nTr).data("details");

			for each(node in nodes) {
				var a = $('<a>' + node.replace("<", "&lt;").replace(">", "&gt;") + '</a>');
				/*a.click(function() {
					with(window.__ffinspector) {
						closeInspectorUI(true);
						openInspectorUI();
						inspectNode($(node.path).get(0));
						//node.scrollIntoView();
					}
				});*/
				
				$('ul', aDetails).append($('<li></li>').append(a));
			};

			$("tbody tr td", aOut).after(aDetails);

			return aOut;
		}

		//
		var nCloneTh = document.createElement('th');
		var nCloneTd = document.createElement('td');
		nCloneTd.innerHTML = '<img src="img/details_open.png">';
		nCloneTd.className = "center";

		$('#test_result thead tr').each(function() {
			$(this).append(nCloneTh);
		});

		$('#test_result tbody tr').each(function() {
			$(this).append(nCloneTd.cloneNode(true));
		});

		//
		$('#test_result tbody td img').live('click', function() {
			var nTr = this.parentNode.parentNode;
			if(this.src.match('details_close')) {
				/* This row is already open - close it */
				this.src = "img/details_open.png";
				oTable.fnClose(nTr);
			} else {
				/* Open this row */
				this.src = "img/details_close.png";
				oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), 'details');
			}
		});
	};
})();

/*
 {
 "id": "10066",
 "result": "na",
 "results_list": [
 "na"
 ],
 "comment": "aucun IMG avec ALT ou LONGDESC non vide",
 "details": []
 },
 */
