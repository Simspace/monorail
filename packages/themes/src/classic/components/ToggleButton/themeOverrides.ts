import type { Components, Theme } from '@mui/material'
import {
  alpha,
  toggleButtonClasses,
  toggleButtonGroupClasses,
} from '@mui/material'

export const MonorailToggleButtonOverrides: Components<Theme>['MuiToggleButton'] =
  {
    defaultProps: {
      color: 'default',
    },
    styleOverrides: {
      root: ({ ownerState: { color = 'default' }, theme }) => ({
        // Keep backgroundColor transparent, otherwise will hide vertical borders.
        border: `1px solid ${theme.palette[color].border.light}`,
        color:
          color === 'default'
            ? theme.palette.text.secondary
            : theme.palette[color].lowEmphasis.contrastText,

        '&:hover': {
          zIndex: 1,
          border: `1px solid ${theme.palette[color].border.main}`,
          backgroundColor: alpha(
            theme.palette[color].main,
            theme.palette.action.hoverOpacity,
          ),
          [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
            // Theming this using MuiToggleButtonGroup wasn't successful.
            borderLeft: `1px solid ${theme.palette[color].border.main}`,
          },
        },
        [`&.Mui-selected`]: {
          // There is a styleOverrides.selected key but it doesn't seem to work.
          color:
            color === 'default'
              ? theme.palette.text.primary
              : theme.palette[color].dark,
          borderColor: theme.palette[color].border.main,
          backgroundColor: alpha(
            theme.palette[color].main,
            theme.palette.action.selectedOpacity,
          ),
          '&:hover': {
            backgroundColor: alpha(
              theme.palette[color].main,
              theme.palette.action.selectedOpacity +
                theme.palette.action.hoverOpacity,
            ),
          },
          [`&.${toggleButtonGroupClasses.grouped}:not(:first-of-type)`]: {
            borderLeft: `1px solid ${theme.palette[color].border.main}`,
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
          color:
            color === 'default'
              ? theme.palette.text.secondary
              : theme.palette[color].lowEmphasis.contrastText,
          border: `1px solid ${theme.palette[color].border.light}`,
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
