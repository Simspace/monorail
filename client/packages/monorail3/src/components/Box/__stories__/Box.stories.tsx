import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { useTheme } from '../../../theme/useTheme'
import { Box, BoxProps } from '../Box'

export default {
  title: 'Layout/Box',
  component: Box,
}

const defaultArgs = {
  children: 'This is a Box',
  sx: {
    backgroundColor: '#ccc',
  },
}

const Template = story<BoxProps>(
  args => {
    return <Box {...args} />
  },
  {
    args: defaultArgs,
  },
)

export const Default = story(Template)

export const ThemeBasedStyling = () => {
  const theme = useTheme()
  return (
    <Box
      {...defaultArgs}
      padding={theme.spacing(2)}
      sx={{ backgroundColor: theme.palette.primary.main }}
    />
  )
}
