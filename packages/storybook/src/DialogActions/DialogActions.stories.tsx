// Edit this file to add new stories
import React from 'react'
import { Button, DialogActions, DialogActionsProps } from '@monorail/components'

import { story } from '../helpers/storybook'
/**
 * Metadata for DialogActions stories - update/extend as needed
 */
export default {
  title: 'Feedback/Dialog/DialogActions',
  component: DialogActions,
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DialogActionsProps>(
  (args: DialogActionsProps) => (
    <DialogActions {...args}>
      <Button variant="text">Action 1</Button>
      <Button variant="contained">Action 2</Button>
    </DialogActions>
  ),
  { args: {}, muiName: 'MuiDialogActions' },
)
/** Default story for DialogActions (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
