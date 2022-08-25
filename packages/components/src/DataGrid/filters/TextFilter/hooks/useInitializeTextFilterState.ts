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
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!column.filterOperators?.includes(textFilterOperator)) {
        column.filterOperators = [textFilterOperator]
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
