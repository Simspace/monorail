import type { ComponentsOverrides } from '@mui/material/styles/overrides'
import type { ComponentsProps } from '@mui/material/styles/props'
import type { ComponentsVariants } from '@mui/material/styles/variants'

declare module '@mui/material/styles/components' {
  interface Components<Theme = unknown> {
    MonorailTextFilter?: {
      defaultProps?: ComponentsProps['MonorailTextFilter']
      styleOverrides?: ComponentsOverrides<Theme>['MonorailTextFilter']
      variants?: ComponentsVariants['MonorailTextFilter']
    }
    MonorailDateFilter?: {
      defaultProps?: ComponentsProps['MonorailDateFilter']
      styleOverrides?: ComponentsOverrides<Theme>['MonorailDateFilter']
      variants?: ComponentsVariants['MonorailDateFilter']
    }
  }
}

export {}
