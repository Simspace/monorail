import React from 'react'
import { Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'

import { getRawColorObject } from '../../helpers.js'
import { ColorTokenTable } from './palette.components'
import type { ColorTokenRowProps, ThemeName } from './palette.types'

export default {
  title: 'Theme/Palette/Foundation',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
}

export const Foundation = () => {
  const theme = useTheme()

  const rawColorMapping = React.useMemo(
    () => getRawColorObject(theme.name as ThemeName),
    [theme.name],
  )

  const commonColors: Array<ColorTokenRowProps> = [
    {
      token: '.white',
      description:
        'Elements that should remain white no matter what theme is used. Example: White text on a blue button.',
      colorValue: theme.palette.common.white,
      figmaStyle: 'Common/White',
    },
    {
      token: '.black',
      description:
        'Elements that should remain black no matter what theme is used. Example: Black text on a yellow button.',
      colorValue: theme.palette.common.black,
      figmaStyle: 'Common/Black',
    },
  ]

  const textColors = [
    {
      token: '.primary',
      description: 'Use for most texts. Headings, paragraphs, labels.',
      colorValue: theme.palette.text.primary,
      figmaStyle: 'Text/Primary',
    },
    {
      token: '.secondary',
      description: '',
      colorValue: theme.palette.text.secondary,
      figmaStyle: 'Text/Secondary',
    },
    {
      token: '.disabled',
      description: '',
      colorValue: theme.palette.text.disabled,
      figmaStyle: 'Text/Disabled',
    },
  ]

  const backgroundColors = [
    {
      token: '.default',
      colorValue: theme.palette.background.default,
      figmaStyle: 'Background/Default',
    },
    {
      token: '.paper',
      colorValue: theme.palette.background.paper,
      description:
        'Commonly used on surfaces. As a rule of thumb, if the background should turn from light to dark when switching from light to dark mode, use background.paper.',
      figmaStyle: 'Background/Default',
    },
  ]

  return (
    <Box gap={4} sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Common
      </Typography>
      <Typography gutterBottom>{`theme.palette.common`}</Typography>
      <ColorTokenTable
        colorMetadata={commonColors}
        rawColorObj={rawColorMapping}
      />
      <Typography variant="h2" gutterBottom>
        Text
      </Typography>
      <Typography gutterBottom>{`theme.palette.text`}</Typography>
      <ColorTokenTable
        colorMetadata={textColors}
        rawColorObj={rawColorMapping}
      />
      <Typography variant="h2" gutterBottom>
        Background
      </Typography>
      <Typography gutterBottom>{`theme.palette.background`}</Typography>
      <ColorTokenTable
        colorMetadata={backgroundColors}
        rawColorObj={rawColorMapping}
      />
    </Box>
  )
}
