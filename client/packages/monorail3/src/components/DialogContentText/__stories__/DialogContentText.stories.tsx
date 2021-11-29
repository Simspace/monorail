// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { DialogContentText, DialogContentTextProps } from '../DialogContentText'
import { defaultStoryMeta } from './DialogContentText.stories.gen'
/**
 * Metadata for DialogContentText stories - update/extend as needed
 */
export default {
  ...defaultStoryMeta,
  title: 'Feedback/Dialog/DialogContentText',
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DialogContentTextProps>(
  args => <DialogContentText {...args}>Dialog Content Text</DialogContentText>,
  { args: {} },
)
/** Default story for DialogContentText (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
