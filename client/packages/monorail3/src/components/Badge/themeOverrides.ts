import { Components, Theme } from '@mui/material'

export const MonorailBadgeOverrides: Components<Theme>['MuiBadge'] = {
  defaultProps: {
    max: 999,
  },
  styleOverrides: {
    badge: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        backgroundColor:
          color === 'default'
            ? theme.palette.default.main
            : theme.palette[color].main,
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
