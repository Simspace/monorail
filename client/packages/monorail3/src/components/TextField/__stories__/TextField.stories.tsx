// Edit this file to add new stories
import React from 'react'
import { TextField, TextFieldProps } from '../TextField'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './TextField.stories.gen'

/**
 * Metadata for TextField stories - update/extend as needed
 */
export default { ...defaultStoryMeta }

const Template = story<TextFieldProps>(args => <TextField {...args} />, {
  args: { label: 'Text Field', inputProps: { 'aria-label': 'Text Field' } },
})

/**
 * Default story for TextField (edit/remove by hand if needed)
 */
export const Default = story(Template)

// TODO: add more stories below
