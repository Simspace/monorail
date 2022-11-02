import type { Components, Theme } from '@mui/material'
import { buttonBaseClasses } from '@mui/material'

export const MonorailStepButtonOverrides: Components<Theme>['MuiStepButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius,
      [`&:hover`]: {
        backgroundColor: theme.palette.default.lowEmphasis.hover,
      },
      [`&:active`]: {
        backgroundColor: theme.palette.default.lowEmphasis.active,
      },
      [`&.${buttonBaseClasses.focusVisible}`]: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.default.focusRing.inner}, 0 0 0 3px ${theme.palette.default.focusRing.outer}`,
      },
    }),
  },
}
