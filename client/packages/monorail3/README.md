# Monorail 3

## Overview

Monorail 3 is a UI component library backed by Material UI v5.

## Goals/core ideas

- This library aims to leverage Material UI (MUI) as much as possible using built-in customization facilities
- The overarching goal is to extend/customize MUI to our liking (within reason) without breaking the core assumptions and capabilities of MUI, and following the patterns and conventions established by MUI
- The point of this goal is to avoid creating a lot of extra work and maintenance for ourselves in building and maintaining a custom UI library.

## Setup

Note: we are in a `yarn workspaces` setup, so the dependencies in this package are specified in this `./package.json`,
but the `yarn.lock` file is in the root workspaces directory.

```sh
# From portal-suite root dir

> cd client/packages/monorail3

# Install dependencies
> yarn

# Run storybook site
> yarn storybook
```

## Storybook

The storybook site is currently organized similarly to the MUI docs, please try to put new components in reasonable places going forward.

## Docgen

In legacy monorail, we had a scripted docgen workflow setup to generate the `.meta.json` files that were fed into the storybook stories for things like the docs page/controls/etc.

In monorail3, we are going to try using the on-the-fly docgen, which is configured in the `./storybook/main.js` with `reactDocgen: 'react-docgen-typescript`.

Note that there are some issues with MUI types which result in badly-generated types in the docs and controls. (e.g. values like `falsefalse` for `Button` `disabled`).

## Accessibility

We are currently setup to use the `storybook-a11y` addon, so you can view a11y information for components and stories in storybook.

We also have a node-based `jest` test running setup to run the a11y tests outside of storybook.

## Notes

### Code Gen

TODO

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
