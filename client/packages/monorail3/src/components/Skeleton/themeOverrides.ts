import { Components, Theme } from '@mui/material'

export const MonorailSkeletonOverrides: Components<Theme>['MuiSkeleton'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.grey['300'],
    }),
  },
}
