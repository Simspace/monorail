// Edit this file to add new stories
import React from 'react'

import type { TimelineOppositeContentProps } from '@monorail/components'
import { TimelineOppositeContent } from '@monorail/components'

import { story } from '../helpers/storybook.js'
/**
 * Metadata for TimelineOppositeContent stories - update/extend as needed
 */
export default {
  title: 'Data Display/Timeline/TimelineOppositeContent',
  component: TimelineOppositeContent,
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TimelineOppositeContentProps>(
  args => <TimelineOppositeContent {...args} />,
  { args: {}, muiName: 'MuiTimelineOppositeContent' },
)
/** Default story for TimelineOppositeContent (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
