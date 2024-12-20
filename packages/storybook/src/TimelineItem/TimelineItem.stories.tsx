// Edit this file to add new stories
import React from 'react'

import type { TimelineItemProps } from '@monorail/components'
import { TimelineItem } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/Timeline/TimelineItem',
  component: TimelineItem,
}

const Template = story<TimelineItemProps>(
  (args) => (
    <ul>
      <TimelineItem {...args} />
    </ul>
  ),
  {
    args: {},
    muiName: 'MuiTimelineItem',
  },
)

export const Default = story(Template)
