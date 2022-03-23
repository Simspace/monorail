import { Components, Theme } from '@mui/material'

export const MonorailRatingOverrides: Components<Theme>['MuiRating'] = {
  defaultProps: {},
  styleOverrides: {
    iconEmpty: ({ theme }) => ({
      color: theme.palette.grey['600'],
    }),
    iconFilled: ({ ownerState, theme }) => ({
      color: ownerState.readOnly
        ? theme.palette.grey['600']
        : theme.palette.rating,
    }),
  },
}
