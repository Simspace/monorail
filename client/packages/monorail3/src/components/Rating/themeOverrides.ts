import { Components, Theme } from '@mui/material'

export const MonorailRatingOverrides: Components<Theme>['MuiRating'] = {
  defaultProps: {},
  styleOverrides: {
    iconEmpty: ({ ownerState, theme }) => ({
      color: ownerState.readOnly
        ? theme.palette.rating
        : theme.palette.grey['600'],
    }),
    iconFilled: ({ theme }) => ({
      color: theme.palette.rating,
    }),
  },
}
