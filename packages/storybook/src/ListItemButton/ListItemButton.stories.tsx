// Edit this file to add new stories
import React from 'react'

import type { ListItemButtonProps } from '@monorail/components'
import { ListItemButton, ListItemText } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/List/ListItemButton',
  component: ListItemButton,
}

const Template = story<ListItemButtonProps>(
  (args) => (
    <ListItemButton {...args}>
      <ListItemText primary='Spam' />
    </ListItemButton>
  ),
  { args: {}, muiName: 'MuiListItemButton' },
)

export const Default = story(Template)
