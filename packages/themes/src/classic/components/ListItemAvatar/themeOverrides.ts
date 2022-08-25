import type { Components, Theme } from '@mui/material'
import { listItemTextClasses } from '@mui/material'

export const MonorailListItemAvatarOverrides: Components<Theme>['MuiListItemAvatar'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        [`& + .${listItemTextClasses.multiline}`]: {
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
        },
      }),
    },
  }
