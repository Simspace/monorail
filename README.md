# Monorail 3

### [Quick Start Guide](https://www.notion.so/simspace/Quick-start-Guide-5ad2ee81b9c7415b88033e775f7359d6)

### [Contribution Guide](https://www.notion.so/simspace/Contribution-Guide-8768ba426df14c3caee8bccface805f1)

## Table of Contents

- [Overview](#Overview)
- [Goals/core ideas](#goalscore-ideas)
- [Setup](#setup)
- [Storybook](#storybook)
- [Testing](#testing)
  - [Running Creevey](#running-creevey)
  - [Accepting Changes](#accepting-changes)
  - [Known Issues](#known-issues)
- [Accessibility](#accessibility)
- [FAQ/Known issues](#faqknown-issues)

## Overview

Monorail 3 is an encapsulation of the SimSpace design language, backed by Material UI v5.

## Goals/core ideas

- This library aims to leverage Material UI (MUI) as much as possible using built-in customization facilities
- The overarching goal is to extend/customize MUI to our liking (within reason) without breaking the core assumptions and capabilities of MUI, and following the patterns and conventions established by MUI
- The point of this goal is to avoid creating a lot of extra work and maintenance for ourselves in building and maintaining a custom UI library.

## Setup

```sh
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

For setting up all tests from scratch, you can run tests the first time, and then use `yarn creevey --update` to accept all the snapshots. **DO NOT DO THIS IF YOU ARE MODIFYING THE COMPONENTS** You want to compare images if to make sure there are no unwanted visual side-effects.

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

## Accessibility

We are currently setup to use the `storybook-a11y` addon, so you can view a11y information for components and stories in storybook.

We also have a node-based `jest` test running setup to run the a11y tests outside of storybook.

## FAQ/Known issues

**General comment**: for issues with external libraries like storybook and docgen, the stance is that if there is a sensible/general fix for the problem that we can apply on our side, we can do it. If the fix requires non-trivial hacks, workarounds, or other unsavory code, we should not apply fixes on our side, and report the issue to the external repository. We are not looking to maintain all of these tools or super-custom setups ourselves.

- There are various quirks with the docgen where it doesn't produce useful controls for manipulating property values
  - `ReactNode` props (e.g. `children`) are rendered with a JSON editor, which is not useful
  - The "system" props (e.g. `sx` props, or CSS-like props that you can set directly on components)
  - Examples: `children` props, `Box` component, others

