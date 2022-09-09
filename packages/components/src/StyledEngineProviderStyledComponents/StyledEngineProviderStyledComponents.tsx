/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'

import type { StyledEngineProviderProps } from '../StyledEngineContext/StyledEngineContext'
import { StyledEngineContext } from '../StyledEngineContext/StyledEngineContext.js'

export function StyledEngineProvider(props: StyledEngineProviderProps) {
  const { injectFirst, children, container } = props

  if (injectFirst && typeof window !== 'undefined') {
    const head = container ?? document.head
    if (!head.querySelector('[data-styled="active"]')) {
      const injectFirstNode = document.createElement('style')
      injectFirstNode.setAttribute('data-styled', 'active')
      head.insertBefore(injectFirstNode, head.firstChild)
    }
  }

  return (
    <StyledEngineContext.Provider
      value={{
        StyledEngineProvider,
      }}
    >
      {children}
    </StyledEngineContext.Provider>
  )
}
