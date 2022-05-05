import {
  alertClasses,
  chipClasses,
  Components,
  Slide,
  Theme,
} from '@mui/material'

export const MonorailSnackbarOverrides: Components<Theme>['MuiSnackbar'] = {
  defaultProps: {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    TransitionComponent: Slide,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${chipClasses.root}`]: {
        boxShadow: theme.shadows[6],
      },
      [`& .${alertClasses.root}`]: {
        boxShadow: theme.shadows[6],
        minWidth: 480,
      },
    }),
  },
}
