// Edit this file to add new stories
import React from 'react'
import { Button, ButtonProps } from '../Button'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Button.stories.gen'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { Stack } from '../../Stack/Stack'

/**
 * Metadata for Button stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Inputs/Button' }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ButtonProps>(args => <Button {...args} />, {
  args: { children: 'Button' },
})

/**
 * Default story for Button (edit/remove by hand if needed)
 * */
export const Default = story(Template, {
  args: { children: 'Button', variant: 'contained' },
})

export const VariantsAndColors = story<ButtonProps>(
  () => (
    <>
      <h1>Contained</h1>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="info">
        Info
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="contained" color="warning">
        Warning
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" color="inherit">
        Inherit
      </Button>
      <h1>Outlined</h1>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" color="info">
        Info
      </Button>
      <Button variant="outlined" color="success">
        Success
      </Button>
      <Button variant="outlined" color="warning">
        Warning
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <Button variant="outlined" color="inherit">
        Inherit
      </Button>
      <h1>Text</h1>
      <Button variant="text" color="primary">
        Primary
      </Button>
      <Button variant="text" color="secondary">
        Secondary
      </Button>
      <Button variant="text" color="info">
        Info
      </Button>
      <Button variant="text" color="success">
        Success
      </Button>
      <Button variant="text" color="warning">
        Warning
      </Button>
      <Button variant="text" color="error">
        Error
      </Button>
      <Button variant="text" color="inherit">
        Inherit
      </Button>
    </>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Use variant to set the display style and color to set the coloring`,
        },
      },
    },
  },
)

export const Sizes = story<ButtonProps>(
  () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button variant="contained" size="extraSmall">
        Extra Small (custom size)
      </Button>
      <Button variant="contained" size={'small'}>
        Small
      </Button>
      <Button variant="contained" size={'medium'}>
        Medium
      </Button>
      <Button variant="contained" size={'large'}>
        Large
      </Button>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `For larger or smaller buttons, use the size prop.

**Note:** there is a known issue with size not working right now - this will be investigated/fixed during the custom theming effort.`,
        },
      },
    },
  },
)

export const ButtonsWithIconsAndLabel = story<ButtonProps>(
  () => (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  ),
  {
    parameters: {
      docs: {
        description: {
          story: `Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.`,
        },
      },
    },
  },
)
