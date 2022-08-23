import { Components, Theme } from '@mui/material'

export const MonorailDialogActionsOverrides: Components<Theme>['MuiDialogActions'] =
  {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          padding: theme.spacing(3, 6),
          height: theme.spacing(16),
          borderTop: `1px solid ${theme.palette.divider}`,
        }
      },
    },
  }
