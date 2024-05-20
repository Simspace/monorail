import type { Components, Theme } from '@mui/material'
import { alertClasses, chipClasses, Slide } from '@mui/material'

export const MonorailSnackbarOverrides: Components<Theme>['MuiSnackbar'] = {
  defaultProps: {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    TransitionComponent: Slide,
  },
  styleOverrides: {
    root: ({ ownerState: { anchorOrigin }, theme }) => ({
      [`& .${chipClasses.root}`]: {
        boxShadow: theme.shadows[4],
      },
      [`& .${alertClasses.root}`]: {
        boxShadow: theme.shadows[4],
        width: '100%',
        maxWidth: 480,
      },
      [theme.breakpoints.up('sm')]: {
        ...(anchorOrigin?.horizontal === 'right' && {
          left: 8,
        }),
      },
    }),
  },
}
