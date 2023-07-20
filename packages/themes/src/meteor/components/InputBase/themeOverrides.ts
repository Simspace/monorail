import type { Components, Theme } from '@mui/material'
import { inputBaseClasses, outlinedInputClasses } from '@mui/material'

export const MonorailInputBaseOverrides: Components<Theme>['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState: { color = 'primary', size = 'medium' }, theme }) => {
      return {
        [`&.${inputBaseClasses.focused}`]: {
          boxShadow: `0 0 0 3px ${theme.palette[color].focusRing.outer}`,
          [`& > fieldset.${outlinedInputClasses.notchedOutline}`]: {
            borderColor: `${theme.palette[color].focusRing.inner}`,
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
    error: ({ theme }) => ({
      [`&.${inputBaseClasses.focused}`]: {
        boxShadow: `0 0 0 3px ${theme.palette.error.focusRing.outer}`,
        [`& > fieldset.${outlinedInputClasses.notchedOutline}`]: {
          borderColor: `${theme.palette.error.focusRing.inner}`,
          borderWidth: '1px',
        },
      },
    }),
  },
}
