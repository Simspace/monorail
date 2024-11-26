import type { Components, Theme } from '@mui/material'
import { radioClasses, svgIconClasses } from '@mui/material'

export const MonorailRadioOverrides: Components<Theme>['MuiRadio'] = {
  defaultProps: {
    color: 'default',
  },
  styleOverrides: {
    root: ({ ownerState: { color = 'default', size = 'medium' }, theme }) => ({
      color: theme.palette.default.lowEmphasis.contrastText,
      padding: theme.spacing(2),
      ...(size === 'small' && {
        padding: 6,
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
      [`&.${radioClasses.checked}`]: {
        color: theme.palette[color].main,
        '&:hover': {
          backgroundColor: theme.palette.default.lowEmphasis.hover,
          [`& .${svgIconClasses.root}`]: {
            color: theme.palette[color].hover,
          },
        },
      },
      [`&.Mui-focusVisible`]: {
        boxShadow: `inset 0 0 0 2px ${theme.palette[color].focusRing.inner}`,
      },
      [`&.${radioClasses.disabled}, &.${radioClasses.checked}.${radioClasses.disabled}`]:
        {
          color: theme.palette.default.main, // ButtonBase applies action.disabledOpacity
        },
    }),
  },
}
