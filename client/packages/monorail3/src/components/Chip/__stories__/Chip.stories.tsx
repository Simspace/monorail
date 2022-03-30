// Edit this file to add new stories
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done'
import FaceIcon from '@mui/icons-material/Face'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import {
  Avatar,
  Chip,
  ChipProps,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { action } from '@storybook/addon-actions'

import { story } from '../../../__tests__/helpers/storybook'

/**
 * Metadata for Chip stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Data Display/Chip', component: Chip }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ChipProps>(args => <Chip {...args} />, {
  args: { label: 'Ahoy!' },
})

/** Default story for Chip (edit/remove by hand if needed) */
export const Default = story(Template)

export const Showcase = story<ChipProps>(() => (
  <Stack direction="row" spacing={2}>
    <Stack direction="column" alignItems="flex-start" spacing={2}>
      <Chip color="default" label="Default" />
      <Chip color="primary" label="Primary" />
      <Chip color="secondary" label="Secondary" />
      <Chip color="info" label="Info" />
      <Chip color="success" label="Success" />
      <Chip color="warning" label="Warning" />
      <Chip color="error" label="Error" />
    </Stack>
    <Stack direction="column" alignItems="flex-start" spacing={2}>
      <Chip color="default" variant="outlined" label="Default" />
      <Chip color="primary" variant="outlined" label="Primary" />
      <Chip color="secondary" variant="outlined" label="Secondary" />
      <Chip color="info" variant="outlined" label="Info" />
      <Chip color="success" variant="outlined" label="Success" />
      <Chip color="warning" variant="outlined" label="Warning" />
      <Chip color="error" variant="outlined" label="Error" />
    </Stack>
    <Stack direction="column" alignItems="flex-start" spacing={2}>
      <Chip
        color="default"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Default"
      />
      <Chip
        color="primary"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Primary"
      />
      <Chip
        color="secondary"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Secondary"
      />
      <Chip
        color="info"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Info"
      />
      <Chip
        color="success"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Success"
      />
      <Chip
        color="warning"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Warning"
      />
      <Chip
        color="error"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Error"
      />
    </Stack>
    <Stack direction="column" alignItems="flex-start" spacing={2}>
      <Chip
        color="default"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Default"
        variant="outlined"
      />
      <Chip
        color="primary"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Primary"
        variant="outlined"
      />
      <Chip
        color="secondary"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Secondary"
        variant="outlined"
      />
      <Chip
        color="info"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Info"
        variant="outlined"
      />
      <Chip
        color="success"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Success"
        variant="outlined"
      />
      <Chip
        color="warning"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Warning"
        variant="outlined"
      />
      <Chip
        color="error"
        avatar={<Avatar>F</Avatar>}
        clickable
        onDelete={action('onDelete')}
        label="Error"
        variant="outlined"
      />
    </Stack>
    <Stack direction="column" alignItems="flex-start" spacing={2}>
      <Chip color="default" icon={<FaceIcon />} clickable label="Default" />
      <Chip color="primary" icon={<FaceIcon />} clickable label="Primary" />
      <Chip color="secondary" icon={<FaceIcon />} clickable label="Secondary" />
      <Chip color="info" icon={<FaceIcon />} clickable label="Info" />
      <Chip color="success" icon={<FaceIcon />} clickable label="Success" />
      <Chip color="warning" icon={<FaceIcon />} clickable label="Warning" />
      <Chip color="error" icon={<FaceIcon />} clickable label="Error" />
    </Stack>
    <Stack direction="column" alignItems="flex-start" spacing={2}>
      <Chip
        color="default"
        icon={<FaceIcon />}
        clickable
        label="Default"
        variant="outlined"
      />
      <Chip
        color="primary"
        icon={<FaceIcon />}
        clickable
        label="Primary"
        variant="outlined"
      />
      <Chip
        color="secondary"
        icon={<FaceIcon />}
        clickable
        label="Secondary"
        variant="outlined"
      />
      <Chip
        color="info"
        icon={<FaceIcon />}
        clickable
        label="Info"
        variant="outlined"
      />
      <Chip
        color="success"
        icon={<FaceIcon />}
        clickable
        label="Success"
        variant="outlined"
      />
      <Chip
        color="warning"
        icon={<FaceIcon />}
        clickable
        label="Warning"
        variant="outlined"
      />
      <Chip
        color="error"
        icon={<FaceIcon />}
        clickable
        label="Error"
        variant="outlined"
      />
    </Stack>
    <Stack direction="column" alignItems="flex-start" spacing={2}>
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
))

export const Variants = story<ChipProps>(
  () => (
    <Stack direction="row" spacing={2}>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
      <Chip label="Rectangular" variant="rectangular" />
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
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Trash it"
        onClick={action('onClick')}
        onDelete={action('onDelete')}
        deleteIcon={<DeleteIcon />}
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
  () => (
    <Stack direction="row" spacing={2}>
      <Chip icon={<FaceIcon />} label="With Icon" />
      <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
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

export const Colors = story<ChipProps>(
  () => (
    <Stack direction="row" spacing={2}>
      <Stack direction="column" alignItems="flex-start" spacing={2}>
        <Chip color="default" label="Default" />
        <Chip color="primary" label="Primary" />
        <Chip color="secondary" label="Secondary" />
        <Chip color="info" label="Info" />
        <Chip color="success" label="Success" />
        <Chip color="warning" label="Warning" />
        <Chip color="error" label="Error" />
      </Stack>
      <Stack direction="column" alignItems="flex-start" spacing={2}>
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="default"
          label="Default"
        />
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="primary"
          label="Primary"
        />
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="secondary"
          label="Secondary"
        />
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="info"
          label="Info"
        />
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="success"
          label="Success"
        />
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="warning"
          label="Warning"
        />
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="error"
          label="Error"
        />
      </Stack>
      <Stack direction="column" alignItems="flex-start" spacing={2}>
        <Chip color="default" variant="outlined" label="Default" />
        <Chip color="primary" variant="outlined" label="Primary" />
        <Chip color="secondary" variant="outlined" label="Secondary" />
        <Chip color="info" variant="outlined" label="Info" />
        <Chip color="success" variant="outlined" label="Success" />
        <Chip color="warning" variant="outlined" label="Warning" />
        <Chip color="error" variant="outlined" label="Error" />
      </Stack>
      <Stack direction="column" alignItems="flex-start" spacing={2}>
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="default"
          variant="outlined"
          label="Default"
        />
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="primary"
          variant="outlined"
          label="Primary"
        />
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="secondary"
          variant="outlined"
          label="Secondary"
        />
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="info"
          variant="outlined"
          label="Info"
        />
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="success"
          variant="outlined"
          label="Success"
        />
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="warning"
          variant="outlined"
          label="Warning"
        />
        <Chip
          disabled
          icon={<FaceIcon />}
          onDelete={action('onDelete')}
          color="error"
          variant="outlined"
          label="Error"
        />
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
      { key: 4, label: 'Vue.js' },
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
            icon = <TagFacesIcon />
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
