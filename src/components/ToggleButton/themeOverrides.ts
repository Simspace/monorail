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

const toggleButtonTokens = {
  // variant/color prop > sentiment > usage > prominence > interaction
  bg: {
    hover: 100,
  },
  text: 'secondary',
  border: {
    idle: 'divider',
    hover: 300,
  },
  selected: {
    bg: {
      idle: 200,
      hover: 300,
    },
    text: 'primary',
    border: 300,
  },
} as const

export const MonorailToggleButtonOverrides: Components<Theme>['MuiToggleButton'] =
  {
    defaultProps: {
      color: 'default',
    },
    styleOverrides: {
      root: ({ ownerState: { color = 'default' }, theme }) => ({
        // Keep backgroundColor transparent, otherwise will hide vertical borders.
        border: `1px solid ${theme.palette[toggleButtonTokens.border.idle]}`,
        color: theme.palette.text[toggleButtonTokens.text],

        '&:hover': {
          zIndex: 1,
          backgroundColor:
            theme.palette[color].shades[toggleButtonTokens.bg.hover],
          border: `1px solid ${
            theme.palette.default.shades[toggleButtonTokens.border.hover]
          }`,
          [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
            // Theming this using MuiToggleButtonGroup wasn't successful.
            borderLeft: `1px solid ${
              theme.palette.default.shades[toggleButtonTokens.border.hover]
            }`,
          },
        },
        [`&.Mui-selected`]: {
          // There is a styleOverrides.selected key but it doesn't seem to work.
          backgroundColor:
            theme.palette[color].shades[toggleButtonTokens.selected.bg.idle],
          color: theme.palette.text[toggleButtonTokens.selected.text],
          borderColor:
            theme.palette.default.shades[toggleButtonTokens.selected.border],
          '&:hover': {
            backgroundColor:
              theme.palette[color].shades[toggleButtonTokens.selected.bg.hover],
          },
          [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
            borderLeft: `1px solid ${
              theme.palette.default.shades[toggleButtonTokens.selected.border]
            }`,
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
          color: theme.palette.text.disabled,
          border: `1px solid ${theme.palette.divider}`,
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
