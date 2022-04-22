import { Components, listItemTextClasses, Theme } from '@mui/material'

export const MonorailListItemAvatarOverrides: Components<Theme>['MuiListItemAvatar'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: {
        paddingTop: 4,
        paddingBottom: 4,
        [`& + .${listItemTextClasses.multiline}`]: {
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
    },
  }
