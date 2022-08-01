import React from 'react'

import { gridColumnLookupSelector, useGridApiContext } from '../../../internal'
import { textFilterOperator } from '../constants'
import { TextFilterOperator } from '../models/TextFilterOperator'
import { getTextFilterInitialState } from '../models/TextFilterState'

export function useInitializeTextFilterState(
  field: string,
  initialOperator: TextFilterOperator,
): void {
  const apiRef = useGridApiContext()

  const initState = React.useCallback(() => {
    const column = gridColumnLookupSelector(apiRef)[field]
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!column.filterOperators?.includes(textFilterOperator)) {
      column.filterOperators = [textFilterOperator]
    }
    if (!apiRef.current.state.textFilter.has(field)) {
      apiRef.current.state.textFilter.set(
        field,
        getTextFilterInitialState(initialOperator),
      )
    }
  }, [apiRef, field, initialOperator])

  React.useEffect(() => {
    initState()
  }, [initState])

  initState()
}
