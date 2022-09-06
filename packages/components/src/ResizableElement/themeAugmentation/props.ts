import type { ResizableElementProps } from '../resizableElementProps'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailResizableElement: ResizableElementProps
  }
}

export {}
