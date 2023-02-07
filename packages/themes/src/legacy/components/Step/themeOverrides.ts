import type { Components, Theme } from '@mui/material'
import { stepContentClasses } from '@mui/material'

export const MonorailStepOverrides: Components<Theme>['MuiStep'] = {
  styleOverrides: {
    vertical: ({ theme }) => ({
      [`& .${stepContentClasses.root}`]: {
        marginLeft: theme.spacing(2),
      },
    }),
  },
}
