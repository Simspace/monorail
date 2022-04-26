import { Components, Theme } from '@mui/material'

export const MonorailCardActionsOverrides: Components<Theme>['MuiCardActions'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: {
        justifyContent: 'right',
        padding: '1rem',
      },
    },
  }
