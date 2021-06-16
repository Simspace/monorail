import React from 'react'

import { story } from '../../../__tests__/storybook'
import { Box, BoxProps } from '../Box'

export default {
  title: 'Layout/Box',
  component: Box,
}

const Template = story<BoxProps>(
  args => {
    return <Box {...args} />
  },
  {
    args: {
      children: 'This is a Box',
      sx: {
        backgroundColor: '#ccc',
      },
    },
  },
)

export const Default = story(Template)

export * from '../__tests__/Box.demo'
