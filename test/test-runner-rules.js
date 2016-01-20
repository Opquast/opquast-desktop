'use strict';


var runnerTestsRulesExport = require('opquast-tests/test/test-rules');

for(let label3 in runnerTestsRulesExport) {
    exports[label3] = runnerTestsRulesExport[label3];
}

require("sdk/preferences/service").set("plugins.click_to_play", true);
require("sdk/preferences/service").set("accessibility.blockautorefresh", true);

require('sdk/test').run(exports);
