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
        for (var i=0; i<nodes.length; i++) {
            document.body.appendChild(nodes[i]);
        }
    };

    window.showResults = function(tests) {
        var table = $('<table id="test_result"></table>');
        var tbody = $('<tbody></tbody>');
        var tr;
        var criterion;

        table.append(
            "<thead><tr>"
                + "<th>&nbsp;</th>"
                + "<th>Checklist</th>"
                + "<th>N°</th>"
                + "<th>Test</th>"
            + "</tr></thead>"
        )
        .append(tbody);


        for each(result in tests.oaa_results) {
            if (!(result.id in window.checklists)) {
                continue;
            }

            criterion = window.checklists[result.id];

            tr = $("<tr></tr>");
            tbody.append(tr);

            tr
            .append('<td><img src="img/' + result.result + '.png" alt="' + result.result + '" /></td>')
            .append("<td>" + criterion.checklist.name + "</td>")
            .append("<td>" + criterion.name + "</td>")
            .append("<td>" + criterion.description + "</td>");
        }

        $("body").append(table);
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
