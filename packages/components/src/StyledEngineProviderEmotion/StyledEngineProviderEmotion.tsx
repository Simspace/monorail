 
import React from 'react'
import createCache from '@emotion/cache'
import type { EmotionCache } from '@emotion/react'
import { CacheProvider } from '@emotion/react'

import type { StyledEngineProviderProps } from '../StyledEngineContext/StyledEngineContext.js'
import { StyledEngineContext } from '../StyledEngineContext/StyledEngineContext.js'

export function StyledEngineProvider(props: StyledEngineProviderProps) {
  const { children, injectFirst, container } = props
  const cache = React.useRef<EmotionCache>(
    createCache({
      key: 'css',
      prepend: true,
      container,
    }),
  )

  return (
    <StyledEngineContext.Provider
      value={{
        StyledEngineProvider,
      }}
    >
      {injectFirst ? (
        <CacheProvider value={cache.current}>{props.children}</CacheProvider>
      ) : (
        children
      )}
    </StyledEngineContext.Provider>
  )
}
