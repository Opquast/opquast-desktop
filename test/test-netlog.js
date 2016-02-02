'use strict';

var netlogtestsExport = require('net-log/test/test-main');

for(let label in netlogtestsExport) {
    exports[label] = netlogtestsExport[label];
}

require('sdk/test').run(exports);
