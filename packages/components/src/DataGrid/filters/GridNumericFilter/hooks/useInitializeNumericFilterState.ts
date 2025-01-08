import React from 'react'

import { numericFilterOperator } from '@monorail/components/NumericFilter'

import type { GridApi } from '../../../internal.js'
import { gridColumnLookupSelector } from '../../../internal.js'
import { getNumericFilterInitialState } from '../models.js'

export function useInitializeNumericFilterState(
  apiRef: React.MutableRefObject<GridApi>,
  field: string,
  external?: boolean,
): void {
  const initState = React.useCallback(() => {
    const column = gridColumnLookupSelector(apiRef)[field]
    if (external !== true) {
       
      if (
        !column.filterOperators?.find(operator => operator.value === 'numeric')
      ) {
        ;(column.filterOperators ??= []).push(numericFilterOperator)
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
