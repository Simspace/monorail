import React from 'react'
import { alpha, capitalize, useTheme } from '@mui/material'

import { Box, Typography } from '@monorail/components'

import { getRawColorObject } from '../../helpers.js'
import { ColorMap } from './palette.components'
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
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)',
    },
    {
      token: 'palette.action.active',
      colorValue: theme.palette.action.active,
    },
    {
      token: 'palette.action.disabled',
      colorValue: theme.palette.action.disabled,
    },
    {
      token: 'palette.action.disabledBackground',
      colorValue: theme.palette.action.disabledBackground,
    },
    {
      token: 'palette.action.disabledOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.disabledOpacity,
      ),
      opacity: theme.palette.action.disabledOpacity,
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.disabledOpacity)',
    },
    {
      token: 'palette.action.focus',
      colorValue: theme.palette.action.focus,
    },
    {
      token: 'palette.action.focusOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.focusOpacity,
      ),
      opacity: theme.palette.action.focusOpacity,
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)',
    },
    {
      token: 'palette.action.hover',
      colorValue: theme.palette.action.hover,
    },
    {
      token: 'palette.action.hoverOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.hoverOpacity,
      ),
      opacity: theme.palette.action.hoverOpacity,
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)',
    },
    {
      token: 'palette.action.selected',
      colorValue: theme.palette.action.selected,
    },
    {
      token: 'palette.action.selectedOpacity',
      colorValue: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity,
      ),
      opacity: theme.palette.action.selectedOpacity,
      description:
        'alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)',
    },
  ]

  return (
    <Box p={4}>
      <Typography variant="h2" gutterBottom>
        Action Colors
      </Typography>
      <ColorMap
        colorMetadata={action}
        colorMode={colorMode}
        rawColorObj={rawColorMapping}
      />
    </Box>
  )
}
