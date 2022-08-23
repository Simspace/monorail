import React from 'react'

import { GridApi, gridColumnLookupSelector } from '../../../internal'
import { dateFilterOperator } from '../constants'
import { getDateFilterInitialState } from '../models'

export function useInitializeDateFilterState(
  apiRef: React.MutableRefObject<GridApi>,
  field: string,
  external?: boolean,
): void {
  const initState = React.useCallback(() => {
    const column = gridColumnLookupSelector(apiRef)[field]
    if (external !== true) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!column.filterOperators?.includes(dateFilterOperator)) {
        column.filterOperators = [dateFilterOperator]
      }
    }
    if (!apiRef.current.state.dateFilter.has(field)) {
      apiRef.current.state.dateFilter.set(field, getDateFilterInitialState())
    }
  }, [apiRef, field, external])

  React.useEffect(() => {
    initState()
  }, [initState])

  initState()
}
