import {
  checkboxClasses,
  Components,
  svgIconClasses,
  Theme,
} from '@mui/material'

export const MonorailCheckboxOverrides: Components<Theme>['MuiCheckbox'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState: { color = 'primary', size = 'medium' }, theme }) => ({
      padding: 8,
      borderRadius: 3,
      ...(size === 'small' && {
        padding: 6,
        [`& .${svgIconClasses.root}`]: {
          fontSize: theme.typography.pxToRem(20),
        },
      }),
      '&:hover': {
        backgroundColor: theme.palette[color].shades[50],
      },
      [`&.${checkboxClasses.checked}`]: {
        color: theme.palette[color].main,
        [`&.${checkboxClasses.disabled}`]: {
          color: theme.palette.action.disabled,
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
