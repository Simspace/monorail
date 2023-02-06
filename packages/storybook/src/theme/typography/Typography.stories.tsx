import React from 'react'
import { useTheme } from '@mui/material'

import { Box, Typography } from '@monorail/components'
import {
  PixelFontSize,
  PixelLineHeight,
} from '@monorail/themes/common/FontSize'

import { TypographyTokenTable } from './typography.components'
import type {
  TypographyTokenColumns,
  TypographyTokenRowProps,
} from './typography.types'

export default {
  title: 'Theme/Typography/Fonts',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
}

const columns: TypographyTokenColumns = [
  { id: 'column-variant', label: 'Token Name' },
  { id: 'column-figmaStyle', label: 'Figma Style' },
  { id: 'column-fontFamily', label: 'Font Family' },
  { id: 'column-fontWeight', label: 'Font Weight', align: 'center' },
  { id: 'column-fontSize', label: 'Font Size' },
  { id: 'column-fontSizePx', label: '(px)' },
  { id: 'column-lineHeight', label: 'Line Height' },
  { id: 'column-lineHeightPx', label: '(px)' },
  { id: 'column-underlyingElement', label: 'Underlying HTML Element' },
  { id: 'column-description', label: 'Description' },
]

export const Fonts = () => {
  const theme = useTheme()

  const rows: Array<TypographyTokenRowProps> = React.useMemo(
    () => [
      {
        variant: 'data1',
        figmaStyle: 'Typography/Data Display 1',
        fontSizePx: PixelFontSize.Data1,
        lineHeightPx: PixelLineHeight.Data1,
        description:
          'Use this style for data wells and designing eye-catching numbers.',
        styles: theme.typography.data1,
        underlyingElement: 'span',
      },
      {
        variant: 'data2',
        figmaStyle: 'Typography/Data Display 2',
        fontSizePx: PixelFontSize.Data2,
        lineHeightPx: PixelLineHeight.Data2,
        description:
          'Use this style for data wells and designing eye-catching numbers.',
        styles: theme.typography.data2,
        underlyingElement: 'span',
      },
      {
        variant: 'data3',
        figmaStyle: 'Typography/Data Display 3',
        fontSizePx: PixelFontSize.Data3,
        lineHeightPx: PixelLineHeight.Data3,
        description:
          'Use this style for data wells and designing eye-catching numbers.',
        styles: theme.typography.data3,
        underlyingElement: 'span',
      },
      {
        variant: 'h1',
        figmaStyle: 'Typography/H1',
        fontSizePx: PixelFontSize.H1,
        lineHeightPx: PixelLineHeight.H1,
        description: 'Each UI page should include these.',
        styles: theme.typography.h1,
        underlyingElement: 'h1',
      },
      {
        variant: 'h2',
        figmaStyle: 'Typography/H2',
        fontSizePx: PixelFontSize.H2,
        lineHeightPx: PixelLineHeight.H2,
        styles: theme.typography.h2,
        underlyingElement: 'h2',
      },
      {
        variant: 'h3',
        figmaStyle: 'Typography/H3',
        fontSizePx: PixelFontSize.H3,
        lineHeightPx: PixelLineHeight.H3,
        styles: theme.typography.h3,
        underlyingElement: 'h3',
      },
      {
        variant: 'h4',
        figmaStyle: 'Typography/H4',
        fontSizePx: PixelFontSize.H3,
        lineHeightPx: PixelLineHeight.H3,
        styles: theme.typography.h3,
        underlyingElement: 'h4',
      },
      {
        variant: 'h5',
        figmaStyle: 'Typography/H5',
        fontSizePx: PixelFontSize.H3,
        lineHeightPx: PixelLineHeight.H3,
        styles: theme.typography.h3,
        underlyingElement: 'h5',
      },
      {
        variant: 'h6',
        figmaStyle: 'Typography/H6',
        fontSizePx: PixelFontSize.H3,
        lineHeightPx: PixelLineHeight.H3,
        styles: theme.typography.h3,
        underlyingElement: 'h6',
      },
      {
        variant: 'body1',
        figmaStyle: 'Typography/Body 1',
        fontSizePx: PixelFontSize.Body1,
        lineHeightPx: PixelLineHeight.Body1,
        description: 'Use for most body text.',
        styles: theme.typography.body1,
        underlyingElement: 'p',
      },
      {
        variant: 'body2',
        figmaStyle: 'Typography/Body 2',
        fontSizePx: PixelFontSize.Body2,
        lineHeightPx: PixelLineHeight.Body2,
        description: 'Use for metadata, e.g. values in key:value pairs.',
        styles: theme.typography.body2,
        underlyingElement: 'p',
      },
      {
        variant: 'subtitle1',
        figmaStyle: 'Typography/Subtitle 1',
        fontSizePx: PixelFontSize.Subtitle1,
        lineHeightPx: PixelLineHeight.Subtitle1,
        description: 'Use for metadata, e.g. values in key:value pairs.',
        styles: theme.typography.subtitle1,
        underlyingElement: 'h6',
      },
      {
        variant: 'subtitle2',
        figmaStyle: 'Typography/Subtitle 2',
        fontSizePx: PixelFontSize.Subtitle2,
        lineHeightPx: PixelLineHeight.Subtitle2,
        description: 'Use for metadata, e.g. values in key:value pairs.',
        styles: theme.typography.subtitle2,
        underlyingElement: 'h6',
      },
      {
        variant: 'monoBody1',
        figmaStyle: 'Typography/Mono Body 1',
        fontSizePx: PixelFontSize.MonoBody1,
        lineHeightPx: PixelLineHeight.MonoBody1,
        styles: theme.typography.monoBody1,
        underlyingElement: 'code',
      },
      {
        variant: 'monoBody2',
        figmaStyle: 'Typography/Mono Body 2',
        fontSizePx: PixelFontSize.MonoBody2,
        lineHeightPx: PixelLineHeight.MonoBody2,
        styles: theme.typography.monoBody2,
        underlyingElement: 'code',
      },
      {
        variant: 'monoBody3',
        figmaStyle: 'Typography/Mono Body 3',
        fontSizePx: PixelFontSize.MonoBody3,
        lineHeightPx: PixelLineHeight.MonoBody3,
        styles: theme.typography.monoBody3,
        underlyingElement: 'code',
      },
      {
        variant: 'overline',
        figmaStyle: 'Typography/Overline',
        fontSizePx: PixelFontSize.Overline,
        lineHeightPx: PixelLineHeight.Overline,
        styles: theme.typography.overline,
        underlyingElement: 'span',
      },
      {
        variant: 'caption',
        figmaStyle: 'Typography/Caption',
        fontSizePx: PixelFontSize.Caption,
        lineHeightPx: PixelLineHeight.Caption,
        styles: theme.typography.caption,
        underlyingElement: 'span',
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
      <TypographyTokenTable columns={columns} rows={rows} />
    </Box>
  )
}
