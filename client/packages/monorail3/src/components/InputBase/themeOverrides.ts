import {
  Components,
  inputBaseClasses,
  outlinedInputClasses,
  Theme,
} from '@mui/material'

export const MonorailInputBaseOverrides: Components<Theme>['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState: { color = 'primary' }, theme }) => {
      return {
        [`&.${inputBaseClasses.focused}`]: {
          boxShadow: `0 0 0 3px ${theme.palette[color].focusRing.outer}`,
          [`& > fieldset.${outlinedInputClasses.notchedOutline}`]: {
            borderColor: `${theme.palette[color].focusRing.inner}`,
            borderWidth: '1px',
          },
        },
        lineHeight: theme.typography.body1.lineHeight,
        minHeight: 48,
      }
    },
    sizeSmall: {
      minHeight: 40,
    },
  },
}
