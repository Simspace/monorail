import type { Components, Theme } from '@mui/material'
import { checkboxClasses } from '@mui/material'

export const MonorailListItemIconOverrides: Components<Theme>['MuiListItemIcon'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: theme.spacing(7),
        color: theme.palette.default.main,
        [`& > .${checkboxClasses.root}`]: {
          margin: theme.spacing(-0.75),
          marginRight: theme.spacing(1),
        },
      }),
    },
  }
