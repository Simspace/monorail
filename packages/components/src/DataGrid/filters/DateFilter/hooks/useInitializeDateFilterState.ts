import React from 'react'
import type { MuiPickersAdapter } from '@mui/x-date-pickers/internals'

import type { GridApi } from '../../../internal.js'
import { gridColumnLookupSelector } from '../../../internal.js'
import { dateFilterOperator } from '../constants.js'
import { getDateFilterInitialState } from '../models.js'

export function useInitializeDateFilterState(
  apiRef: React.MutableRefObject<GridApi>,
  adapter: MuiPickersAdapter<Date>,
  field: string,
  external?: boolean,
): void {
  const initState = React.useCallback(() => {
    const column = gridColumnLookupSelector(apiRef)[field]
    if (external !== true) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (
        !column.filterOperators?.find(operator => operator.value === 'date')
      ) {
        ;(column.filterOperators ??= []).push(dateFilterOperator)
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
