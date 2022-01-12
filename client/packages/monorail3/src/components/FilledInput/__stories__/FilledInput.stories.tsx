// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { FormControl } from '../../FormControl/FormControl'
import { InputLabel } from '../../InputLabel/InputLabel'
import { FilledInput, FilledInputProps } from '../FilledInput'
import { defaultStoryMeta } from './FilledInput.stories.gen'

/**
 * Metadata for FilledInput stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Inputs/Input/FilledInput' }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<FilledInputProps>(
  args => (
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
