// Edit this file to add new stories
import React from 'react'

import type { AlertTitleProps } from '@monorail/components'
import { AlertTitle } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Feedback/Alert/AlertTitle', component: AlertTitle }

const Template = story<AlertTitleProps>((args) => <AlertTitle {...args} />, {
  args: { children: 'Alert Title' },
  muiName: 'MuiAlertTitle',
})

export const Default = story(Template)
