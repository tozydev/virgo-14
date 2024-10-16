#!/bin/sh

cp -r .github/actions/pandoc/* docs
cd docs || exit
pandoc "$@"
