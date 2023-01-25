import type { ComponentsOverrides } from '@mui/material/styles/overrides'
import type { ComponentsProps } from '@mui/material/styles/props'
import type { ComponentsVariants } from '@mui/material/styles/variants'

declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MonorailWidgetContent?: {
      defaultProps?: ComponentsProps['MonorailWidgetContent']
      styleOverrides?: ComponentsOverrides<Theme>['MonorailWidgetContent']
      variants?: ComponentsVariants['MonorailWidgetContent']
    }
  }
}

export {}
