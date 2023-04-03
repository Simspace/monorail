import type { Components, Theme } from '@mui/material'

import { avatarGroupClasses } from '@monorail/components'

export const MonorailAvatarGroupOverrides: Components<Theme>['MuiAvatarGroup'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        [`& .${avatarGroupClasses.avatar}`]: {
          borderColor: theme.palette.common.white,
        },
      }),
    },
  }
