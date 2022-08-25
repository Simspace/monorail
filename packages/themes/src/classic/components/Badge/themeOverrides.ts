import type { Components, Theme } from '@mui/material'

export const MonorailBadgeOverrides: Components<Theme>['MuiBadge'] = {
  defaultProps: {
    max: 999,
  },
  styleOverrides: {
    badge: ({ ownerState: { color = 'primary' }, theme }) => {
      return {
        backgroundColor: theme.palette[color].main,
        color: theme.palette.getContrastText(theme.palette[color].main),
      }
    },
    standard: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(18),
    }),
    colorSecondary: ({ theme }) => ({
      backgroundColor: theme.palette.secondary.light,
    }),
    colorWarning: ({ theme }) => ({
      backgroundColor: theme.palette.warning.light,
    }),
  },
}
