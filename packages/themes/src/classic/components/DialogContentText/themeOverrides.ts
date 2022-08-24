import { Components, Theme } from '@mui/material'

export const MonorailDialogContentTextOverrides: Components<Theme>['MuiDialogContentText'] =
  {
    styleOverrides: {
      root: ({ theme }) => {
        return {
          color: theme.palette.text.primary,
        }
      },
    },
  }
