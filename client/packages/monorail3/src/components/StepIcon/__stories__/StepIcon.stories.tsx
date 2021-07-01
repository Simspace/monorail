// Edit this file to add new stories
import React from 'react'
import { StepIcon, StepIconProps } from '../StepIcon'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './StepIcon.stories.gen'
/**
 * Metadata for StepIcon stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<StepIconProps>(args => <StepIcon {...args} />, {
  args: {},
})
/** Default story for StepIcon (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
