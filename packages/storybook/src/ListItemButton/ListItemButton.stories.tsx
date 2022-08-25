// Edit this file to add new stories
import React from 'react'

import type { ListItemButtonProps } from '@monorail/components'
import { ListItemButton, ListItemText } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for ListItemButton stories - update/extend as needed
 */
export default {
  title: 'Data Display/List/ListItemButton',
  component: ListItemButton,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ListItemButtonProps>(
  args => (
    <ListItemButton {...args}>
      <ListItemText primary="Spam" />
    </ListItemButton>
  ),
  { args: {}, muiName: 'MuiListItemButton' },
)

/** Default story for ListItemButton (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
