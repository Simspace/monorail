import type { ComponentsOverrides } from '@mui/material/styles/overrides'
import type { ComponentsProps } from '@mui/material/styles/props'
import type { ComponentsVariants } from '@mui/material/styles/variants'

declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MonorailResizeHandle?: {
      defaultProps?: ComponentsProps['MonorailResizeHandle']
      styleOverrides?: ComponentsOverrides<Theme>['MonorailResizeHandle']
      variants?: ComponentsVariants['MonorailResizeHandle']
    }
  }
}

export {}
