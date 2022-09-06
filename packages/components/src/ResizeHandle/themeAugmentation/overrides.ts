import type { ResizeHandleClasses } from '../resizeHandleClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailResizeHandle: ResizeHandleClasses
  }
}

export {}
