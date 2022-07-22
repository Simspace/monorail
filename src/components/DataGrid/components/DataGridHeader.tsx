import React from 'react'
import { useGridApiContext } from '@mui/x-data-grid-premium'

import { dataGridClasses } from '../internal'

export function DataGridHeader() {
  const apiRef = useGridApiContext()

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
