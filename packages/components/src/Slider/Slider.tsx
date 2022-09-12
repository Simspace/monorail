import { Slider as MuiSlider } from '@mui/material'

declare module '@mui/material/Slider' {
  interface SliderPropsColorOverrides {
    secondary: false
  }
}

/**
 *
 * Demos:
 *
 * - [Slider](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-slider--default)
 * - [Slider (MUI)](https://mui.com/material-ui/react-slider/)
 *
 * API:
 *
 * - [Slider API](https://mui.com/material-ui/api/slider/)
 * - inherits [SliderUnstyled API](https://mui.com/base/api/slider-unstyled/)
 */
export const Slider: typeof MuiSlider = MuiSlider

export * from '@mui/material/Slider'
