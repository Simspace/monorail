// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { ListItemText, ListItemTextProps } from '../ListItemText'
import { defaultStoryMeta } from './ListItemText.stories.gen'
/**
 * Metadata for ListItemText stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Data Display/List/ListItemText' }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ListItemTextProps>(args => <ListItemText {...args} />, {
  args: { primary: 'Primary', secondary: 'Secondary' },
})
/** Default story for ListItemText (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
