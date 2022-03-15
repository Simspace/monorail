import { Components, darken, Theme } from '@mui/material'

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
          border: `1px solid ${
            ownerState.color === 'default'
              ? theme.palette.primary.dark
              : theme.palette[color].dark
          }`,
        },
        '&.Mui-disabled': {
          color: theme.palette[color].light
        },
        ...(ownerState.shape === 'rounded' && {
          borderRadius: 3
        }),
        ...(ownerState.variant === 'chromeless' && {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: theme.palette[color].hover,
          },
          '&:active': {
            backgroundColor: theme.palette[color].active
          },
        }),
        ...(ownerState.variant === 'contained' && {
          backgroundColor: theme.palette[color].main,
          color: theme.palette.getContrastText(theme.palette[color].main),
          '&:hover': {
            backgroundColor: theme.palette[color].dark,
          },
          '&:active': {
            backgroundColor: darken(
              theme.palette[color].dark,
              theme.palette.action.activatedOpacity,
            ),
          },
        }),
        ...(ownerState.variant === 'outlined' && {
          border: `1px solid ${theme.palette[color].main}`,
          backgroundColor: theme.palette.background.paper,
          '&:hover': {
            backgroundColor: theme.palette[color].hover,
          },
          '&:active': {
            backgroundColor: theme.palette[color].active
          },
        })
      }
    },
    sizeSmall: {
      height: 32,
      width: 32,
      fontSize: '1.25rem' // 20px
    },
    sizeMedium: {
      height: 40,
      width: 40,
      fontSize: '1.5rem' // 24px
    },
    sizeLarge: {
      height: 56,
      width: 56,
      fontSize: '2rem' // 32px
    },
  },
}
