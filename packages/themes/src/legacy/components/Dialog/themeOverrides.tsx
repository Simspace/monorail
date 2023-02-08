import type { Components, Theme } from '@mui/material'

export const MonorailDialogOverrides: Components<Theme>['MuiDialog'] = {
  defaultProps: {
    PaperProps: {
      elevation: 24,
    },
  },
  styleOverrides: {
    paper: ({ theme }) => ({
      borderRadius: theme.spacing(2),
    }),
    paperWidthXs: ({ theme }) => ({
      maxWidth: theme.spacing(76),
    }),
    paperWidthSm: ({ theme }) => ({
      maxWidth: theme.spacing(111),
    }),
    paperWidthMd: ({ theme }) => ({
      maxWidth: theme.spacing(150),
    }),
    paperWidthLg: ({ theme }) => ({
      maxWidth: theme.spacing(225),
    }),
    paperWidthXl: ({ theme }) => ({
      maxWidth: theme.spacing(300),
    }),
  },
}
