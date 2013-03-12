#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
from subprocess import call
import sys
from zipfile import ZipFile, ZIP_DEFLATED


def tamper_xpi(src, dest, xpi):
    def find_files(data_src):
        file_list = []
        for (dirpath, dirnames, filenames) in os.walk(data_src):
            file_list.extend([os.path.join(dirpath[len(data_src)+1:], x) for x in filenames])
        return file_list

    fp = ZipFile(xpi, "a", ZIP_DEFLATED)
    try:
        for f in find_files(src):
            fp.write(os.path.join(src, f), os.path.join(dest, f))
    finally:
        fp.close()


if __name__ == '__main__':
    args = list(sys.argv)[1:]
    cmd = ["cfx", "xpi", "--templatedir=./app-extension"]
    cmd.extend(args)
    call(cmd)
    tamper_xpi("packages/opquast-test-runner/data", "resources/opquast-tests/data", "opquast-desktop.xpi")
