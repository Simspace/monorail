# 🚝 Monorail

Hello. Words go here.

## Cutting a new release

When it's ready, _first_ you must bump the version:

`npm version patch`

This will increment the patch version. Then, create a new build:

`yarn build`

The `dist/` folder now contains the files and its own `package.json`. To actually publish the new release:

`(cd dist && npm publish --access public)`
