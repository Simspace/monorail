// Edit this file to add new stories
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

import type { ListItemSecondaryActionProps } from '@monorail/components'
import { IconButton, ListItemSecondaryAction } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Data Display/List/ListItemSecondaryAction',
  component: ListItemSecondaryAction,
  parameters: {
    creevey: {
      skip: 'Story unreliable; component is never used directly anyway',
    },
  },
}

const Template = story<ListItemSecondaryActionProps>(
  args => {
    return (
      <>
        <ListItemSecondaryAction {...args}>
          <IconButton edge="start" aria-label="Delete" size="large">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </>
    )
  },
  {
    args: {},
    parameters: {
      creevey: {
        skip: 'Story unreliable; component is never used directly anyway',
      },
    },
    muiName: 'MuiListItemSecondaryAction',
  },
)

export const Default = story(Template, {
  parameters: {
    creevey: {
      skip: 'Story unreliable; component is never used directly anyway',
    },
  },
})
