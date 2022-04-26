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
        backgroundColor: theme.palette[color].shades[200],
      },
    }),
  },
}
