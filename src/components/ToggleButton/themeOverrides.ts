import {
  Components,
  Theme,
  toggleButtonClasses,
  toggleButtonGroupClasses,
} from '@mui/material'

declare module '@mui/material/ToggleButton' {
  /**
   * Extend the ToggleButton color variant to replace `standard` with `default`.
   */
  interface ToggleButtonPropsColorOverrides {
    standard: false
    default: true
  }
}

declare module '@mui/material/ToggleButtonGroup' {
  /**
   * Extend the ToggleButtonGroup color variant to replace `standard` with `default`.
   */
  interface ToggleButtonGroupPropsColorOverrides {
    standard: false
    default: true
  }
}

export const MonorailToggleButtonOverrides: Components<Theme>['MuiToggleButton'] =
  {
    defaultProps: {
      color: 'default',
    },
    styleOverrides: {
      root: ({ ownerState: { color = 'primary' }, theme }) => ({
        '&:hover': {
          backgroundColor: theme.palette[color].shades[100],
        },
        [`&.Mui-selected`]: {
          backgroundColor: theme.palette[color].shades[200],
          color: theme.palette.text.primary,
          '&:not(:last-of-type)': {
            borderRightColor: theme.palette.default.shades[300],
          },
        },
        [`&.Mui-focusVisible`]: {
          boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
          borderColor: theme.palette[color].focusRing.inner,
          zIndex: 1,
          [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
            borderLeft: `1px solid ${theme.palette[color].focusRing.inner}`,
          },
        },
        [`&.${toggleButtonClasses.disabled}`]: {
          color: theme.palette.text.disabled,
        },
      }),
      selected: {
        // Does not work
      },
      // primary: {

      // }
    },
  }

export const MonorailToggleButtonGroupOverrides: Components<Theme>['MuiToggleButtonGroup'] =
  {
    defaultProps: {
      color: 'default',
    },
    styleOverrides: {},
  }
