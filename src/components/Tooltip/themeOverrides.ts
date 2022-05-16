import { Components, Theme } from '@mui/material'

export const MonorailTooltipOverrides: Components<Theme>['MuiTooltip'] = {
  defaultProps: {},
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor: theme.palette.grey[800],
      fontSize: theme.typography.body2.fontSize,
      lineHeight: theme.typography.pxToRem(20), // this isn't body2.lineHeight, but it matches figma
      padding: '12px 16px',
    }),
    arrow: ({ theme }) => ({
      color: theme.palette.grey[800],
    }),
  },
}
