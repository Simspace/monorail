import React from 'react'

import { Box, Typography } from '@monorail/components'
import { FontWeight } from '@monorail/themes/common/FontWeight'

import { TypographyTokenTable } from './typography.components'
import type {
  TypographyTokenColumns,
  TypographyTokenRowProps,
} from './typography.types'

export default {
  title: 'Theme/Typography/FontWeights',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
  },
}

const columns: TypographyTokenColumns = [
  { id: 'column-fontWeightToken', label: 'Token Name' },
  { id: 'column-fontWeight', label: 'Font Weight', align: 'center' },
  { id: 'column-usage', label: 'Usage' },
]

export const FontWeights = () => {
  const rows: Array<TypographyTokenRowProps> = React.useMemo(
    () => [
      {
        fontWeightToken: 'fontWeightExtraLight',
        styles: { fontWeight: FontWeight.ExtraLight },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightExtraLight" />`}</Typography>
        ),
      },
      {
        fontWeightToken: 'fontWeightLight',
        styles: { fontWeight: FontWeight.Light },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightLight" />`}</Typography>
        ),
      },
      {
        fontWeightToken: 'fontWeightRegular',
        styles: { fontWeight: FontWeight.Book },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightRegular" />`}</Typography>
        ),
      },
      {
        fontWeightToken: 'fontWeightMedium',
        styles: { fontWeight: FontWeight.Medium },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightMedium" />`}</Typography>
        ),
      },
      {
        fontWeightToken: 'fontWeightSemiBold',
        styles: { fontWeight: FontWeight.SemiBold },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightSemiBold" />`}</Typography>
        ),
      },
      {
        fontWeightToken: 'fontWeightBold',
        styles: { fontWeight: FontWeight.Bold },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightBold" />`}</Typography>
        ),
      },
      {
        fontWeightToken: 'fontWeightBlack',
        styles: { fontWeight: FontWeight.Black },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightBlack" />`}</Typography>
        ),
      },
    ],
    [],
  )

  return (
    <Box p={4}>
      <Box mb={4}>
        <Typography variant="h2" gutterBottom>
          Font Weight Tokens
        </Typography>
        <Typography gutterBottom>{`theme.typography`}</Typography>
      </Box>
      <TypographyTokenTable columns={columns} rows={rows} />
    </Box>
  )
}
