import { Components, darken, experimental_sx as sx, Theme } from '@mui/material'

export const MonorailButtonOverrides: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
    disableFocusRipple: true,
    fullWidth: false,
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      // console.log(theme)
      // console.log(ownerState)
      // console.log(theme.palette[color])
      // console.log(theme.palette[color].dark)
      return {
        // Button text styles are defined in theme.typography
        // fontSize: 14,
        borderRadius: '3px',
        '&.Mui-focusVisible': {
          boxShadow: `0 0 0 3px ${theme.palette[color].light}`,
          outline: `1px solid ${theme.palette[color].dark}`,
        },
        '&.Mui-disabled': {
          border: 'none',
          // I tried using the disabled prop, https://mui.com/api/button/#css
          // but it wouldn't override the default styles
          // This pattern seems to work better for .Mui-[state]
          ...(ownerState.variant === 'contained' && {
            backgroundColor: theme.palette[color].light,
            color: theme.palette.common.white,
          }),
          ...(ownerState.variant === 'outlined' && {
            outline: `1px solid ${theme.palette[color].light}`,
            color: theme.palette[color].light,
          }),
          ...(ownerState.variant === 'text' && {
            color: theme.palette[color].light,
          }),
        },
      }
    },
    // sizeSmall: { fontSize: '0.875rem', padding: '4px 8px', minWidth: 'auto' },
    // sizeMedium: { fontSize: '1rem', padding: '4px 12px' },
    // sizeLarge: { fontSize: '1rem', padding: '8px 16px' },
    // code below uses theme.spacing. should be the same measurements but produce different results.
    sizeSmall: sx({ py: 2, px: 4, minWidth: 'auto', fontSize: '0.875rem' }),
    sizeMedium: sx({ py: 2.5, px: 6 }),
    sizeLarge: sx({ py: 3.5, px: 6, fontSize: '1rem' }),
    iconSizeSmall: {
      fontSize: 16,
    },
    iconSizeMedium: {
      fontSize: 16,
    },
    iconSizeLarge: {
      fontSize: 16,
    },
    contained: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        color: theme.palette.common.white,
        '&:hover': {
          backgroundColor: theme.palette[color].dark,
        },
        '&:active': {
          backgroundColor: darken(
            theme.palette[color].dark,
            theme.palette.action.activatedOpacity,
          ),
        },
      }
    },
    outlined: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        backgroundColor: theme.palette.common.white,
        border: 'none',
        outline: `1px solid ${theme.palette[color].light}`,
        '&:hover': {
          border: 'none',
          outline: `1px solid ${theme.palette[color!].main}`,
          backgroundColor: theme.palette[color].hover,
        },
        '&:active': {
          outline: `1px solid ${theme.palette[color].dark}`,
          backgroundColor: theme.palette[color].active,
        },
      }
    },
    text: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        '&:hover': {
          backgroundColor: theme.palette[color].hover,
        },
        '&:active': {
          backgroundColor: theme.palette[color].active,
        },
      }
    },
    disabled: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      switch (ownerState.variant) {
        case 'contained':
          return {
            backgroundColor: theme.palette[color].main,
          }
        case 'outlined':
          return {
            color: theme.palette[color].light,
          }
        default:
          return
      }
    },
    startIcon: ({ ownerState }) => {
      switch (ownerState.size) {
        case 'large':
          return sx({ marginRight: 2, marginLeft: -1.5 })
        // return {
        //   marginRight: '4px',
        //   marginLeft: '-6px',
        // }
        case 'medium':
          return sx({ marginRight: 2, marginLeft: -3 })
        case 'small':
          return sx({ marginRight: 1, marginLeft: -1 })
        // return {
        //   marginRight: '4px',
        //   marginLeft: '-4px',
        // }
        default:
          return
      }
    },
    endIcon: ({ ownerState }) => {
      switch (ownerState.size) {
        case 'large':
          return {
            marginRight: '-6px',
            marginLeft: '4px',
          }
        case 'medium':
          return {
            marginRight: '-5px',
            marginLeft: '4px',
          }
        case 'small':
          return {
            marginRight: '-4px',
            marginLeft: '4px',
          }
        default:
          return
      }
    },
  },
}
