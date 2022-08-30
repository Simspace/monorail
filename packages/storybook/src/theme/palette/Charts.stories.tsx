import React from 'react'
import type { Color } from '@mui/material'
import { capitalize, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import type { PaletteOptions } from '@mui/material/styles/createPalette'

export default {
  title: 'Theme/Palette/Charts',
  parameters: {
    layout: 'fullscreen',
  },
}

const SingleColorBox = ({
  color,
  label,
  minWidth,
}: {
  color: string
  label: string
  minWidth: string
}) => {
  return color ? (
    <Box sx={{ marginBottom: 2 }}>
      <Typography sx={{ minWidth, marginRight: 2 }}>{label}</Typography>
      <Box
        sx={{
          height: '40px',
          backgroundColor: color,
          border: '1px solid black',
        }}
      />
      <Box sx={{ fontSize: '60%', fontWeight: 100 }}>{color || '???'}</Box>
    </Box>
  ) : (
    <></>
  )
}

const ColorShadesBox = ({ label, color }: { label: string; color: Color }) => {
  const minWidth = '50px'
  return (
    <Box sx={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
      <Box component="h3" sx={{ flex: 1 }}>
        {label}
      </Box>
      <SingleColorBox label="50" color={color[50]} minWidth={minWidth} />
      <SingleColorBox label="100" color={color[100]} minWidth={minWidth} />
      <SingleColorBox label="200" color={color[200]} minWidth={minWidth} />
      <SingleColorBox label="300" color={color[300]} minWidth={minWidth} />
      <SingleColorBox label="400" color={color[400]} minWidth={minWidth} />
      <SingleColorBox label="500" color={color[500]} minWidth={minWidth} />
      <SingleColorBox label="600" color={color[600]} minWidth={minWidth} />
      <SingleColorBox label="700" color={color[700]} minWidth={minWidth} />
      <SingleColorBox label="800" color={color[800]} minWidth={minWidth} />
      <SingleColorBox label="900" color={color[900]} minWidth={minWidth} />
      <SingleColorBox label="A100" color={color.A100} minWidth={minWidth} />
      <SingleColorBox label="A200" color={color.A200} minWidth={minWidth} />
      <SingleColorBox label="A400" color={color.A400} minWidth={minWidth} />
      <SingleColorBox label="A700" color={color.A700} minWidth={minWidth} />
    </Box>
  )
}

export const Charts = () => {
  const theme = useTheme()

  return (
    <Box p={4}>
      <Typography variant="h2" gutterBottom>
        Chart
      </Typography>
      {Object.keys(theme.palette.chart).map(chartColor => (
        <ColorShadesBox
          key={`chart-color-${chartColor}`}
          label={capitalize(chartColor)}
          color={
            theme.palette.chart[chartColor as keyof PaletteOptions['chart']]
          }
        />
      ))}
    </Box>
  )
}
