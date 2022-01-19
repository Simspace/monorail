// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { GlobalStyles, GlobalStylesProps } from '../GlobalStyles'
import { defaultStoryMeta } from './GlobalStyles.stories.gen'
/**
 * Metadata for GlobalStyles stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Utils/GlobalStyles',
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
  args => <GlobalStyles styles={{}} {...args} />,
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
