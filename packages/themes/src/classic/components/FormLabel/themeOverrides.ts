import type { Components, Theme } from '@mui/material'

export const MonorailFormLabelOverrides: Components<Theme>['MuiFormLabel'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.inputLabel,
    }),
  },
}
