import type { Components, Theme } from '@mui/material'

export const MonorailRatingOverrides: Components<Theme>['MuiRating'] = {
  defaultProps: {},
  styleOverrides: {
    iconEmpty: ({ ownerState: { readOnly = false }, theme }) => ({
      color: readOnly ? theme.palette.rating : theme.palette.default.main,
    }),
    iconFilled: ({ theme }) => ({
      color: theme.palette.rating,
    }),
    sizeSmall: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(24),
    }),
    sizeMedium: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(32),
    }),
    sizeLarge: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(40),
    }),
  },
}
