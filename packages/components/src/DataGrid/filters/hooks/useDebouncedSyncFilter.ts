import React from 'react'
import type { GridApi } from '@mui/x-data-grid-premium'

import { useDebouncedCallback } from '@monorail/utils'

import { FILTER_DELAY_MS } from '../../constants/dataGridConstants.js'

export function useDebouncedSyncFilter<S>(
  apiRef: React.MutableRefObject<GridApi>,
  name: string,
  field: string,
  state: S,
  check: (state: S) => boolean,
  before?: () => void,
  // The filterDebounceMs is customizable through the "filterDebounceMs" prop (https://next.mui.com/x/api/data-grid/data-grid/#data-grid-prop-filterDebounceMs
  filterDebounceMs = FILTER_DELAY_MS,
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

  return useDebouncedCallback(callback, filterDebounceMs)
}
