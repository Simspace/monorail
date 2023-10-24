// Edit this file to add new stories
import React from 'react'

import type { TimelineDotProps } from '@monorail/components'
import { TimelineDot } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/Timeline/TimelineDot',
  component: TimelineDot,
}

const Template = story<TimelineDotProps>(args => <TimelineDot {...args} />, {
  args: {},
  muiName: 'MuiTimelineDot',
})

export const Default = story(Template)
