import { Components, Theme } from '@mui/material'

export const MonorailInputLabelOverrides: Components<Theme>['MuiInputLabel'] = {
  defaultProps: {
    disableAnimation: true,
    shrink: false,
  },
  styleOverrides: {},
}
