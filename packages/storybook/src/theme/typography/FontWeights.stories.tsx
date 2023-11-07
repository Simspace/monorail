import React from 'react'

import { Box, Typography } from '@monorail/components'
import { useTheme } from '@monorail/utils'

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
  const theme = useTheme()
  const rows: Array<TypographyTokenRowProps> = React.useMemo(
    () => [
      {
        fontWeightToken: 'fontWeightExtraLight',
        styles: { fontWeight: theme.typography.fontWeightExtraLight ?? 'N/A' },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightExtraLight" />`}</Typography>
        ),
      },
      {
        fontWeightToken: 'fontWeightLight',
        styles: { fontWeight: theme.typography.fontWeightLight },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightLight" />`}</Typography>
        ),
      },
      {
        fontWeightToken: 'fontWeightRegular',
        styles: { fontWeight: theme.typography.fontWeightRegular },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightRegular" />`}</Typography>
        ),
      },
      {
        fontWeightToken: 'fontWeightMedium',
        styles: { fontWeight: theme.typography.fontWeightMedium },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightMedium" />`}</Typography>
        ),
      },
      {
        fontWeightToken: 'fontWeightSemiBold',
        styles: { fontWeight: theme.typography.fontWeightSemiBold ?? 'N/A' },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightSemiBold" />`}</Typography>
        ),
      },
      {
        fontWeightToken: 'fontWeightBold',
        styles: { fontWeight: theme.typography.fontWeightBold },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightBold" />`}</Typography>
        ),
      },
      {
        fontWeightToken: 'fontWeightBlack',
        styles: { fontWeight: theme.typography.fontWeightBlack ?? 'N/A' },
        description: (
          <Typography variant="monoBody1">{`<Typography fontWeight="fontWeightBlack" />`}</Typography>
        ),
      },
    ],
    [theme.typography],
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
