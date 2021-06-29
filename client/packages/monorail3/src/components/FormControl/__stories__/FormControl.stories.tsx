// Edit this file to add new stories
import React from 'react'
import { FormControl, FormControlProps } from '../FormControl'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './FormControl.stories.gen'
/**
 * Metadata for FormControl stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<FormControlProps>(args => <FormControl {...args} />, {
  args: {},
})
/** Default story for FormControl (edit/remove by hand if needed) */
export const Default = story(Template, {})
// TODO: add more stories below
