import type { Components, Theme } from '@mui/material'

export const MonorailSplitButtonOverrides: Components<Theme>['MonorailSplitButton'] =
  {
    styleOverrides: {
      secondaryButton: ({ theme }) => ({
        minWidth: theme.spacing(4),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      }),
      secondaryButtonSmall: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      secondaryButtonLarge: ({ theme }) => ({
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      }),
    },
  }
