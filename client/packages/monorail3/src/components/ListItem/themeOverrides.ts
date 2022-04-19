import { Components, listItemAvatarClasses, Theme } from '@mui/material'

export const MonorailListItemOverrides: Components<Theme>['MuiListItem'] = {
  defaultProps: {},
  styleOverrides: {
    dense: {
      [`& > .${listItemAvatarClasses.root}`]: {
        paddingTop: 4,
        paddingBottom: 4,
      },
    },
  },
}
