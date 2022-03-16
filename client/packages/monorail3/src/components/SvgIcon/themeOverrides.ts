import { Components, Theme } from '@mui/material'

export const MonorailSvgIconOverrides: Components<Theme>['MuiSvgIcon'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }) =>
      ownerState.color === 'default' && {
        fill: theme.palette.default.main,
      },
    fontSizeSmall: {
      fontSize: '1rem', // 16px
    },
    fontSizeLarge: {
      fontSize: '2rem', // 32px
    },
  },
}
