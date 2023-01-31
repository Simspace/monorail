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
      width: theme.spacing(10),
      height: theme.spacing(10),
    }),
    rounded: {
      borderRadius: 4,
    },
  },
}
