import type { Components, Theme } from '@mui/material'

export const MonorailCardHeaderOverrides: Components<Theme>['MuiCardHeader'] = {
  defaultProps: {},
  styleOverrides: {
    action: {
      alignSelf: 'center', // vertically centered within header
      marginRight: 0, // override default negative margin
      marginTop: 'revert',
      marginBottom: 'revert',
    },
  },
}
