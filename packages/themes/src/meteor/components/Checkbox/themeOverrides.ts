import {
  checkboxClasses,
  svgIconClasses,
  type Components,
  type Theme,
} from '@mui/material'

export const MonorailCheckboxOverrides: Components<Theme>['MuiCheckbox'] = {
  defaultProps: {
    disableRipple: true,
    color: 'default',
  },
  styleOverrides: {
    root: ({ ownerState: { color = 'default', size = 'medium' }, theme }) => ({
      color: theme.palette.default.main,
      padding: 8,
      borderRadius: 4,
      [`& .${svgIconClasses.root}`]: {
        transition: theme.transitions.create(['color'], {
          duration: theme.transitions.duration.shortest,
        }),
      },
      ...(size === 'small' && {
        padding: theme.spacing(1.5),
        [`& .${svgIconClasses.root}`]: {
          fontSize: theme.typography.pxToRem(20),
        },
      }),
      transition: theme.transitions.create(['background-color'], {
        duration: theme.transitions.duration.shortest,
      }),
      '&:hover': {
        backgroundColor: theme.palette.default.lowEmphasis.hover,
        [`& .${svgIconClasses.root}`]: {
          color: theme.palette.default.hover,
        },
      },
      [`&.${checkboxClasses.checked}`]: {
        color: theme.palette[color].main,
        '&:hover': {
          backgroundColor: theme.palette[color].lowEmphasis.hover,
          [`& .${svgIconClasses.root}`]: {
            color: theme.palette[color].hover,
          },
        },
      },
      [`&.Mui-focusVisible`]: {
        boxShadow: `inset 0 0 0 2px ${theme.palette[color].focusRing.inner}`,
        zIndex: 1,
      },
      [`&.${checkboxClasses.disabled}, &.${checkboxClasses.checked}.${checkboxClasses.disabled}`]:
        {
          color: theme.palette.default.main, // ButtonBase applies action.disabledOpacity
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
