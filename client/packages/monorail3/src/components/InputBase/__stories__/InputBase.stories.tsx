// Edit this file to add new stories
import React from 'react'
import { InputBase, InputBaseProps } from '../InputBase'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './InputBase.stories.gen'

/**
 * Metadata for InputBase stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<InputBaseProps>(args => <InputBase {...args} />, {
  args: {
    placeholder: 'Placeholder',
  },
})
/** Default story for InputBase (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
