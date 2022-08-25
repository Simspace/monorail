import type { Components, Theme } from '@mui/material'

export const MonorailStepConnectorOverrides: Components<Theme>['MuiStepConnector'] =
  {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          top: theme.typography.pxToRem(32),
        }
      },
    },
  }
