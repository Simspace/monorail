import type { Components, Theme } from '@mui/material'

export const MonorailDialogHeaderOverrides: Components<Theme>['MonorailDialogHeader'] =
  {
    defaultProps: {},
    styleOverrides: {
      title: ({ theme }) => ({
        ...theme.typography.h1,
      }),
    },
  }
