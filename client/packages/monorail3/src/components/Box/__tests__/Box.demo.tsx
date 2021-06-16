import React from 'react'

import { useTheme } from '../../../theme/useTheme'
import { Box } from '../Box'

export const ThemeBasedStyling = () => {
  const theme = useTheme()
  return (
    <Box
      padding={theme.spacing(2)}
      sx={{ backgroundColor: theme.palette.primary.main }}
    />
  )
}
