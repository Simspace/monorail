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
    <FormControl>
      <InputLabel htmlFor="outlined">Label</InputLabel>
      <OutlinedInput id="outlined" label="Label" {...args} />
    </FormControl>
  ),
  {
    args: {
      autoComplete: undefined,
      autoFocus: false,
      classes: undefined,
      color: 'primary',
      // components: {
      //   Input: undefined,
      //   Root: undefined,
      // },
      // Setting these as undefined set the existing components as undefined
      // when in reality we want the defaults to render but that doesn't happen
      defaultValue: '',
      disabled: false,
      endAdornment: undefined,
      error: false,
      fullWidth: false,
      id: 'outlined',
      inputComponent: undefined,
      inputProps: undefined,
      inputRef: undefined,
      label: 'Label',
      margin: 'dense',
      maxRows: undefined,
      minRows: undefined,
      multiline: false,
      name: 'label',
      notched: undefined,
      onChange: undefined,
      placeholder: 'Placeholder',
      readOnly: false,
      required: false,
      rows: undefined,
      startAdornment: undefined,
      sx: undefined,
      type: undefined,
      value: undefined,
    },
  },
)
/** Default story for OutlinedInput (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
