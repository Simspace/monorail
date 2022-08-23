import React from 'react'

import {
  dataGridClasses,
  GridRow,
  GridRowProps,
  useGridApiContext,
} from '../internal.js'

export function DataGridRow(props: GridRowProps) {
  const { rowId } = props
  const apiRef = useGridApiContext()

  const rowNode = apiRef.current.getRowNode(rowId)

  const isRowGroup = React.useMemo(() => {
    if (rowNode === null) {
      return false
    }
    return rowNode.groupingField !== null
  }, [rowNode])

  const className = isRowGroup ? dataGridClasses.grouped : undefined

  const handleClick = React.useCallback(
    (_event: React.MouseEvent<HTMLDivElement>) => {
      if (!rowNode || !isRowGroup) {
        return
      }
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      apiRef.current.setRowChildrenExpansion(rowId, !rowNode.childrenExpanded)
    },
    [apiRef, rowId, rowNode, isRowGroup],
  )

  return <GridRow className={className} onClick={handleClick} {...props} />
}
