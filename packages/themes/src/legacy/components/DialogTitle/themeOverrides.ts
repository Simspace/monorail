import type { Components, Theme } from '@mui/material'

export const MonorailDialogTitleOverrides: Components<Theme>['MuiDialogTitle'] =
  {
    defaultProps: {
      variant: 'h1',
    },
    styleOverrides: {
      root: ({ theme }) => {
        return {
          height: theme.spacing(14),
        }
      },
    },
  }
