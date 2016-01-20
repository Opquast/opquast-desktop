'use strict';

var runnerTestsSetExport = require('opquast-tests/test/test-sets');
for(let label2 in runnerTestsSetExport) {
    exports[label2] = runnerTestsSetExport[label2];
}

require("sdk/preferences/service").set("plugins.click_to_play", true);
require("sdk/preferences/service").set("accessibility.blockautorefresh", true);

require('sdk/test').run(exports);
