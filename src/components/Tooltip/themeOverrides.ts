import { Components, Theme } from '@mui/material'

export const MonorailTooltipOverrides: Components<Theme>['MuiTooltip'] = {
  defaultProps: {},
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor: theme.palette.grey[800],
      padding: '12px 16px',
    }),
    arrow: ({ theme }) => ({
      color: theme.palette.grey[800],
    }),
  },
}
