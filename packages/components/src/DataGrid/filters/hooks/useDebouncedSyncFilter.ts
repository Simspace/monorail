import React from 'react'
import { unstable_debounce } from '@mui/utils'
import type { GridApi } from '@mui/x-data-grid-premium'
import { SUBMIT_FILTER_STROKE_TIME } from '@mui/x-data-grid-premium'

export function useDebouncedSyncFilter<S>(
  apiRef: React.MutableRefObject<GridApi>,
  id: string,
  field: string,
  state: S,
  check: (state: S) => boolean,
  before?: () => void,
): () => void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(
    unstable_debounce(() => {
      before?.()
      if (check(state)) {
        apiRef.current.upsertFilterItem({
          id,
          columnField: field,
          value: state,
        })
      } else {
        apiRef.current.deleteFilterItem({
          id,
          columnField: field,
          value: null,
        })
      }
    }, SUBMIT_FILTER_STROKE_TIME),
    [],
  )
}
