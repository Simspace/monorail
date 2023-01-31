import type { Components, Theme } from '@mui/material'
import { listItemTextClasses } from '@mui/material'

export const MonorailListItemTextOverrides: Components<Theme>['MuiListItemText'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: ({ theme }) => ({
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      }),
      secondary: ({ theme }) => ({
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
      dense: ({ theme }) => ({
        // To give dense ListItem a total height of 32px
        marginTop: theme.spacing(0.25),
        marginBottom: theme.spacing(0.25),
        [`& > .${listItemTextClasses.secondary}`]: {
          marginTop: 0,
        },
        [`&.${listItemTextClasses.inset}`]: {
          paddingLeft: theme.spacing(10),
        },
      }),
      inset: ({ theme }) => ({
        paddingLeft: theme.spacing(12),
      }),
    },
  }
