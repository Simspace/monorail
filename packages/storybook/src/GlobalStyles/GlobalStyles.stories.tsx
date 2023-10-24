// Edit this file to add new stories
import React from 'react'

import type { GlobalStylesProps } from '@monorail/components'
import { GlobalStyles } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Utils/GlobalStyles',
  component: GlobalStyles,
  parameters: {
    creevey: {
      skip: 'No story yet',
    },
  },
}

const Template = story<GlobalStylesProps>(
  (args: Partial<GlobalStylesProps>) => <GlobalStyles styles={{}} {...args} />,
  {
    args: {},
    parameters: {
      creevey: {
        skip: 'No story yet',
      },
    },
  },
)

export const Default = story(Template, {
  parameters: {
    creevey: {
      skip: 'No story yet',
    },
  },
})
