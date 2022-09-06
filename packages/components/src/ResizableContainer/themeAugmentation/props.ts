import type { ResizableContainerProps } from '../resizableContainerProps'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailResizableContainer: ResizableContainerProps
  }
}

export {}
