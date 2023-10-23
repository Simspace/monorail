// Edit this file to add new stories
import React from 'react'

import type { CardActionAreaProps } from '@monorail/components'
import { CardActionArea } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Surfaces/Card/CardActionArea',
  component: CardActionArea,
  argTypes: {
    disabled: { control: 'boolean' },
  },
}

const Template = story<CardActionAreaProps>(
  args => <CardActionArea {...args} />,
  { args: { children: 'Card Action Area' }, muiName: 'MuiCardActionArea' },
)

export const Default = story(Template)
