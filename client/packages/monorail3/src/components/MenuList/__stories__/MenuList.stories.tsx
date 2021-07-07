// Edit this file to add new stories
import React from 'react'
import { MenuList, MenuListProps } from '../MenuList'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './MenuList.stories.gen'
/**
 * Metadata for MenuList stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<MenuListProps>(args => <MenuList {...args} />, {
  args: {},
})
/** Default story for MenuList (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
