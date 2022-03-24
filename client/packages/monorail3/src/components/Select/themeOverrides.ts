import { Components, Theme } from '@mui/material'

export const MonorailSelectOverrides: Components<Theme>['MuiSelect'] = {
  defaultProps: {
    MenuProps: {
      sx: {
        marginTop: 2,
      },
    },
  },
  styleOverrides: {},
}
