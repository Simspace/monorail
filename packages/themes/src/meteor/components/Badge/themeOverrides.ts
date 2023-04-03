import type { Components, Theme } from '@mui/material'

export const MonorailBadgeOverrides: Components<Theme>['MuiBadge'] = {
  defaultProps: {
    max: 999,
    color: 'primary',
  },
  styleOverrides: {
    badge: ({ ownerState: { color = 'primary' }, theme }) => {
      const colorAlias =
        color !== undefined && color === 'primary' ? 'secondary' : color
      return {
        backgroundColor: theme.palette[colorAlias].main,
        color: theme.palette.getContrastText(theme.palette[color].main),
        ...theme.typography.badgeLabel,
      }
    },
    standard: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(18),
    }),
  },
}
