# Monorail 3

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
  - Possibly related to prop types that are defined as an `interface` that `extends` another interface, or pos
  - Examples: `Select`, `ToggleButtonGroup`, possibly others
  - Possibly related:
    - https://github.com/strothj/react-docgen-typescript-loader/issues/47
    - https://stackoverflow.com/questions/63919936/missing-materialui-table-props-in-storybook
    - https://github.com/styleguidist/react-docgen-typescript/issues/335

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

Note that there are some issues with MUI types which result in badly-generated types in the docs and controls. (e.g. values like `falsefalse` for `Button` `disabled`). There's not currently a good solution for this, but we'll keep an eye on it.

## Accessibility

We are currently setup to use the `storybook-a11y` addon, so you can view a11y information for components and stories in storybook.

We also have a node-based `jest` test running setup to run the a11y tests outside of storybook. These basic a11y tests are generated for each component using a script - see code gen below.

## Code Gen

### Overview

There is a code generation script setup to reduce the burden in creating some of the boilerplate code for exposing the MUI components. The script produces files that are intended to be 100% generated and not edited by hand, and also produces several "starter" files for components, which contain basic setup code, but are intended to be edited by hand going forward.

The files that contain `*.gen.*` in the name are not intended to be hand-edited, but anything that doesn't have `*.gen.*` in the name can be edited by hand.

For each component, the script produces the following files:

1. `src/components/{Component}/{Component}.gen.tsx`
   - _This file is not meant to be edited by hand_
   - This file contains a generated type alias for the component's prop type, and a wrapper function for the component itself
   - The component function can be optionally configured to be wrapped in a `React.forwardRef` if the component needs to forward a `Ref`
1. `src/components/{Component}/{Component}.tsx`
   - _Once generated, this file is intended to be edited by hand_
   - This file re-exports the generated exports from `{Component}.gen.tsx`, and is intended to be hand-maintained to add any extra functionalty (types, functions, hooks, etc.) for the component
   - It would also be possible to override the `.gen.tsx` exports in this file, but it would generally be better to fix the code gen if there are issues with generated types/functions
1. `src/components/{Component}/__stories__/{Component}.stories.gen.tsx`
   - _This file is not meant to be edited by hand_
   - This file contains some generated boilerplate/configurable code to help with the creation of stories for the component
   - It proved to be difficult to generate meaningful stories for each component, as each component requires a distinct setup and might have certain required props, or props that are validated at runtime, so the actual stories are generated/managed in the `*.stories.tsx` file.
1. `src/components/{Component}/__stories__/{Component}.stories.tsx`
   - _Once generated, this file is intended to be edited by hand_
   - Each `*.stories.tsx` file should contain a default `Template` and a `Default` story which uses the `Template`. In storybook, to get the Controls and Docs page control table working, you have to setup a story using the Template mechanism provided by storybook, so it can inspect the props and generate the controls table (e.g. via `react-docgen-typescript`).
   - You do not need to use the `Template` for every story - you can just make "vanilla" stories as prop-less React components, like `export const MyVanillaStory = () => { /* render component(s) */ } `
   - Prop-less stories will not work with the Controls/Docs, but they are useful as static demos for the component
   - The code gen script generates a basic `Template` and `Default` story that uses the `Template`, but this is intended to be fixed-up by hand to make it more useful/realistic.
   - The code gen script does not attempt to generate a working `Template`/`Default` story, so there are cases where you'll need to go an set the required props to make the story compile.
1. `src/components/{Component}/__tests__/{Component}.gen.test.tsx`
   - _This file is not meant to be edited by hand_
   - This file contains a generated Jest test which runs the `react-axe` a11y tests for the component's storybook stories.
   - To add more hand-written tests for a component, create a separate `{Component}.test.tsx` file

### Code gen script

The code gen script is a typescript/node.js script: `./client/packages/monorail3/tools/generateMonorailFromMUI.ts`

Currently, the script is compiled to `dist/tools/generateMonorailFromMUI.js`

The script contains a list of MUI components along with some mostly optional code gen metadata for each component. It uses a typescript library [ts-morph](https://github.com/dsherret/ts-morph) to help with some of the type manipulation in the code gen. `ts-morph` is a typescript library which wraps the `ts` compiler API, and just makes it a little easier to work with for inspecting types, generating code, etc.

The script works by inspecting the MUI `.d.ts` type definition files for each component to try to extract the props type and generate a component wrapper function for each component. Because many of the MUI components have generic type parameters, one of the main functions of the `ts-morph` helper is to extract and copy over the type params into the monorail modules.

**Side note:** The Monorail components are being generated as wrapper functions, rather than re-exports of the MUI components, because I found that the storybook docgen was not able to work cleanly with re-exports of components. It seemed to be really wanting to find a function with `props` to inspect, and in some cases, it wasn't able to find what it was looking for when I just re-exported types and functions form `@material-ui/core`. I did not dig super deep into this, and just moved ahead with wrapper functions.

**Another side note:** We are generating wrappers for MUI components rather than using them directly in our applicaton code, so we have a thin layer of abstraction/indirection, in case we need to make unforeseen/surgical fixes or hacks to components. The purpose of this abstraction is not necessarily to try to hide the fact that we are using MUI, but just to give ourselves a thin layer of abstraction and control over MUI.

Some MUI components expose `Ref` props, and in these cases, the wrapper function needs to use `React.forwardRef` to expose the ref prop. The code gen script has a flag to make it wrap the MUI component in a `React.forwardRef` if needed. I'm not sure whether all the components need this, or which ones, so we can fix it as needed. `Box` is an example of one that is generated this way at this time. [Here is a good article on generating `forwardRef` components in typescript](https://fettblog.eu/typescript-react-generic-forward-refs/). I opted to use the type assertion approach, because it is generated code and hopefully unlikely to be incorrect.

The recommended way of running the script is to use the `yarn` script aliases - see below:

### Compile the script:

Note: `yarn tsc` compiles both the script and the monorial3 code, so everything needs to be compiling to generate the .js file for the script.
I'd like to eventually separate the compilation of the script from the rest of the code.

```
> cd client/packages/monorail3
> yarn tsc
```

### Run the script:

```
> cd client/packages/monorail3
> yarn gen
```

There are currently a few caveats with the script, some of which can be improved over time.

1. Make sure to compile the script before re-running the code gen - if you just run the gen, you might be running an out-of-date .js file from `dist/tools`
1. I was trying to keep the code gen script as simple as possible to get the job done
1. The script is fairly naive in how it generates the code - it contains a bit of metadata to help with common issues, but is not super smart
   - Metadata for configuring extra imports to add the generated monorail file
   - Metadata for configuring whether to wrap the generated component in `React.forwardRef`
   - Other metadata - see script for more info

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
import { styled } from '@materail-ui/core/styles'

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
