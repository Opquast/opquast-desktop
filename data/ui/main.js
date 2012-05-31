(function() {
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
		var tbody = $('<tbody></tbody>');
		var tr;
		var criterion;

		table.append("<thead><tr><th>Résultat</th><th>Checklist</th><th>Numéro</th><th>Libellé</th></tr></thead>").append(tbody);

		for each(result in tests.oaa_results) {
			if(!(result.id in window.checklists)) {
				continue;
			}

			criterion = window.checklists[result.id];

			tr = $("<tr></tr>");
			tbody.append(tr);

			tr.append('<td><img src="img/' + result.result + '.png" alt="' + result.result + '" /><span style="display:none">' + result.result + '</span></td>').append("<td>" + criterion.checklist.name + "</td>").append("<td>" + criterion.name + "</td>").append("<td>" + criterion.description + "</td>");
		}

		$("body").append(table);

		try {
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

			table.dataTable({
				bPaginate : false,
				oLanguage : {
					sZeroRecords : "Aucun résultat",
					sInfo : "Affichage des résultats _START_ à _END_ sur _TOTAL_",
					sInfoEmpty : "Affichage de 0 résultat",
					sInfoFiltered : "(filtré de _MAX_ résultats)",
					sSearch : "Rechercher"
				},
				sDom : 'T<"clear">lfrtip',
				oTableTools : {
					aButtons : [{
						sExtends : "copy",
						sButtonText : "Copier"
					}, {
						sExtends : "xls",
						sButtonText : "Excel"
					}, {
						sExtends : "print",
						sButtonText : "Imprimer"
					}],
					sSwfPath : "swf/copy_cvs_xls_pdf.swf"
				}
			}).columnFilter({
				sPlaceHolder : "head:before",
				aoColumns : [{
					type : "select",
					values : ["c", "nc", "i", "na"]
				}, {
					type : "select",
					values : values
				}, null, null]
			});
		} catch(e) {
			alert(e);
		}
		
		$("select").click(function(event){
			event.stopPropagation();
			return true;
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
