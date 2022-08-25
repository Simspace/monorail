// Edit this file to add new stories
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

import type { ListItemSecondaryActionProps } from '@monorail/components'
import { IconButton, ListItemSecondaryAction } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for ListItemSecondaryAction stories - update/extend as needed
 */
export default {
  title: 'Data Display/List/ListItemSecondaryAction',
  component: ListItemSecondaryAction,
  parameters: {
    creevey: {
      skip: 'Story unreliable; component is never used directly anyway',
    },
  },
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
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

/** Default story for ListItemSecondaryAction (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    creevey: {
      skip: 'Story unreliable; component is never used directly anyway',
    },
  },
})
// TODO: add more stories below
