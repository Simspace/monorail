import { buttonBaseClasses, Components, Theme } from '@mui/material'

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
