import type { Components, Theme } from '@mui/material'

export const MonorailAvatarOverrides: Components<Theme>['MuiAvatar'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.secondary.dark,
      fontSize: theme.typography.body2.fontSize,
      fontWeight: theme.typography.fontWeightBold,
    }),
    rounded: {
      borderRadius: 4,
    },
  },
}
