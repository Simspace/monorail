import { Components, listItemTextClasses, Theme } from '@mui/material'

export const MonorailListItemTextOverrides: Components<Theme>['MuiListItemText'] =
  {
    defaultProps: {},
    styleOverrides: {
      root: {
        marginTop: 8,
        marginBottom: 8,
      },
      secondary: {
        marginTop: 2,
      },
      multiline: {
        marginTop: 4,
        marginBottom: 4,
        [`&.${listItemTextClasses.dense}`]: {
          marginTop: 2,
          marginBottom: 2,
        },
      },
      dense: {
        // To give dense ListItem a total height of 32px
        marginTop: 1,
        marginBottom: 1,
        [`& > .${listItemTextClasses.secondary}`]: {
          marginTop: 0,
        },
        [`&.${listItemTextClasses.inset}`]: {
          paddingLeft: 40,
        },
      },
      inset: {
        paddingLeft: 48,
      },
    },
  }
