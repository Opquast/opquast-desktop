# Opquast Desktop Firefox add-on. #

Opquast Desktop is an application that allows you to analyze your
website using different quality or accessibility checklists.

## Use it ##

If you just want to install Opquast Desktop on your browser, get the
extension on [Opquast Desktop Website](https://desktop.opquast.com/).

## Hack it ##

If you want to make your own XPI or hack it, install the
[`cfx` tool](https://ftp.mozilla.org/pub/labs/jetpack/jetpack-sdk-latest.zip)
from Mozilla, extract files from the archive, then run:

```
cd addons-sdk
source bin/activate
```

Note: you need to install Python 2.6 or 2.7.

Then go in the opquast-desktop directory. To test the addons, execute `cfx run`.
To create a package, don't use cfx, but execute the `make_xpi.py` script.

For more information about cfx, [read the manual](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/cfx).

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
