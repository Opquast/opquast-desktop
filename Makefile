#!/usr/bin/env make

GIT_TBB="git://github.com/voldsoftware/toolbarbutton-jplib.git"
GIT_VOLDUTILS="git://github.com/erikvold/vold-utils-jplib.git"

xpi:
	cfx --package-path ../libs xpi

bootstrap:
	cd ../ && (test -d libs || mkdir libs)
	cd ../libs && (test -d toolbarbutton || git clone $(GIT_TBB) toolbarbutton)
	cd ../libs && (test -d vold-utils || git clone $(GIT_VOLDUTILS) vold-utils)

run:
	cfx --package-path ../libs run
