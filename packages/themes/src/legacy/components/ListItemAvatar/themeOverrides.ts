import type { Components, Theme } from '@mui/material'
import { avatarClasses, listItemClasses } from '@mui/material'

export const MonorailListItemAvatarOverrides: Components<Theme>['MuiListItemAvatar'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: theme.spacing(10),
        [`& .${avatarClasses.root}.${avatarClasses.sizeSmall}`]: {
          minWidth: theme.spacing(8),
        },
        [`.${listItemClasses.dense} > &`]: {
          minWidth: theme.spacing(8),
        },
      }),
      alignItemsFlexStart: ({ theme }) => ({
        marginTop: theme.spacing(1.5),
      }),
    },
  }
