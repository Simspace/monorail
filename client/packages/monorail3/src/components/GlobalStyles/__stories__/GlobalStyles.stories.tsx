// Edit this file to add new stories
import React from 'react'
import { GlobalStyles, GlobalStylesProps } from '../GlobalStyles'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './GlobalStyles.stories.gen'
/**
 * Metadata for GlobalStyles stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
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
  },
)
/** Default story for GlobalStyles (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
