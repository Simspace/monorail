// Edit this file to add new stories
import React from 'react'
import FolderIcon from '@mui/icons-material/Folder'

import type { ListItemProps } from '@monorail/components'
import {
  Avatar,
  Checkbox,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from '@monorail/components'
import { Comment } from '@monorail/components/icons'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/List/ListItem',
  // TODO: ListItemBaseProps is not exported, so tsc complains here
  //component: ListItem,
}

type ListItemStoryArgs = ListItemProps & {
  avatar: boolean
  icon: boolean
  checkbox: boolean
  secondaryText: boolean
}

const args: ListItemStoryArgs = {
  alignItems: 'center',
  dense: false,
  disableGutters: false,
  disablePadding: false,
  divider: false,
  // Subcomponents
  avatar: false,
  icon: false,
  checkbox: false,
  secondaryText: false,
  secondaryAction: false,
}

const argTypes = {
  alignItems: {
    control: {
      type: 'radio',
      options: ['flex-start', 'center'],
    },
  },
  disabled: { control: { type: 'boolean' } },
  dense: { control: { type: 'boolean' } },
  disableGutters: { control: { type: 'boolean' } },
  disablePadding: { control: { type: 'boolean' } },
  divider: { control: { type: 'boolean' } },
  // Subcomponents
  avatar: {
    control: { type: 'boolean' },
    table: { category: 'Subcomponents' },
  },
  icon: { control: { type: 'boolean' }, table: { category: 'Subcomponents' } },
  checkbox: {
    control: { type: 'boolean' },
    table: { category: 'Subcomponents' },
  },
  secondaryText: {
    control: { type: 'boolean' },
    table: { category: 'Subcomponents' },
  },
  secondaryAction: {
    control: { type: 'boolean' },
    table: { category: 'Subcomponents' },
  },
}

const Template = story<ListItemStoryArgs>(
  (args) => (
    <ul>
      <ListItem
        {...args}
        secondaryAction={
          args.secondaryAction === true && (
            <IconButton aria-label='Comment'>
              <Comment />
            </IconButton>
          )
        }
      >
        {args.avatar! && (
          <ListItemAvatar>
            <Avatar size='small'>
              <FolderIcon fontSize='medium' />
            </Avatar>
          </ListItemAvatar>
        )}
        {args.icon! && (
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
        )}
        {args.checkbox! && (
          <ListItemIcon>
            <Checkbox disableRipple />
          </ListItemIcon>
        )}
        <ListItemText
          primary='Primary text'
          secondary={args.secondaryText! ? 'Secondary text' : null}
        />
      </ListItem>
    </ul>
  ),
  {
    args,
    argTypes,
    muiName: 'MuiListItem',
  },
)

export const Default = story(Template)
