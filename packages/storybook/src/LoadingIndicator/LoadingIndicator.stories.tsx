import React from 'react'

import { LoadingIndicator } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Feedback/LoadingIndicator',
  component: LoadingIndicator,
  argTypes: {
    size: {
      defaultValue: 48,
      control: {
        type: 'range',
        min: 16,
        max: 160,
        step: 2,
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 48 },
      },
    },
  },
}

const Template = story((args) => <LoadingIndicator {...args} />, {
  args: {},
})

export const Default = story(Template)
