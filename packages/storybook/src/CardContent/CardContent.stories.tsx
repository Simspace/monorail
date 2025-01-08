// Edit this file to add new stories
import React from 'react'

import type { CardContentProps } from '@monorail/components'
import { CardContent } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Surfaces/Card/CardContent', component: CardContent }

const Template = story<CardContentProps>((args) => <CardContent {...args} />, {
  args: { children: 'Card Content' },
  muiName: 'MuiCardContent',
})

export const Default = story(Template)
