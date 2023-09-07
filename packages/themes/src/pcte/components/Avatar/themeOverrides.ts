import type { Components, Theme } from '@mui/material'

import { avatarClasses, svgIconClasses } from '@monorail/components'

export const MonorailAvatarOverrides: Components<Theme>['MuiAvatar'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      ...theme.typography.avatarInitials,
      width: theme.spacing(8),
      height: theme.spacing(8),
      fontSize: theme.typography.pxToRem(10),
      [`& .${svgIconClasses.root}`]: {
        fontSize: theme.typography.pxToRem(24),
      },
      [`&.${avatarClasses.sizeSmall}`]: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        [`& .${svgIconClasses.root}`]: {
          fontSize: theme.typography.pxToRem(16),
        },
      },
    }),
    rounded: {
      borderRadius: 4,
    },
  },
}
