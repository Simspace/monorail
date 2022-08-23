// Edit this file to add new stories
import React from 'react'
import {
  DialogContent,
  DialogContentProps,
  DialogContentText,
} from '@monorail/components'

import { story } from '../helpers/storybook'
/**
 * Metadata for DialogContent stories - update/extend as needed
 */
export default {
  title: 'Feedback/Dialog/DialogContent',
  component: DialogContent,
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DialogContentProps>(
  (args: DialogContentProps) => (
    <DialogContent {...args}>
      <DialogContentText>Dialog Content</DialogContentText>
    </DialogContent>
  ),
  {
    args: {},
    muiName: 'MuiDialogContent',
  },
)
/** Default story for DialogContent (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
