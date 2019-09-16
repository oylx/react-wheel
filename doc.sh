#!/usr/bin/env bash
#!/bin/env bash

yarn doc
git checkout gh-pages
#doc/* ./
mv -f doc/* ./
git add .
git commit -m "update"
git push
git checkout master