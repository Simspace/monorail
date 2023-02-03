import type { Components, Theme } from '@mui/material'
import { checkboxClasses, svgIconClasses } from '@mui/material'

export const MonorailCheckboxOverrides: Components<Theme>['MuiCheckbox'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState: { color = 'primary', size = 'medium' }, theme }) => ({
      color: theme.palette.default.main,
      padding: 4,
      borderRadius: 4,
      ...(size === 'small' && {
        padding: theme.spacing(0.75),
        [`& .${svgIconClasses.root}`]: {
          fontSize: theme.typography.pxToRem(20),
        },
      }),
      '&:hover': {
        backgroundColor: theme.palette.default.lowEmphasis.hover,
        [`& .${svgIconClasses.root}`]: {
          color: theme.palette.default.hover,
        },
      },
      [`&.${checkboxClasses.checked}`]: {
        color: theme.palette[color].main,
        [`&.${checkboxClasses.disabled}`]: {
          color: theme.palette.action.disabled,
        },
        '&:hover': {
          backgroundColor: theme.palette[color].lowEmphasis.hover,
          [`& .${svgIconClasses.root}`]: {
            color: theme.palette[color].hover,
          },
        },
      },
      [`&.Mui-focusVisible`]: {
        boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
        outline: `1px solid ${theme.palette[color].focusRing.inner}`,
        zIndex: 1,
      },
    }),
    indeterminate: ({ ownerState: { color = 'primary' }, theme }) => ({
      '&:hover': {
        backgroundColor: theme.palette[color].lowEmphasis.hover,
        [`& .${svgIconClasses.root}`]: {
          color: theme.palette[color].hover,
        },
      },
    }),
  },
}
