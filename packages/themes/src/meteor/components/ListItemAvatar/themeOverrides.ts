import type { Components, Theme } from '@mui/material'

export const MonorailListItemAvatarOverrides: Components<Theme>['MuiListItemAvatar'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        width: theme.spacing(8),
        height: theme.spacing(8),
        paddingTop: theme.spacing(0),
        paddingBottom: theme.spacing(0),
      }),
    },
  }
