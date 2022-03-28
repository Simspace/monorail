import { Components, Theme } from '@mui/material'

export const MonorailChipOverrides: Components<Theme>['MuiChip'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      fontWeight: theme.typography.fontWeightBold,
    }),
    label: {
      padding: 6,
    },
    avatar: {
      marginLeft: '4px',
    },
  },
}
