import React from 'react'
import { capitalize, useTheme } from '@mui/material'

import { Box, Typography } from '@monorail/components'

import { getRawColorObject } from '../../helpers.js'
import { ColorMap } from './palette.components'
import type { ColorCardProps, ThemeName } from './palette.types'

export default {
  title: 'Theme/Palette/Tiers',
  parameters: {
    layout: 'fullscreen',
  },
}

export const Tiers = () => {
  const theme = useTheme()

  const colorMode = capitalize(theme.palette.mode)

  const rawColorMapping = React.useMemo(
    () => getRawColorObject(theme.name as ThemeName),
    [theme.name],
  )

  const tiers: Array<ColorCardProps> = [
    {
      token: 'palette.tiers.one',
      colorValue: theme.palette.tiers.one,
      figmaStyle: 'Tiers/One',
    },
    {
      token: 'palette.tiers.two',
      colorValue: theme.palette.tiers.two,
      figmaStyle: 'Tiers/Two',
    },
    {
      token: 'palette.tiers.three',
      colorValue: theme.palette.tiers.three,
      figmaStyle: 'Tiers/Three',
    },
    {
      token: 'palette.tiers.four',
      colorValue: theme.palette.tiers.four,
      figmaStyle: 'Tiers/Four',
    },
  ]

  return (
    <Box p={4}>
      <Typography variant="h2" gutterBottom>
        Tiers
      </Typography>
      <ColorMap
        colorMetadata={tiers}
        colorMode={colorMode}
        rawColorObj={rawColorMapping}
      />
    </Box>
  )
}
