// Edit this file to add new stories
import React from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import { ListItemIcon, ListItemIconProps } from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'

/**
 * Metadata for ListItemIcon stories - update/extend as needed
 */
export default {
  title: 'Data Display/List/ListItemIcon',
  component: ListItemIcon,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ListItemIconProps>(
  args => (
    <ListItemIcon {...args}>
      <FolderIcon />
    </ListItemIcon>
  ),
  {
    args: {},
  },
)

/** Default story for ListItemIcon (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
