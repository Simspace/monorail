import React from 'react'

import type { ResizableContainerOrientation } from './resizableContainerProps.js'
import type { ResizeEventTarget } from './ResizeEventTarget.js'

export interface ResizableContainerContext {
  events: ResizeEventTarget
  orientation: ResizableContainerOrientation
}

export const ResizableContainerContext =
  React.createContext<ResizableContainerContext>(null!)

export function useResizableContainerContext(): ResizableContainerContext {
  const context = React.useContext(ResizableContainerContext)
  if (context === null) {
    throw new Error(
      'Monorail: ResizableContainerContext uninitialized or not found.',
    )
  }
  return context
}
