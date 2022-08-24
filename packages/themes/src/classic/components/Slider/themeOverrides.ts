import { Components, sliderClasses, Theme } from '@mui/material'

export const MonorailSliderOverrides: Components<Theme>['MuiSlider'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      height: 20,
      borderRadius: 2,
      padding: theme.spacing(2.5, 0), // Resizes click target to 40px (medium) and 24px (small)
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
          backgroundColor: theme.palette.default.lowEmphasis.light,
          boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
          border: `1px solid ${theme.palette[color].focusRing.inner}`,
          [`&.${sliderClasses.thumbSizeSmall}`]: {
            backgroundColor:
              color === 'secondary'
                ? theme.palette.secondary.shades[700]
                : theme.palette[color].hover,
          },
        },
        [`&.${sliderClasses.active}`]: {
          backgroundColor: theme.palette.default.lowEmphasis.dark,
          boxShadow: `0 0 0 4px ${theme.palette[color].focusRing.outer}`,
          [`&.${sliderClasses.thumbSizeSmall}`]: {
            backgroundColor:
              color === 'secondary'
                ? theme.palette.secondary.shades[800]
                : theme.palette[color].active,
          },
        },
      }
    },
    rail: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        // Widen the rail to create padding around the first and last mark.
        width: 'calc(100% + 10px)',
        transform: 'translate(-4px, -50%)',
        backgroundColor: theme.palette[color].shades[300],
        opacity: 1,
      }
    },
    track: {
      // Widen the track to create padding around the first and last mark.
      width: 'calc(100% + 10px)',
      transform: 'translate(-4px, -50%)',
    },
    sizeSmall: {
      height: 8,
      borderRadius: 8,
    },
    trackInverted: ({ theme }) => ({
      [`&.${sliderClasses.colorPrimary}`]: {
        [`& .${sliderClasses.track}`]: {
          backgroundColor: theme.palette.primary.shades[300],
          borderColor: theme.palette.primary.shades[300],
        },
        [`& .${sliderClasses.rail}`]: {
          backgroundColor: theme.palette.primary.shades[600],
        },
      },
      [`&.${sliderClasses.colorSecondary}`]: {
        [`& .${sliderClasses.track}`]: {
          backgroundColor: theme.palette.secondary.shades[300],
          borderColor: theme.palette.secondary.shades[300],
        },
        [`& .${sliderClasses.rail}`]: {
          backgroundColor: theme.palette.secondary.shades[600],
        },
      },
    }),
    thumbSizeSmall: ({ ownerState, theme }) => {
      const color = ownerState.color ?? 'primary'
      return {
        height: 20,
        width: 20,
        borderRadius: '50%',
        backgroundColor:
          color === 'secondary'
            ? theme.palette.secondary.shades[600]
            : theme.palette[color].main,
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
    },
  },
}
