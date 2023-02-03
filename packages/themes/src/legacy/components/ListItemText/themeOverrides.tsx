import type { Components, Theme } from '@mui/material'
import { listItemTextClasses } from '@mui/material'

export const MonorailListItemTextOverrides: Components<Theme>['MuiListItemText'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
      }),
      secondary: ({ theme }) => ({
        marginTop: theme.spacing(0.5),
      }),
      primary: ({ theme }) => ({
        ...theme.typography.body2,
      }),
      multiline: ({ theme }) => ({
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
        [`&.${listItemTextClasses.dense}`]: {
          marginTop: theme.spacing(0.25),
          marginBottom: theme.spacing(0.25),
        },
      }),
      dense: ({ theme }) => ({
        marginTop: theme.spacing(0.25),
        marginBottom: theme.spacing(0.25),
        [`& > .${listItemTextClasses.secondary}`]: {
          marginTop: 0,
        },
      }),
      inset: ({ theme }) => ({
        paddingLeft: theme.spacing(7),
      }),
    },
  }
