// Edit this file to add new stories
import React from 'react'
import TimelineContent, { TimelineContentProps } from '@mui/lab/TimelineContent'

import { story } from '../../../__tests__/helpers/storybook'
/**
 * Metadata for TimelineContent stories - update/extend as needed
 */
export default {
  title: 'Data Display/Timeline/TimelineContent',
  component: TimelineContent,
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TimelineContentProps>(
  args => <TimelineContent {...args} />,
  { args: {} },
)
/** Default story for TimelineContent (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
