// Edit this file to add new stories
import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import FaceIcon from '@mui/icons-material/Face'
import { action } from '@storybook/addon-actions'

import type { ChipProps } from '@monorail/components'
import { Avatar, Chip, Stack, Typography } from '@monorail/components'
import { useTheme } from '@monorail/utils'

import { capitalizeFirstLetter } from '../helpers/helpers.js'
import { isMeteorTheme, story } from '../helpers/storybook.js'

export default { title: 'Data Display/Chip/Showcase', component: Chip }

const colors = [
  'default',
  'primary',
  'error',
  'info',
  'success',
  'warning',
] as const

export const Filled = story<ChipProps>(() => {
  const examples = React.useMemo(() => {
    return {
      readOnly: colors.map(color => (
        <Chip
          variant="filled"
          color={color}
          label={capitalizeFirstLetter(color)}
          key={`chip-filled-${color}`}
        />
      )),
      deletable: colors.map(color => (
        <Chip
          variant="filled"
          color={color}
          label={capitalizeFirstLetter(color)}
          key={`chip-filled-${color}`}
          onDelete={action('onDelete')}
        />
      )),
      withAvatar: colors.map(color => (
        <Chip
          variant="filled"
          avatar={<Avatar>F</Avatar>}
          clickable
          onDelete={action('onDelete')}
          color={color}
          label={capitalizeFirstLetter(color)}
          key={`chip-filled-with-avatar-${color}-clickable`}
        />
      )),
      withIcon: colors.map(color => (
        <Chip
          variant="filled"
          icon={<AccountBoxIcon />}
          clickable
          color={color}
          label={capitalizeFirstLetter(color)}
          key={`chip-filled-with-icon-${color}-clickable`}
        />
      )),
    }
  }, [])

  return (
    <Stack>
      <Stack direction="row" spacing={4}>
        <Stack direction="column" alignItems="flex-start" spacing={2}>
          <Typography>Read-Only</Typography>
          {examples.readOnly}
        </Stack>
        <Stack direction="column" alignItems="flex-start" spacing={2}>
          <Typography>Deletable</Typography>
          {examples.deletable}
        </Stack>
        <Stack direction="column" alignItems="flex-start" spacing={2}>
          <Typography>With Avatar</Typography>
          {examples.withAvatar}
        </Stack>
        <Stack direction="column" alignItems="flex-start" spacing={2}>
          <Typography>With Icon</Typography>
          {examples.withIcon}
        </Stack>
      </Stack>
    </Stack>
  )
})

export const Outlined = story<ChipProps>(() => {
  const theme = useTheme()
  const examples = React.useMemo(() => {
    return {
      readOnly: colors.map(color => (
        <Chip
          variant="outlined"
          color={color}
          label={capitalizeFirstLetter(color)}
          key={`chip-outlined-${color}`}
        />
      )),
      deletable: colors.map(color => (
        <Chip
          variant="outlined"
          color={color}
          label={capitalizeFirstLetter(color)}
          key={`chip-outlined-${color}`}
          onDelete={action('onDelete')}
        />
      )),
      withAvatar: colors.map(color => (
        <Chip
          variant="outlined"
          avatar={<Avatar>F</Avatar>}
          clickable
          onDelete={action('onDelete')}
          color={color}
          label={capitalizeFirstLetter(color)}
          key={`chip-outlined-with-avatar-${color}-clickable`}
        />
      )),
      withIcon: colors.map(color => (
        <Chip
          variant="outlined"
          icon={<FaceIcon />}
          clickable
          color={color}
          label={capitalizeFirstLetter(color)}
          key={`chip-outlined-with-icon-${color}-clickable`}
        />
      )),
    }
  }, [])

  return isMeteorTheme(theme.name) ? (
    <Typography>This variant is not available in the Meteor theme</Typography>
  ) : (
    <Stack>
      <Stack direction="row" spacing={4}>
        <Stack direction="column" alignItems="flex-start" spacing={2}>
          <Typography>Read-Only</Typography>
          {examples.readOnly}
        </Stack>
        <Stack direction="column" alignItems="flex-start" spacing={2}>
          <Typography>Deletable</Typography>
          {examples.deletable}
        </Stack>
        <Stack direction="column" alignItems="flex-start" spacing={2}>
          <Typography>With Avatar</Typography>
          {examples.withAvatar}
        </Stack>
        <Stack direction="column" alignItems="flex-start" spacing={2}>
          <Typography>With Icon</Typography>
          {examples.withIcon}
        </Stack>
      </Stack>
    </Stack>
  )
})

export const Rectangular = story<ChipProps>(() => {
  const theme = useTheme()
  return isMeteorTheme(theme.name) ? (
    <Typography>This variant is not available in the Meteor theme</Typography>
  ) : (
    <Stack>
      <Stack direction="row" spacing={4}>
        <Stack direction="column" alignItems="flex-start" spacing={2}>
          <Typography>Read-only</Typography>
          <Chip variant="rectangular" label="Rectangular" />
          <Chip variant="rectangular" icon={<FaceIcon />} label="Rectangular" />
          <Chip
            variant="rectangular"
            avatar={<Avatar>F</Avatar>}
            label="Rectangular"
          />
          <Chip
            variant="rectangular"
            avatar={<Avatar>F</Avatar>}
            onDelete={action('onDelete')}
            label="Rectangular"
          />
        </Stack>

        <Stack direction="column" alignItems="flex-start" spacing={2}>
          <Typography>Clickable</Typography>
          <Chip clickable variant="rectangular" label="Rectangular" />
          <Chip
            clickable
            variant="rectangular"
            icon={<FaceIcon />}
            label="Rectangular"
          />
          <Chip
            clickable
            variant="rectangular"
            avatar={<Avatar>F</Avatar>}
            label="Rectangular"
          />
          <Chip
            clickable
            variant="rectangular"
            avatar={<Avatar>F</Avatar>}
            onDelete={action('onDelete')}
            label="Rectangular"
          />
        </Stack>
      </Stack>
    </Stack>
  )
})

export const Muted = story<ChipProps>(() => {
  const theme = useTheme()
  return isMeteorTheme(theme.name) ? (
    <Typography>This variant is not available in the Meteor theme</Typography>
  ) : (
    <Stack>
      <Stack direction="row" spacing={4}>
        <Stack direction="column" alignItems="flex-start" spacing={2}>
          <Chip clickable label="Default Variant" />
          <Chip clickable icon={<FaceIcon />} label="Default Variant" />
          <Chip clickable avatar={<Avatar>F</Avatar>} label="Default Variant" />
          <Chip
            clickable
            avatar={<Avatar>F</Avatar>}
            onDelete={action('onDelete')}
            label="Default Variant"
          />
        </Stack>
      </Stack>
    </Stack>
  )
})
