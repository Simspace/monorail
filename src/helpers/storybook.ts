import { Annotations, Args, Args as DefaultArgs } from '@storybook/addons'
/* eslint-disable no-restricted-imports */
import {
  ArgTypes as StorybookArgTypes,
  Meta as StorybookMeta,
  Parameters as StorybookParameters,
  Story as StorybookStory,
} from '@storybook/react'
/* eslint-enable no-restricted-imports */
import merge from 'deepmerge'

import { isNonEmptyString } from '@monorail/sharedHelpers/typeGuards'

type A11yParameter = {
  a11y?: {
    element?: A11yElement | string
    disable?: boolean
  }
}
type A11yParameters = {
  parameters?: A11yParameter
}
type GeneratedMeta = Annotations<Args, void>

export type Meta = StorybookMeta & A11yParameters
export type Story<Args = DefaultArgs> = StorybookStory<Partial<Args>> &
  A11yParameters

export const NO_GENERATED_META: GeneratedMeta = {}

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
}

//#region Parameters
export const DISABLED_CONTROLS = {
  controls: {
    disable: true,
  },
} as const

export const DISABLED_ACTIONS = {
  actions: { disable: true },
} as const

export const ENABLED_ACTIONS = {
  actions: { disable: false },
} as const

export const DISABLED_A11Y = {
  a11y: { disable: true },
} as const

export const DISABLED_ARG_TYPE = {
  table: { disable: true },
} as const

/**
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
  parameters?: StorybookParameters & A11yParameter
  storyName?: string
}

/**
 * Helper function for creating a story from a Template.
 * Also handy for creating new stories from a normal component.
 * - Storybook's documented approach of manually adding configuration as properties to the Story is tedious and error-prone.
 *
 * @param Template A renderable Template or Component
 * @param config Properties added to the returned Story
 *
 * @example using Template:
 * export const Disabled = story(BasicTemplate, { args: { disabled: true }})
 *
 * @example using a component:
 * export const Other = story(() => <div />, { storyName: "Example"})
 *
 */
export function story<T extends DefaultArgs>(
  Template: Story<T>,
  { args, argTypes, parameters, storyName }: StoryConfiguration<T> = {},
): Story<T> {
  const NewStory = Template.bind({})
  NewStory.args = { ...Template.args, ...args } as Partial<T>
  NewStory.argTypes = { ...Template.argTypes, ...argTypes }
  NewStory.parameters = { ...Template.parameters, ...parameters }

  if (isNonEmptyString(storyName)) {
    NewStory.storyName = storyName
  }

  return NewStory
}

/**
 * Creates a Meta object used for the default export of a stories file
 *
 * @example
 * export default meta(require('./meta.json'), {title: 'Component'})
 *
 * @example
 * export default meta(NO_GENERATED_META, {title: 'Component'})
 */
export function meta(generatedMeta: GeneratedMeta, meta: Meta): Meta {
  return merge(generatedMeta, meta)
}
//#endregion
