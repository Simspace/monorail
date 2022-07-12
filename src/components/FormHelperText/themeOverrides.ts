import { Components, Theme } from '@mui/material'

export const MonorailFormHelperTextOverrides: Components<Theme>['MuiFormHelperText'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.default.main,
        marginTop: theme.spacing(0.5), // 2px
        marginLeft: theme.spacing(3), // 12px
        marginRight: theme.spacing(3), // 12px
      }),
    },
  }
