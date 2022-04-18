import { Components, Theme } from '@mui/material'

export const MonorailListItemOverrides: Components<Theme>['MuiListItem'] = {
  defaultProps: {},
  styleOverrides: {
    dense: {
      // To give dense ListItem a total height of 32px
      paddingTop: 1,
      paddingBottom: 1,
    },
  },
}
