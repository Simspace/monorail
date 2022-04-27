import { Components, radioClasses, svgIconClasses, Theme } from '@mui/material'

const radioTokens = {
  bg: {
    hover: 100,
  },
  icon: {
    idle: 600,
    hover: 700,
  },
} as const

export const MonorailRadioOverrides: Components<Theme>['MuiRadio'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState: { color = 'primary', size = 'medium' }, theme }) => ({
      color: theme.palette.default.shades[radioTokens.icon.idle],
      padding: 8,
      ...(size === 'small' && {
        padding: 6,
        [`& .${svgIconClasses.root}`]: {
          fontSize: theme.typography.pxToRem(20),
        },
      }),
      '&:hover': {
        backgroundColor: theme.palette.default.shades[radioTokens.bg.hover],
        [`& .${svgIconClasses.root}`]: {
          color: theme.palette.default.shades[radioTokens.icon.hover],
        },
      },
      [`&.${radioClasses.checked}`]: {
        color: theme.palette[color].main,
        [`&.${radioClasses.disabled}`]: {
          color: theme.palette.action.disabled,
        },
        '&:hover': {
          backgroundColor: theme.palette[color].shades[radioTokens.bg.hover],
          [`& .${svgIconClasses.root}`]: {
            color: theme.palette[color].shades[radioTokens.icon.hover],
          },
        },
      },
      [`&.Mui-focusVisible`]: {
        boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
        outline: `1px solid ${theme.palette[color].focusRing.inner}`,
      },
    }),
  },
}
