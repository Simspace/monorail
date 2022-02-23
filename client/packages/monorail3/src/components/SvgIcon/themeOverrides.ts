import { Components, Theme } from '@mui/material'

export const MonorailSvgIconOverrides: Components<Theme>['MuiSvgIcon'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({theme}) => ({
      color: theme.palette.grey[600]
    })
  },
}
