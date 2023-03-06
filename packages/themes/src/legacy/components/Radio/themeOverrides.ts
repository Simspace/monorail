import type { Components, Theme } from '@mui/material'
import { radioClasses, svgIconClasses } from '@mui/material'

export const MonorailRadioOverrides: Components<Theme>['MuiRadio'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState: { color = 'primary', size = 'medium' }, theme }) => ({
      color: theme.palette.default.lowEmphasis.contrastText,
      padding: theme.spacing(1),
      [`& .${svgIconClasses.root}`]: {
        fontSize: theme.typography.pxToRem(20),
      },
      ...(size === 'small' && {
        padding: 3,
        [`& .${svgIconClasses.root}`]: {
          fontSize: theme.typography.pxToRem(16),
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
        [`&.${radioClasses.disabled}`]: {
          color: theme.palette.text.disabled,
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
      },
      [`&.${radioClasses.disabled}, &.${radioClasses.checked}.${radioClasses.disabled}`]:
        {
          color: theme.palette.default.main, // ButtonBase applies action.disabledOpacity
        },
    }),
  },
}
