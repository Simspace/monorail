import React from 'react'
import { capitalize, useTheme } from '@mui/material'

import { Box, Typography } from '@monorail/components'

import { getRawColorObject } from '../../helpers.js'
import { ColorTokenTable } from './palette.components'
import type { ColorTokenTableProps, ThemeName } from './palette.types'

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

  const tiers: Array<ColorTokenTableProps> = [
    {
      token: '.one',
      colorValue: theme.palette.tiers.one,
      figmaStyle: 'Tiers/One',
    },
    {
      token: '.two',
      colorValue: theme.palette.tiers.two,
      figmaStyle: 'Tiers/Two',
    },
    {
      token: '.three',
      colorValue: theme.palette.tiers.three,
      figmaStyle: 'Tiers/Three',
    },
    {
      token: '.four',
      colorValue: theme.palette.tiers.four,
      figmaStyle: 'Tiers/Four',
    },
  ]

  return (
    <Box p={4}>
      <Typography variant="h2" gutterBottom>
        Tiers
      </Typography>
      <Typography gutterBottom>{`theme.palette.tiers`}</Typography>
      <ColorTokenTable
        colorMetadata={tiers}
        colorMode={colorMode}
        rawColorObj={rawColorMapping}
      />
    </Box>
  )
}
