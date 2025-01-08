import React from 'react'

import {
  gridColumnLookupSelector,
  useGridApiContext,
} from '../../../internal.js'
import { textFilterOperator } from '../constants.js'
import type { TextFilterOperator } from '../models/TextFilterOperator.js'
import { getTextFilterInitialState } from '../models/TextFilterState.js'

export function useInitializeTextFilterState(
  field: string,
  initialOperator: TextFilterOperator,
  external?: boolean,
): void {
  const apiRef = useGridApiContext()

  const initState = React.useCallback(() => {
    const column = gridColumnLookupSelector(apiRef)[field]
    if (external !== true) {
       
      if (
        !column.filterOperators?.find(operator => operator.value === 'text')
      ) {
        ;(column.filterOperators ??= []).push(textFilterOperator)
      }
    }
    if (!apiRef.current.state.textFilter.has(field)) {
      apiRef.current.state.textFilter.set(
        field,
        getTextFilterInitialState(initialOperator),
      )
    }
  }, [apiRef, field, initialOperator, external])

  React.useEffect(() => {
    initState()
  }, [initState])

  initState()
}
