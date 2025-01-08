// Edit this file to add new stories
import React from 'react'

import type { NoSsrProps } from '@monorail/components'
import { NoSsr } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Utils/NoSsr',
  component: NoSsr,
  parameters: {
    creevey: {
      skip: 'No story yet',
    },
  },
}

const Template = story<NoSsrProps>((args) => <NoSsr {...args} />, {
  args: {},
  parameters: {
    creevey: {
      skip: 'No story yet',
    },
  },
})

export const Default = story(Template, {
  parameters: {
    creevey: {
      skip: 'No story yet',
    },
  },
})
