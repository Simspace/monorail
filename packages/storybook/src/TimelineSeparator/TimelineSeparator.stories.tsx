// Edit this file to add new stories
import React from 'react'

import type { TimelineSeparatorProps } from '@monorail/components'
import { TimelineSeparator } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/Timeline/TimelineSeparator',
  component: TimelineSeparator,
  parameters: {
    creevey: {
      skip: 'No story yet',
    },
  },
}

const Template = story<TimelineSeparatorProps>(
  args => <TimelineSeparator {...args} />,
  {
    args: {},
    muiName: 'MuiTimelineSeparator',
  },
)

export const Default = story(Template, {
  parameters: {
    creevey: {
      skip: 'No story yet',
    },
  },
})
