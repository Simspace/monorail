import { Components, Theme } from '@mui/material'

export const MonorailInputLabelOverrides: Components<Theme>['MuiInputLabel'] = {
  defaultProps: {
    disableAnimation: true,
    shrink: false,
  },
  styleOverrides: {
    root: ({ theme }) => {
      return {
        position: 'relative',
        left: '4px', // Label above TextField
        top: 'auto',
        transform: 'none',
        background: 'transparent',
        color: theme.palette.default.main,
        marginBottom: '2px',
      }
    },
  },
}
