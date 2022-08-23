import { ComponentsOverrides } from '@mui/material/styles/overrides'
import { ComponentsProps } from '@mui/material/styles/props'
import { ComponentsVariants } from '@mui/material/styles/variants'

declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MonorailDialogHeader?: {
      defaultProps?: ComponentsProps['MonorailDialogHeader']
      styleOverrides?: ComponentsOverrides<Theme>['MonorailDialogHeader']
      variants?: ComponentsVariants['MonorailDialogHeader']
    }
  }
}

export {}
