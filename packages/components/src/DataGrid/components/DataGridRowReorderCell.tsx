/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import type { GridRenderCellParams } from '@mui/x-data-grid-premium'
import {
  getDataGridUtilityClass,
  useGridApiContext,
  useGridRootProps,
} from '@mui/x-data-grid-premium'
import type { DataGridProProcessedProps } from '@mui/x-data-grid-pro/models/dataGridProProps'

import { composeClasses } from '@monorail/utils'

import { useDataGridRowReorderingCell } from '../hooks/useDataGridRowReorderingCell.js'

type OwnerState = {
  classes?: DataGridProProcessedProps['classes']
  isDraggable: boolean
}

const useUtilityClasses = (ownerState: OwnerState) => {
  const { isDraggable, classes } = ownerState

  const slots = {
    root: ['rowReorderCell', isDraggable && 'rowReorderCell--draggable'],
    placeholder: ['rowReorderCellPlaceholder'],
  }

  return composeClasses(slots, getDataGridUtilityClass, classes)
}

export function DataGridRowReorderCell(params: GridRenderCellParams) {
  const apiRef = useGridApiContext()
  const rootProps = useGridRootProps()
  const cellValue = apiRef.current.getCellValue(params.id, '__reorder__')

  const { draggable, ...draggableEventHandlers } = useDataGridRowReorderingCell(
    params.id,
  )

  const ownerState = { isDraggable: draggable, classes: rootProps.classes }
  const classes = useUtilityClasses(ownerState)

  if (params.rowNode.type === 'footer' || params.rowNode.type === 'group') {
    return null
  }

  return (
    <div
      className={classes.root}
      draggable={draggable}
      {...draggableEventHandlers}
    >
      {params.colDef.originalColDef?.renderCell ? (
        params.colDef.originalColDef.renderCell(params)
      ) : (
        <React.Fragment>
          <rootProps.slots.rowReorderIcon />
          <div className={classes.placeholder}>{cellValue}</div>
        </React.Fragment>
      )}
    </div>
  )
}
