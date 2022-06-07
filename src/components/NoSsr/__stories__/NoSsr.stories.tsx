// Edit this file to add new stories
import React from 'react'
import { NoSsr, NoSsrProps } from '@mui/material'

import { story } from '../../../test-helpers/storybook'
/**
 * Metadata for NoSsr stories - update/extend as needed
 */
export default {
  title: 'Utils/NoSsr',
  component: NoSsr,
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
const Template = story<NoSsrProps>(args => <NoSsr {...args} />, {
  args: {},
  parameters: {
    creevey: {
      skip: 'No story yet',
    },
  },
})
/** Default story for NoSsr (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    creevey: {
      skip: 'No story yet',
    },
  },
})
// TODO: add more stories below
