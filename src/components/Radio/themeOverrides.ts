import { Components, radioClasses, svgIconClasses, Theme } from '@mui/material'

export const MonorailRadioOverrides: Components<Theme>['MuiRadio'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ ownerState: { color = 'primary', size = 'medium' }, theme }) => ({
      color: theme.palette.default.weakEmphasis.contrastText,
      padding: theme.spacing(2),
      ...(size === 'small' && {
        padding: 6,
        [`& .${svgIconClasses.root}`]: {
          fontSize: theme.typography.pxToRem(20),
        },
      }),
      '&:hover': {
        backgroundColor: theme.palette.default.mediumEmphasis.hover,
        [`& .${svgIconClasses.root}`]: {
          color: theme.palette.default.hover,
        },
      },
      [`&.${radioClasses.checked}`]: {
        color: theme.palette[color].main,
        [`&.${radioClasses.disabled}`]: {
          color: theme.palette.action.disabled,
        },
        '&:hover': {
          backgroundColor: theme.palette[color].mediumEmphasis.hover,
          [`& .${svgIconClasses.root}`]: {
            color: theme.palette[color].hover,
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
