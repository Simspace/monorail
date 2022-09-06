import React from 'react'
import { Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'

import { getRawColorObject } from '../../helpers.js'
import { ColorTokenTable } from './palette.components'
import type { ColorTokenRowProps, ThemeName } from './palette.types'

export default {
  title: 'Theme/Palette/Score',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
}

export const Score = () => {
  const theme = useTheme()

  const rawColorMapping = React.useMemo(
    () => getRawColorObject(theme.name as ThemeName),
    [theme.name],
  )

  const scoreColors: Array<{
    name: string
    data: Array<ColorTokenRowProps>
  }> = [
    {
      name: 'Low',
      data: [
        {
          token: '.low.light',
          colorValue: theme.palette.score.low.light,
          figmaStyle: 'Score/Low/Light',
        },
        {
          token: '.low.main',
          colorValue: theme.palette.score.low.main,
          figmaStyle: 'Score/Low/Main',
        },
        {
          token: '.low.dark',
          colorValue: theme.palette.score.low.dark,
          figmaStyle: 'Score/Low/Dark',
        },
        {
          token: '.low.contrastText',
          colorValue: theme.palette.score.low.contrastText,
          figmaStyle: 'Score/Low/Contrast Text',
          description:
            'Use for text or icons on containers with score background colors.',
        },
      ],
    },
    {
      name: 'Low Moderate',
      data: [
        {
          token: '.lowModerate.light',
          colorValue: theme.palette.score.lowModerate.light,
          figmaStyle: 'Score/Low Moderate/Light',
        },
        {
          token: '.lowModerate.main',
          colorValue: theme.palette.score.lowModerate.main,
          figmaStyle: 'Score/Low Moderate/Main',
        },
        {
          token: '.lowModerate.dark',
          colorValue: theme.palette.score.lowModerate.dark,
          figmaStyle: 'Score/Low Moderate/Dark',
        },
        {
          token: '.lowModerate.contrastText',
          colorValue: theme.palette.score.lowModerate.contrastText,
          figmaStyle: 'Score/Low Moderate/Contrast Text',
          description:
            'Use for text or icons on containers with score background colors.',
        },
      ],
    },
    {
      name: 'Moderate',
      data: [
        {
          token: '.moderate.light',
          colorValue: theme.palette.score.moderate.light,
          figmaStyle: 'Score/Moderate/Light',
        },
        {
          token: '.moderate.main',
          colorValue: theme.palette.score.moderate.main,
          figmaStyle: 'Score/Moderate/Main',
        },
        {
          token: '.moderate.dark',
          colorValue: theme.palette.score.moderate.dark,
          figmaStyle: 'Score/Moderate/Dark',
        },
        {
          token: '.moderate.contrastText',
          colorValue: theme.palette.score.moderate.contrastText,
          figmaStyle: 'Score/Moderate/Contrast Text',
          description:
            'Use for text or icons on containers with score background colors.',
        },
      ],
    },
    {
      name: 'High Moderate',
      data: [
        {
          token: '.highModerate.light',
          colorValue: theme.palette.score.highModerate.light,
          figmaStyle: 'Score/High Moderate/Light',
        },
        {
          token: '.highModerate.main',
          colorValue: theme.palette.score.highModerate.main,
          figmaStyle: 'Score/High Moderate/Main',
        },
        {
          token: '.highModerate.dark',
          colorValue: theme.palette.score.highModerate.dark,
          figmaStyle: 'Score/High Moderate/Dark',
        },
        {
          token: '.highModerate.contrastText',
          colorValue: theme.palette.score.highModerate.contrastText,
          figmaStyle: 'Score/High Moderate/Contrast Text',
          description:
            'Use for text or icons on containers with score background colors.',
        },
      ],
    },
    {
      name: 'High',
      data: [
        {
          token: '.high.light',
          colorValue: theme.palette.score.high.light,
          figmaStyle: 'Score/High/Light',
        },
        {
          token: '.high.main',
          colorValue: theme.palette.score.high.main,
          figmaStyle: 'Score/High/Main',
        },
        {
          token: '.high.dark',
          colorValue: theme.palette.score.high.dark,
          figmaStyle: 'Score/High/Dark',
        },
        {
          token: '.high.contrastText',
          colorValue: theme.palette.score.high.contrastText,
          figmaStyle: 'Score/High/Contrast Text',
          description:
            'Use for text or icons on containers with score background colors.',
        },
      ],
    },
  ]

  return (
    <Box gap={4} sx={{ p: 4 }}>
      {scoreColors.map(score => (
        <React.Fragment key={`score-${score.name}`}>
          <Typography variant="h2" gutterBottom>
            {score.name}
          </Typography>
          <Typography gutterBottom>{`theme.palette.score`}</Typography>
          <ColorTokenTable
            colorMetadata={score.data}
            rawColorObj={rawColorMapping}
          />
        </React.Fragment>
      ))}
    </Box>
  )
}
