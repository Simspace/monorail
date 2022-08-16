import React from 'react'

import { GridApi, gridColumnLookupSelector } from '../../../internal'
import { numericFilterOperator } from '../constants/numericFilterOperator'
import { getNumericFilterInitialState } from '../models'

export function useInitializeNumericFilterState(
  apiRef: React.MutableRefObject<GridApi>,
  field: string,
  external?: boolean,
): void {
  const initState = React.useCallback(() => {
    const column = gridColumnLookupSelector(apiRef)[field]
    if (external !== true) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!column.filterOperators?.includes(numericFilterOperator)) {
        column.filterOperators = [numericFilterOperator]
      }
    }
    if (!apiRef.current.state.numericFilter.has(field)) {
      apiRef.current.state.numericFilter.set(
        field,
        getNumericFilterInitialState(),
      )
    }
  }, [apiRef, field, external])

  React.useEffect(() => {
    initState()
  }, [initState])

  initState()
}