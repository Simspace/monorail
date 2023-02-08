import type { Components, Theme } from '@mui/material'

export const MonorailTooltipOverrides: Components<Theme>['MuiTooltip'] = {
  defaultProps: {
    arrow: true,
  },
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor: theme.palette.tooltip,
      padding: theme.spacing(2, 3),
      ...theme.typography.tooltip,
    }),
    arrow: ({ theme }) => ({
      color: theme.palette.tooltip,
    }),
  },
}
