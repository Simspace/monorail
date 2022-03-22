import { Components, Theme } from '@mui/material'

export const MonorailFormHelperTextOverrides: Components<Theme>['MuiFormHelperText'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: {
        marginTop: '2px',
        marginLeft: ' 12px',
        marginRight: ' 12px',
      },
    },
  }
