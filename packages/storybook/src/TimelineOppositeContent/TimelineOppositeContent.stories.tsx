// Edit this file to add new stories
import React from 'react'

import type { TimelineOppositeContentProps } from '@monorail/components'
import { TimelineOppositeContent } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/Timeline/TimelineOppositeContent',
  component: TimelineOppositeContent,
}

const Template = story<TimelineOppositeContentProps>(
  (args) => <TimelineOppositeContent {...args} />,
  { args: {}, muiName: 'MuiTimelineOppositeContent' },
)

export const Default = story(Template)
