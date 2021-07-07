// Edit this file to add new stories
import React from 'react'
import { Chip, ChipProps } from '../Chip'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Chip.stories.gen'
import { action } from '@storybook/addon-actions'
import DoneIcon from '@material-ui/icons/Done'
import DeleteIcon from '@material-ui/icons/Delete'
import FaceIcon from '@material-ui/icons/Face'
import TagFacesIcon from '@material-ui/icons/TagFaces'
import { Avatar } from '../../Avatar/Avatar'
import { Stack } from '../../Stack/Stack'
import { styled } from '@material-ui/core/styles'
import { Paper } from '../../Paper/Paper'

/**
 * Metadata for Chip stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { ...defaultStoryMeta }

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

export const Variants = () => (
  <>
    <Chip label="Filled" variant="filled" />
    <Chip label="Outlined" variant="outlined" />
  </>
)

export const Clickable = () => (
  <>
    <p>
      View the <strong>Actions</strong> pane in storybook Canvas to see events
    </p>
    <Chip label="Filled" onClick={action('onClick')} />
    <Chip label="Outlined" variant="outlined" onClick={action('onClick')} />
  </>
)

export const Deletable = () => (
  <>
    <p>
      View the <strong>Actions</strong> pane in storybook Canvas to see events
    </p>
    <Chip label="Filled" onDelete={action('onDelete')} />
    <Chip label="Outlined" variant="outlined" onDelete={action('onDelete')} />
  </>
)

export const ClickableAndDeletable = () => (
  <>
    <p>
      View the <strong>Actions</strong> pane in storybook Canvas to see events
    </p>
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
  </>
)

export const AsLink = () => (
  <>
    <Chip label="Filled" component="a" href="#nowhere" clickable />
    <Chip
      label="Outlined"
      variant="outlined"
      component="a"
      href="#nowhere"
      clickable
    />
  </>
)

export const CustomDeleteIcon = () => (
  <>
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
  </>
)

export const WithAvatar = () => (
  <>
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
  </>
)

export const WithIcon = () => (
  <>
    <Chip icon={<FaceIcon />} label="With Icon" />
    <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
  </>
)

export const Colors = () => (
  <Stack direction="column" spacing={1}>
    <Stack direction="row" spacing={1}>
      <Chip color="primary" label="Primary" />
      <Chip color="secondary" label="Secondary" />
      <Chip color="info" label="Info" />
      <Chip color="success" label="Success" />
      <Chip color="warning" label="Warning" />
      <Chip color="error" label="Error" />
    </Stack>
    <Stack direction="row" spacing={1}>
      <Chip color="primary" label="Primary" variant="outlined" />
      <Chip color="secondary" label="Secondary" variant="outlined" />
      <Chip color="info" label="Info" variant="outlined" />
      <Chip color="success" label="Success" variant="outlined" />
      <Chip color="warning" label="Warning" variant="outlined" />
      <Chip color="error" label="Error" variant="outlined" />
    </Stack>
  </Stack>
)

export const Sizes = () => (
  <>
    <Chip size="small" label="Small" />
    <Chip size="small" label="Small" variant="outlined" />
    <Chip size="medium" label="Medium" />
    <Chip size="medium" label="Medium" variant="outlined" />
  </>
)

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}))

export const ChipsArray = () => {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
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
          icon = <TagFacesIcon />
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
}
