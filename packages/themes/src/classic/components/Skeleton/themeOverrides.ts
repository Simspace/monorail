import type { Components, Theme } from '@mui/material'

export const MonorailSkeletonOverrides: Components<Theme>['MuiSkeleton'] = {
  defaultProps: {
    animation: 'wave',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.default.light,
    }),
  },
}
