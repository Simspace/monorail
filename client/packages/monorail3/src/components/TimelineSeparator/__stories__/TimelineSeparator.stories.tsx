// Edit this file to add new stories
import React from 'react'
import { TimelineSeparator, TimelineSeparatorProps } from '../TimelineSeparator'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TimelineSeparator.stories.gen'
/**
 * Metadata for TimelineSeparator stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Data Display/Timeline/TimelineSeparator',
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
    parameters: {
      creevey: {
        skip: 'No story yet',
      },
    },
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
