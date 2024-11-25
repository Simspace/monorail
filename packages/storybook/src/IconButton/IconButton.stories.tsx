// Edit this file to add new stories
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import DeleteIcon from '@mui/icons-material/Delete'

import type { IconButtonProps } from '@monorail/components'
import { IconButton, Stack, Typography } from '@monorail/components'
import { Default as DefaultIcon } from '@monorail/components/icons'
import { useTheme } from '@monorail/utils'

import { isMeteorTheme } from '../helpers.js'
import { story } from '../helpers/storybook.js'

export default { title: 'Inputs/IconButton', component: IconButton }

const colors = ['inherit', 'primary', 'secondary', 'default'] as const

const argTypes = {
  variant: {
    options: ['contained', 'outlined', 'chromeless'],
    control: { type: 'radio' },
  },
  color: {
    options: colors,
    control: { type: 'select' },
  },
  size: {
    options: ['small', 'medium', 'large'],
    control: { type: 'radio' },
  },
  shape: {
    options: ['circular', 'rounded'],
    control: { type: 'radio' },
  },
  disabled: { control: { type: 'boolean' } },
}

const Template = story<IconButtonProps>(
  args => (
    <IconButton
      variant="contained"
      color="primary"
      aria-label="default"
      {...args}
    >
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  ),
  {
    args: {
      variant: 'contained',
      color: 'primary',
    },
    argTypes,
    muiName: 'MuiIconButton',
  },
)

export const Default = story(Template)

/**
 * Icon buttons are commonly found in app bars and toolbars.
 *
 * Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.
 */
export const Showcase = story<IconButtonProps>(
  () => (
    <Stack direction="row" spacing={4}>
      <IconButton variant="contained" aria-label="delete" color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton
        color="primary"
        variant="contained"
        aria-label="delete"
        disabled
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        variant="contained"
        color="primary"
        aria-label="add to shopping cart"
      >
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
  ),
  {
    argTypes,
  },
)

const VariantsMeteor = () => (
  <Stack direction="row" gap={4}>
    <IconButton color="primary" variant="contained" aria-label="button">
      <DefaultIcon />
    </IconButton>
    <IconButton color="secondary" variant="outlined" aria-label="button">
      <DefaultIcon />
    </IconButton>
    <IconButton color="error" variant="outlined" aria-label="button">
      <DefaultIcon />
    </IconButton>
    <IconButton color="secondary" variant="chromeless" aria-label="button">
      <DefaultIcon />
    </IconButton>
  </Stack>
)

export const Variants = story<IconButtonProps>(
  args => {
    const theme = useTheme()

    if (isMeteorTheme(theme.name)) {
      return <VariantsMeteor />
    }

    return (
      <Stack direction="row" spacing={4}>
        <IconButton
          aria-label="delete"
          variant="chromeless"
          color="primary"
          {...args}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          variant="outlined"
          color="primary"
          {...args}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          variant="contained"
          color="primary"
          {...args}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    )
  },
  { argTypes },
)

/**
 * For larger or smaller icon buttons, use the `size` prop.
 *
 * Use `fontSize="inherit"` for the icon when using `size="small"` or `size="large"`. fontSizes are defined in the theme.
 */
export const Sizes = story<IconButtonProps>(
  args => (
    <Stack direction="row" spacing={4}>
      <IconButton
        aria-label="delete"
        size="small"
        variant="contained"
        color="primary"
        {...args}
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        aria-label="delete"
        size="medium"
        variant="contained"
        color="primary"
        {...args}
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        aria-label="delete"
        size="large"
        variant="contained"
        color="primary"
        {...args}
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  ),
  {
    argTypes,
  },
)

export const Shapes = story<IconButtonProps>(
  () => (
    <Stack direction="row" spacing={4}>
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
      <IconButton
        aria-label="delete"
        shape="circular"
        variant="outlined"
        color="secondary"
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        aria-label="delete"
        shape="rounded"
        variant="outlined"
        color="secondary"
      >
        <DeleteIcon />
      </IconButton>
    </Stack>
  ),
  { argTypes },
)

/**
 * Use `color` prop to apply theme color palette to component.
 */
export const Colors = story<IconButtonProps>(() => {
  const theme = useTheme()

  if (isMeteorTheme(theme.name)) {
    return (
      <Stack gap={4}>
        <Stack direction="row" gap={4} alignItems="center">
          <Typography sx={{ minWidth: 200 }}>Primary</Typography>
          <IconButton aria-label="delete" color="primary" variant="contained">
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="primary"
            variant="contained"
            disabled
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" gap={4} alignItems="center">
          <Typography sx={{ minWidth: 200 }}>Secondary</Typography>
          <IconButton aria-label="delete" color="secondary" variant="outlined">
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="secondary"
            variant="outlined"
            disabled
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" gap={4} alignItems="center">
          <Typography sx={{ minWidth: 200 }}>Error</Typography>
          <IconButton aria-label="delete" color="error" variant="outlined">
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="error"
            variant="outlined"
            disabled
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" gap={4} alignItems="center">
          <Typography sx={{ minWidth: 200 }}>Secondary (Chromeless)</Typography>
          <IconButton
            aria-label="delete"
            color="secondary"
            variant="chromeless"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="secondary"
            variant="chromeless"
            disabled
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    )
  }

  return (
    <Stack spacing={4}>
      {colors.map(color => (
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          key={`icon-button-color-${color}`}
        >
          <Typography sx={{ minWidth: 90 }}>{color}</Typography>
          <IconButton aria-label="delete" color={color}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" disabled color={color}>
            <DeleteIcon />
          </IconButton>
          <IconButton variant="outlined" aria-label="delete" color={color}>
            <DeleteIcon />
          </IconButton>
          <IconButton
            variant="outlined"
            aria-label="delete"
            disabled
            color={color}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton variant="contained" aria-label="delete" color={color}>
            <DeleteIcon />
          </IconButton>
          <IconButton
            variant="contained"
            aria-label="delete"
            disabled
            color={color}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ))}
    </Stack>
  )
})
