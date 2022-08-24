import { Components, Theme } from '@mui/material'

export const MonorailCardActionsOverrides: Components<Theme>['MuiCardActions'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        justifyContent: 'right',
        padding: theme.spacing(4),
      }),
    },
  }
