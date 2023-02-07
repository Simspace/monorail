import type { Components, Theme } from '@mui/material'
import { listItemAvatarClasses, listItemIconClasses } from '@mui/material'

export const MonorailListItemOverrides: Components<Theme>['MuiListItem'] = {
  defaultProps: {},
  styleOverrides: {
    padding: ({ theme }) => ({
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    }),
    dense: ({ theme }) => ({
      [`& > .${listItemAvatarClasses.root}`]: {
        minWidth: theme.spacing(8),
      },
      [`& .${listItemIconClasses.root}`]: {
        minWidth: theme.spacing(6),
      },
    }),
  },
}
