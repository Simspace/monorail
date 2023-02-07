import type { Components, Theme } from '@mui/material'

export const MonorailAccordionActionsOverrides: Components<Theme>['MuiAccordionActions'] =
  {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          padding: theme.spacing(2, 4),
        }
      },
    },
  }
