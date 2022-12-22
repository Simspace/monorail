import React from 'react'
import { alpha, styled } from '@mui/material'

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

import type {
  TypographyTokenColumns,
  TypographyTokenRowProps,
} from './typography.types'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  ' > td, > th': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}))

const StyledTableCell = styled(TableCell)(() => ({
  wordBreak: 'break-word',
}))

const TypographyTokenRow = ({
  variant,
  fontWeightToken,
  figmaStyle,
  fontSizePx,
  lineHeightPx,
  description,
  styles,
  underlyingElement,
}: TypographyTokenRowProps) => {
  const tokenNameCell = variant !== undefined && (
    <TableCell component="th" scope="row" sx={{ width: '20%' }}>
      <Box
        width="max-content"
        sx={theme => ({ bgcolor: alpha(theme.palette.error.light, 0.18) })}
      >
        <Typography variant={variant}>{`.${variant}`}</Typography>
      </Box>
    </TableCell>
  )

  const fontWeightTokenCell = fontWeightToken !== undefined && (
    <TableCell component="th" scope="row" sx={{ width: '5%' }}>
      <Typography
        fontWeight={fontWeightToken}
      >{`.${fontWeightToken}`}</Typography>
    </TableCell>
  )
  const figmaStyleCell = figmaStyle !== undefined && (
    <StyledTableCell sx={{ width: '20%' }}>{figmaStyle}</StyledTableCell>
  )

  const fontFamilyCell = styles?.fontFamily !== undefined && (
    <TableCell sx={{ width: '10%' }}>{`${getFirstFontFamily(
      styles.fontFamily,
    )}`}</TableCell>
  )

  const fontWeightCell = styles?.fontWeight !== undefined && (
    <TableCell sx={{ width: '10%' }} align="center">
      {styles.fontWeight}
    </TableCell>
  )

  const fontSizeCell = styles?.fontSize !== undefined &&
    fontSizePx !== undefined && (
      <>
        <TableCell sx={{ width: '5%' }}>{`${styles.fontSize}`}</TableCell>
        <TableCell sx={{ width: '5%' }}>{`${fontSizePx}px`}</TableCell>
      </>
    )

  const lineHeightCell = styles?.lineHeight !== undefined &&
    lineHeightPx !== undefined && (
      <>
        <TableCell sx={{ width: '5%' }}>{`${styles.lineHeight}`}</TableCell>
        <TableCell sx={{ width: '5%' }}>{`${lineHeightPx}px`}</TableCell>
      </>
    )

  const underlyingElementCell = underlyingElement !== undefined && (
    <TableCell sx={{ width: '5%' }}>
      <Typography variant="monoBody1">{underlyingElement}</Typography>
    </TableCell>
  )

  const descriptionCell = description !== undefined && (
    <StyledTableCell sx={{ width: '30%' }}>
      <Typography sx={{ maxWidth: '80ch' }} variant="body2">
        {description ?? '---'}
      </Typography>
    </StyledTableCell>
  )

  return (
    <StyledTableRow>
      {tokenNameCell}
      {fontWeightTokenCell}
      {figmaStyleCell}
      {fontFamilyCell}
      {fontWeightCell}
      {fontSizeCell}
      {lineHeightCell}
      {underlyingElementCell}
      {descriptionCell}
    </StyledTableRow>
  )
}

export const TypographyTokenTable = ({
  columns,
  rows,
}: {
  columns: TypographyTokenColumns
  rows: Array<TypographyTokenRowProps>
}) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ mb: 10, borderColor: 'divider' }}
    >
      <Table sx={{ minWidth: 1040 }}>
        <TableHead>
          <StyledTableRow>
            {columns.map(
              column =>
                column !== undefined && (
                  <TableCell
                    key={column.id}
                    variant="head"
                    align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ),
            )}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows !== undefined ? (
            rows.map(font => {
              return (
                <TypographyTokenRow
                  key={font.variant ?? font.fontWeightToken}
                  {...font}
                />
              )
            })
          ) : (
            <></>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function getFirstFontFamily(fontFamily: React.CSSProperties['fontFamily']) {
  return fontFamily?.split(',')[0]
}
