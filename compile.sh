#!/bin/bash

printf "Starting build\n\n"

rm -rf dist/
mkdir dist/
mkdir dist/assets/
mkdir dist/about/

cp templates/test.html dist/index.html
cp templates/test.html dist/about/index.html
cp -r static/* dist/

printf "\n\nFin\n"