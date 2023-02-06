import type { Components, Theme } from '@mui/material'

export const MonorailDialogActionsOverrides: Components<Theme>['MuiDialogActions'] =
  {
    defaultProps: {
      divider: false,
    },
    styleOverrides: {
      root: ({ theme }) => {
        return {
          padding: theme.spacing(3, 6),
          height: theme.spacing(12),
        }
      },
    },
  }
