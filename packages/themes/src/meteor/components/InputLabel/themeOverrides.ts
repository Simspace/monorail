import { type Components, inputLabelClasses, type Theme } from '@mui/material'

export const MonorailInputLabelOverrides: Components<Theme>['MuiInputLabel'] = {
  defaultProps: {
    disableAnimation: true,
    shrink: true,
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        position: 'relative',
        left: theme.spacing(3), // Label above TextField
        top: 'auto',
        transform: 'none',
        background: 'transparent',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(0.5),
        ...theme.typography.inputLabel,
        [`&.${inputLabelClasses.focused}`]: {
          color: theme.palette.text.secondary,
        },
        [`&.${inputLabelClasses.error}`]: {
          color: theme.palette.error.lowEmphasis.contrastText,
        },
      }
    },
  },
}
