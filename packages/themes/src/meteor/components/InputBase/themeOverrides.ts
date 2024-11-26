import type { Components, Theme } from '@mui/material'
import { inputBaseClasses, outlinedInputClasses } from '@mui/material'

export const MonorailInputBaseOverrides: Components<Theme>['MuiInputBase'] = {
  defaultProps: {
    color: 'secondary',
  },
  styleOverrides: {
    root: ({ ownerState: { color = 'primary', size = 'medium' }, theme }) => {
      return {
        transition: theme.transitions.create('box-shadow', {
          duration: theme.transitions.duration.shortest,
        }),
        [`&.${inputBaseClasses.focused}`]: {
          boxShadow: `inset 0 0 0 2px ${theme.palette[color].focusRing.inner}`,
          [`& > fieldset.${outlinedInputClasses.notchedOutline}`]: {
            borderColor: `${theme.palette.default.border.main}`,
            borderWidth: '1px',
          },
        },
        ...theme.typography.inputText,
        minHeight: 40,
        ...(size === 'small' && {
          minHeight: 34,
        }),
        ...(size === 'large' && {
          minHeight: 48,
        }),
      }
    },
    input: ({ theme }) => ({
      '&::placeholder': {
        color: theme.palette.text.placeholder,
        opacity: 1,
      },
    }),
    error: ({ theme }) => ({
      [`&.${inputBaseClasses.focused}`]: {
        boxShadow: `0 0 0 2px ${theme.palette.error.border.main}`,
        [`& > fieldset.${outlinedInputClasses.notchedOutline}`]: {
          borderColor: `${theme.palette.error.border.main}`,
          borderWidth: '1px',
        },
      },
      [`&:hover`]: {
        [`& > fieldset.${outlinedInputClasses.notchedOutline}`]: {
          borderColor: `${theme.palette.error.border.dark}`,
          borderWidth: '1px',
        },
      },
    }),
  },
}
