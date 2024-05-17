import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import type { Components, Theme } from '@mui/material'
import { alertClasses, alpha, iconButtonClasses } from '@mui/material'

import { WarningTwoColor } from '@monorail/components/icons'

export const MonorailAlertOverrides: Components<Theme>['MuiAlert'] = {
  defaultProps: {
    variant: 'outlined',
    iconMapping: {
      success: <CheckCircleIcon fontSize="inherit" />,
      info: <InfoIcon fontSize="inherit" />,
      error: <ErrorIcon fontSize="inherit" />,
      warning: (
        <WarningTwoColor
          fontSize="inherit"
          secondaryColor="warning.contrastText"
          sx={{ color: 'warning.main' }}
        />
      ),
    },
  },
  styleOverrides: {
    root: ({ ownerState: { severity = 'success' }, theme }) => ({
      [`& .${alertClasses.icon}`]: {
        color: theme.palette[severity].lowEmphasis.contrastText,
      },
    }),
    icon: ({ theme }) => ({
      padding: theme.spacing(2, 0),
    }),
    message: ({ theme }) => ({
      color: theme.palette.text.primary,
    }),
    action: {
      alignItems: 'center',
      marginRight: 0,
      paddingTop: 0,
    },
    standard: ({ ownerState: { severity = 'success' }, theme }) => ({
      color: theme.palette.getContrastText(
        theme.palette[severity].lowEmphasis.light,
      ),
      backgroundColor: theme.palette[severity].lowEmphasis.light,
      [`& .${iconButtonClasses.root}`]: {
        color: theme.palette.default.main,
      },
    }),
    outlined: ({ ownerState: { severity = 'success' }, theme }) => ({
      backgroundColor: theme.palette[severity].lowEmphasis.light,
      color: theme.palette.text.primary,
      borderColor: theme.palette[severity].border.main,
      [`& .${iconButtonClasses.root}`]: {
        color: theme.palette[severity].lowEmphasis.contrastText,
      },
    }),
    filled: ({ ownerState: { severity = 'success' }, theme }) => ({
      color: theme.palette.getContrastText(theme.palette[severity].main),
      backgroundColor: theme.palette[severity].main,
      [`& .${alertClasses.icon}`]: {
        opacity: 1,
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
    }),
  },
}

export const MonorailAlertTitleOverrides: Components<Theme>['MuiAlertTitle'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      marginBottom: theme.spacing(1.5),
      ...theme.typography.alertTitle,
    }),
  },
}
