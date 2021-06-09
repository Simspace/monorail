# Monorail 3

## Overview

Monorail 3 is a UI component library backed by Material UI v5.

## Setup

Note: we are in a `yarn workspaces` setup, so this project is not fully isolated from other dependencies.

```sh
# From portal-suite root dir

> cd client/packages/monorail3

# Install dependencies
> yarn

# Run storybook site
> yarn storybook
```

## Docgen

We currently have the docgen/META tools copied here from legacy Monorail. I'd like to revisit using storybook's built-in docgen, but there seems to be an issue with the reactDocgen with latest TypeScript.

```sh
# From portal-suite root dir
> cd client

# This will generate a `*.meta.json` file in the `__stories__` folder for any components listed in the script
> ./scripts/docgen-monorail3.sh
```

## Notes

### Styled Engine

At this time, we are using `styled-components` as the styled engine for MUI. This is being done for several reasons at this time, but in theory could change:

There is an issue with `@emotion` v10/11 compatibility in storybook, which causes problems with the Storybook emotion theme interfering with the MUI theme. There are some possible workarounds, but these unfortunately do not work cleanly in our current monorepo setup:

See:

- https://github.com/storybookjs/storybook/issues/13277
- https://github.com/mui-org/material-ui/issues/24282
- https://github.com/chakra-ui/chakra-ui/blob/a5abb6f9477d87a1cbc0c2d784e009d2bc8a8c6d/.storybook/main.js#L11-L23

The `webpackFinal` hack works with MUI 5 in an isolated project, but it doesn't work cleanly in the portal-suite repo at this time, because of how our yarn workspaces are setup, and also possibly because we already have another older instance of storybook setup.

Another unrelated reason for using `styled-components` is that we are already using it in portal-client, so this will allow us to not have two competing styling engines in the app bundle.

`styled-components` must be aliased in the webpack config for Material UI, as documented here:

https://next.material-ui.com/guides/styled-engine/#how-to-switch-to-styled-components
