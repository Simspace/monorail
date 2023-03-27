import type { Components, Theme } from '@mui/material'

export const MonorailCardHeaderOverrides: Components<Theme>['MuiCardHeader'] = {
  defaultProps: {
    titleTypographyProps: {
      variant: 'h3',
    },
  },
  styleOverrides: {
    action: {
      alignSelf: 'center', // vertically centered within header
      marginRight: 0, // override default negative margin
    },
  },
}
