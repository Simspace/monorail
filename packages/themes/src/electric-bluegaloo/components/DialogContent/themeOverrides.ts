import { Components, Theme } from '@mui/material'

export const MonorailDialogContentOverrides: Components<Theme>['MuiDialogContent'] =
  {
    defaultProps: {
      dividers: true,
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => {
        return {
          padding: theme.spacing(2, 6),
          ...(ownerState.disablePadding === true && {
            padding: 0,
          }),
        }
      },
    },
  }
