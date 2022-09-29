import type { Components, Theme } from '@mui/material'

export const MonorailFormHelperTextOverrides: Components<Theme>['MuiFormHelperText'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.default.main,
        marginTop: theme.spacing(0.5),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      }),
    },
  }
