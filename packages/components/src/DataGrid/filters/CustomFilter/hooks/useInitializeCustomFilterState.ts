import React from 'react'

import type { GridApi } from '../../../internal.js'
import type { CustomFilterDefinition } from '../models.js'

export function useInitializeCustomFilterState(
  apiRef: React.MutableRefObject<GridApi>,
  definition: Omit<CustomFilterDefinition, 'type'>,
  field: string,
): void {
  const initState = React.useCallback(() => {
    if (!apiRef.current.state.customFilter.has(field)) {
      apiRef.current.state.customFilter.set(field, definition.getInitialState())
    }
  }, [apiRef, field, definition])

  React.useEffect(() => {
    initState()
  }, [initState])

  initState()
}
