// Edit this file to add new stories
import React from 'react'

import { TimelineSeparator, TimelineSeparatorProps } from '../../..'
import { story } from '../../../test-helpers/storybook'
/**
 * Metadata for TimelineSeparator stories - update/extend as needed
 */
export default {
  title: 'Data Display/Timeline/TimelineSeparator',
  component: TimelineSeparator,
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
const Template = story<TimelineSeparatorProps>(
  args => <TimelineSeparator {...args} />,
  {
    args: {},
    muiName: 'MuiTimelineSeparator',
  },
)
/** Default story for TimelineSeparator (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    creevey: {
      skip: 'No story yet',
    },
  },
})
// TODO: add more stories below
