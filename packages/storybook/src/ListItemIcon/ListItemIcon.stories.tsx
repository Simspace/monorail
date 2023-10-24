// Edit this file to add new stories
import React from 'react'
import FolderIcon from '@mui/icons-material/Folder'

import type { ListItemIconProps } from '@monorail/components'
import { ListItemIcon } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/List/ListItemIcon',
  component: ListItemIcon,
}

const Template = story<ListItemIconProps>(
  args => (
    <ListItemIcon {...args}>
      <FolderIcon />
    </ListItemIcon>
  ),
  {
    args: {},
    muiName: 'MuiListItemIcon',
  },
)

export const Default = story(Template)
