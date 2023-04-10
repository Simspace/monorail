import { TimelineDot as MuiTimelineDot } from '@mui/lab'
import type {} from '@mui/lab/themeAugmentation'

declare module '@mui/lab/TimelineDot' {
  interface TimelineDotPropsColorOverrides {
    secondary: false
  }
}

/**
 *
 * Demos:
 *
 * - [Timeline](https://simspace.github.io/monorail/main/storybook/?path=/docs/data-display-timeline--default)
 * - [Timeline (MUI)](https://mui.com/material-ui/react-timeline/)
 *
 * API:
 *
 * - [TimelineDot API](https://mui.com/material-ui/api/timeline-dot/)
 */
export const TimelineDot: typeof MuiTimelineDot = MuiTimelineDot

export * from '@mui/lab/TimelineDot'
