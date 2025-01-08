// Edit this file to add new stories
import React from 'react'

import type { TimelineContentProps } from '@monorail/components'
import { TimelineContent } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/Timeline/TimelineContent',
  component: TimelineContent,
}

const Template = story<TimelineContentProps>((args) => <TimelineContent {...args} />, {
  args: {},
  muiName: 'MuiTimelineContent',
})

export const Default = story(Template)
