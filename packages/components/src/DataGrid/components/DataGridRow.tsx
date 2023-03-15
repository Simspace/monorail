import React from 'react'

import type { GridRowProps } from '../internal.js'
import { dataGridClasses, GridRow, useGridApiContext } from '../internal.js'

export function DataGridRow(props: GridRowProps) {
  const { rowId } = props
  const apiRef = useGridApiContext()

  const rowNode = apiRef.current.getRowNode(rowId)

  const isRowGroup = React.useMemo(() => {
    if (rowNode === null || rowNode.type !== 'group') {
      return false
    }
    return rowNode.groupingField !== null
  }, [rowNode])

  const className = isRowGroup ? dataGridClasses.grouped : undefined

  const handleClick = React.useCallback(
    (_event: React.MouseEvent<HTMLDivElement>) => {
      if (!rowNode || rowNode.type !== 'group' || !isRowGroup) {
        return
      }
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      apiRef.current.setRowChildrenExpansion(rowId, !rowNode.childrenExpanded)
    },
    [apiRef, rowId, rowNode, isRowGroup],
  )

  return <GridRow className={className} onClick={handleClick} {...props} />
}
