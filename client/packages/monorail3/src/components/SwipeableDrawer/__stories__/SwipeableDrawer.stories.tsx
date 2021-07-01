// Edit this file to add new stories
import React from 'react'
import { SwipeableDrawer, SwipeableDrawerProps } from '../SwipeableDrawer'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './SwipeableDrawer.stories.gen'
/**
 * Metadata for SwipeableDrawer stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<SwipeableDrawerProps>(
  args => <SwipeableDrawer {...args} />,
  { args: {} },
)
/** Default story for SwipeableDrawer (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
