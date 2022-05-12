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

const toggleButtonTokens = {
  // variant/color prop > sentiment > usage > prominence > interaction
  default: {
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
  },
  colored: {
    bg: {
      hover: buttonTokens.outlined.bg.hover,
    },
    text: buttonTokens.outlined.text.idle,
    border: 'main',
    selected: {
      bg: {
        idle: 'main',
        hover: buttonTokens.contained.bg.hover,
      },
    },
    disabled: {
      text: buttonTokens.outlined.text.disabled,
      border: 'main',
    },
  },
} as const

export const MonorailToggleButtonOverrides: Components<Theme>['MuiToggleButton'] =
  {
    defaultProps: {
      color: 'default',
    },
    styleOverrides: {
      root: ({ ownerState: { color = 'primary' }, theme }) => ({
        // Keep backgroundColor transparent, otherwise will hide vertical borders.
        border: `1px solid ${
          theme.palette[toggleButtonTokens.default.border.idle]
        }`,
        color: theme.palette.text[toggleButtonTokens.default.text],

        '&:hover': {
          zIndex: 1,
          backgroundColor:
            theme.palette[color].shades[toggleButtonTokens.default.bg.hover],
          border: `1px solid ${
            theme.palette.default.shades[
              toggleButtonTokens.default.border.hover
            ]
          }`,
          [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
            // Theming this using MuiToggleButtonGroup wasn't successful.
            borderLeft: `1px solid ${
              theme.palette.default.shades[
                toggleButtonTokens.default.border.hover
              ]
            }`,
          },
        },
        [`&.Mui-selected`]: {
          // There is a styleOverrides.selected key but it doesn't seem to work.
          backgroundColor:
            theme.palette[color].shades[
              toggleButtonTokens.default.selected.bg.idle
            ],
          color: theme.palette.text[toggleButtonTokens.default.selected.text],
          borderColor:
            theme.palette.default.shades[
              toggleButtonTokens.default.selected.border
            ],
          '&:hover': {
            backgroundColor:
              theme.palette[color].shades[
                toggleButtonTokens.default.selected.bg.hover
              ],
          },
          [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
            borderLeft: `1px solid ${
              theme.palette.default.shades[
                toggleButtonTokens.default.selected.border
              ]
            }`,
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
          color: theme.palette[color].shades[toggleButtonTokens.colored.text],
          border: `1px solid ${
            theme.palette[color][toggleButtonTokens.colored.border]
          }`,
          '&:hover': {
            backgroundColor:
              theme.palette[color].shades[toggleButtonTokens.colored.bg.hover],
            [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
              borderLeft: `1px solid ${
                theme.palette[color][toggleButtonTokens.colored.border]
              }`,
            },
          },
          [`&.${toggleButtonClasses.disabled}`]: {
            color:
              theme.palette[color].shades[
                toggleButtonTokens.colored.disabled.text
              ],
            borderColor:
              theme.palette[color][toggleButtonTokens.colored.border],
          },
          [`&.Mui-selected`]: {
            backgroundColor:
              theme.palette[color][toggleButtonTokens.colored.selected.bg.idle],
            color: theme.palette.common.white,
            '&:hover': {
              backgroundColor:
                theme.palette[color].shades[
                  toggleButtonTokens.colored.selected.bg.hover
                ],
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
