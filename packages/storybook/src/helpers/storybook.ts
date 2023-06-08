/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { Theme } from '@mui/material'
import type { Args as DefaultArgs } from '@storybook/addons'
import type {
  ArgTypes,
  ArgTypes as StorybookArgTypes,
  Meta as StorybookMeta,
  Parameters as StorybookParameters,
  ReactRenderer,
} from '@storybook/react'
import type { AnnotatedStoryFn } from '@storybook/types'

import { classicLight } from '@monorail/themes'
import { RawColor as ClassicDarkRawColors } from '@monorail/themes/classic/theme/dark'
import { RawColor as ClassicLightRawColors } from '@monorail/themes/classic/theme/light'
import { RawColor as MeteorDarkRawColors } from '@monorail/themes/meteor/theme/dark'
import { RawColor as MeteorLightRawColors } from '@monorail/themes/meteor/theme/light'
import { RawColor as MuiRawColors } from '@monorail/themes/mui/theme'
import { RawColor as PcteDarkRawColors } from '@monorail/themes/pcte/theme/dark'
import { RawColor as PcteLightRawColors } from '@monorail/themes/pcte/theme/light'

import { ThemeName } from '../theme/palette/palette.types'
import { isNonEmptyString } from './typeGuards.js'

type A11yParameter = {
  a11y?: {
    element?: A11yElement | string
    disable?: boolean
    config?: {
      rules: Record<string, { enabled: boolean }> // key is rule name
    }
  }
}
type A11yParameters = {
  parameters?: A11yParameter
}

declare type DocsParameter = {
  docs?: {
    inlineStories?: boolean
    storyDescription?: string
    description?: {
      story?: string // markdown-supporting documentation string for use in non-hero stories
      component?: string // Use for the subtitle description in a hero story. supports markdown
    }
  }
}

type LayoutParameter = {
  /**
   * The layout parameter allows you to configure how stories are positioned in Storybook's Canvas tab.
   *
   * `padded` - Add extra padding around the component
   *
   * `fullscreen` - Allow the component to expand to the full width and height of the Canvas
   *
   * `centered` - Center the component horizontally and vertically in the Canvas
   *
   * [Docs: Story Layout](https://storybook.js.org/docs/react/configure/story-layout)
   *
   * @default 'padded'
   */
  layout?: 'padded' | 'fullscreen' | 'centered'
}

export type Meta = StorybookMeta & A11yParameters
export type Story<Args = DefaultArgs> = AnnotatedStoryFn<
  ReactRenderer,
  Partial<Args>
> &
  A11yParameters

/**
 * Selectors used by a11y tools to target specific elements for a11y checks
 */
export enum A11yElement {
  /**
   * `Root` is the default. Only use it when overriding a non-default selector.
   */
  Root = '#root',
  Component = '#root > *',
  Modal = '.MuiDialog-root',
  Popover = '.MuiPopover-root',
  Drawer = '.MuiDrawer-root',
}

//#region Parameters

// These are intended to be used to add parameters metadata to story components, which is using the `story` helper function
//
// Example:
//
// export const MyStory = story(Template, {
//   args: {
//     prop1: true,
//     ...
//   },
//   parameters: {
//     {...DISABLED_CONTROLS}
//     {...DISABLED_ACTIONS}
//     {...DISABLED_A11Y}
//   }
// })

/**
 * Add this to the story `parameters` to disable the controls integration for this story
 */
export const DISABLED_CONTROLS = {
  controls: {
    disable: true,
  },
} as const

/**
 * Add this to the story `parameters` to disable the actions integration for this story
 */
export const DISABLED_ACTIONS = {
  actions: { disable: true },
} as const

/**
 * Add this to the story `parameters` to enable the actions integration for this story
 */
export const ENABLED_ACTIONS = {
  actions: { disable: false },
} as const

/**
 * Add this to the story `parameters` to disable the a11y integration for this story (and corresponding jest tests)
 */
