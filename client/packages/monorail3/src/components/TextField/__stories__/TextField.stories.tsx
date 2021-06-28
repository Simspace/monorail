// Edit this file to add new stories
import React from 'react'
import { TextField, TextFieldProps } from '../TextField'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TextField.storyHelpers'
/** Metadata for these stories - update/extend as needed */
export default { ...defaultStoryMeta }
/** Story template - update as needed */
const Template = story<TextFieldProps>(args => <TextField {...args} />, {
  args: {
    label: 'Text Field',
    inputProps: {
      'aria-label': 'Text Field',
    },
  },
})
/** Default story (edit as needed) */
export const Default = story(Template, {})
// TODO: add more stories below
