import {
  checkboxClasses,
  Components,
  svgIconClasses,
  Theme,
} from '@mui/material'

const checkboxTokens = {
  shape: 4,
  bg: {
    hover: 100,
  },
  icon: {
    idle: 600,
    hover: 700,
  },
} as const

export const MonorailCheckboxOverrides: Components<Theme>['MuiCheckbox'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState: { color = 'primary', size = 'medium' }, theme }) => ({
      color: theme.palette.default.shades[checkboxTokens.icon.idle],
      padding: 8,
      borderRadius: 4,
      ...(size === 'small' && {
        padding: 6,
        [`& .${svgIconClasses.root}`]: {
          fontSize: theme.typography.pxToRem(20),
        },
      }),
      '&:hover': {
        backgroundColor: theme.palette.default.shades[checkboxTokens.bg.hover],
        [`& .${svgIconClasses.root}`]: {
          color: theme.palette.default.shades[checkboxTokens.icon.hover],
        },
      },
      [`&.${checkboxClasses.checked}`]: {
        color: theme.palette[color].main,
        [`&.${checkboxClasses.disabled}`]: {
          color: theme.palette.action.disabled,
        },
        '&:hover': {
          backgroundColor: theme.palette[color].shades[checkboxTokens.bg.hover],
          [`& .${svgIconClasses.root}`]: {
            color: theme.palette[color].shades[checkboxTokens.icon.hover],
          },
        },
      },
      [`&.Mui-focusVisible`]: {
        boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
        outline: `1px solid ${theme.palette[color].focusRing.inner}`,
        zIndex: 1,
      },
    }),
  },
}
