import { Components, sliderClasses, Theme } from '@mui/material'

export const MonorailSliderOverrides: Components<Theme>['MuiSlider'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      height: 20,
      borderRadius: 2,
      padding: '10px 0', // Resizes click target to 40px (medium) and 24px (small)
      [`&.${sliderClasses.disabled}`]: {
        [`& .${sliderClasses.thumb}`]: {
          backgroundColor: theme.palette.default.shades[50],
          borderColor: theme.palette.text.disabled,
        },
        [`& .${sliderClasses.track}`]: {
          backgroundColor: theme.palette.default.shades[300],
          borderColor: theme.palette.default.shades[300],
        },
        [`& .${sliderClasses.rail}`]: {
          backgroundColor: theme.palette.default.shades[100],
        },
      },
    }),
    thumb: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        height: 32,
        width: 12,
        border: `1px solid ${theme.palette.grey[600]}`,
        borderRadius: 1,
        backgroundColor: theme.palette.common.white,
        '&::before': {
          boxShadow: 'none',
        },
        '&.Mui-focusVisible': {
          boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
          border: `1px solid ${theme.palette[color].focusRing.inner}`,
        },
        '&:hover': {
          backgroundColor: theme.palette.default.shades[50],
          boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
          [`&.${sliderClasses.thumbSizeSmall}`]: {
            backgroundColor: theme.palette[color].shades[700],
          },
        },
        [`&.${sliderClasses.active}`]: {
          backgroundColor: theme.palette.default.shades[200],
          boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
          [`&.${sliderClasses.thumbSizeSmall}`]: {
            backgroundColor: theme.palette[color].shades[800],
          },
        },
      }
    },
    rail: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        backgroundColor: theme.palette[color].shades[300],
        opacity: 1,
      }
    },
    sizeSmall: {
      height: 4,
    },
    thumbSizeSmall: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        height: 20,
        width: 20,
        borderRadius: '50%',
        backgroundColor: theme.palette[color].shades[600],
        border: 'none',
      }
    },
    colorPrimary: ({ theme }) => ({
      [`& .${sliderClasses.track}`]: {
        backgroundColor: theme.palette.primary.shades[600],
        borderColor: theme.palette.primary.shades[600],
      },
      [`& .${sliderClasses.rail}`]: {
        backgroundColor: theme.palette.primary.shades[300],
      },
    }),
    colorSecondary: ({ theme }) => ({
      [`& .${sliderClasses.track}`]: {
        backgroundColor: theme.palette.secondary.shades[600],
        borderColor: theme.palette.secondary.shades[600],
      },
      [`& .${sliderClasses.rail}`]: {
        backgroundColor: theme.palette.secondary.shades[300],
      },
    }),
    mark: {
      height: 4,
      width: 4,
      borderRadius: '50%',
      transform: 'translate(-2px, -50%)',
    },
  },
}
