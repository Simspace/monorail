import { LinearProgress as MuiLinearProgress } from '@mui/material'

declare module '@mui/material/LinearProgress' {
  interface LinearProgressPropsColorOverrides {
    inherit: false
    default: true
    secondary: false
  }
  interface LinearProgressProps {
    size?: 'small' | 'medium'
  }
}

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 *
 * Demos:
 *
 * - [Linear Progress](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/feedback-linearprogress--default)
 * - [Progress (MUI)](https://mui.com/material-ui/react-progress/)
 *
 * API:
 *
 * - [LinearProgress API](https://mui.com/material-ui/api/linear-progress/)
 */
export const LinearProgress: typeof MuiLinearProgress = MuiLinearProgress

export * from '@mui/material/LinearProgress'
