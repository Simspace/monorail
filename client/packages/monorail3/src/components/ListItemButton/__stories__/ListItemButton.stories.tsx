// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { ListItemText } from '../../ListItemText/ListItemText'
import { ListItemButton, ListItemButtonProps } from '../ListItemButton'
import { defaultStoryMeta } from './ListItemButton.stories.gen'

/**
 * Metadata for ListItemButton stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Data Display/List/ListItemButton',
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ListItemButtonProps>(
  args => (
    <ListItemButton component="a" href="#simple-list" {...args}>
      <ListItemText primary="Spam" />
    </ListItemButton>
  ),
  { args: {} },
)

/** Default story for ListItemButton (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
