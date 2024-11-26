import type { Components, Theme } from '@mui/material'

export const MonorailCheckboxOverrides: Components<Theme>['MuiCheckbox'] = {
  defaultProps: {
    disableRipple: true,
    color: 'secondary',
  },
  styleOverrides: {},
}
