import type { ComponentsOverrides } from '@mui/material/styles/overrides'
import type { ComponentsProps } from '@mui/material/styles/props'
import type { ComponentsVariants } from '@mui/material/styles/variants'

declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MonorailSearch?: {
      defaultProps?: ComponentsProps['MonorailSearch']
      styleOverrides?: ComponentsOverrides<Theme>['MonorailSearch']
      variants?: ComponentsVariants['MonorailSearch']
    }
  }
}

export {}
