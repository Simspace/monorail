import type { Components, Theme } from '@mui/material'

export const MonorailDialogContentOverrides: Components<Theme>['MuiDialogContent'] =
  {
    defaultProps: {
      dividers: true,
    },
    styleOverrides: {
      root: ({ theme }) => {
        return {
          padding: theme.spacing(6),
        }
      },
    },
  }
