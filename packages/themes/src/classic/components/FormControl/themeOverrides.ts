import type { Components, Theme } from '@mui/material'

export const MonorailFormControlOverrides: Components<Theme>['MuiFormControl'] =
  {
    defaultProps: {},
    styleOverrides: {
      marginNormal: ({ theme }) => ({
        marginTop: 0,
        marginBottom: theme.spacing(6.5), // 26px, 48px total height with helperText
      }),
      marginDense: ({ theme }) => ({
        marginTop: 0,
        marginBottom: theme.spacing(4.5), // 18px, 40px total height with helperText
      }),
    },
  }
