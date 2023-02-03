import type { Components, Theme } from '@mui/material'
import { checkboxClasses } from '@mui/material'

export const MonorailListItemIconOverrides: Components<Theme>['MuiListItemIcon'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: 36,
        paddingLeft: theme.spacing(1),
        // marginLeft: theme.spacing(2),
        color: theme.palette.default.main,
        [`& > .${checkboxClasses.root}`]: {
          marginLeft: theme.spacing(-1),
          marginRight: theme.spacing(1),
        },
      }),
    },
  }
