// Edit this file to add new stories
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import AlarmIcon from '@mui/icons-material/Alarm'
import DeleteIcon from '@mui/icons-material/Delete'

import { IconButton, IconButtonProps, Stack, Typography } from '../../..'
import { story } from '../../../test-helpers/storybook'

/**
 * Metadata for IconButton stories - update/extend as needed
 */
export default { title: 'Inputs/IconButton', component: IconButton }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<IconButtonProps>(
  (args: IconButtonProps) => (
    <IconButton aria-label="default" {...args}>
      <DeleteIcon />
    </IconButton>
  ),
  {
    args: {},
    muiName: 'MuiIconButton',
  },
)
/** Default story for IconButton (edit/remove by hand if needed) */
export const Default = story(Template)

export const Showcase = story<IconButtonProps>(
  () => (
    <Stack direction="row" spacing={4}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled>
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
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

export const Variants = story<IconButtonProps>(() => (
  <Stack direction="row" spacing={4}>
    <IconButton aria-label="delete" variant="chromeless" color="primary">
      <DeleteIcon />
    </IconButton>
    <IconButton aria-label="delete" variant="outlined" color="primary">
      <DeleteIcon />
    </IconButton>
    <IconButton aria-label="delete" variant="contained" color="primary">
      <DeleteIcon />
    </IconButton>
  </Stack>
))

export const Sizes = story<IconButtonProps>(
  () => (
    <Stack direction="row" spacing={4}>
      <IconButton
        aria-label="delete"
        size="small"
        variant="outlined"
        color="primary"
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        aria-label="delete"
        size="medium"
        variant="outlined"
        color="primary"
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        aria-label="delete"
        size="large"
        variant="outlined"
        color="primary"
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `For larger or smaller icon buttons, use the size prop. 

Use fontSize="inherit" for the icon when using size="small" or size="large". fontSizes are defined in the theme.`,
        },
      },
    },
  },
)

export const Shapes = story<IconButtonProps>(() => (
  <Stack direction="row" spacing={4}>
    <IconButton
      aria-label="delete"
      shape="circular"
      variant="outlined"
      color="primary"
    >
      <DeleteIcon />
    </IconButton>
    <IconButton
      aria-label="delete"
      shape="rounded"
      variant="outlined"
      color="primary"
    >
      <DeleteIcon />
    </IconButton>
    <IconButton
      aria-label="delete"
      shape="circular"
      variant="contained"
      color="primary"
    >
      <DeleteIcon />
    </IconButton>
    <IconButton
      aria-label="delete"
      shape="rounded"
      variant="contained"
      color="primary"
    >
      <DeleteIcon />
    </IconButton>
  </Stack>
))

const colors = [
  'default',
  'inherit',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
] as const

export const Colors = story<IconButtonProps>(
  () => (
    <Stack spacing={2}>
      {colors.map(color => (
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          key={`icon-button-color-${color}`}
        >
          <IconButton aria-label="delete" color={color}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" disabled color={color}>
            <DeleteIcon />
          </IconButton>
          <Typography>{color}</Typography>
        </Stack>
      ))}
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
