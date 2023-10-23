// Edit this file to add new stories
import React from 'react'
import Draggable from 'react-draggable'
import { styled } from '@mui/material'
import { action } from '@storybook/addon-actions'

import type { ChipProps, IconChipProps } from '@monorail/components'
import {
  Avatar,
  Chip,
  IconChip,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@monorail/components'
import {
  CloudDone,
  Delete,
  Done,
  Face,
  PriorityHigh,
  TagFaces,
  Warning,
} from '@monorail/components/icons'
import { useTheme } from '@monorail/utils'

import { capitalizeFirstLetter } from '../helpers/helpers.js'
import { isMeteorTheme, story } from '../helpers/storybook.js'

export default { title: 'Data Display/Chip', component: Chip }

// Story controls
type ChipStoryArgs = Omit<ChipProps, 'icon' | 'avatar'> & {
  avatar: boolean
  avatarText: string
  icon: boolean
  dismissible: boolean
}

const args: Partial<ChipStoryArgs> = {
  avatar: false,
  avatarText: 'W',
  icon: false,
  dismissible: false,
}

const argTypes = {
  variant: {
    options: [
      'filled',
      'outlined (N/A in Meteor)',
      'muted  (N/A in Meteor)',
      'rectangular (N/A in Meteor)',
    ],
    control: {
      type: 'radio',
    },
  },
  avatar: { control: { type: 'boolean' } },
  avatarText: { control: { type: 'text' } },
  icon: { control: { type: 'boolean' } },
  dismissible: { control: { type: 'boolean' } },
}

const Template = story<ChipProps>(args => <Chip {...args} />, {
  args: { label: 'Ahoy!' },
  argTypes,
  muiName: 'MuiChip',
})

export const Default = story(Template)

const colors = [
  'default',
  'primary',
  'error',
  'info',
  'success',
  'warning',
] as const

/**
 * The Chip component supports outlined and filled styling.
 */
export const Variants = story<ChipStoryArgs>(
  args => {
    const { avatar, avatarText, icon, dismissible, ...chipArgs } = args
    const theme = useTheme()
    return (
      <div>
        <Stack direction="row" spacing={2} alignItems="center">
          <Chip
            label="Filled"
            variant="filled"
            {...chipArgs}
            avatar={avatar === true ? <Avatar>{avatarText}</Avatar> : undefined}
            icon={icon === true ? <Face /> : undefined}
            onDelete={dismissible === true ? action('onDelete') : undefined}
          />
          {!isMeteorTheme(theme.name) && (
            <>
              <Chip
                label="Muted"
                variant="muted"
                {...chipArgs}
                avatar={
                  avatar === true ? <Avatar>{avatarText}</Avatar> : undefined
                }
                icon={icon === true ? <Face /> : undefined}
                onDelete={dismissible === true ? action('onDelete') : undefined}
              />
              <Chip
                label="Outlined"
                variant="outlined"
                {...chipArgs}
                avatar={
                  avatar === true ? <Avatar>{avatarText}</Avatar> : undefined
                }
                icon={icon === true ? <Face /> : undefined}
                onDelete={dismissible === true ? action('onDelete') : undefined}
              />
              <Chip
                label="Rectangular"
                variant="rectangular"
                {...chipArgs}
                avatar={
                  avatar === true ? <Avatar>{avatarText}</Avatar> : undefined
                }
                icon={icon === true ? <Face /> : undefined}
                onDelete={dismissible === true ? action('onDelete') : undefined}
              />
            </>
          )}
        </Stack>
        {isMeteorTheme(theme.name) && (
          <Typography variant="body2" mt={6}>
            The Muted, Outlined, and Rectangular variants are not available in
            the Meteor theme.
          </Typography>
        )}
      </div>
    )
  },
  {
    args,
    argTypes,
  },
)

/**
 * Chips with the onClick prop defined change appearance on focus, hover, and click.
 */
export const Clickable = story<ChipProps>(() => (
  <>
    <Typography gutterBottom>
      View the <strong>Actions</strong> pane in storybook Canvas to see events
    </Typography>
    <Stack direction="row" spacing={2}>
      <Chip label="Clickable" onClick={action('onClick')} />
      <Chip label="Clickable" variant="outlined" onClick={action('onClick')} />
    </Stack>
  </>
))

/**
 * Chips with the onDelete prop defined will display a delete icon which changes appearance on hover.
 */
export const Deletable = story<ChipProps>(() => (
  <>
    <Typography gutterBottom>
      View the <strong>Actions</strong> pane in storybook Canvas to see events
    </Typography>
    <Stack direction="row" spacing={2}>
      <Chip label="Filled" onDelete={action('onDelete')} />
      <Chip label="Outlined" variant="outlined" onDelete={action('onDelete')} />
    </Stack>
  </>
))

/**
 * Chips can be both clickable and deletable.
 */
export const ClickableAndDeletable = story<ChipProps>(() => (
  <>
    <Typography gutterBottom>
      View the <strong>Actions</strong> pane in storybook Canvas to see events
    </Typography>
    <Stack direction="row" spacing={2}>
      <Chip
        label="Filled"
        onClick={action('onClick')}
        onDelete={action('onDelete')}
      />
      <Chip
        label="Outlined"
        variant="outlined"
        onClick={action('onClick')}
        onDelete={action('onDelete')}
      />
    </Stack>
  </>
))

/**
 * Chips can be made draggable by wrapping them in react-draggable's Draggable component.
 */
export const DraggableChip = story<ChipProps>(
  args => (
    <Stack direction="row" spacing={2}>
      <Draggable handle="#draggable-chip">
        <Chip
          label="Draggable"
          variant="filled"
          {...args}
          id="draggable-chip"
        />
      </Draggable>
    </Stack>
  ),
  {
    argTypes,
  },
)

/**
 * Chips can be rendered as normal browser links.
 */
export const AsLink = story<ChipProps>(() => (
  <Stack direction="row" spacing={2}>
    <Chip label="Filled" component="a" href="#nowhere" clickable />
    <Chip
      label="Outlined"
      variant="outlined"
      component="a"
      href="#nowhere"
      clickable
    />
  </Stack>
))

/**
 * Chips can have a custom delete icon.
 */
export const CustomDeleteIcon = story<ChipProps>(() => (
  <Stack direction="row" spacing={2}>
    <Chip
      label="Check it"
      onClick={action('onClick')}
      onDelete={action('onDelete')}
      deleteIcon={<Done />}
    />
    <Chip
      label="Trash it"
      onClick={action('onClick')}
      onDelete={action('onDelete')}
      deleteIcon={<Delete />}
      variant="outlined"
    />
  </Stack>
))

/**
 * Use the `avatar` prop to add an avatar.
 */
export const WithAvatar = story<ChipProps>(() => (
  <Stack direction="row" spacing={2}>
    <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
    <Chip
      avatar={
        <Avatar
          alt="Lee Rossey"
          src="https://simspace.com/leadership/rossey.jpg"
        />
      }
      label="Lee Rossey"
      variant="outlined"
    />
  </Stack>
))

/**
 * Use the `icon` prop to add an icon.
 */
export const WithIcon = story<ChipProps>(args => (
  <Stack direction="row" spacing={2}>
    <Chip icon={<Face />} label="Muted" {...args} />
    <Chip icon={<Face />} label="Outlined" variant="outlined" {...args} />
    <Chip icon={<Face />} label="Filled" variant="filled" {...args} />
    <Chip icon={<Face />} label="Rectangular" variant="rectangular" {...args} />
  </Stack>
))

/**
 * `IconChip` is an instance of `Chip` without a label.
 */
export const IconOnly = story<IconChipProps>(
  args => (
    <Stack direction="row" spacing={2}>
      <IconChip color="success" icon={<CloudDone />} {...args} />
      <IconChip color="error" icon={<PriorityHigh />} {...args} />
      <Tooltip title="3 Warnings" describeChild>
        <IconChip color="warning" icon={<Warning />} {...args} />
      </Tooltip>
    </Stack>
  ),
  {
    argTypes: {
      variant: {
        options: ['filled', 'outlined'],
        control: {
          type: 'radio',
        },
      },
      avatar: {
        table: { disable: true },
      },
      clickable: {
        table: { disable: true },
      },
    },
    args: { variant: 'filled' },
  },
)

/**
 * Chips can be rendered in different colors.
 */
export const Colors = story<ChipProps>(() => (
  <Stack direction="row" spacing={2}>
    <Stack direction="column" alignItems="flex-start" spacing={2}>
      {colors.map(color => (
        <Chip
          color={color}
          label={capitalizeFirstLetter(color)}
          key={`chip-filled-${color}`}
          variant="filled"
        />
      ))}
    </Stack>
    <Stack direction="column" alignItems="flex-start" spacing={2}>
      {colors.map(color => (
        <Chip
          disabled
          icon={<Face />}
          onDelete={action('onDelete')}
          color={color}
          label={capitalizeFirstLetter(color)}
          key={`chip-filled-${color}-disabled`}
          variant="filled"
        />
      ))}
    </Stack>
    <Stack direction="column" alignItems="flex-start" spacing={2}>
      {colors.map(color => (
        <Chip
          variant="outlined"
          color={color}
          label={capitalizeFirstLetter(color)}
          key={`chip-outlined-${color}`}
        />
      ))}
    </Stack>
    <Stack direction="column" alignItems="flex-start" spacing={2}>
      {colors.map(color => (
        <Chip
          disabled
          icon={<Face />}
          onDelete={action('onDelete')}
          variant="outlined"
          color={color}
          label={capitalizeFirstLetter(color)}
          key={`chip-outlined-${color}-disabled`}
        />
      ))}
    </Stack>
  </Stack>
))

/**
 * Chips can be rendered in different sizes.
 */
export const Sizes = story<ChipProps>(() => (
  <Stack direction="row" spacing={2}>
    <Chip size="small" label="Small" />
    <Chip size="small" label="Small" variant="outlined" />
    <Chip size="medium" label="Medium" />
    <Chip size="medium" label="Medium" variant="outlined" />
  </Stack>
))

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(1),
}))

/**
 * An example of rendering multiple chips from an array of values. Deleting a chip removes it from the array. Note that since no onClick prop is defined, the Chip can be focused, but does not gain depth while clicked or touched.
 */
export const ChipsArray = story<ChipProps>(() => {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue' },
  ])

  const handleDelete = (chipToDelete: { key: number; label: string }) => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key))
  }

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map(data => {
        let icon

        if (data.label === 'React') {
          icon = <TagFaces />
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        )
      })}
    </Paper>
  )
})
