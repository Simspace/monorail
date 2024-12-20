import React from 'react'
import { capitalize, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import type { PaletteOptions } from '@mui/material/styles/createPalette'

import { ColorShadesBox } from './palette.components'

export default {
  title: 'Theme/Palette/Charts',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
}

export const Charts = () => {
  const theme = useTheme()

  return (
    <Box p={4}>
      <Typography variant='h2' gutterBottom>
        Chart
      </Typography>
      <Typography gutterBottom>theme.palette.chart</Typography>
      {Object.keys(theme.palette.chart).map((chartColor) => (
        <ColorShadesBox
          key={`chart-color-${chartColor}`}
          label={capitalize(chartColor)}
          color={theme.palette.chart[chartColor as keyof PaletteOptions['chart']]}
        />
      ))}
    </Box>
  )
}
