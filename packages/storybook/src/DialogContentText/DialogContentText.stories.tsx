// Edit this file to add new stories
import React from 'react'

import type { DialogContentTextProps } from '@monorail/components'
import { DialogContentText } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Feedback/Dialog/DialogContentText',
  component: DialogContentText,
}

const Template = story<DialogContentTextProps>(
  (args: DialogContentTextProps) => (
    <DialogContentText {...args}>Dialog Content Text</DialogContentText>
  ),
  { args: {}, muiName: 'MuiDialogContentText' },
)

export const Default = story(Template)
