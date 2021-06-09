import React from 'react'

import { meta, story } from '../../../testHelpers/storybook'
import { useTheme } from '../../../theme/useTheme'
import { Box, BoxProps } from '../Box'
import META from './Box.meta.json'

export default meta(META, { title: 'Layout/Box' })

const defaultArgs: BoxProps = {
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

//#region Hero story in Docs
export const Basic = story(Template)
//#endregion

export const WithStyles = () => {
  const theme = useTheme()
  return (
    <Box
      {...defaultArgs}
      padding={theme.spacing(2)}
      sx={{ backgroundColor: theme.palette.grey[100] }}
    />
  )
}
