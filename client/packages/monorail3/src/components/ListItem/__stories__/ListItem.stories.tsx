// Edit this file to add new stories
import React from 'react'
import FolderIcon from '@mui/icons-material/Folder'

import { story } from '../../../__tests__/helpers/storybook'
import { Avatar } from '../../Avatar/Avatar'
import { ListItemAvatar } from '../../ListItemAvatar/ListItemAvatar'
import { ListItemIcon } from '../../ListItemIcon/ListItemIcon'
import { ListItemText } from '../../ListItemText/ListItemText'
import { ListItem, ListItemProps } from '../ListItem'
import { defaultStoryMeta } from './ListItem.stories.gen'

/**
 * Metadata for ListItem stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Data Display/List/ListItem' }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ListItemProps>(
  args => (
    <>
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
    </>
  ),
  {
    args: {},
  },
)
/** Default story for ListItem (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
