import { LinearProgress as MuiLinearProgress } from '@mui/material'

declare module '@mui/material/LinearProgress' {
  interface LinearProgressPropsColorOverrides {
    inherit: false
    default: true
  }
  interface LinearProgressProps {
    size?: 'small' | 'medium'
  }
}

export const LinearProgress: typeof MuiLinearProgress = MuiLinearProgress

export * from '@mui/material/LinearProgress'
