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
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<OutlinedInputProps>(
  args => (
    <FormControl>
      <InputLabel htmlFor="outlined">Label</InputLabel>
      <OutlinedInput {...args} />
    </FormControl>
  ),
  {
    args: {
      id: 'outlined',
      label: 'Label',
      notched: undefined,
      placeholder: 'Placeholder',
    },
  },
)
/** Default story for OutlinedInput (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
