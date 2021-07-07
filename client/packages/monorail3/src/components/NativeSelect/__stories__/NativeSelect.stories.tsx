// Edit this file to add new stories
import React from 'react'
import { NativeSelect, NativeSelectProps } from '../NativeSelect'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './NativeSelect.stories.gen'
/**
 * Metadata for NativeSelect stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<NativeSelectProps>(args => <NativeSelect {...args} />, {
  args: {},
})
/** Default story for NativeSelect (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
