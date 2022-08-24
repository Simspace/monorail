import { Components, CSSInterpolation, Theme } from '@mui/material'

export const MonorailCircularProgressOverrides: Components<Theme>['MuiCircularProgress'] =
  {
    defaultProps: {
      size: 'small',
      variant: 'indeterminate',
    },
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const overrides: CSSInterpolation = {}
        if (ownerState.size === 'small') {
          overrides.width = theme.typography.pxToRem(24)
          overrides.height = theme.typography.pxToRem(24)
        }
        if (ownerState.size === 'medium') {
          overrides.width = theme.typography.pxToRem(40)
          overrides.height = theme.typography.pxToRem(40)
        }
        if (ownerState.size === 'large') {
          overrides.width = theme.typography.pxToRem(56)
          overrides.height = theme.typography.pxToRem(56)
        }
        return overrides
      },
      circle: ({ ownerState, theme }) => {
        const overrides: CSSInterpolation = { strokeLinecap: 'round' }
        if (ownerState.size === 'small') {
          overrides.strokeWidth = theme.typography.pxToRem(4)
        }
        if (ownerState.size === 'medium') {
          overrides.strokeWidth = theme.typography.pxToRem(4)
        }
        if (ownerState.size === 'large') {
          overrides.strokeWidth = theme.typography.pxToRem(6)
          overrides.r = 18
        }
        return overrides
      },
    },
  }
