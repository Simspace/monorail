import React from 'react'

import {
  gridColumnLookupSelector,
  useGridApiContext,
} from '../../../internal.js'
import { enumFilterOperator } from '../constants.js'
import { getEnumFilterInitialState } from '../models.js'

interface UseInitializeEnumFilterStateParams {
  field: string
  compare?: (rowValue: unknown, filterValue: unknown) => boolean
  external?: boolean
}

export function useInitializeEnumFilterState({
  field,
  compare,
  external,
}: UseInitializeEnumFilterStateParams): void {
  const apiRef = useGridApiContext()

  const initState = React.useCallback(() => {
    const column = gridColumnLookupSelector(apiRef)[field]
    if (external !== true) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (
        !column.filterOperators?.find(operator => operator.value === 'enum')
      ) {
        ;(column.filterOperators ??= []).push(enumFilterOperator)
      }
    }
    if (!apiRef.current.state.enumFilter.has(field)) {
      apiRef.current.state.enumFilter.set(
        field,
        getEnumFilterInitialState({ compare }),
      )
    }
  }, [apiRef, field, external, compare])

  React.useEffect(() => {
    initState()
  }, [initState])

  initState()
}
