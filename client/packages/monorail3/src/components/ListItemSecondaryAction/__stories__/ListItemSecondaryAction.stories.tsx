// Edit this file to add new stories
import React from 'react'
import {
  ListItemSecondaryAction,
  ListItemSecondaryActionProps,
} from '../ListItemSecondaryAction'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './ListItemSecondaryAction.stories.gen'
import { IconButton } from '../../IconButton/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { Box } from '../../Box/Box'

/**
 * Metadata for ListItemSecondaryAction stories - update/extend as needed
 */
export default { ...defaultStoryMeta }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ListItemSecondaryActionProps>(
  args => (
    <ListItemSecondaryAction {...args}>
      <IconButton edge="end" aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  ),
  { args: {} },
)

/** Default story for ListItemSecondaryAction (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
