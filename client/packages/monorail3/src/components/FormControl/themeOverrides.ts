import { Components, Theme } from '@mui/material'

export const MonorailFormControlOverrides: Components<Theme>['MuiFormControl'] =
  {
    defaultProps: {},
    styleOverrides: {
      marginNormal: {
        marginTop: 0,
        marginBottom: '26px',
      },
      marginDense: {
        marginTop: 0,
        marginBottom: '18px',
      },
    },
  }
