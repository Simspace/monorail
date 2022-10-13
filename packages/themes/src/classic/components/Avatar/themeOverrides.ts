import type { Components, Theme } from '@mui/material'

export const MonorailAvatarOverrides: Components<Theme>['MuiAvatar'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor:
        theme.palette.mode === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.secondary.dark,
      color: theme.palette.secondary.contrastText,
      ...theme.typography.avatarInitials,
    }),
    rounded: {
      borderRadius: 4,
    },
  },
}
