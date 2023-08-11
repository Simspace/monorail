import type { Components, Theme } from '@mui/material'
import { buttonBaseClasses } from '@mui/material'

export const MonorailStepButtonOverrides: Components<Theme>['MuiStepButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3, 4),
      borderRadius: theme.shape.borderRadius,
      [`&:hover`]: {
        backgroundColor: theme.palette.action.hover,
      },
      [`&:active`]: {
        backgroundColor: theme.palette.action.active,
      },
      [`&.${buttonBaseClasses.focusVisible}`]: {
        boxShadow: `inset 0 0 0 1px ${theme.palette.default.focusRing.inner}, 0 0 0 3px ${theme.palette.default.focusRing.outer}`,
      },
    }),
  },
}
