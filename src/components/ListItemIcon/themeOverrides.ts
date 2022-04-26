import { checkboxClasses, Components, Theme } from '@mui/material'

export const MonorailListItemIconOverrides: Components<Theme>['MuiListItemIcon'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: 48,
        paddingLeft: 8,
        color: theme.palette.default.main,
      }),
        [`& > .${checkboxClasses.root}`]: {
          marginLeft: -8,
          marginRight: 8,
        },
      },
  }
