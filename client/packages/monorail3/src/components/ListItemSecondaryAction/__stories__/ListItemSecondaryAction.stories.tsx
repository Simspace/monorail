// Edit this file to add new stories
import React from 'react'
import {
  ListItemSecondaryAction,
  ListItemSecondaryActionProps,
} from '../ListItemSecondaryAction'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './ListItemSecondaryAction.stories.gen'
import { IconButton } from '../../IconButton/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

/**
 * Metadata for ListItemSecondaryAction stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Data Display/List/ListItemSecondaryAction',
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
