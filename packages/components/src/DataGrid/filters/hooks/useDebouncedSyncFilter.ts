import React from 'react'
import type { GridApi } from '@mui/x-data-grid-premium'
import { SUBMIT_FILTER_STROKE_TIME } from '@mui/x-data-grid-premium'

import { useDebouncedCallback } from '@monorail/utils'

export function useDebouncedSyncFilter<S>(
  apiRef: React.MutableRefObject<GridApi>,
  name: string,
  field: string,
  state: S,
  check: (state: S) => boolean,
  before?: () => void,
): () => void {
  const callback = React.useCallback(() => {
    before?.()
    if (check(state)) {
      apiRef.current.upsertFilterItem({
        id: `${name}-${field}`,
        field,
        value: state,
        operator: name,
      })
    } else {
      apiRef.current.deleteFilterItem({
        id: `${name}-${field}`,
        field,
        value: null,
        operator: name,
      })
    }
  }, [apiRef, before, check, field, name, state])

  return useDebouncedCallback(callback, SUBMIT_FILTER_STROKE_TIME)
}
