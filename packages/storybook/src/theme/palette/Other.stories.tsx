import React from 'react'
import { Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'

import { getRawColorObject } from '../../helpers.js'
import { ColorTokenTable } from './palette.components.js'
import type { ThemeName } from './palette.types.js'

export default {
  title: 'Theme/Palette/Other',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
}

export const Other = () => {
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
      token: 'theme.palette.outlinedBorder',
      description: 'Commonly used for outlined input fields.',
      colorValue: theme.palette.outlinedBorder,
      figmaStyle: 'Outlined Border',
    },
    {
      token: 'theme.palette.filledInputBackground',
      colorValue: theme.palette.filledInputBackground,
      figmaStyle: 'Filled Input Background',
    },
    {
      token: 'theme.palette.standardInputLine',
      colorValue: theme.palette.standardInputLine,
      figmaStyle: 'Standard Input Line',
    },
    {
      token: 'theme.palette.tooltip',
      description: 'Background color for the Tooltip component.',
      colorValue: theme.palette.tooltip,
      figmaStyle: 'Tooltip',
    },
    {
      token: 'theme.palette.snackbar',
      description:
        'Background color for the Snackbar component if no children are provided.',
      colorValue: theme.palette.snackbar,
      figmaStyle: 'Snackbar',
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
        Other Colors
      </Typography>
      <ColorTokenTable
        colorMetadata={utilityColors}
        rawColorObj={rawColorMapping}
      />
    </Box>
  )
}
