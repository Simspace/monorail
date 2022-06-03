# Contributing to Monorail 3

Thank you for your interest in helping build Monorail!

## Table of Contents

- [Links](#links)
- [FAQ/Known issues](#faqknown-issues)
- [Setup](#setup)
- [Storybook](#storybook)
- [Testing](#testing)
  - [Running Creevey](#running-creevey)
  - [Accepting Changes](#accepting-changes)
  - [Known Issues](#known-issues)
- [Accessibility](#accessibility)
- [Customization/Theming](#customizationtheming)
- [Design Tokens](#designtokens)

## Links

- [Monorail3 Roadmap](https://github.com/Simspace/portal-suite/wiki/Monorail-3-Roadmap)
- [Tracking Spreadsheet](https://docs.google.com/spreadsheets/d/1P2sDbicJj4AyoaBcPQv1pN1V8XDa1HFcoC2cYwecq2s/edit#gid=121241698)

## FAQ/Known issues

- Interaction state props don’t work in Storybook
  - [https://mui.com/material-ui/customization/how-to-customize/#state-classes](https://mui.com/material-ui/customization/how-to-customize/#state-classes)
  - When overriding states in `styleOverrides`, the recommended way does not work. Maybe this only happens in Storybook. I guess we’ll find out when we use M3 in the Portal.
    - `focusVisible` (.Mui-focusVisible)
    - `disabled` (.Mui-disabled)
    - `checked` (.Mui-checked)

## Setup

```sh
# Clone repo
> git clone git@gitlab.com:simspace/r9y/monorail.git

# From monorail root dir

# Install dependencies
> yarn

# Run storybook site
> yarn storybook
```

## Merge Requests

1. Ensure it passes CI `yarn type-check`, `yarn eslint`, `yarn prettier:check`.
2. Post merge request link in `#eng-team-reusability-pr` and tag `@team-reusability-ux`.
3. Ping `@team-reusability-fe` for code review after getting an approval from UX.

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

```ts
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

## Accessibility

We are currently setup to use the `storybook-a11y` addon, so you can view a11y information for components and stories in storybook.

We also have a node-based `jest` test running setup to run the a11y tests outside of storybook. These basic a11y tests are generated for each component using a script - see code gen below.

## Customization/Theming

For the main Monorail 3 components we are aiming to do most/all of the custom styling using the MUI theme, and specifically the `components` part of the theme that lets you set/override the styles for individual components.

- [Theming MUI components](#themingmuicomponents)
- [Extending MUI components](#extendingmuicomponents)

### Theming MUI components

#### 1. Create a `themeOverrides` file

- Component-level theme customizations should be made in `./src/components/Component/themeOverrides.ts`

#### 2. `themeOverrides` file setup

1. Module augmentation (if necessary)
2. Component tokens (If necessary. See Component token structure)
3. Comopnent overrides
   - `defaultProps {}` - Maps to **Props** section of API docs. Use this key to change default behavior. [Example](https://mui.com/material-ui/api/chip/#props)
   - `styleOverrides {}` - Maps to **CSS** section of API docs. [Example](https://mui.com/material-ui/api/chip/#css)

- To override the styles/default props/variants for a component, use the `defaultProps` and `styleOverrides` keys, e.g.:

  ```typescript
  // Module augmentation
  declare module '@mui/material/Chip' {
    interface ChipPropsVariantOverrides {
      rectangular: true
    }
  }

  // Component tokens
  const chipTokens = {}

  // Component overrides
  export const MonorailChipOverrides: Components<Theme>['MuiChip'] = {
    defaultProps: {},
    styleOverrides: {},
  }
  ```

#### 3. Add to `themeComponents.ts` object

Make sure to add the new `themeOverrides.ts` file to our `src/theme/themeComponents.ts` object. This is in alphabetical order.

#### 4. Set default props

⚠️ Note: Try to trace a component’s dependency if the new behavior is desired globally. A good example is `disableRipple`. Instead of disabling it at the instance level (e.g., `IconButton`), it is set at the primitive level (e.g., `ButtonBase`).

#### 5. Prop based theming

[MUI docs: Overrides based on props](https://mui.com/material-ui/customization/theme-components/#overrides-based-on-props)

New in MUI5: `ownerState`

```typescript
const finalTheme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        valueLabel: ({ ownerState, theme }) => ({
          ...(ownerState.orientation === 'vertical' && {
            backgroundColor: 'transparent',
            color: theme.palette.grey[500],
          }),
        }),
      },
    },
  },
})
```

We should be able to do most of our themeing in this file (and by filling out the core parts of the theme, like `palette`, `typography`, etc.).

In cases where you need to custom style a component, the recommendation is to use the `styled` function from MUI, and not `styled-components` (nor `emotion`) directly. The `styled` function from MUI is an abstraction around the underlying `StyledEngine`, but basically works the same as `styled-components` or `emotion`.

**Note**: For styling MUI components, we are trying to style them via the theme `components`, and not via `styled` at the component level, so that we get consistent theming across the core components (e.g. when one MUI component uses another built-in MUI component, we need the custom styles to come from the theme).

Here is an example of using overrides to customize a component:

```typescript
import { chipClasses, Components, Theme } from '@mui/material'

// Module augmentation
declare module '@mui/material/Chip' {
  /**
   * Extend the Chip variant prop to add `rectangular` variant.
   */
  interface ChipPropsVariantOverrides {
    rectangular: true
  }
}

// Component tokens
const chipTokens = {
  // variant/color prop > sentiment > usage > prominence > interaction
  // Example:
  // variant
  filled: {
    // sentiment (none, but an example would be 'selected')
    // prominence
    strong: {
      // usage
      bg: {
        // interaction
        idle: 600,
        hover: 700,
        active: 800,
        focused: 600,
      },
      deleteIcon: 50,
      avatar: {
        bg: 800,
      },
    },
  },
}

// Component overrides
// Apply themes overrides here as much as possible. If you need to extend functionality or add props, you may do so by wrapping the component (see IconButton.tsx)
export const MonorailChipOverrides: Components<Theme>['MuiChip'] = {
  defaultProps: {
    clickable: true,
  },
  styleOverrides: {
    filled: ({ ownerState: { color = 'default' }, theme }) => {
      return {
        border: '1px solid transparent',
        backgroundColor:
          color === 'default'
            ? theme.palette[color].shades[chipTokens.filled.weak.bg.idle]
            : color === 'secondary' || color === 'warning'
            ? theme.palette[color].shades[chipTokens.filled.medium.bg.idle]
            : theme.palette[color].shades[chipTokens.filled.strong.bg.idle],
        // Use component classes instead of typing out '.Mui-focusVisible'
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor:
            color === 'default'
              ? theme.palette[color].shades[chipTokens.filled.weak.bg.focused]
              : color === 'secondary' || color === 'warning'
              ? theme.palette[color].shades[chipTokens.filled.medium.bg.focused]
              : theme.palette[color].shades[
                  chipTokens.filled.strong.bg.focused
                ],
        },
      }
    },
  },
}
```

## Extending MUI components

### Adding props

We cannot add our own props without wrapping the component. Source: [https://github.com/mui/material-ui/issues/31094](https://github.com/mui/material-ui/issues/31094)

We can, however, extend styles if the props already exist in the component and if it has an interface provided by MUI. See “Extending Styles” below.

### Extending styles

Check the component’s `.d.ts` file to see what styles can be extended. Some common properties are color, size, and variant.

```ts
// node_modules/@mui/material/Badge/Badge.d.ts
...
export interface BadgePropsVariantOverrides {}

export interface BadgePropsColorOverrides {}
...
```

### Adding variants

More often than not, you’ll have to wrap a component if you want to add variants. Only a handful of components, like the `Badge` example above, have an `interface [Component]PropsVariantOverrides {}`. It is unknown whether the MUI team plans to add that for all components.

**Update 5/24/22:** The `variants` API has been un-deprecated in MUI v5.4.4 (we are currently on 5.4.1). [https://github.com/mui/material-ui/pull/31239](https://github.com/mui/material-ui/pull/31239)

## Adding custom icons

1. Create a file under `monorail3/src/icons/svgs`
2. Make sure the icon’s name is the same as Figma using pascal case
3. Make sure it’s 24px x 24px
4. Remove `fill`
5. To add custom icons, wrap them in `SvgIcon`, isntead of `Icon`.

### Components not in MUI

Some comopnents have yet to be built by the MUI team. See [MUI’s Roadmap](https://mui.com/material-ui/discover-more/roadmap/#main-content).

In this case, our first approach is to try to assemble it using our pre-existing components. If that is not a viable solution, look for a library, preferrably one that provides only the behavior (See [Carousel PR](https://github.com/Simspace/portal-suite/pull/7793)). We’ll temporarily adopt it as our official Monorail component. Then, we’ll reasses once MUI releases theirs.

### Consistent coding style

We try to follow MUI's coding style. For examples, check out the [MUI's list of components](https://github.com/mui/material-ui/tree/4b8e3541daf05499a56e1aa7257aec519c52ffc6/packages/mui-material/src):

### Component caveats

1. **Popper** - Refer to Popper.js API for customization. Use the [modifiers](https://popper.js.org/docs/v2/modifiers/)
   prop.

## Design Tokens

⚠️ This section is a WIP. More docs and a dev talk on the topic soon. - Gabe S. 5/26/22

MUI's theme object comes with design tokens out of the box. To see a full list of default tokens, you can go to [mui.com](https://mui.com/material-ui/getting-started/installation/) and enter `window.theme` in the console.

We've taken a minimal approach in tokenizing to make room for changes. As patterns solidify, we tokenize those design decisions and add them to the object (example below). If you identify a pattern, let's discuss it in #eng-monorail to get FE and UX on the same page.

```ts
// src/theme/defaultLightTheme.ts

const palette: PaletteOptions = {
  primary: {
    // ...Other colors such as light, main, dark
    focusRing: {
      inner: RawColor.Blue800,
      outer: RawColor.Blue400,
    },
  },
}

// src/theme/themeExtensions.ts

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    focusRing: {
      inner: string
      outer: string
    }
  }

  interface SimplePaletteColorOptions {
    focusRing?: Partial<{
      inner: string
      outer: string
    }>
  }
}
```

### Color

| Color token                                                  | Usage                                                                                                                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `theme.palette.background.paper`                             | Commonly used on surfaces. As a rule of thumb, if the background should turn from light to dark when switching from light to dark mode, use background.paper. |
| `theme.palette.common.white` or `theme.palette.common.black` | Elements that should remain white or black no matter what theme is used. Example: White text on a blue button.                                                |
|                                                              |                                                                                                                                                               |

### Spacing

### Typography
