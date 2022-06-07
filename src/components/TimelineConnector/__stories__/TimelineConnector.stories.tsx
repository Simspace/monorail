// Edit this file to add new stories
import React from 'react'
import TimelineConnector, {
  TimelineConnectorProps,
} from '@mui/lab/TimelineConnector'

import { story } from '../../../test-helpers/storybook'
/**
 * Metadata for TimelineConnector stories - update/extend as needed
 */
export default {
  title: 'Data Display/Timeline/TimelineConnector',
  component: TimelineConnector,
  parameters: {
    creevey: {
      skip: 'No story yet',
    },
  },
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<TimelineConnectorProps>(
  args => <TimelineConnector {...args} />,
  {
    args: {},
    parameters: {
      creevey: {
        skip: 'No story yet',
      },
    },
  },
)

/** Default story for TimelineConnector (edit/remove by hand if needed) */
export const Default = story(Template, {})
// TODO: add more stories below
