// Edit this file to add new stories
import React from 'react'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemProps,
  ListItemText,
} from '@monorail/components'
import FolderIcon from '@mui/icons-material/Folder'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for ListItem stories - update/extend as needed
 */
export default {
  title: 'Data Display/List/ListItem',
  // TODO: ListItemBaseProps is not exported, so tsc complains here
  //component: ListItem,
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ListItemProps>(
  args => (
    <ul>
      <ListItem {...args}>
        <ListItemText primary="Primary text" secondary="Secondary text" />
      </ListItem>
      <ListItem {...args}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem {...args}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
    </ul>
  ),
  {
    args: {},
    muiName: 'MuiListItem',
  },
)
/** Default story for ListItem (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
