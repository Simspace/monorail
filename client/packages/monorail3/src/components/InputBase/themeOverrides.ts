import { Components, Theme } from '@mui/material'

export const MonorailInputBaseOverrides: Components<Theme>['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        '&.Mui-focused': {
          boxShadow: `0 0 0 3px ${theme.palette[color].light}`,
          '& > fieldset.MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.palette[color].dark}`,
            borderWidth: '1px',
          },
        },
        lineHeight: theme.typography.body1.lineHeight,
        minHeight: 48,
      }
    },
    sizeSmall: {
      minHeight: 40,
    },
  },
}
