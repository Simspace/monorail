// Edit this file to add new stories
import React from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import { Avatar, ListItemAvatar, ListItemAvatarProps } from '@mui/material'

import { story } from '../../../test-helpers/storybook'

/**
 * Metadata for ListItemAvatar stories - update/extend as needed
 */
export default {
  title: 'Data Display/List/ListItemAvatar',
  component: ListItemAvatar,
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ListItemAvatarProps>(
  args => (
    <ListItemAvatar {...args}>
      <Avatar>
        <FolderIcon />
      </Avatar>
    </ListItemAvatar>
  ),
  { args: {} },
)

/** Default story for ListItemAvatar (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
