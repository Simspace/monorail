// Edit this file to add new stories
import React from 'react'

import type { FilledInputProps } from '@monorail/components'
import { FilledInput, FormControl, InputLabel } from '@monorail/components'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for FilledInput stories - update/extend as needed
 */
export default { title: 'Inputs/Input/FilledInput', component: FilledInput }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<FilledInputProps>(
  (args: FilledInputProps) => (
    <FormControl variant="filled">
      <InputLabel htmlFor="filled">Label</InputLabel>
      <FilledInput {...args} />
    </FormControl>
  ),
  {
    args: {
      id: 'filled',
      placeholder: 'Placeholder',
    },
    muiName: 'MuiFilledInput',
  },
)
/** Default story for FilledInput (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `FilledInput is a low-level component that can be used with other components to create things like a filled TextField`,
      },
    },
  },
})

export const Showcase = story<FilledInputProps>(
  () => {
    const [name, setName] = React.useState('Composed TextField')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)
    }

    return (
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Name</InputLabel>
        <FilledInput
          id="component-filled"
          value={name}
          onChange={handleChange}
        />
      </FormControl>
    )
  },
  {
    parameters: {
      docs: {
        description: {
          story: `Example FormControl with a FilledInput`,
        },
      },
    },
  },
)
