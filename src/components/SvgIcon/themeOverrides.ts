import { Components, Theme } from '@mui/material'

declare module '@mui/material/SvgIcon' {
  /**
   * Extend the SvgIcon color prop to apply a default grey color.
   */
  interface SvgIconPropsColorOverrides {
    default: true
  }
}

export const MonorailSvgIconOverrides: Components<Theme>['MuiSvgIcon'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }) =>
      ownerState.color === 'default' && {
        fill: theme.palette.default.main,
      },
    fontSizeSmall: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(16),
    }),
    fontSizeLarge: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(32),
    }),
  },
}
