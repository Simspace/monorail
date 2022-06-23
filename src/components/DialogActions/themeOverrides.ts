import { Components, Theme } from '@mui/material'

export const MonorailDialogActionsOverrides: Components<Theme>['MuiDialogActions'] =
  {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          height: theme.spacing(16.25),
        }
      },
    },
  }
