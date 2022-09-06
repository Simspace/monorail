import type { ResizableElementClasses } from '../resizableElementClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailResizableElement: ResizableElementClasses
  }
}

export {}
