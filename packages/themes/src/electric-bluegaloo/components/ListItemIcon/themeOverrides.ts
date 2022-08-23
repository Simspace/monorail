import { checkboxClasses, Components, Theme } from '@mui/material'

export const MonorailListItemIconOverrides: Components<Theme>['MuiListItemIcon'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: 48,
        paddingLeft: theme.spacing(2),
        color: theme.palette.default.main,
        [`& > .${checkboxClasses.root}`]: {
          marginLeft: theme.spacing(-2),
          marginRight: theme.spacing(2),
        },
      }),
    },
  }
