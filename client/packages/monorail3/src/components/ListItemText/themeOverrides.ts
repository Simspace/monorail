import { Components, listItemTextClasses, Theme } from '@mui/material'

export const MonorailListItemTextOverrides: Components<Theme>['MuiListItemText'] =
  {
    defaultProps: {},
    styleOverrides: {
      secondary: {
        marginTop: 2,
      },
      multiline: {
        marginTop: 0,
        marginBottom: 0,
        [`&.${listItemTextClasses.dense}`]: {
          marginTop: 5,
          marginBottom: 5,
        },
      },
      dense: {
        [`& > .${listItemTextClasses.secondary}`]: {
          marginTop: 0,
        },
      },
    },
  }
