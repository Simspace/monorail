// Edit this file to add new stories
import React from 'react'
import DirectionsIcon from '@mui/icons-material/Directions'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import {
  Divider,
  IconButton,
  InputBase,
  InputBaseProps,
  Paper,
} from '@mui/material'

import { story } from '../../../test-helpers/storybook'

/**
 * Metadata for InputBase stories - update/extend as needed
 */
export default { title: 'Inputs/Input/InputBase', component: InputBase }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<InputBaseProps>(
  args => <InputBase inputProps={{ 'aria-label': 'Input Base' }} {...args} />,
  {
    args: {
      placeholder: 'Placeholder',
    },
  },
)

/** Default story for InputBase (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `InputBase is a low-level component that can be used as a building block for building more custom types of inputs.`,
      },
    },
  },
})

export const CustomInputBase = story<InputBaseProps>(
  () => {
    return (
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu" size="large">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          aria-label="Search input"
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          type="submit"
          sx={{ p: '10px' }}
          aria-label="search"
          size="large"
        >
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: '10px' }}
          aria-label="directions"
          size="large"
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `InputBase is used here to build a custom Google Maps input component.`,
        },
      },
    },
  },
)

// TODO: add more stories below
