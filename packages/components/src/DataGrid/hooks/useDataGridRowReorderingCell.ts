/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import type { GridRowId } from '@mui/x-data-grid'
import type { GridRowEventLookup } from '@mui/x-data-grid-premium'
import {
  gridSortModelSelector,
  useGridApiContext,
  useGridRootProps,
  useGridSelector,
} from '@mui/x-data-grid-premium'
import { gridEditRowsStateSelector } from '@mui/x-data-grid-pro/internals'

export function useDataGridRowReorderingCell(id: GridRowId) {
  const apiRef = useGridApiContext()
  const rootProps = useGridRootProps()
  const sortModel = useGridSelector(apiRef, gridSortModelSelector)
  const editRowsState = useGridSelector(apiRef, gridEditRowsStateSelector)

  const isDraggable = React.useMemo(
    () =>
      !!rootProps.customRowReordering &&
      !sortModel.length &&
      Object.keys(editRowsState).length === 0,
    [rootProps.customRowReordering, sortModel, editRowsState],
  )

  const publish = React.useCallback(
    (
        eventName: keyof GridRowEventLookup,
        propHandler?: React.MouseEventHandler<HTMLDivElement> | undefined,
      ): React.MouseEventHandler<HTMLDivElement> =>
      event => {
        // Ignore portal
        // The target is not an element when triggered by a Select inside the cell
        // See https://github.com/mui/material-ui/issues/10534
        if (
          (event.target as any).nodeType === 1 &&
          !event.currentTarget.contains(event.target as Element)
        ) {
          return
        }

        // The row might have been deleted
        if (!apiRef.current.getRow(id)) {
          return
        }

        apiRef.current.publishEvent(
          eventName,
          apiRef.current.getRowParams(id),
          event,
        )

        if (propHandler) {
          propHandler(event)
        }
      },
    [apiRef, id],
  )

  const draggableEventHandlers = {
    onDragStart: publish('monorailRowDragStart'),
    onDragOver: publish('monorailRowDragOver'),
    onDragEnd: publish('monorailRowDragEnd'),
  }

  return {
    draggable: isDraggable,
    ...draggableEventHandlers,
  }
}
