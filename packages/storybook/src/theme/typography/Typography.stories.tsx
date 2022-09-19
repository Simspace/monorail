import React from 'react'
import { useTheme } from '@mui/material'

import { Box, Typography } from '@monorail/components'
import {
  PixelFontSize,
  PixelLineHeight,
} from '@monorail/themes/common/FontSize'

import { TypographyTokenTable } from './typography.components'
import type { TypographyTokenRowProps } from './typography.types'

export default {
  title: 'Theme/Typography/Fonts',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
}

export const Fonts = () => {
  const theme = useTheme()

  const rows: Array<TypographyTokenRowProps> = React.useMemo(
    () => [
      {
        token: 'data1',
        figmaStyle: 'Typography/Data Display 1',
        fontSizePx: PixelFontSize.Data1,
        lineHeightPx: PixelLineHeight.Data1,
        description:
          'Use this style for data wells and designing eye-catching numbers.',
        styles: theme.typography.data1,
      },
      {
        token: 'data2',
        figmaStyle: 'Typography/Data Display 2',
        fontSizePx: PixelFontSize.Data2,
        lineHeightPx: PixelLineHeight.Data2,
        description:
          'Use this style for data wells and designing eye-catching numbers.',
        styles: theme.typography.data2,
      },
      {
        token: 'data3',
        figmaStyle: 'Typography/Data Display 3',
        fontSizePx: PixelFontSize.Data3,
        lineHeightPx: PixelLineHeight.Data3,
        description:
          'Use this style for data wells and designing eye-catching numbers.',
        styles: theme.typography.data3,
      },
      {
        token: 'h1',
        figmaStyle: 'Typography/H1',
        fontSizePx: PixelFontSize.H1,
        lineHeightPx: PixelLineHeight.H1,
        description: 'Each UI page should include these.',
        styles: theme.typography.h1,
      },
      {
        token: 'h2',
        figmaStyle: 'Typography/H2',
        fontSizePx: PixelFontSize.H2,
        lineHeightPx: PixelLineHeight.H2,
        styles: theme.typography.h2,
      },
      {
        token: 'h3',
        figmaStyle: 'Typography/H3',
        fontSizePx: PixelFontSize.H3,
        lineHeightPx: PixelLineHeight.H3,
        styles: theme.typography.h3,
      },
      {
        token: 'body1',
        figmaStyle: 'Typography/Body 1',
        fontSizePx: PixelFontSize.Body1,
        lineHeightPx: PixelLineHeight.Body1,
        description: 'Use for most body text.',
        styles: theme.typography.body1,
      },
      {
        token: 'body2',
        figmaStyle: 'Typography/Body 2',
        fontSizePx: PixelFontSize.Body2,
        lineHeightPx: PixelLineHeight.Body2,
        description: 'Use for metadata, e.g. values in key:value pairs.',
        styles: theme.typography.body2,
      },
      {
        token: 'subtitle1',
        figmaStyle: 'Typography/Subtitle 1',
        fontSizePx: PixelFontSize.Subtitle1,
        lineHeightPx: PixelLineHeight.Subtitle1,
        description: 'Use for metadata, e.g. values in key:value pairs.',
        styles: theme.typography.subtitle1,
      },
      {
        token: 'subtitle2',
        figmaStyle: 'Typography/Subtitle 2',
        fontSizePx: PixelFontSize.Subtitle2,
        lineHeightPx: PixelLineHeight.Subtitle2,
        description: 'Use for metadata, e.g. values in key:value pairs.',
        styles: theme.typography.subtitle2,
      },
      {
        token: 'monoBody1',
        figmaStyle: 'Typography/Mono Body 1',
        fontSizePx: PixelFontSize.MonoBody1,
        lineHeightPx: PixelLineHeight.MonoBody1,
        styles: theme.typography.monoBody1,
      },
      {
        token: 'monoBody2',
        figmaStyle: 'Typography/Mono Body 2',
        fontSizePx: PixelFontSize.MonoBody2,
        lineHeightPx: PixelLineHeight.MonoBody2,
        styles: theme.typography.monoBody2,
      },
      {
        token: 'overline',
        figmaStyle: 'Typography/Overline',
        fontSizePx: PixelFontSize.Overline,
        lineHeightPx: PixelLineHeight.Overline,
        styles: theme.typography.overline,
      },
      {
        token: 'caption',
        figmaStyle: 'Typography/Caption',
        fontSizePx: PixelFontSize.Caption,
        lineHeightPx: PixelLineHeight.Caption,
        styles: theme.typography.caption,
      },
    ],
    [theme.typography],
  )

  return (
    <Box p={4}>
      <Box mb={4}>
        <Typography variant="h2" gutterBottom>
          Typography Tokens
        </Typography>
        <Typography gutterBottom>{`theme.typography`}</Typography>
      </Box>
      <TypographyTokenTable rows={rows} />
    </Box>
  )
}
