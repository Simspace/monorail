import type { Components, Theme } from '@mui/material'

import { avatarClasses } from '@monorail/components'

export const MonorailAvatarOverrides: Components<Theme>['MuiAvatar'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      ...theme.typography.avatarInitials,
      [`&.${avatarClasses.sizeSmall}`]: {
        width: theme.spacing(8),
        height: theme.spacing(8),
      },
    }),
    rounded: {
      borderRadius: 4,
    },
  },
}
