/* NOT USE NOW, FOR FUTURE USE */
var aResults = aTests.oaa_results
   
var results = {
        "c": "pass",
        "nc": "fail",
        "i": "cannotTell",
        "na": "notApplicable"
    },
    out = '<?xml version="1.0" encoding="utf-8"?>\
        <rdf:RDF xmlns="http://www.w3.org/ns/earl#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dct="http://purl.org/dc/dcmitype/" xmlns:doap="http://usefulinc.com/ns/doap#" xmlns:ptr="http://www.w3.org/2009/pointers#">\
        <Assertor>',
    cases = "",
    earlNS = new Namespace("http://www.w3.org/ns/earl#"),
    rdfNS = new Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),
    dctNS = new Namespace("http://purl.org/dc/dcmitype/"),
    doapNS = new Namespace("http://usefulinc.com/ns/doap#"),
    ptrNS = new Namespace("http://www.w3.org/2009/pointers#"),
    url = aContentWindow.document.location.href,
    reg = new RegExp().compile("^([^\s]+) \(ligne (\d+)\) : (.+$)");

out += '<Software>\
    <doap:name xml:lang="en">Opquast Desktop</doap:name>\
    <doap:description rdf:parseType="Literal" xml:lang="en"><![CDATA[Desc]]></doap:description>\
    <doap:created>2012-08-01</doap:created>\
    <doap:homepage rdf:resource="https://addons.mozilla.org/en/firefox/addon/opquast-desktop/"/>\
    <doap:release><doap:revision>0.3</doap:revision></doap:release>\
    </Software>';
    
out += aResults.map(function(item){
    var _id = item.id, _out = item.details.map(function(item){
        if(item.path) {
            return '<ptr:groupPointer>\
                <ptr:CSSSelectorPointer>\
                <ptr:reference rdf:resource="' + url + '"/>\
                <ptr:expression>' + item.path + '</ptr:expression>\
                <ptr:version>2.1</ptr:version>\
                <info rdf:parseType="Literal" xml:lang="en"><![CDATA[' + item.text.replace("&lt;", "<").replace("&gt;", ">") + ']]></info>\
                </ptr:CSSSelectorPointer>\
                </ptr:groupPointer>';
        } else if(item.match(reg)) {
            return '<ptr:groupPointer>\
                <ptr:LineCharPointer>\
                <ptr:reference rdf:resource="' + RegExp.$1 + '"/>\
                <ptr:lineNumber>' + RegExp.$2 + '</ptr:lineNumber>\
                <info rdf:parseType="Literal" xml:lang="en"><![CDATA[' + RegExp.$3 + ']]></info>\
                </ptr:LineCharPointer>\
                </ptr:groupPointer>';
        } else {
            return '<ptr:groupPointer>\
                <ptr:SinglePointer>\
                <ptr:reference rdf:resource="' + url + '"/>\
                <info rdf:parseType="Literal" xml:lang="en"><![CDATA[' + item.replace("&lt;", "<").replace("&gt;", ">") + ']]></info>\
                </ptr:SinglePointer>\
                </ptr:groupPointer>';
        }
    }).join("");
    
    cases += '<TestCase rdf:about="http://reporting.opquast.com/checklists/' + item.criterion.checklist.id + '/criteria/' + _id + '/">\
        <dct:title xml:lang="en">Opquast 1</dct:title>\
        <dct:description rdf:parseType="Literal" xml:lang="en"><![CDATA[' + item.criterion.description + ']]></dct:description>\
        <dct:isPartOf rdf:resource="http://reporting.opquast.com/checklists/' + item.criterion.checklist.id + '/"/>\
        </TestCase>';
    
    return '<asserts>\
        <Assertion>\
        <mode rdf:resource="http://www.w3.org/ns/earl#automatic"/>\
        <rdf:subject rdf:resource="' + url +'"/>\
        <TestResult>\
        <info rdf:parseType="Literal" xml:lang="en"><![CDATA[' + item.comment + ']]></info>\
        <pointer>\
        <ptr:RelatedPointers>' + _out + '</ptr:RelatedPointers>\
        </pointer>\
        <outcome rdf:resource="http://www.w3.org/ns/earl#' + results[item.result] + '"/>\
        </TestResult>\
        <rdf:object rdf:resource="http://reporting.opquast.com/checklists/' + item.criterion.checklist.id + '/criteria/' + _id + '"/>\
        </Assertion>\
        </asserts>';
 }).join("");

out += '</Assertor>\
    <TestSubject rdf:resource="' + url + '">\
    <dct:date>2010-08-14T23:07:35Z</dct:date>\
    </TestSubject>';

/*
<TestSubject rdf:resource="http://example.org/">
    <dct:date>2010-08-14T23:07:35Z</dct:date>
    <dct:hasPart rdf:resource="http://www.example.org/style.css"/>
    <dct:hasPart rdf:resource="http://www.example.org/image1.png"/>
    <dct:hasPart rdf:resource="http://www.example.org/image2.png"/>
</TestSubject>
*/

out += cases + '\
    </rdf:RDF>';
    
//console.log(out);

var oParser = Cc["@mozilla.org/xmlextras/domparser;1"].createInstance(Ci.nsIDOMParser);
var oDOM = oParser.parseFromString(out, "text/xml");
var oSerializer = Cc["@mozilla.org/xmlextras/xmlserializer;1"].createInstance(Ci.nsIDOMSerializer);
var sXML = oSerializer.serializeToString(oDOM);

//console.log(sXML);

var req = Cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance();
var cookieManager = Cc["@mozilla.org/cookiemanager;1"].getService(Ci.nsICookieManager2);
var cookies = cookieManager.getCookiesFromHost("opquast.test");

req.open("POST", "http://reporting.opquast.test:8000/api/projects/20454/items/f121b4e0-1f7a-5668-bbe1-f84891636988/inject", false);

var now = new Date();
var _date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), 0).toUTCString();

while (cookies.hasMoreElements()) {
    var cookie = cookies.getNext().QueryInterface(Ci.nsICookie2);
    
    if(cookie.name.search("csrftoken") == 0) {
        req.setRequestHeader("X-CSRF-Token", cookie.value);
    }

    req.setRequestHeader("Cookie", cookie.name + "=" + cookie.value +"; Domain=" + cookie.host + "; Expires=" + _date + "; Path=" + cookie.path);
}

req.setRequestHeader("Content-Type", "application/rdf+earl; charset=utf-8");
req.send(sXML);