// Edit this file to add new stories
import React from 'react'

import type { DialogTitleProps } from '@monorail/components'
import { DialogTitle } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Feedback/Dialog/DialogTitle', component: DialogTitle }

const Template = story<DialogTitleProps>(
  (args: DialogTitleProps) => <DialogTitle {...args}>Dialog Title</DialogTitle>,
  {
    args: {},
    muiName: 'MuiDialogTitle',
  },
)

export const Default = story(Template)
