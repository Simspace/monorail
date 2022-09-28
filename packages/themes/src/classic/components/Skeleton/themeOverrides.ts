import type { Components, Theme } from '@mui/material'
import { alpha } from '@mui/material'

export const MonorailSkeletonOverrides: Components<Theme>['MuiSkeleton'] = {
  defaultProps: {
    animation: 'wave',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.default.lowEmphasis.dark,
      '&:after': {
        background: `linear-gradient(
          90deg,
          transparent,
          ${alpha(theme.palette.default.lowEmphasis.main, 0.2)},
          transparent
        )`,
      },
    }),
  },
}
