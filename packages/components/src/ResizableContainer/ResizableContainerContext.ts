import React from 'react'

import type { ResizableContainerDirection } from './resizableContainerProps.js'

export interface ResizableContainerContext {
  groupId: string
  groupElement: React.RefObject<HTMLDivElement>
  direction: ResizableContainerDirection
  register: (cb: () => void) => void
  unregister: (cb: () => void) => void
}

export const ResizableContainerContext =
  React.createContext<ResizableContainerContext | null>(null)

export function useResizableContainerContext(): ResizableContainerContext {
  const context = React.useContext(ResizableContainerContext)

  if (context === null) {
    throw new Error('[Monorail] ResizableContainerContext not found')
  }

  return context
}
