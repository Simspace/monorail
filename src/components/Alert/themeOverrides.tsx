import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import WarningIcon from '@mui/icons-material/Warning'
import { alertClasses, Components, Theme } from '@mui/material'

const alertTokens = {
  outlined: {
    borderColor: 500,
    icon: 500,
  },
  standard: {
    bg: 50,
    icon: 500,
    text: 800,
  },
} as const

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
    root: {
      paddingTop: 8,
      paddingBottom: 8,
    },
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
        color: theme.palette[severity].shades[alertTokens.standard.text],
        backgroundColor:
          theme.palette[severity].shades[alertTokens.standard.bg],
        [`& .${alertClasses.icon}`]: {
          color: theme.palette[severity].shades[alertTokens.standard.icon],
        },
      }
    },
    outlined: ({ ownerState, theme }) => {
      const severity = ownerState?.severity ?? 'success'
      return {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderColor:
          theme.palette[severity].shades[alertTokens.outlined.borderColor],
        [`& .${alertClasses.icon}`]: {
          color: theme.palette[severity].shades[alertTokens.outlined.icon],
        },
      }
    },
    filled: ({ ownerState, theme }) => {
      const severity = ownerState?.severity ?? 'success'
      return {
        color: theme.palette.common.white,
        backgroundColor: theme.palette[severity].main,
        [`& .${alertClasses.icon}`]: {
          color: theme.palette.common.white,
        },
      }
    },
  },
}

export const MonorailAlertTitleOverrides: Components<Theme>['MuiAlertTitle'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      marginBottom: 2,
    },
  },
}
