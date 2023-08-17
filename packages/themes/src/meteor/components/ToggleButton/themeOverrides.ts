import type { Components, Theme } from '@mui/material'

import {
  toggleButtonClasses,
  toggleButtonGroupClasses,
} from '@monorail/components'

export const MonorailToggleButtonOverrides: Components<Theme>['MuiToggleButton'] =
  {
    defaultProps: {
      color: 'primary',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(1.75),
        border: `1px solid ${theme.palette.primary.border.main}`,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        '&:hover': {
          border: `1px solid ${theme.palette.primary.border.dark}`,
          backgroundColor: theme.palette.action.hover,
        },
        [`&.Mui-focusVisible`]: {
          boxShadow: `0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
          border: `1px solid ${theme.palette.primary.border.dark}`,
          zIndex: 2,
        },
        [`&.${toggleButtonClasses.selected}`]: {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.primary.lowEmphasis.light,
          borderColor: theme.palette.primary.border.dark,
          '&:hover': {
            backgroundColor: theme.palette.primary.lowEmphasis.main,
          },
        },
        [`&.${toggleButtonClasses.disabled}`]: {
          backgroundColor: theme.palette.background.paper,
          borderColor: theme.palette.primary.border.main,
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
      color: 'primary',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        [`& .${toggleButtonGroupClasses.grouped}`]: {
          '&:not(:first-of-type)': {
            [`&.${toggleButtonGroupClasses.groupedHorizontal}`]: {},
            borderLeft: `1px solid ${theme.palette.primary.border.main}`,
          },
          '&.Mui-selected': {
            borderLeft: `1px solid ${theme.palette.primary.border.main}`,
          },
        },
      }),
      groupedHorizontal: ({ theme }) => ({
        '&:hover': {
          '&:not(:first-of-type)': {
            zIndex: 1,
            borderLeft: `1px solid ${theme.palette.primary.border.main}`,
            '&.Mui-selected': {
              marginLeft: -1,
              borderLeft: `1px solid ${theme.palette.primary.border.main}`,
            },
          },
        },
        [`&.Mui-focusVisible`]: {
          '&:not(:first-of-type)': {
            borderLeft: `1px solid ${theme.palette.primary.focusRing.inner}`,
            '&.Mui-selected': {
              marginLeft: -1,
              borderLeft: `1px solid ${theme.palette.primary.focusRing.inner}`,
            },
          },
        },
      }),
      groupedVertical: ({ theme }) => ({
        '&:hover': {
          '&:not(:first-of-type)': {
            zIndex: 1,
            borderTop: `1px solid ${theme.palette.primary.border.main}`,
            '&.Mui-selected': {
              marginTop: -1,
              borderTop: `1px solid ${theme.palette.primary.border.main}`,
            },
          },
        },
        [`&.Mui-focusVisible`]: {
          '&:not(:first-of-type)': {
            borderTop: `1px solid ${theme.palette.primary.focusRing.inner}`,
            '&.Mui-selected': {
              marginTop: -1,
              borderTop: `1px solid ${theme.palette.primary.focusRing.inner}`,
            },
          },
        },
      }),
    },
  }
