import { Components, Theme } from '@mui/material'

export const MonorailBadgeOverrides: Components<Theme>['MuiBadge'] = {
  defaultProps: {},
  styleOverrides: {
    standard: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(18),
    }),
  },
}
