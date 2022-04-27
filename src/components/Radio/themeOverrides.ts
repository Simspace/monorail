import { Components, svgIconClasses, Theme } from '@mui/material'

export const MonorailRadioOverrides: Components<Theme>['MuiRadio'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState: { color = 'primary', size = 'medium' }, theme }) => ({
      padding: 8,
      ...(size === 'small' && {
        padding: 6,
        [`& .${svgIconClasses.root}`]: {
          fontSize: theme.typography.pxToRem(20),
        },
      }),
      [`&.Mui-focusVisible`]: {
        boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
        outline: `1px solid ${theme.palette[color].focusRing.inner}`,
      },
    }),
  },
}
