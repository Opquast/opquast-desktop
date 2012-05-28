(function() {
    window.clearContent = function() {
        $("body").empty();
    };

    window.loadBody = function(aBody) {
        var nodes = aBody.childNodes;
        for (var i=0; i<nodes.length; i++) {
            document.body.appendChild(nodes[i]);
        }
    };

    window.showResults = function(tests) {
        var table = $('<table id="test_result"></table>');
        var tr;

        for each(result in tests.oaa_results) {
            tr = $("<tr></tr>");
            table.append(tr);

            tr
            .append("<td>" + result.id + "</td>")
            .append("<td>" + result.result + "</td>")
            .append("<td>" + result.comment + "</td>");
        }

        $("body").append(table);
    };
})();
