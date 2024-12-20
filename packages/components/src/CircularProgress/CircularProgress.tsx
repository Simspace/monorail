import type { CircularProgressProps as MuiCircularProgressProps } from '@mui/material'
import { CircularProgress as MuiCircularProgress } from '@mui/material'

declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    inherit: false
    default: true
    secondary: false
  }
}

export type CircularProgressProps = Omit<MuiCircularProgressProps, 'size'> & {
  size?: 'small' | 'medium' | 'large'
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
 * - [Circular Progress](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/feedback-circularprogress--default)
 * - [Progress](https://mui.com/material-ui/react-progress/)
 *
 * API:
 *
 * - [CircularProgress API](https://mui.com/material-ui/api/circular-progress/)
 */
export const CircularProgress: (props: CircularProgressProps) => JSX.Element =
  MuiCircularProgress

export * from '@mui/material/CircularProgress'
