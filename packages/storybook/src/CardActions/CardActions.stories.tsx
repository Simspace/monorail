// Edit this file to add new stories
import React from 'react'

import type { CardActionsProps } from '@monorail/components'
import { Button, CardActions } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Surfaces/Card/CardActions', component: CardActions }

const Template = story<CardActionsProps>(
  (args) => (
    <CardActions {...args}>
      <Button variant='text'>Action 1</Button>
      <Button variant='contained'>Action 2</Button>
    </CardActions>
  ),
  {
    args: {},
    muiName: 'MuiCardActions',
  },
)

export const Default = story(Template)
