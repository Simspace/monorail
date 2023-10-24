// Edit this file to add new stories
import React from 'react'

import type { TimelineConnectorProps } from '@monorail/components'
import { TimelineConnector } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/Timeline/TimelineConnector',
  component: TimelineConnector,
  parameters: {
    creevey: {
      skip: 'No story yet',
    },
  },
}

const Template = story<TimelineConnectorProps>(
  args => <TimelineConnector {...args} />,
  {
    args: {},
    parameters: {
      creevey: {
        skip: 'No story yet',
      },
    },
    muiName: 'MuiTimelineConnector',
  },
)

export const Default = story(Template, {})
// TODO: add more stories below
