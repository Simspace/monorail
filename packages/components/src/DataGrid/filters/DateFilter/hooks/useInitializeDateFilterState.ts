import React from 'react'
import type { IUtils } from '@date-io/core/IUtils'

import type { GridApi } from '../../../internal.js'
import { gridColumnLookupSelector } from '../../../internal.js'
import { dateFilterOperator } from '../constants.js'
import { getDateFilterInitialState } from '../models.js'

export function useInitializeDateFilterState(
  apiRef: React.MutableRefObject<GridApi>,
  adapter: IUtils<Date>,
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
      apiRef.current.state.dateFilter.set(
        field,
        getDateFilterInitialState(adapter),
      )
    }
  }, [apiRef, adapter, field, external])

  React.useEffect(() => {
    initState()
  }, [initState])

  initState()
}
