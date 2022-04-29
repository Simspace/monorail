# Monorail 3

## Table of Contents

- [Overview](#Overview)
- [Goals/core ideas](#goalscore-ideas)
- [FAQ/Known issues](#faqknown-issues)
- [Setup](#setup)
- [Storybook](#storybook)
- [Testing](#testing)
  - [Running Creevey](#running-creevey)
  - [Accepting Changes](#accepting-changes)
  - [Known Issues](#known-issues)
- [Docgen](#docgen)
- [Accessibility](#accessibility)
- [Styled Engine](#styled-engine)
- [Custom styling/theming](#custom-stylingtheming)

## Overview

Monorail 3 is a UI component library backed by Material UI v5.

## Goals/core ideas

- This library aims to leverage Material UI (MUI) as much as possible using built-in customization facilities
- The overarching goal is to extend/customize MUI to our liking (within reason) without breaking the core assumptions and capabilities of MUI, and following the patterns and conventions established by MUI
- The point of this goal is to avoid creating a lot of extra work and maintenance for ourselves in building and maintaining a custom UI library.

## FAQ/Known issues

**General comment**: for issues with external libraries like storybook and docgen, the stance is that if there is a sensible/general fix for the problem that we can apply on our side, we can do it. If the fix requires non-trivial hacks, workarounds, or other unsavory code, we should not apply fixes on our side, and report the issue to the external repository. We are not looking to maintain all of these tools or super-custom setups ourselves.

- There are various quirks with the docgen where it doesn't produce useful controls for manipulating property values
  - `ReactNode` props (e.g. `children`) are rendered with a JSON editor, which is not useful
  - The "system" props (e.g. `sx` props, or CSS-like props that you can set directly on components)
  - Examples: `children` props, `Box` component, others
- There is an issue with the docgen for certain components, where if the MUI props type is defined in a certain way, `react-docgen-typescript` will not generate a full controls table for the component.
  - You may see only a `ref` in the Controls/Docs table
  - Seems to affect all the components that are defined with a `forwardRef`
  - Possibly related to prop types that are defined as an `interface` that `extends` another interface
  - Possibly related to prop types that `Omit` certain attributes from other types
  - Examples: `Select`, `ToggleButtonGroup`, others
  - Some related issues:
    - https://github.com/strothj/react-docgen-typescript-loader/issues/47
    - https://stackoverflow.com/questions/63919936/missing-materialui-table-props-in-storybook
    - https://github.com/styleguidist/react-docgen-typescript/issues/335
  - The current stance on this is to not try to address it ourselves at this time, and hope for an eventual fix to `react-docgen-typescript`. If no fix ever comes, we may need to do something ourselves.

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

## Testing

Monorail 3 uses visual testing to assert that all component and theme changes are intentional. To accomplish this, we use [Creevey](https://github.com/wKich/creevey), which can test in headless mode for CI and with a GUI to make comparisons easy. It is currently set up to be integrated with Storybook.

### Running Creevey

Creevey requires Docker to run. You can run it a few different ways:

- Running the GUI (Creevey runs on `localhost:3000`)
  - If you already have a window with Storybook running, you can run the Creevey GUI from a new terminal tab using `yarn creevey --ui`
  - If you want to run both in one command, you can use `yarn test:visual`
- Running in the Terminal
  - If you already have a window with Storybook running, you can run Creevey tests in a new terminal tab using `yarn creevey`
  - If you want to run both in headless mode, you can use `yarn test:visual:ci`

### Accepting changes

Once you have run the tests, if you see failures, you can inspect the differences in the snapshots in the Creevey GUI. If the new version looks good to you, you can use the `Approve` button to accept the new image.

For setting up all tests from scratch, you can run tests the first time, and then use `yarn creevey --update` to accept all the snapshots. ** DO NOT DO THIS IF YOU ARE MODIFYING THE COMPONENTS ** You want to compare images if to make sure there are no unwanted visual side-effects.

### Known issues

- Creevey does not understand parameters and options that are `({...spread})`, and therefore any parameter options must be put on the story instead of spread through the `story` helper function. e.g.

```
export const MyStory = story(() => ..., {args: blah})
MyStory.parameters = {
  docs: {...},
  creevey: {
    skip: true
  }
}
```

- Stories that include image fetches load those images unreliably during tests, and can create erroneous failures. These stories can be skipped
- Pending stories (ones that haven't been written yet) should be skipped, since those will also fail
- Some components have slightly unreliable visual footprints, like the underline in `Tabs` can sometimes not shift over correctly. These components will fail erroneously and should be skipped. They can also be given a higher threshold for failure using the `threshold` option.

## Docgen

In legacy monorail, we had a scripted docgen workflow setup to generate the `.meta.json` files that were fed into the storybook stories for things like the docs page/controls/etc.

In monorail3, we are going to try using the on-the-fly docgen, which is configured in the `./storybook/main.js` with `reactDocgen: 'react-docgen-typescript`.

Note that there are some issues with MUI types which result in badly-generated types in the docs and controls. (e.g. values like `falsefalse` for `Button` `disabled`). There's not currently a good solution for this, but we'll keep an eye on it.

## Accessibility

We are currently setup to use the `storybook-a11y` addon, so you can view a11y information for components and stories in storybook.

We also have a node-based `jest` test running setup to run the a11y tests outside of storybook. These basic a11y tests are generated for each component using a script - see code gen below.

## Code Gen

## Styled Engine

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

## Custom styling/theming

For the main Monorail 3 components we are aiming to do most/all of the custom styling using the MUI theme, and specifically the `components` part of the theme that lets you set/override the styles for individual components.

Component-level theme customizations should be made in `./src/theme/themeComponents.ts`. To override the styles/default props/variants for a component, add a top-level key to the object returned by `getThemeComponents`, e.g.:

```typescript
export const getThemeComponents = (
  // This function is given access to the fully-populated theme, minus the `components` portion, which is what we're creating here
  // All style overrides should use appropriate settings from the theme for colors, spacing, elevation/shadows, typography, etc.
  theme: MUI.Theme,
): MUI.ThemeOptions['components'] => ({
  // TODO: we may want to split these into separate files - one theme override per component? Or maybe we just do it all here for consistency
  MuiButton: {
    // Setup theme-level default props. These can be overridden when constructing the components
    defaultProps: {
      disableRipple: true,
    },
    // Add style overrides to the specific "class buckets" for a component. The class keys are type-safe and correspond to different layers (elements) of the component or its children
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.primary.main, // Just an example
      },
    },
    // Handle custom variants - see themeExtensions for setting up custom variants or other custom extensions for components
    variants: [
      // Styles for custom size extraSmall
      {
        props: { size: 'extraSmall' },
        style: {
          // TODO: these styles are just for demo purposes at this time
          fontSize: 11,
          height: 18,
          padding: '8px 0',
        },
      },
    ],
  },
  MuiAccordion: {
    // Set default props to apply for components
    defaultProps: {
      variant: 'outlined',
      square: true,
    },
  },
})
```

We should be able to do most of our themeing in this file (and by filling out the core parts of the theme, like `palette`, `typography`, etc.).

In cases where you need to custom style a component, the recommendation is to use the `styled` function from MUI, and not `styled-components` (nor `emotion`) directly. The `styled` function from MUI is an abstraction around the underlying `StyledEngine`, but basically works the same as `styled-components` or `emotion`.

**Note**: For styling MUI components, we are trying to style them via the theme `components`, and not via `styled` at the component level, so that we get consistent theming across the core components (e.g. when one MUI component uses another built-in MUI component, we need the custom styles to come from the theme).

Here is an example of using `styled` to customize a component:

```typescript
// other imports
import { styled } from '@mui/styles'

const StyledAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const StyledAccordionSummary = styled((props: AccordionSummaryProps) => (
  <AccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    // This is just an example - not a best practice to have hard-coded colors like this
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))
```
