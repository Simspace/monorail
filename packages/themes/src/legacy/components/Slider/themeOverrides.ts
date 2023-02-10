import type { Components, Theme } from '@mui/material'
import { darken, lighten, sliderClasses } from '@mui/material'

export const MonorailSliderOverrides: Components<Theme>['MuiSlider'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      height: theme.spacing(5),
      borderRadius: 2,
      padding: theme.spacing(1.5, 0), // Resizes click target to 32px (medium) and 16px (small)
      [`&.${sliderClasses.disabled}`]: {
        [`& .${sliderClasses.thumb}`]: {
          backgroundColor: theme.palette.default.lowEmphasis.light,
          borderColor: theme.palette.text.disabled,
        },
        [`& .${sliderClasses.track}`]: {
          backgroundColor: theme.palette.default.light,
          borderColor: theme.palette.default.light,
        },
        [`& .${sliderClasses.rail}`]: {
          backgroundColor: theme.palette.default.lowEmphasis.main,
        },
      },
    }),
    thumb: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        height: 32,
        width: 12,
        border: `1px solid ${theme.palette.default.main}`,
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
          backgroundColor: darken(
            theme.palette.common.white,
            theme.palette.action.hoverOpacity,
          ),
          boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
          border: `1px solid ${theme.palette[color].focusRing.inner}`,
          [`&.${sliderClasses.thumbSizeSmall}`]: {
            backgroundColor: theme.palette[color].hover,
          },
        },
        [`&.${sliderClasses.active}`]: {
          backgroundColor: darken(
            theme.palette.common.white,
            theme.palette.action.activatedOpacity,
          ),
          boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
          [`&.${sliderClasses.thumbSizeSmall}`]: {
            backgroundColor: theme.palette[color].active,
          },
        },
      }
    },
    rail: {
      // Widen the rail to create padding around the first and last mark.
      width: 'calc(100% + 10px)',
      transform: 'translate(-4px, -50%)',
    },
    track: {
      // Widen the track to create padding around the first and last mark.
      width: 'calc(100% + 10px)',
      transform: 'translate(-4px, -50%)',
    },
    sizeSmall: {
      height: 2,
      borderRadius: 2,
    },
    trackInverted: ({ ownerState: { color = 'primary' }, theme }) => {
      const paletteColor =
        theme.palette.mode === 'light'
          ? lighten(theme.palette[color].main, 0.62)
          : darken(theme.palette[color].main, 0.5)
      return {
        [`&.${sliderClasses.colorPrimary}`]: {
          [`& .${sliderClasses.track}`]: {
            backgroundColor: paletteColor,
            borderColor: paletteColor,
          },
          [`& .${sliderClasses.rail}`]: {
            backgroundColor: theme.palette.secondary.light,
          },
        },
      }
    },
    thumbSizeSmall: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        height: theme.spacing(3),
        width: theme.spacing(3),
        borderRadius: '50%',
        backgroundColor: theme.palette[color].main,
        border: 'none',
      }
    },
    colorPrimary: ({ ownerState: { size = 'medium' }, theme }) => {
      const color =
        size === 'medium'
          ? theme.palette.secondary.light
          : theme.palette.primary.main
      return {
        [`& .${sliderClasses.track}`]: {
          backgroundColor: color,
          borderColor: color,
        },
      }
    },
    mark: {
      height: 4,
      width: 4,
      borderRadius: '50%',
    },
    valueLabel: ({ theme }) => ({
      backgroundColor: theme.palette.tooltip,
    }),
  },
}
