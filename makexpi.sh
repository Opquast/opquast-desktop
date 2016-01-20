#!/bin/sh

if [ ! -d ./node_modules ]; then
    npm install
fi

if [ -d ./node_modules/net-log/test ]; then
    rm -rf ./node_modules/net-log/test
fi

if [ -d ./node_modules/opquast-tests/test ]; then
    rm -rf ./node_modules/opquast-tests/test
fi

jpm xpi
