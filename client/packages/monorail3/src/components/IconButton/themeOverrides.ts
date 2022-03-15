import { Components, Theme } from '@mui/material'

export const MonorailIconButtonOverrides: Components<Theme>['MuiIconButton'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        '&.Mui-focusVisible': {
          boxShadow: `0 0 0 3px ${
            ownerState.color === 'default'
              ? theme.palette.primary.light
              : theme.palette[color].light
          }`,
          outline: `1px solid ${
            ownerState.color === 'default'
              ? theme.palette.primary.dark
              : theme.palette[color].dark
          }`,
        },
        '&.Mui-disabled': {
          color: theme.palette[color].light
        },
        '&:hover': {
          backgroundColor: theme.palette[color].hover,
        },
        '&:active': {
          backgroundColor: theme.palette[color].active,
        }
      }
    },
    sizeSmall: {
      height: 32,
      width: 32,
    },
    sizeMedium: {
      height: 40,
      width: 40,
    },
    sizeLarge: {
      height: 56,
      width: 56,
    },
  },
}
