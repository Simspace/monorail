import type { Components, Theme } from '@mui/material'

export const MonorailIconOverrides: Components<Theme>['MuiIcon'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }) =>
      ownerState.color === 'default' && {
        fill: theme.palette.default.main,
      },
    fontSizeInherit: () => ({
      // Won't work without !important. - GS 10/21/22
      // https://github.com/mui/material-ui/issues/29689
      fontSize: 'inherit !important',
    }),
    fontSizeSmall: ({ theme }) => ({
      fontSize: `${theme.typography.pxToRem(20)} !important`,
    }),
    fontSizeLarge: ({ theme }) => ({
      fontSize: `${theme.typography.pxToRem(36)} !important`,
    }),
  },
}
