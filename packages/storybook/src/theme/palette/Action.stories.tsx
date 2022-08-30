import React from 'react'
import { alpha, capitalize, useTheme } from '@mui/material'

import { Box, Typography } from '@monorail/components'

import { getRawColorObject } from '../../helpers.js'
import { ColorMap, ColorSwatchContainer } from './palette.components'
import type { ColorCardProps, ThemeName } from './palette.types'

export default {
  title: 'Theme/Palette/Action',
  parameters: {
    layout: 'fullscreen',
  },
}

export const Action = () => {
  const theme = useTheme()

  const colorMode = capitalize(theme.palette.mode)

  const rawColorMapping = React.useMemo(
    () => getRawColorObject(theme.name as ThemeName),
    [theme.name],
  )

  const action: Array<ColorCardProps> = [
    {
      token: 'palette.action.activatedOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.activatedOpacity,
      ),
      opacity: theme.palette.action.activatedOpacity,
      figmaStyle: 'N/A',
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)',
    },
    {
      token: 'palette.action.active',
      colorValue: theme.palette.action.active,
      figmaStyle: 'N/A',
    },
    {
      token: 'palette.action.disabled',
      colorValue: theme.palette.action.disabled,
      figmaStyle: 'N/A',
    },
    {
      token: 'palette.action.disabledBackground',
      colorValue: theme.palette.action.disabledBackground,
      figmaStyle: 'N/A',
    },
    {
      token: 'palette.action.disabledOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.disabledOpacity,
      ),
      opacity: theme.palette.action.disabledOpacity,
      figmaStyle: 'N/A',
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.disabledOpacity)',
    },
    {
      token: 'palette.action.focus',
      colorValue: theme.palette.action.focus,
      figmaStyle: 'N/A',
    },
    {
      token: 'palette.action.focusOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.focusOpacity,
      ),
      opacity: theme.palette.action.focusOpacity,
      figmaStyle: 'N/A',
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)',
    },
    {
      token: 'palette.action.hover',
      colorValue: theme.palette.action.hover,
      figmaStyle: 'N/A',
    },
    {
      token: 'palette.action.hoverOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.hoverOpacity,
      ),
      opacity: theme.palette.action.hoverOpacity,
      figmaStyle: 'N/A',
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)',
    },
    {
      token: 'palette.action.selected',
      colorValue: theme.palette.action.selected,
      figmaStyle: 'N/A',
    },
    {
      token: 'palette.action.selectedOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity,
      ),
      opacity: theme.palette.action.selectedOpacity,
      figmaStyle: 'N/A',
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)',
    },
  ]

  return (
    <Box p={4}>
      <Typography variant="h2" gutterBottom>
        Action Colors
      </Typography>
      <ColorSwatchContainer>
        <ColorMap
          data={action}
          colorMode={colorMode}
          rawColorObj={rawColorMapping}
        />
      </ColorSwatchContainer>
    </Box>
  )
}
