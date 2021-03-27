#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

npm pack

cp inline-svg-0.1.0.tgz ~/vue/test/

cd ~/vue/test/

npm i inline-svg-0.1.0.tgz