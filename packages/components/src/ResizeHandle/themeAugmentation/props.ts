import type { ResizeHandleProps } from '../resizeHandleProps'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailResizeHandle: ResizeHandleProps
  }
}

export {}