export const DISABLED_A11Y = {
  a11y: { disable: true },
} as const

export const DISABLED_ARG_TYPE = {
  table: { disable: true },
} as const

/**
 * Sets the normal "root" selector as the root for the a11y tests.
 *
 * This is the default a11y selector. Only use it when overriding a custom selector.
 */
export const A11Y_ELEMENT__ROOT = {
  a11y: { element: A11yElement.Root },
}

export const A11Y_ELEMENT__COMPONENT = {
  a11y: { element: A11yElement.Component },
}
//#endregion

//#region Helper functions
type StoryConfiguration<T> = {
  args?: Partial<T>
  argTypes?: StorybookArgTypes
  parameters?: StorybookParameters &
    A11yParameter &
    DocsParameter &
    LayoutParameter
  storyName?: string
}

/**
 * Helper function for creating a story from a Template.
 * Also handy for creating new stories from a normal component.
 * - Storybook's documented approach of manually adding configuration as properties to the Story is tedious, error-prone, and poorly typed.
 *
 * This basically does the equivalent of the vanilla storybook story setup:
 *
 * ```typescript
 * const Template = args => <MyComponent {...args}
 *
 * export const MyStory = Template.bind({})
 * MyStory.args = ...
 * MyStory.argTypes = ...
 * MyStory.parameters = ...
 * ```
 *
 * Like this:
 *
 * ```typescript
 * const Template = args => <MyComponent {...args}
 *
 * export const MyStory = story(Template, {
 *   args: ...
 *   argTypes: ...
 *   parameters: ...
 * })
 * ```
 *
 * Note that you can also create stories as just vanilla React components, without the args/argTypes/parameters metadata,
 * but stories like this can't take advantage of custom a11y settings, and do not seem to work with the Docs/Controls control tables.
 *
 * ```typescript
 * // Won't work with storybook controls/etc.
 * export const MyVanillaStory = () => <Button variant='containe'>Button</Button>
 * ```
 *
 * @param Template A renderable Template or Component
 * @param config Properties added to the returned Story
 *
 * @example using Template:
 * export const Disabled = story(BasicTemplate, { args: { disabled: true }})
 *
 * @example using a component:
 * export const Other = story(() => <div />, { storyName: "Example"})
 */
export function story<T extends DefaultArgs>(
  Template: Story<T>,
  {
    args,
    argTypes,
    parameters,
    storyName,
    muiName,
  }: StoryConfiguration<T> & {
    muiName?: keyof NonNullable<Theme['components']>
  } = {},
): Story<T> {
  let themeProps: {} | undefined = {}
  if (muiName) {
    themeProps = classicLight.components?.[muiName]?.defaultProps
  }
  const NewStory = Template.bind({}) as Story<T>
  NewStory.args = { ...themeProps, ...Template.args, ...args } as Partial<T>
  NewStory.argTypes = { ...Template.argTypes, ...argTypes } as Partial<
    ArgTypes<Partial<T>>
  >
  NewStory.parameters = { ...Template.parameters, ...parameters }

  if (isNonEmptyString(storyName)) {
    NewStory.storyName = storyName
  }

  return NewStory
}

/**
 * Gets the `RawColor` object of a theme. Used for displaying the corresponding global token and value of an alias token.
 * @param themeName theme.palette.name
 * @returns RawColors object
 */
export const getRawColorObject = (themeName: ThemeName) => {
  switch (themeName) {
    case ThemeName.ClassicLight:
      return ClassicLightRawColors
    case ThemeName.ClassicDark:
      return ClassicDarkRawColors
    case ThemeName.MUILight:
      return MuiRawColors
    case ThemeName.MUIDark:
      return MuiRawColors
    case ThemeName.PCTELight:
      return PcteLightRawColors
    case ThemeName.PCTEDark:
      return PcteDarkRawColors
    case ThemeName.MeteorLight:
      return MeteorLightRawColors
    case ThemeName.MeteorDark:
      return MeteorDarkRawColors
  }
}
