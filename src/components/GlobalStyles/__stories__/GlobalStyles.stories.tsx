// Edit this file to add new stories
import React from 'react'

import { GlobalStyles, GlobalStylesProps } from '../../..'
import { story } from '../../../test-helpers/storybook'
/**
 * Metadata for GlobalStyles stories - update/extend as needed
 */
export default {
  title: 'Utils/GlobalStyles',
  component: GlobalStyles,
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
const Template = story<GlobalStylesProps>(
  (args: Partial<GlobalStylesProps>) => <GlobalStyles styles={{}} {...args} />,
  {
    args: {},
    parameters: {
      creevey: {
        skip: 'No story yet',
      },
    },
  },
)
/** Default story for GlobalStyles (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    creevey: {
      skip: 'No story yet',
    },
  },
})
// TODO: add more stories below
