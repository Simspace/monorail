import type { Components, Theme } from '@mui/material'

export const MonorailTooltipOverrides: Components<Theme>['MuiTooltip'] = {
  defaultProps: {},
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor: theme.palette.default.dark,
      padding: theme.spacing(3, 4),
      ...theme.typography.tooltip,
    }),
    arrow: ({ theme }) => ({
      color: theme.palette.default.dark,
    }),
  },
}
