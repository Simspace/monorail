import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import WarningIcon from '@mui/icons-material/Warning'
import { alertClasses, Components, Theme } from '@mui/material'

// declare module '@mui/material/Alert' {
//   interface AlertPropsColorOverrides {
//     default: true
//     primary: true
//     secondary: true
//   }
// }

//"default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"
//"success" | "info" | "warning" | "error" | "default" | "primary" | "secondary"

const alertTokens = {
  outlined: {
    borderColor: 500,
    icon: 500,
  },
  standard: {
    bg: 50,
    icon: 600,
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
    root: ({
      ownerState: { variant = 'outlined', severity = 'success' },
      theme,
    }) => ({
      ...(variant === 'standard' && {
        color: theme.palette[severity].shades[alertTokens.standard.text],
        backgroundColor:
          theme.palette[severity].shades[alertTokens.standard.bg],
        [`& .${alertClasses.icon}`]: {
          color: theme.palette[severity].shades[alertTokens.standard.icon],
        },
      }),
      ...(variant === 'outlined' && {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.common.white,
        [`& .${alertClasses.icon}`]: {
          color: theme.palette[severity].shades[alertTokens.outlined.icon],
        },
      }),
      ...(variant === 'filled' && {
        color: theme.palette.common.white,
        backgroundColor: theme.palette[severity].main,
        [`& .${alertClasses.icon}`]: {
          color: theme.palette.common.white,
        },
      }),
    }),
    // outlined: ({ ownerState: { severity = 'success' }, theme }) => ({
    //   borderColor:
    //     theme.palette[severity].shades[alertTokens.outlined.borderColor],
    //   [`& .${alertClasses.icon}`]: {
    //     color: theme.palette[severity].shades[alertTokens.outlined.icon],
    //   },
    // }),
  },
}
