#!/bin/bash

printf "Starting build\n\n"

rm -rf dist/
mkdir dist/
mkdir dist/assets/
mkdir dist/news/
mkdir dist/about/

cp templates/test.html dist/index.html
cp templates/test.html dist/news/index.html
cp templates/test.html dist/about/index.html
cp -r static/* dist/assets/

printf "\n\nFin\n"