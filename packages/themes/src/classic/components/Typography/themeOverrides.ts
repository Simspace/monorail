import type { Components, Theme } from '@mui/material'

import type { TypographyProps } from '@monorail/components'

export const MonorailTypographyOverrides: Components<Theme>['MuiTypography'] = {
  defaultProps: {
    variantMapping: {
      monoBody1: 'code',
      monoBody2: 'code',
    },
  },
  styleOverrides: {
    root: ({ ownerState: ownerState_ }) => {
      const ownerState = ownerState_ as TypographyProps
      if (ownerState.lineClamp !== undefined) {
        if (ownerState.lineClamp === 1) {
          return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }
        } else {
          return {
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitLineClamp: ownerState.lineClamp,
            WebkitBoxOrient: 'vertical',
          }
        }
      }
    },
  },
}
