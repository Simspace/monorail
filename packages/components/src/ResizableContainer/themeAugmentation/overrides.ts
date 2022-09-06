import type { ResizableContainerClasses } from '../resizableContainerClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailResizableContainer: ResizableContainerClasses
  }
}

export {}
