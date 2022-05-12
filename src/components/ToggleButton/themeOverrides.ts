import {
  Components,
  Theme,
  toggleButtonClasses,
  toggleButtonGroupClasses,
} from '@mui/material'

import { buttonTokens } from '../Button/themeOverrides'

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
        // Keep backgroundColor transparent, otherwise will hide vertical borders.
        border: `1px solid ${theme.palette.divider}`,
        color: theme.palette.text.secondary,

        '&:hover': {
          backgroundColor: theme.palette[color].shades[100],
          border: `1px solid ${theme.palette.default.shades[300]}`,
          zIndex: 1,
          [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
            // Theming this using MuiToggleButtonGroup wasn't successful.
            borderLeft: `1px solid ${theme.palette.default.shades[300]}`,
          },
        },
        [`&.Mui-selected`]: {
          // There is a styleOverrides.selected key but it doesn't seem to work.
          backgroundColor: theme.palette[color].shades[200],
          color: theme.palette.text.primary,
          borderColor: theme.palette.default.shades[300],
          '&:hover': {
            backgroundColor: theme.palette[color].shades[300],
          },
          [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
            borderLeft: `1px solid ${theme.palette.default.shades[300]}`,
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
          border: `1px solid ${theme.palette.divider}`,
        },

        ...(color !== 'default' && {
          color: theme.palette[color].shades[buttonTokens.outlined.text.idle],
          border: `1px solid ${theme.palette[color].main}`,
          '&:hover': {
            backgroundColor:
              theme.palette[color].shades[buttonTokens.outlined.bg.hover],
            [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
              borderLeft: `1px solid ${theme.palette[color].main}`,
            },
          },
          [`&.${toggleButtonClasses.disabled}`]: {
            color:
              theme.palette[color].shades[buttonTokens.outlined.text.disabled],
            borderColor: theme.palette[color].main,
          },

          [`&.Mui-selected`]: {
            backgroundColor: theme.palette[color].main,
            color: theme.palette.common.white,
            '&:hover': {
              backgroundColor:
                theme.palette[color].shades[buttonTokens.contained.bg.hover],
            },
          },
        }),
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
