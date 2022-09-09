import React from 'react'

export interface StyledEngineProviderProps {
  children?: React.ReactNode
  container?: HTMLElement
  injectFirst?: boolean
}

export interface StyledEngineContext {
  StyledEngineProvider: React.ComponentType<StyledEngineProviderProps>
}

export const StyledEngineContext = React.createContext<StyledEngineContext>(
  null!,
)

export function useStyledEngineContext(): StyledEngineContext {
  const context = React.useContext(StyledEngineContext)
  if (context === null) {
    throw new Error(
      'Monorail: StyledEngineContext is not provided or is uninitialized',
    )
  }
  return context
}
