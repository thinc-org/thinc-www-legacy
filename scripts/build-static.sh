#!/bin/bash
rm -rf .next
rm -rf out
mkdir out
yarn build
yarn export
touch out/.nojekyll
git add out && git commit -m '[Build] Build and commit from `build-static.sh`'
git subtree push --prefix out origin gh-pages-deploy