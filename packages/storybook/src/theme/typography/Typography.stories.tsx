import React from 'react'
import { alpha, styled, useTheme } from '@mui/material'

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@monorail/components'
import {
  PixelFontSize,
  PixelLineHeight,
} from '@monorail/themes/common/FontSize'

import type {
  TypographyTokenColumns,
  TypographyTokenRowProps,
} from './typography.types'

export default {
  title: 'Theme/Fonts',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  ' > td, > th': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}))

const StyledTableCell = styled(TableCell)(() => ({
  wordBreak: 'break-word',
}))

const TypographyTokenRow = ({
  token,
  figmaStyle,
  fontSizePx,
  lineHeightPx,
  description,
  styles,
}: TypographyTokenRowProps) => {
  return (
    <StyledTableRow>
      <TableCell component="th" scope="row" sx={{ width: '20%' }}>
        <Typography
          variant={token}
          sx={theme => ({ bgcolor: alpha(theme.palette.error.light, 0.18) })}
        >{`.${token}`}</Typography>
      </TableCell>
      <StyledTableCell sx={{ width: '20%' }}>{figmaStyle}</StyledTableCell>
      <TableCell>{`${getFirstFontFamily(styles.fontFamily)}`}</TableCell>
      <TableCell sx={{ width: '10%' }} align="center">
        {styles.fontWeight}
      </TableCell>
      <TableCell sx={{ width: '5%' }}>{`${styles.fontSize}`}</TableCell>
      <TableCell sx={{ width: '5%' }}>{`${fontSizePx}px`}</TableCell>
      <TableCell sx={{ width: '5%' }}>{`${styles.lineHeight}`}</TableCell>
      <TableCell sx={{ width: '5%' }}>{`${lineHeightPx}px`}</TableCell>
      <StyledTableCell sx={{ width: '30%' }}>
        <Typography sx={{ maxWidth: '80ch' }} variant="body2">
          {description ?? '---'}
        </Typography>
      </StyledTableCell>
    </StyledTableRow>
  )
}

const typographyTokenColumns: TypographyTokenColumns = [
  { id: 'column-token', label: 'Token' },
  { id: 'column-figma-style', label: 'Figma Style' },
  { id: 'column-font-family', label: 'Font Family' },
  { id: 'column-font-weight', label: 'Font Weight', align: 'center' },
  { id: 'column-font-size-rem', label: 'Font Size' },
  { id: 'column-font-size-px', label: '(px)' },
  { id: 'column-line-height-unitless', label: 'Line Height' },
  { id: 'column-line-height-px', label: '(px)' },
  { id: 'column-description', label: 'Description' },
]

export const Fonts = () => {
  const theme = useTheme()

  const typographyTokenRows: Array<TypographyTokenRowProps> = React.useMemo(
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
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ mb: 10, borderColor: 'divider' }}
      >
        <Table sx={{ minWidth: 1040 }}>
          <TableHead>
            <StyledTableRow>
              {typographyTokenColumns.map(column => (
                <TableCell key={column.id} variant="head" align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {typographyTokenRows !== undefined ? (
              typographyTokenRows.map(font => {
                return (
                  <TypographyTokenRow
                    key={font.token}
                    token={font.token}
                    figmaStyle={font.figmaStyle}
                    fontSizePx={font.fontSizePx}
                    lineHeightPx={font.lineHeightPx}
                    styles={font.styles}
                    description={font.description}
                  />
                )
              })
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

function getFirstFontFamily(fontFamily: React.CSSProperties['fontFamily']) {
  return fontFamily?.split(',')[0]
}
