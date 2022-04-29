/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-restricted-imports */
/* eslint-disable import/no-extraneous-dependencies */

import { Args as DefaultArgs } from '@storybook/addons'
import {
  ArgTypes,
  ArgTypes as StorybookArgTypes,
  Meta as StorybookMeta,
  Parameters as StorybookParameters,
  Story as StorybookStory,
} from '@storybook/react'

import { isNonEmptyString } from './typeGuards'

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

export type Meta = StorybookMeta & A11yParameters
export type Story<Args = DefaultArgs> = StorybookStory<Partial<Args>> &
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

// These are intended to be used to add parameters metadata to story componenents, which using the `story` helper function
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

export const PADDING_REMOVED = {
  layout: 'fullscreen',
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
  parameters?: StorybookParameters & A11yParameter & DocsParameter
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
  { args, argTypes, parameters, storyName }: StoryConfiguration<T> = {},
): Story<T> {
  const NewStory = Template.bind({})
  NewStory.args = { ...Template.args, ...args } as Partial<T>
  NewStory.argTypes = { ...Template.argTypes, ...argTypes } as Partial<ArgTypes<Partial<T>>>
  NewStory.parameters = { ...Template.parameters, ...parameters }

  if (isNonEmptyString(storyName)) {
    NewStory.storyName = storyName
  }

  return NewStory
}
