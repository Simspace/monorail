// Edit this file to add new stories
import React from 'react'
import { Timeline, TimelineProps } from '../Timeline'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Timeline.stories.gen'
/**
 * Metadata for Timeline stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TimelineProps>(args => <Timeline {...args} />, {
  args: {},
})
/** Default story for Timeline (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
