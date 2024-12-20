import React from 'react'
import { Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'

import { getRawColorObject } from '../../helpers/helpers.js'
import { ColorTokenTable } from './palette.components.js'
import type { ColorTokenRowProps } from './palette.types.js'

export default {
  title: 'Theme/Palette/Other',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
}

const TierColors = () => {
  const theme = useTheme()

  const rawColorMapping = React.useMemo(() => getRawColorObject(theme.name), [theme.name])

  const tiers: Array<ColorTokenRowProps> = React.useMemo(() => {
    if (theme.palette.tiers === undefined) {
      return []
    }
    return [
      {
        token: '.one',
        colorValue: theme.palette.tiers.one,
        figmaStyle: 'tiers/one',
      },
      {
        token: '.two',
        colorValue: theme.palette.tiers.two,
        figmaStyle: 'tiers/two',
      },
      {
        token: '.three',
        colorValue: theme.palette.tiers.three,
        figmaStyle: 'tiers/three',
      },
      {
        token: '.four',
        colorValue: theme.palette.tiers.four,
        figmaStyle: 'tiers/four',
      },
    ]
  }, [theme.palette])

  return tiers.length === 0 ? (
    <></>
  ) : (
    <Box p={4}>
      <Typography variant='h2' gutterBottom>
        Tiers
      </Typography>
      <Typography gutterBottom>{`theme.palette.tiers`}</Typography>
      <ColorTokenTable colorMetadata={tiers} rawColorObj={rawColorMapping} />
    </Box>
  )
}

const ScoreColors = () => {
  const theme = useTheme()

  const rawColorMapping = React.useMemo(() => getRawColorObject(theme.name), [theme.name])

  const scoreColors:
    | Array<{
        name: string
        data: Array<ColorTokenRowProps>
      }>
    | undefined = React.useMemo(() => {
    if (theme.palette.score === undefined) {
      return []
    }
    return [
      {
        name: 'Low',
        data: [
          {
            token: '.low.light',
            colorValue: theme.palette.score.low.light,
            figmaStyle: 'score/low/light',
          },
          {
            token: '.low.main',
            colorValue: theme.palette.score.low.main,
            figmaStyle: 'score/low/main',
          },
          {
            token: '.low.dark',
            colorValue: theme.palette.score.low.dark,
            figmaStyle: 'score/low/dark',
          },
          {
            token: '.low.contrastText',
            colorValue: theme.palette.score.low.contrastText,
            figmaStyle: 'score/low/contrastText',
            description: 'Use for text or icons on containers with score background colors.',
          },
        ],
      },
      {
        name: 'Low Moderate',
        data: [
          {
            token: '.lowModerate.light',
            colorValue: theme.palette.score.lowModerate.light,
            figmaStyle: 'score/lowModerate/light',
          },
          {
            token: '.lowModerate.main',
            colorValue: theme.palette.score.lowModerate.main,
            figmaStyle: 'score/lowModerate/main',
          },
          {
            token: '.lowModerate.dark',
            colorValue: theme.palette.score.lowModerate.dark,
            figmaStyle: 'score/lowModerate/dark',
          },
          {
            token: '.lowModerate.contrastText',
            colorValue: theme.palette.score.lowModerate.contrastText,
            figmaStyle: 'score/lowModerate/contrastText',
            description: 'Use for text or icons on containers with score background colors.',
          },
        ],
      },
      {
        name: 'Moderate',
        data: [
          {
            token: '.moderate.light',
            colorValue: theme.palette.score.moderate.light,
            figmaStyle: 'score/moderate/light',
          },
          {
            token: '.moderate.main',
            colorValue: theme.palette.score.moderate.main,
            figmaStyle: 'score/moderate/main',
          },
          {
            token: '.moderate.dark',
            colorValue: theme.palette.score.moderate.dark,
            figmaStyle: 'score/moderate/dark',
          },
          {
            token: '.moderate.contrastText',
            colorValue: theme.palette.score.moderate.contrastText,
            figmaStyle: 'score/moderate/contrastText',
            description: 'Use for text or icons on containers with score background colors.',
          },
        ],
      },
      {
        name: 'High Moderate',
        data: [
          {
            token: '.highModerate.light',
            colorValue: theme.palette.score.highModerate.light,
            figmaStyle: 'score/highModerate/light',
          },
          {
            token: '.highModerate.main',
            colorValue: theme.palette.score.highModerate.main,
            figmaStyle: 'score/highModerate/main',
          },
          {
            token: '.highModerate.dark',
            colorValue: theme.palette.score.highModerate.dark,
            figmaStyle: 'score/highModerate/dark',
          },
          {
            token: '.highModerate.contrastText',
            colorValue: theme.palette.score.highModerate.contrastText,
            figmaStyle: 'score/highModerate/contrastText',
            description: 'Use for text or icons on containers with score background colors.',
          },
        ],
      },
      {
        name: 'High',
        data: [
          {
            token: '.high.light',
            colorValue: theme.palette.score.high.light,
            figmaStyle: 'score/high/light',
          },
          {
            token: '.high.main',
            colorValue: theme.palette.score.high.main,
            figmaStyle: 'score/high/main',
          },
          {
            token: '.high.dark',
            colorValue: theme.palette.score.high.dark,
            figmaStyle: 'score/high/dark',
          },
          {
            token: '.high.contrastText',
            colorValue: theme.palette.score.high.contrastText,
            figmaStyle: 'score/high/contrastText',
            description: 'Use for text or icons on containers with score background colors.',
          },
        ],
      },
    ]
  }, [theme.palette])

  return scoreColors.length === 0 ? (
    <></>
  ) : (
    <Box gap={4} sx={{ p: 4 }}>
      <Typography variant='h2' gutterBottom>
        Score Colors
      </Typography>
      <Typography mb={6}>{`theme.palette.score`}</Typography>
      {scoreColors.map((score) => (
        <React.Fragment key={`score-${score.name}`}>
          <Typography variant='h3' gutterBottom>
            {score.name}
          </Typography>
          <ColorTokenTable colorMetadata={score.data} rawColorObj={rawColorMapping} />
        </React.Fragment>
      ))}
    </Box>
  )
}

export const Other = () => {
  const theme = useTheme()

  const rawColorMapping = React.useMemo(() => getRawColorObject(theme.name), [theme.name])

  const utilityColors = [
    {
      token: 'theme.palette.divider',
      colorValue: theme.palette.divider,
      figmaStyle: 'other/divider',
    },
    {
      token: 'theme.palette.outlinedBorder',
      description: 'Commonly used for outlined input fields.',
      colorValue: theme.palette.outlinedBorder,
      figmaStyle: 'other/outlinedBorder',
    },
    {
      token: 'theme.palette.filledInputBackground',
      colorValue: theme.palette.filledInputBackground,
      figmaStyle: 'other/filledInputBackground',
    },
    {
      token: 'theme.palette.standardInputLine',
      colorValue: theme.palette.standardInputLine,
      figmaStyle: 'other/standardInputLine',
    },
    {
      token: 'theme.palette.backdropOverlay',
      description: 'Background color for the Backdrop component when a Modal is opened.',
      colorValue: theme.palette.backdropOverlay,
      figmaStyle: 'other/backdropOverlay',
    },
    {
      token: 'theme.palette.tooltip',
      description: 'Background color for the Tooltip component.',
      colorValue: theme.palette.tooltip,
      figmaStyle: 'other/tooltip',
    },
    {
      token: 'theme.palette.snackbar',
      description: 'Background color for the Snackbar component if no children are provided.',
      colorValue: theme.palette.snackbar,
      figmaStyle: 'other/snackbar',
    },
    {
      token: 'theme.palette.rating',
      description: 'Use when Rating component is filled.',
      colorValue: theme.palette.rating,
      figmaStyle: 'other/rating',
    },
  ]

  return (
    <Box gap={4} sx={{ p: 4 }}>
      <Typography variant='h2' gutterBottom>
        Other Colors
      </Typography>
      <ColorTokenTable colorMetadata={utilityColors} rawColorObj={rawColorMapping} />
      <ScoreColors />
      <TierColors />
    </Box>
  )
}
