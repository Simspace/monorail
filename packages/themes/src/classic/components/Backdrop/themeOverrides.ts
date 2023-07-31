import type { Components, Theme } from '@mui/material'

export const MonorailBackdropOverrides: Components<Theme>['MuiBackdrop'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.backdropOverlay,
    }),
    invisible: {
      backgroundColor: 'transparent',
    }
  },
}
