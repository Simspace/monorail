import React from 'react'
import { Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'

import { getRawColorObject } from '../../helpers.js'
import { ColorTokenTable } from './palette.components'
import type { ThemeName } from './palette.types'

export default {
  title: 'Theme/Palette/Utility',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
}

export const Utility = () => {
  const theme = useTheme()

  const rawColorMapping = React.useMemo(
    () => getRawColorObject(theme.name as ThemeName),
    [theme.name],
  )

  const utilityColors = [
    {
      token: 'theme.palette.divider',
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
        rawColorObj={rawColorMapping}
      />
    </Box>
  )
}
