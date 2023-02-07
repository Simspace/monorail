import type { Components, Theme } from '@mui/material'

export const MonorailAccordionDetailsOverrides: Components<Theme>['MuiAccordionDetails'] =
  {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          minHeight: theme.spacing(8),
          padding: theme.spacing(2, 4, 4),
        }
      },
    },
  }
