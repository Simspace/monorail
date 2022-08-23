// Edit this file to add new stories
import React from 'react'
import { DialogContentText, DialogContentTextProps } from '@monorail/components'

import { story } from '../helpers/storybook'
/**
 * Metadata for DialogContentText stories - update/extend as needed
 */
export default {
  title: 'Feedback/Dialog/DialogContentText',
  component: DialogContentText,
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DialogContentTextProps>(
  (args: DialogContentTextProps) => (
    <DialogContentText {...args}>Dialog Content Text</DialogContentText>
  ),
  { args: {}, muiName: 'MuiDialogContentText' },
)
/** Default story for DialogContentText (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
