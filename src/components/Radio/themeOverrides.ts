import { Components, Theme } from '@mui/material'

export const MonorailRadioOverrides: Components<Theme>['MuiRadio'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState: { color = 'primary', size = 'medium' }, theme }) => ({
      padding: size === 'small' ? 6 : 8,
      [`&.Mui-focusVisible`]: {
        boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
        outline: `1px solid ${theme.palette[color].focusRing.inner}`,
        // zIndex: 1,
      },
    }),
  },
}
