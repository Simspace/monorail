import { Components, sliderClasses, Theme } from '@mui/material'

export const MonorailSliderOverrides: Components<Theme>['MuiSlider'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      height: 20,
      borderRadius: 2,
      padding: '10px 0', // Resizes click target to 40px (medium) and 24px (small)
      [`&.${sliderClasses.disabled}`]: {
        [`& .${sliderClasses.track}`]: {
          backgroundColor: theme.palette.default.shades[300],
        },
        [`& .${sliderClasses.rail}`]: {
          backgroundColor: theme.palette.default.shades[100],
        },
      },
    }),
    thumb: ({ theme }) => ({
      height: 32,
      width: 12,
      border: `1px solid ${theme.palette.grey[600]}`,
      borderRadius: 1,
      backgroundColor: theme.palette.common.white,
    }),
    rail: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        backgroundColor: theme.palette[color].shades[300],
      }
    },
    sizeSmall: {
      height: 4,
      [`& .${sliderClasses.track}`]: {},
      [`& .${sliderClasses.rail}`]: {},
    },
    thumbSizeSmall: {
      height: 20,
      width: 20,
    },
    colorPrimary: ({ theme }) => ({
      [`& .${sliderClasses.track}`]: {
        backgroundColor: theme.palette.primary.shades[600],
      },
      [`& .${sliderClasses.rail}`]: {
        backgroundColor: theme.palette.primary.shades[300],
      },
    }),
    colorSecondary: ({ theme }) => ({
      [`& .${sliderClasses.track}`]: {
        backgroundColor: theme.palette.secondary.shades[600],
      },
      [`& .${sliderClasses.rail}`]: {
        backgroundColor: theme.palette.secondary.shades[300],
      },
    }),
  },
}
