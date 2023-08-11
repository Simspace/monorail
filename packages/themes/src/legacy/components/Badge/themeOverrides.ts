import type { Components, Theme } from '@mui/material'
import { svgIconClasses } from '@mui/material'

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
        [`& > .${svgIconClasses.root}`]: {
          fontSize: 'inherit',
          marginRight: theme.spacing(-0.75),
          marginLeft: theme.spacing(-0.75),
        },
      }
    },
    standard: ({ theme }) => ({
      minWidth: theme.spacing(4),
      height: theme.spacing(4),
      padding: theme.spacing(0, 1),
    }),
  },
}
