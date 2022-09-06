import React from 'react'

import type { ResizeEventEmitter } from './ResizeEventEmitter.js'

export interface ResizableContainerContext {
  events: ResizeEventEmitter
  direction: 'row' | 'column'
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
