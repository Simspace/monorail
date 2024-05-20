import type { Components, Theme } from '@mui/material'

export const MonorailDialogOverrides: Components<Theme>['MuiDialog'] = {
  defaultProps: {
    PaperProps: {
      elevation: 4,
    },
  },
  styleOverrides: {
    paper: ({ theme }) => ({
      borderRadius: theme.spacing(2),
    }),
    paperWidthXs: ({ theme }) => ({
      maxWidth: theme.spacing(111),
    }),
    paperWidthSm: ({ theme }) => ({
      maxWidth: theme.spacing(150),
    }),
    paperWidthMd: ({ theme }) => ({
      maxWidth: theme.spacing(225),
    }),
    paperWidthLg: ({ theme }) => ({
      maxWidth: theme.spacing(300),
    }),
    paperWidthXl: ({ theme }) => ({
      maxWidth: theme.spacing(384),
    }),
  },
}
