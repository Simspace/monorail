import type { Components, Theme } from '@mui/material'

export const MonorailBadgeOverrides: Components<Theme>['MuiBadge'] = {
  defaultProps: {
    max: 999,
    color: 'primary',
  },
  styleOverrides: {
    badge: ({ ownerState: { color = 'primary' }, theme }) => {
      return {
        backgroundColor: theme.palette[color].main,
        color: theme.palette.getContrastText(theme.palette[color].main),
        ...theme.typography.badgeLabel,
      }
    },
    standard: ({ theme }) => ({
      minWidth: theme.spacing(4),
      height: theme.spacing(4),
      padding: theme.spacing(0, 1),
    }),
  },
}
