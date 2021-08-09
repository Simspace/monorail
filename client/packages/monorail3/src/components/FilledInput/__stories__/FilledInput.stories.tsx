// Edit this file to add new stories
import React from 'react'
import { FilledInput, FilledInputProps } from '../FilledInput'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './FilledInput.stories.gen'
import { FormControl } from '../../FormControl/FormControl'
import { InputLabel } from '../../InputLabel/InputLabel'

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
      componentsProps: undefined,
      defaultValue: '',
      disabled: false,
      disableUnderline: false,
      endAdornment: undefined,
      error: false,
      fullWidth: false,
      hiddenLabel: false,
      id: 'filled',
      inputComponent: undefined,
      inputProps: undefined,
      inputRef: undefined,
      margin: 'dense',
      maxRows: undefined,
      minRows: undefined,
      multiline: false,
      name: 'label',
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
/** Default story for FilledInput (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
