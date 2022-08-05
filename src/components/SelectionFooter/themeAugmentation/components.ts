import { ComponentsOverrides } from '@mui/material/styles/overrides'
import { ComponentsProps } from '@mui/material/styles/props'
import { ComponentsVariants } from '@mui/material/styles/variants'

declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MonorailSelectionFooter?: {
      defaultProps?: ComponentsProps['MonorailSelectionFooter']
      styleOverrides?: ComponentsOverrides<Theme>['MonorailSelectionFooter']
      variants?: ComponentsVariants['MonorailSelectionFooter']
    }
  }
}

export {}
