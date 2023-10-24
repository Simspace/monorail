// Edit this file to add new stories
import React from 'react'
import FolderIcon from '@mui/icons-material/Folder'

import type { ListItemAvatarProps } from '@monorail/components'
import { Avatar, ListItemAvatar } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/List/ListItemAvatar',
  component: ListItemAvatar,
}

const Template = story<ListItemAvatarProps>(
  args => (
    <ListItemAvatar {...args}>
      <Avatar>
        <FolderIcon />
      </Avatar>
    </ListItemAvatar>
  ),
  { args: {}, muiName: 'MuiListItemAvatar' },
)

export const Default = story(Template)
