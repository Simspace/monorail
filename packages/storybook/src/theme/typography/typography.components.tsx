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
  token,
  figmaStyle,
  fontSizePx,
  lineHeightPx,
  description,
  styles,
  underlyingElement,
}: TypographyTokenRowProps) => {
  return (
    <StyledTableRow>
      <TableCell component="th" scope="row" sx={{ width: '20%' }}>
        <Box
          width="max-content"
          sx={theme => ({ bgcolor: alpha(theme.palette.error.light, 0.18) })}
        >
          <Typography variant={token}>{`.${token}`}</Typography>
        </Box>
      </TableCell>
      <StyledTableCell sx={{ width: '20%' }}>{figmaStyle}</StyledTableCell>
      <TableCell sx={{ width: '10%' }}>{`${getFirstFontFamily(
        styles.fontFamily,
      )}`}</TableCell>
      <TableCell sx={{ width: '10%' }} align="center">
        {styles.fontWeight}
      </TableCell>
      <TableCell sx={{ width: '5%' }}>{`${styles.fontSize}`}</TableCell>
      <TableCell sx={{ width: '5%' }}>{`${fontSizePx}px`}</TableCell>
      <TableCell sx={{ width: '5%' }}>{`${styles.lineHeight}`}</TableCell>
      <TableCell sx={{ width: '5%' }}>{`${lineHeightPx}px`}</TableCell>
      <TableCell sx={{ width: '5%' }}>
        <Typography variant="monoBody1">{underlyingElement}</Typography>
      </TableCell>
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
  { id: 'column-underlying-element', label: 'Underlying HTML Element' },
  { id: 'column-description', label: 'Description' },
]

export const TypographyTokenTable = ({
  rows,
}: {
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
            {typographyTokenColumns.map(column => (
              <TableCell key={column.id} variant="head" align={column.align}>
                {column.label}
              </TableCell>
            ))}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows !== undefined ? (
            rows.map(font => {
              return (
                <TypographyTokenRow
                  key={font.token}
                  token={font.token}
                  figmaStyle={font.figmaStyle}
                  fontSizePx={font.fontSizePx}
                  lineHeightPx={font.lineHeightPx}
                  styles={font.styles}
                  description={font.description}
                  underlyingElement={font.underlyingElement}
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
