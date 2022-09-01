import React from 'react'
import { capitalize, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'

import { getRawColorObject } from '../../helpers.js'
import { ColorTokenTable } from './palette.components'
import type { ThemeName } from './palette.types'

export default {
  title: 'Theme/Palette/Utility',
  parameters: {
    layout: 'fullscreen',
  },
}

export const Utility = () => {
  const theme = useTheme()
  const colorMode = capitalize(theme.palette.mode)

  const rawColorMapping = React.useMemo(
    () => getRawColorObject(theme.name as ThemeName),
    [theme.name],
  )

  const utilityColors = [
    {
      token: 'theme.palette.divider',
      description: '',
      colorValue: theme.palette.divider,
      figmaStyle: 'Divider',
    },
    {
      token: 'theme.palette.rating',
      description: 'Use when Rating component is filled.',
      colorValue: theme.palette.rating,
      figmaStyle: 'Rating',
    },
  ]

  return (
    <Box gap={4} sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Utility Colors
      </Typography>
      <ColorTokenTable
        colorMetadata={utilityColors}
        colorMode={colorMode}
        rawColorObj={rawColorMapping}
      />
    </Box>
  )
}