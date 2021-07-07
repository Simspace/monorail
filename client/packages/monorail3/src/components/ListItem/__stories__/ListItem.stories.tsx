// Edit this file to add new stories
import React from 'react'
import { ListItem, ListItemProps } from '../ListItem'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './ListItem.stories.gen'
/**
 * Metadata for ListItem stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ListItemProps>(args => <ListItem {...args} />, {
  args: {},
})
/** Default story for ListItem (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
