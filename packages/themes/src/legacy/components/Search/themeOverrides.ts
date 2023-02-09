import type { Components, Theme } from '@mui/material'
import { inputBaseClasses } from '@mui/material'

export const MonorailSearchOverrides: Components<Theme>['MonorailSearch'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${inputBaseClasses.adornedEnd}`]: {
        paddingRight: theme.spacing(3),
      },
    }),
  },
}
