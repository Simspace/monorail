import React from 'react'
import type { Color } from '@mui/material'
import { styled, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { getContrastRatio } from '@mui/system'

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@monorail/components'

import type { ColorTokenRowProps, ColorTokenTableProps } from './palette.types'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  ' > td, > th': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}))

export const ColorTokenRow = ({
  token,
  mapping,
  colorValue,
  figmaStyle,
  description,
  opacity,
}: ColorTokenRowProps) => {
  return (
    <StyledTableRow>
      <TableCell component="th" scope="row" sx={{ width: '20%' }}>
        {token}
      </TableCell>
      <TableCell sx={{ width: '7%' }}>
        <Box
          sx={theme => ({
            width: 40,
            height: 40,
            bgcolor: colorValue,
            border:
              colorValue !== undefined &&
              getContrastRatio(colorValue, theme.palette.background.paper) <=
                theme.palette.contrastThreshold
                ? `1px solid ${theme.palette.divider}`
                : 'none',
          })}
        ></Box>
      </TableCell>
      <TableCell sx={{ width: '10%' }}>{mapping ?? '---'}</TableCell>
      <TableCell>{opacity ?? colorValue}</TableCell>
      <TableCell sx={{ width: '20%' }}>{figmaStyle}</TableCell>
      <TableCell sx={{ width: '30%' }}>
        <Typography sx={{ maxWidth: '80ch' }} variant="body2">
          {description ?? '---'}
        </Typography>
      </TableCell>
    </StyledTableRow>
  )
}

export const ColorTokenTable = ({
  colorMetadata,
  colorMode,
  rawColorObj,
}: ColorTokenTableProps) => {
  const getObjectKey = (value: string) => {
    if (rawColorObj !== undefined) {
      return Object.keys(rawColorObj).find(key => rawColorObj[key] === value)
    }
  }

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ mb: 10, borderColor: 'divider' }}
    >
      <Table>
        <TableHead>
          <StyledTableRow>
            <TableCell variant="head">Token</TableCell>
            <TableCell variant="head">Color</TableCell>
            <TableCell variant="head">Mapping</TableCell>
            <TableCell variant="head">Value</TableCell>
            <TableCell variant="head">Figma Style</TableCell>
            <TableCell variant="head">Description</TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {colorMetadata !== undefined ? (
            colorMetadata.map(color => {
              const figmaStyle =
                color.figmaStyle !== undefined
                  ? `${colorMode}/${color.figmaStyle}`
                  : '---'

              const colorValue =
                color.colorValue !== undefined ? color.colorValue : ''

              return (
                <ColorTokenRow
                  key={color.token}
                  token={color.token}
                  mapping={getObjectKey(colorValue)}
                  opacity={color.opacity}
                  colorValue={color.colorValue}
                  figmaStyle={figmaStyle}
                  description={color.description}
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

export const SingleColorBox = ({
  color,
  label,
  minWidth,
}: {
  color: string
  label: string
  minWidth: string
}) => {
  return color ? (
    <Box sx={{ marginBottom: 2 }}>
      <Typography sx={{ minWidth, marginRight: 2 }}>{label}</Typography>
      <Box
        sx={{
          height: '40px',
          backgroundColor: color,
          border: '1px solid black',
        }}
      />
      <Box sx={{ fontSize: '60%', fontWeight: 100 }}>{color || '???'}</Box>
    </Box>
  ) : (
    <></>
  )
}

export const ColorShadesBox = ({
  label,
  color,
}: {
  label: string
  color: Color
}) => {
  const minWidth = '50px'
  return (
    <Box sx={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
      <Box component="h3" sx={{ flex: 1 }}>
        {label}
      </Box>
      <SingleColorBox label="50" color={color[50]} minWidth={minWidth} />
      <SingleColorBox label="100" color={color[100]} minWidth={minWidth} />
      <SingleColorBox label="200" color={color[200]} minWidth={minWidth} />
      <SingleColorBox label="300" color={color[300]} minWidth={minWidth} />
      <SingleColorBox label="400" color={color[400]} minWidth={minWidth} />
      <SingleColorBox label="500" color={color[500]} minWidth={minWidth} />
      <SingleColorBox label="600" color={color[600]} minWidth={minWidth} />
      <SingleColorBox label="700" color={color[700]} minWidth={minWidth} />
      <SingleColorBox label="800" color={color[800]} minWidth={minWidth} />
      <SingleColorBox label="900" color={color[900]} minWidth={minWidth} />
      <SingleColorBox label="A100" color={color.A100} minWidth={minWidth} />
      <SingleColorBox label="A200" color={color.A200} minWidth={minWidth} />
      <SingleColorBox label="A400" color={color.A400} minWidth={minWidth} />
      <SingleColorBox label="A700" color={color.A700} minWidth={minWidth} />
    </Box>
  )
}
