import React from 'react'
import { useGridApiContext } from '@mui/x-data-grid-premium'

import { useInitializeGridSubState } from '../hooks/useInitializeGridSubState.js'
import { dataGridClasses } from '../internal.js'

export function DataGridHeader() {
  const apiRef = useGridApiContext()

  useInitializeGridSubState(apiRef, 'textFilter', () => new Map())
  useInitializeGridSubState(apiRef, 'dateFilter', () => new Map())
  useInitializeGridSubState(apiRef, 'enumFilter', () => new Map())
  useInitializeGridSubState(apiRef, 'numericFilter', () => new Map())
  useInitializeGridSubState(apiRef, 'filterSubscriptions', () => new Map())

  const isGrouped = React.useMemo(
    () => apiRef.current.state.rowGrouping.model.length !== 0,
    [apiRef],
  )

  React.useEffect(() => {
    if (isGrouped) {
      apiRef.current.columnHeadersContainerElementRef?.current?.classList.add(
        dataGridClasses.grouped,
      )
    } else {
      apiRef.current.columnHeadersContainerElementRef?.current?.classList.remove(
        dataGridClasses.grouped,
      )
    }
  }, [apiRef, isGrouped])

  return null
}
