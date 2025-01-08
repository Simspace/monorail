// Edit this file to add new stories
import React from 'react'

import type { DialogActionsProps } from '@monorail/components'
import { Button, DialogActions } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Feedback/Dialog/DialogActions',
  component: DialogActions,
}

const Template = story<DialogActionsProps>(
  (args: DialogActionsProps) => (
    <DialogActions {...args}>
      <Button variant='text'>Action 1</Button>
      <Button variant='contained'>Action 2</Button>
    </DialogActions>
  ),
  { args: {}, muiName: 'MuiDialogActions' },
)

export const Default = story(Template)
