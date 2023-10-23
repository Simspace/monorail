// Edit this file to add new stories
import React from 'react'

import type { DialogContentProps } from '@monorail/components'
import { DialogContent, DialogContentText } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Feedback/Dialog/DialogContent',
  component: DialogContent,
}
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

export const Default = story(Template)
