# Opquast Desktop Firefox add-on. #

Opquast Desktop is an application that allows you to analyze your
website using different quality or accessibility checklists.

## Use it ##

If you just want to install Opquast Desktop on your browser, get the
extension on [Opquast Desktop Website](https://desktop.opquast.com/).

## Hack it ##


There are some submodules into packages/. Do not forget to initialize them:

```
git submodule init
git submodule update
```

You have to install jpm, npm and nodejs. To install them, follow
[this instructions](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#Installation)

## Launch it ##

To test the addon in Firefox, go in the opquast-desktop directory then
execute `npm install` a first time, to create the node_modules directory
from the packages/ directory content. Each time you make modifications into
packages/, remove the node_modules directory and re-run `npm install`.
(`npm update` doesn't update node_modules from packages/ unless you change
also the version into the packages.json of packages).

To launch Firefox with the extensions, execute `jpm run`.

If you want to run the extension with a specific firefox and and a specific
profile, you can run for example:

```
jpm run -b ~/bin/firefoxes/firefox-beta/firefox -p ~/.mozilla/firefox/mbxi7o7z.beta
```

See `jpm help`.

## Unit tests ##

You must execute `jpm test`.

You can execute a specific test. For example to launch test/test-netlog.js,
you must call `jpm test -f netlog`.

You can use also flags to specify a firefox binary and/or a profile.

## Package it ##

To create a package,

1. be sure to have an update node_modules directory (remove it and execute
   `npm install` if this is not the case)
2. execute the given script makexpi.sh. Do not use "jpm xpi" as jpm will
   include all test/ directory in node_modules packages.


## License ##

Opquast Desktop is released under the terms of the
[Mozilla Public Licence](http://www.mozilla.org/MPL/).

## About the Opquast project ##

[Opquast](http://www.opquast.com) (Open Quality Standards) is a Web
quality and accessibility improvement framework developed by Temesis.
It was created in 2003. This project provides checklists
([Qualité Web](http://checklists.opquast.com/fr/opquastv2),
[SEO](http://checklists.opquast.com/fr/seo),
[Open data](http://checklists.opquast.com/fr/opendata)…), testing
tools (Opquast Desktop, Inspector), a mobile application (iOpquast)
and online services ([Opquast reporting](http://reporting.opquast.com),
[Opquast directory](http://directory.opquast.com)…).
