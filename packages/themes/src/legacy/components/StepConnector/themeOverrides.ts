import type { Components, Theme } from '@mui/material'

export const MonorailStepConnectorOverrides: Components<Theme>['MuiStepConnector'] =
  {
    styleOverrides: {
      root: ({ theme }) => ({
        top: theme.typography.pxToRem(24),
      }),
      line: ({ theme }) => ({
        borderColor: theme.palette.divider,
      }),
      vertical: ({ theme }) => ({
        marginLeft: theme.spacing(2),
      }),
    },
  }
