import type { Components, Theme } from '@mui/material'
import { buttonBaseClasses } from '@mui/material'

export const MonorailButtonBaseOverrides: Components<Theme>['MuiButtonBase'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      [`&.${buttonBaseClasses.disabled}`]: {
        opacity: theme.palette.action.disabledOpacity,
      },
    }),
  },
}
