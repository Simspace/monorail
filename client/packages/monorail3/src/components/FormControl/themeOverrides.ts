import { Components, Theme } from '@mui/material'

export const MonorailFormControlOverrides: Components<Theme>['MuiFormControl'] =
  {
    defaultProps: {},
    styleOverrides: {
      marginNormal: {
        marginTop: 0,
        marginBottom: '26px', // 48px with helperText
      },
      marginDense: {
        marginTop: 0,
        marginBottom: '18px', // 40px with helperText
      },
    },
  }
