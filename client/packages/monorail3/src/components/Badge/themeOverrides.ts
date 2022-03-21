import { Components, Theme } from '@mui/material'

export const MonorailBadgeOverrides: Components<Theme>['MuiBadge'] = {
  defaultProps: {},
  styleOverrides: {
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
