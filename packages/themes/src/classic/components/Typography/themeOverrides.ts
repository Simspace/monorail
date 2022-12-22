import type { Components, Theme } from '@mui/material'

export const MonorailTypographyOverrides: Components<Theme>['MuiTypography'] = {
  defaultProps: {
    variantMapping: {
      monoBody1: 'code',
      monoBody2: 'code',
    },
  },
  styleOverrides: {},
}
