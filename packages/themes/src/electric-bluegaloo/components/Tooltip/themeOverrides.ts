import { Components, Theme } from '@mui/material'

export const MonorailTooltipOverrides: Components<Theme>['MuiTooltip'] = {
  defaultProps: {},
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor: theme.palette.default.dark,
      fontSize: theme.typography.body2.fontSize,
      lineHeight: theme.typography.pxToRem(20), // this isn't body2.lineHeight, but it matches figma
      padding: theme.spacing(3, 4),
    }),
    arrow: ({ theme }) => ({
      color: theme.palette.default.dark,
    }),
  },
}
