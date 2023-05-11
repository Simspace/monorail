// Edit this file to add new stories
import React from 'react'
import Draggable from 'react-draggable'
import { styled } from '@mui/material'
import { action } from '@storybook/addon-actions'

import type { ChipProps } from '@monorail/components'
import {
  Avatar,
  Chip,
  chipClasses,
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
  Rocket,
  TagFaces,
  Warning,
} from '@monorail/components/icons'
import { useTheme } from '@monorail/utils'

import { capitalizeFirstLetter } from '../helpers/helpers.js'
import { story } from '../helpers/storybook.js'

/**
 * Metadata for Chip stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Data Display/Chip', component: Chip }

/**
 * Story controls
 */
const argTypes = {
  variant: {
    options: ['filled', 'outlined', 'muted', 'rectangular'],
    control: {
      type: 'radio',
    },
  },
}

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ChipProps>(args => <Chip {...args} />, {
  args: { label: 'Ahoy!' },
  argTypes,
  muiName: 'MuiChip',
})

/** Default story for Chip (edit/remove by hand if needed) */
export const Default = story(Template)

const colors = [
  'default',
  'primary',
  'error',
  'info',
  'success',
  'warning',
] as const

export const Variants = story<ChipProps>(
  args => (
    <Stack direction="row" spacing={2}>
      <Chip label="Muted" variant="muted" {...args} />
      <Chip label="Filled" variant="filled" {...args} />
      <Chip label="Outlined" variant="outlined" {...args} />
      <Chip label="Rectangular" variant="rectangular" {...args} />
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `The Chip component supports outlined and filled styling.`,
        },
      },
    },
  },
)

export const Clickable = story<ChipProps>(
  () => (
    <>
      <Typography gutterBottom>
        View the <strong>Actions</strong> pane in storybook Canvas to see events
      </Typography>
      <Stack direction="row" spacing={2}>
        <Chip label="Clickable" onClick={action('onClick')} />
        <Chip
          label="Clickable"
          variant="outlined"
          onClick={action('onClick')}
        />
      </Stack>
    </>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Chips with the onClick prop defined change appearance on focus, hover, and click.`,
        },
      },
    },
  },
)

export const Deletable = story<ChipProps>(
  () => (
    <>
      <Typography gutterBottom>
        View the <strong>Actions</strong> pane in storybook Canvas to see events
      </Typography>
      <Stack direction="row" spacing={2}>
        <Chip label="Filled" onDelete={action('onDelete')} />
        <Chip
          label="Outlined"
          variant="outlined"
          onDelete={action('onDelete')}
        />
      </Stack>
    </>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Chips with the onDelete prop defined will display a delete icon which changes appearance on hover.`,
        },
      },
    },
  },
)

export const ClickableAndDeletable = story<ChipProps>(
  () => (
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
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Chips can be both clickable and deletable.`,
        },
      },
    },
  },
)

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
    parameters: {
      docs: {
        description: {
          story: `Chips can be made draggable by wrapping them in react-draggable's Draggable component.`,
        },
      },
    },
  },
)

export const AsLink = story<ChipProps>(
  () => (
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
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Chips can be rendered as normal browser links.`,
        },
      },
    },
  },
)

export const CustomDeleteIcon = story<ChipProps>(
  () => (
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
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Chips can have a custom delete icon.`,
        },
      },
    },
  },
)

export const WithAvatar = story<ChipProps>(
  () => (
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
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Use the avatar prop to add an avatar.`,
        },
      },
    },
  },
)

export const WithIcon = story<ChipProps>(
  args => (
    <Stack direction="row" spacing={2}>
      <Chip icon={<Face />} label="Muted" {...args} />
      <Chip icon={<Face />} label="Outlined" variant="outlined" {...args} />
      <Chip icon={<Face />} label="Filled" variant="filled" {...args} />
      <Chip
        icon={<Face />}
        label="Rectangular"
        variant="rectangular"
        {...args}
      />
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Use the icon prop to add an icon.`,
        },
      },
    },
  },
)

export const IconOnly = story<ChipProps>(
  args => {
    const theme = useTheme()
    const disabledStyles = {
      [`&.${chipClasses.disabled}`]: {
        color: theme.palette.text.disabled,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        opacity: 1,
      },
    }

    return (
      <Stack direction="row" spacing={2}>
        <Chip
          icon={<CloudDone />}
          color="success"
          {...args}
          sx={disabledStyles}
        />
        <Chip icon={<Rocket />} color="info" {...args} sx={disabledStyles} />
        <Chip
          icon={<PriorityHigh />}
          color="error"
          {...args}
          sx={disabledStyles}
        />
        <Tooltip title="3 Warnings" describeChild>
          <Chip
            icon={<Warning />}
            color="warning"
            {...args}
            sx={disabledStyles}
          />
        </Tooltip>
      </Stack>
    )
  },
  {
    argTypes,
    args: { variant: 'filled' },
    parameters: {
      docs: {
        description: {
          story: `Use the icon prop to add an icon.`,
        },
      },
    },
  },
)

export const Colors = story<ChipProps>(
  () => (
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
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Chips can be rendered in different colors.`,
        },
      },
    },
  },
)

export const Sizes = story<ChipProps>(
  () => (
    <Stack direction="row" spacing={2}>
      <Chip size="small" label="Small" />
      <Chip size="small" label="Small" variant="outlined" />
      <Chip size="medium" label="Medium" />
      <Chip size="medium" label="Medium" variant="outlined" />
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Chips can be rendered in different sizes.`,
        },
      },
    },
  },
)

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(1),
}))

export const ChipsArray = story<ChipProps>(
  () => {
    const [chipData, setChipData] = React.useState([
      { key: 0, label: 'Angular' },
      { key: 1, label: 'jQuery' },
      { key: 2, label: 'Polymer' },
      { key: 3, label: 'React' },
      { key: 4, label: 'Vue' },
    ])

    const handleDelete =
      (chipToDelete: { key: number; label: string }) => () => {
        setChipData(chips =>
          chips.filter(chip => chip.key !== chipToDelete.key),
        )
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
                onDelete={
                  data.label === 'React' ? undefined : handleDelete(data)
                }
              />
            </ListItem>
          )
        })}
      </Paper>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `An example of rendering multiple chips from an array of values. Deleting a chip removes it from the array. Note that since no onClick prop is defined, the Chip can be focused, but does not gain depth while clicked or touched.`,
        },
      },
    },
  },
)
