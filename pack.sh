#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

npm pack

cp vue-inline-svgs-1.0.4.tgz ~/vue/test/

cd ~/vue/test/

npm i vue-inline-svgs-1.0.4.tgz