 
import React from 'react'
import { StyleSheetManager } from 'styled-components'

import type { StyledEngineProviderProps } from '../StyledEngineContext/StyledEngineContext'
import { StyledEngineContext } from '../StyledEngineContext/StyledEngineContext.js'

export function StyledEngineProvider(props: StyledEngineProviderProps) {
  const { injectFirst, children: childrenProp, container } = props

  if (injectFirst && typeof window !== 'undefined') {
    const head = container ?? document.head
    if (!head.querySelector('[data-styled="active"]')) {
      const injectFirstNode = document.createElement('style')
      injectFirstNode.setAttribute('data-styled', 'active')
      head.insertBefore(injectFirstNode, head.firstChild)
    }
  }

  const children =
    container !== undefined ? (
      <StyleSheetManager target={container}>
        <React.Fragment>{childrenProp}</React.Fragment>
      </StyleSheetManager>
    ) : (
      childrenProp
    )

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
