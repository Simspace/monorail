import type { Components, Theme } from '@mui/material'
import { toggleButtonClasses, toggleButtonGroupClasses } from '@mui/material'

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
      root: ({ ownerState: { color = 'default' }, theme }) => ({
        // Keep backgroundColor transparent, otherwise will hide vertical borders.
        border: `1px solid ${theme.palette.default.border.light}`,
        color: theme.palette.text.secondary,

        '&:hover': {
          zIndex: 1,
          border: `1px solid ${theme.palette.default.border.main}`,
          [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
            // Theming this using MuiToggleButtonGroup wasn't successful.
            borderLeft: `1px solid ${theme.palette.default.border.main}`,
          },
        },
        [`&.Mui-selected`]: {
          // There is a styleOverrides.selected key but it doesn't seem to work.
          color: theme.palette.text.primary,
          borderColor: theme.palette.default.border.main,
          [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
            borderLeft: `1px solid ${theme.palette.default.border.main}`,
          },
        },
        [`&.Mui-focusVisible`]: {
          boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
          border: `1px solid ${theme.palette[color].focusRing.inner}`,
          zIndex: 1,
          [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
            borderLeft: `1px solid ${theme.palette[color].focusRing.inner}`,
          },
        },
        [`&.${toggleButtonClasses.disabled}`]: {
          color: theme.palette.text.secondary,
          border: `1px solid ${theme.palette.default.border.light}`,
        },
      }),
    },
  }

export const MonorailToggleButtonGroupOverrides: Components<Theme>['MuiToggleButtonGroup'] =
  {
    defaultProps: {
      color: 'default',
    },
    styleOverrides: {},
  }
