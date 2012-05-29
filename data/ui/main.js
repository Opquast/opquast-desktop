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

        table.append(
            "<thead><tr>"
                + "<th>Test ID</th>"
                + "<th>Result</th>"
                + "<th>Comment</th>"
            + "</tr></thead>"
        )
        .append(tbody);


        for each(result in tests.oaa_results) {
            tr = $("<tr></tr>");
            tbody.append(tr);

            tr
            .append("<td>" + result.id + "</td>")
            .append('<td><img src="img/' + result.result + '.png" alt="' + result.result + '" /></td>')
            .append("<td>" + result.comment + "</td>");
        }

        $("body").append(table);
    };
})();
