import { Components, Theme } from '@mui/material'

export const MonorailButtonBaseOverrides: Components<Theme>['MuiButtonBase'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {},
}
