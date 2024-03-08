import type { Components, Theme } from '@mui/material'

import { linearProgressClasses, typographyClasses } from '@monorail/components'

export const MonorailLinearProgressOverrides: Components<Theme>['MuiLinearProgress'] =
  {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: ({ ownerState: { size = 'small', color = 'primary' }, theme }) => {
        return {
          backgroundColor: theme.palette[color].lowEmphasis.light,
          boxShadow: `inset 0 0 0 1px ${theme.palette[color].lowEmphasis.dark}`,
          borderRadius: theme.typography.pxToRem(4),
          height: theme.typography.pxToRem(8),
          ...(size === 'medium' && {
            borderRadius: theme.typography.pxToRem(8),
            height: theme.typography.pxToRem(16),
          }),
          [`&.${linearProgressClasses.showPercentage}`]: {
            width: '100%',
            // 4ch does not compute as expected in Gotham.
            [`& + .${typographyClasses.root}`]: { minWidth: '6ch' },
          },
        }
      },
      bar: ({ ownerState: { color = 'primary' }, theme }) => ({
        backgroundColor: theme.palette[color].main,
      }),
      determinate: ({ ownerState: { color = 'primary' }, theme }) => ({
        backgroundColor: theme.palette[color].lowEmphasis.dark,
      }),
      bar2Buffer: ({ ownerState: { color = 'primary' }, theme }) => ({
        backgroundColor: theme.palette[color].lowEmphasis.dark,
      }),
      buffer: {
        [`> .${linearProgressClasses.dashed}`]: {
          visibility: 'hidden',
        },
      },
    },
  }
