// Edit this file to add new stories
import React from 'react'
import { OutlinedInput, OutlinedInputProps } from '../OutlinedInput'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './OutlinedInput.stories.gen'
import { FormControl } from '../../FormControl/FormControl'
import { InputLabel } from '../../InputLabel/InputLabel'

/**
 * Metadata for OutlinedInput stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Inputs/Input/OutlinedInput' }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<OutlinedInputProps>(
  args => (
    <FormControl variant="filled">
      <InputLabel htmlFor="filled">Label</InputLabel>
      <OutlinedInput {...args} />
    </FormControl>
  ),
  {
    args: {
      id: 'filled',
      placeholder: 'Placeholder',
    },
  },
)
/** Default story for OutlinedInput (edit/remove by hand if needed) */
export const Default = story(Template, {
  parameters: {
    docs: {
      description: {
        component: `OutlinedInput is a low-level component that can be used with other components to create things like a filled TextField`,
      },
    },
  },
})

export const Showcase = story<OutlinedInputProps>(
  () => {
    const [name, setName] = React.useState('Composed TextField')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value)
    }

    return (
      <FormControl variant="filled">
        <InputLabel htmlFor="component-filled">Name</InputLabel>
        <OutlinedInput
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
          story: `Example FormControl with a OutlinedInput`,
        },
      },
    },
  },
)
