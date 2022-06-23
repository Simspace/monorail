import type { CircularProgressProps as MuiCircularProgressProps } from '@mui/material'
// eslint-disable-next-line no-duplicate-imports
import { CircularProgress as MuiCircularProgress } from '@mui/material'

declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    inherit: false
    default: true
  }
}

export type CircularProgressProps = Omit<MuiCircularProgressProps, 'size'> & {
  size?: 'small' | 'medium' | 'large'
}

export const CircularProgress: (props: CircularProgressProps) => JSX.Element =
  MuiCircularProgress

export * from '@mui/material/CircularProgress'
