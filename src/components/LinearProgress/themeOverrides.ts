import { Components, linearProgressClasses, Theme } from '@mui/material'

export const MonorailLinearProgressOverrides: Components<Theme>['MuiLinearProgress'] =
  {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: ({ ownerState: { size = 'small' }, theme }) => {
        switch (size) {
          case 'small':
            return {
              borderRadius: theme.typography.pxToRem(4),
              height: theme.typography.pxToRem(8),
            }
          case 'medium':
            return {
              borderRadius: theme.typography.pxToRem(8),
              height: theme.typography.pxToRem(16),
            }
        }
      },
      indeterminate: ({ ownerState: { color = 'primary' }, theme }) => {
        return {
          ...((color === 'primary' || color === 'default') && {
            border: `1px solid ${theme.palette[color].shades[300]}`,
          }),
          backgroundColor:
            color === 'primary' || color === 'default'
              ? theme.palette[color].shades[50]
              : theme.palette[color].shades[300],
        }
      },
      buffer: ({ ownerState: { color = 'primary' }, theme }) => {
        return {
          outline: `1px solid ${theme.palette[color].shades[300]}`,
          backgroundColor: theme.palette[color].shades[50],
          [`> .${linearProgressClasses.dashed}`]: {
            visibility: 'hidden',
          },
        }
      },
    },
  }
