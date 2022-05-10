import {
  Components,
  Theme,
  toggleButtonClasses,
  toggleButtonGroupClasses,
} from '@mui/material'

declare module '@mui/material/ToggleButton' {
  /**
   * Extend the ToggleButton color variant to disable `standard`.
   */
  interface ToggleButtonPropsColorOverrides {
    standard: false
    default: true
  }
}

declare module '@mui/material/ToggleButtonGroup' {
  /**
   * Extend the ToggleButton color variant to disable `standard`.
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
