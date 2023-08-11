import type { Components, Theme } from '@mui/material'
import { listItemTextClasses } from '@mui/material'

export const MonorailListItemTextOverrides: Components<Theme>['MuiListItemText'] =
  {
    defaultProps: {},
    styleOverrides: {
      primary: ({ theme }) => ({
        ...theme.typography.body1,
      }),
      secondary: ({ theme }) => ({
        ...theme.typography.body2,
        marginTop: theme.spacing(0.5),
      }),
      multiline: ({ theme }) => ({
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        [`&.${listItemTextClasses.dense}`]: {
          marginTop: theme.spacing(0.5),
          marginBottom: theme.spacing(0.5),
        },
      }),
    },
  }
