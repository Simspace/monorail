// Edit this file to add new stories
import React from 'react'
import { ListItemAvatar, ListItemAvatarProps } from '../ListItemAvatar'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './ListItemAvatar.stories.gen'
import { Avatar } from '../../Avatar/Avatar'
import FolderIcon from '@material-ui/icons/Folder'

/**
 * Metadata for ListItemAvatar stories - update/extend as needed
 */
export default { ...defaultStoryMeta }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ListItemAvatarProps>(
  args => (
    <ListItemAvatar>
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
