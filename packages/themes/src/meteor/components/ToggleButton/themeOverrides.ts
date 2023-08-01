import type { Components, Theme } from '@mui/material'
import { alpha, toggleButtonClasses } from '@mui/material'

export const MonorailToggleButtonOverrides: Components<Theme>['MuiToggleButton'] =
  {
    defaultProps: {
      color: 'default',
    },
    styleOverrides: {
      root: ({ ownerState: { color = 'default' }, theme }) => ({
        // Keep backgroundColor transparent, otherwise will hide vertical borders.
        padding: theme.spacing(1.75),
        border: `1px solid ${theme.palette.primary.border.main}`,
        color: theme.palette[color].lowEmphasis.contrastText,
        '&:hover': {
          border: `1px solid ${theme.palette.primary.border.dark}`,
          backgroundColor: alpha(
            theme.palette[color].main,
            theme.palette.action.hoverOpacity,
          ),
        },
        [`&.Mui-focusVisible`]: {
          boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
          border: `1px solid ${theme.palette.primary.border.dark}`,
          zIndex: 2,
        },
        [`&.${toggleButtonClasses.disabled}`]: {
          color: theme.palette.default.lowEmphasis.light,
          borderColor: theme.palette.default.border.main,
          opacity: theme.palette.action.disabledOpacity,
        },
      }),
      selected: ({ theme }) => ({
        [`&.${toggleButtonClasses.disabled}`]: {
          color: theme.palette.default.main,
          borderColor: theme.palette.default.lowEmphasis.light,
          opacity: theme.palette.action.disabledOpacity,
        },
      }),
      sizeSmall: ({ theme }) => ({
        padding: theme.spacing(1),
      }),
      sizeLarge: ({ theme }) => ({
        padding: theme.spacing(2.75),
      }),
    },
  }

export const MonorailToggleButtonGroupOverrides: Components<Theme>['MuiToggleButtonGroup'] =
  {
    defaultProps: {
      color: 'default',
    },
    styleOverrides: {
      groupedHorizontal: ({ ownerState: { color = 'default' }, theme }) => ({
        '&:hover': {
          '&:not(:first-of-type)': {
            zIndex: 1,
            borderLeft: `1px solid ${theme.palette[color].border.main}`,
            '&.Mui-selected': {
              marginLeft: -1,
              borderLeft: `1px solid ${theme.palette[color].border.main}`,
            },
          },
        },
        [`&.Mui-focusVisible`]: {
          '&:not(:first-of-type)': {
            borderLeft: `1px solid ${theme.palette[color].focusRing.inner}`,
            '&.Mui-selected': {
              marginLeft: -1,
              borderLeft: `1px solid ${theme.palette[color].focusRing.inner}`,
            },
          },
        },
      }),
      groupedVertical: ({ ownerState: { color = 'default' }, theme }) => ({
        '&:hover': {
          '&:not(:first-of-type)': {
            zIndex: 1,
            borderTop: `1px solid ${theme.palette[color].border.main}`,
            '&.Mui-selected': {
              marginTop: -1,
              borderTop: `1px solid ${theme.palette[color].border.main}`,
            },
          },
        },
        [`&.Mui-focusVisible`]: {
          '&:not(:first-of-type)': {
            borderTop: `1px solid ${theme.palette[color].focusRing.inner}`,
            '&.Mui-selected': {
              marginTop: -1,
              borderTop: `1px solid ${theme.palette[color].focusRing.inner}`,
            },
          },
        },
      }),
    },
  }
