import type { ComponentsOverrides } from '@mui/material/styles/overrides'
import type { ComponentsProps } from '@mui/material/styles/props'
import type { ComponentsVariants } from '@mui/material/styles/variants'

declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MonorailEmphaticFormControlLabel?: {
      defaultProps?: ComponentsProps['MonorailEmphaticFormControlLabel']
      styleOverrides?: ComponentsOverrides<Theme>['MonorailEmphaticFormControlLabel']
      variants?: ComponentsVariants['MonorailEmphaticFormControlLabel']
    }
  }
}

export {}
