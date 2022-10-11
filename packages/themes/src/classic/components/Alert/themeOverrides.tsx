import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import WarningIcon from '@mui/icons-material/Warning'
import type { Components, Theme } from '@mui/material'
import { alertClasses, alpha, iconButtonClasses } from '@mui/material'

export const MonorailAlertOverrides: Components<Theme>['MuiAlert'] = {
  defaultProps: {
    variant: 'outlined',
    iconMapping: {
      success: <CheckCircleIcon fontSize="inherit" />,
      info: <InfoIcon fontSize="inherit" />,
      warning: <WarningIcon fontSize="inherit" />,
      error: <ErrorIcon fontSize="inherit" />,
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    }),
    icon: {
      opacity: 1,
    },
    message: {},
    action: {
      alignItems: 'center',
      marginRight: 0,
      paddingTop: 0,
    },
    standard: ({ ownerState, theme }) => {
      const severity = ownerState?.severity ?? 'success'
      return {
        color: theme.palette.getContrastText(
          theme.palette[severity].lowEmphasis.light,
        ),
        backgroundColor: theme.palette[severity].lowEmphasis.light,
        [`& .${alertClasses.icon}`]: {
          color: theme.palette[severity].lowEmphasis.contrastText,
        },
        [`& .${iconButtonClasses.root}`]: {
          color: theme.palette.default.main,
        },
      }
    },
    outlined: ({ ownerState, theme }) => {
      const severity = ownerState?.severity ?? 'success'
      return {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.getContrastText(
          theme.palette[severity].lowEmphasis.light,
        ),
        borderColor: theme.palette[severity].border.light,
        [`& .${alertClasses.icon}`]: {
          color: theme.palette[severity].lowEmphasis.contrastText,
        },
        [`& .${iconButtonClasses.root}`]: {
          color: theme.palette.default.main,
        },
      }
    },
    filled: ({ ownerState, theme }) => {
      const severity = ownerState?.severity ?? 'success'
      return {
        color: theme.palette.getContrastText(theme.palette[severity].main),
        backgroundColor: theme.palette[severity].main,
        [`& .${alertClasses.icon}`]: {
          color: theme.palette.getContrastText(theme.palette[severity].main),
        },
        [`& .${iconButtonClasses.root}`]: {
          '&:hover': {
            backgroundColor: alpha(
              theme.palette.common.black,
              theme.palette.action.hoverOpacity,
            ),
          },
          '&:active': {
            backgroundColor: alpha(
              theme.palette.common.black,
              theme.palette.action.activatedOpacity,
            ),
          },
        },
      }
    },
  },
}

export const MonorailAlertTitleOverrides: Components<Theme>['MuiAlertTitle'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      marginBottom: theme.spacing(0.5),
      ...theme.typography.alertTitle,
    }),
  },
}
