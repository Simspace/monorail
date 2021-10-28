// Edit this file to add new stories
import React from 'react'
import { IconButton, IconButtonProps } from '../IconButton'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './IconButton.stories.gen'
import DeleteIcon from '@mui/icons-material/Delete'
import AlarmIcon from '@mui/icons-material/Alarm'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Stack } from '../../Stack/Stack'
/**
 * Metadata for IconButton stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Inputs/IconButton' }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<IconButtonProps>(
  args => (
    <IconButton {...args} size="large">
      <DeleteIcon />
    </IconButton>
  ),
  {
    args: {},
  },
)
/** Default story for IconButton (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below

export const Showcase = story<IconButtonProps>(
  () => (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary" size="large">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm" size="large">
        <AlarmIcon />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        size="large"
      >
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Icon buttons are commonly found in app bars and toolbars.

Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.`,
        },
      },
    },
  },
)

export const Sizes = story<IconButtonProps>(
  () => (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `For larger or smaller icon buttons, use the size prop.`,
        },
      },
    },
  },
)

export const Colors = story<IconButtonProps>(
  () => (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="secondary" size="large">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success" size="large">
        <DeleteIcon />
      </IconButton>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Use color prop to apply theme color palette to component.`,
        },
      },
    },
  },
)
