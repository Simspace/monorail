/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { unstable_composeClasses as composeClasses } from '@mui/utils'
import type { GridEventListener, GridRowId } from '@mui/x-data-grid'
import {
  getDataGridUtilityClass,
  gridSortModelSelector,
  useGridApiEventHandler,
  useGridApiOptionHandler,
  useGridLogger,
  useGridSelector,
} from '@mui/x-data-grid'
import { gridEditRowsStateSelector } from '@mui/x-data-grid/internals'
import type { DataGridProProcessedProps } from '@mui/x-data-grid-pro/models/dataGridProProps'
import type { GridPrivateApiPro } from '@mui/x-data-grid-pro/models/gridApiPro'
import type { GridRowOrderChangeParams } from '@mui/x-data-grid-pro/models/gridRowOrderChangeParams'

type OwnerState = { classes: DataGridProProcessedProps['classes'] }

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState

  const slots = {
    rowDragging: ['row--dragging'],
  }

  return composeClasses(slots, getDataGridUtilityClass, classes)
}

/**
 * Only available in DataGridPro
 * @requires useGridRows (method)
 */
export const useGridRowReorder = (
  apiRef: React.MutableRefObject<GridPrivateApiPro>,
  props: Pick<
    DataGridProProcessedProps,
    'rowReordering' | 'onRowOrderChange' | 'classes'
  >,
): void => {
  const logger = useGridLogger(apiRef, 'useGridRowReorder')
  const sortModel = useGridSelector(apiRef, gridSortModelSelector)
  const dragRowNode = React.useRef<HTMLElement | null>(null)
  const originRowIndex = React.useRef<number | null>(null)
  const removeDnDStylesTimeout = React.useRef<any>()
  const ownerState = { classes: props.classes }
  const classes = useUtilityClasses(ownerState)
  const [dragRowId, setDragRowId] = React.useState<GridRowId>('')

  React.useEffect(() => {
    return () => {
      clearTimeout(removeDnDStylesTimeout.current)
    }
  }, [])

  // TODO: remove sortModel check once row reorder is sorting compatible
  // remove treeDepth once row reorder is tree compatible
  const isRowReorderDisabled = React.useMemo((): boolean => {
    return !props.rowReordering || !!sortModel.length
  }, [props.rowReordering, sortModel])

  const getRowIndexRelativeToGroup = React.useCallback(
    (group: GridRowId, id: GridRowId) => {
      const groupNode = apiRef.current.getRowNode(group)
      if (!groupNode) {
        return -1
      }
      if (groupNode.type !== 'group') {
        return -1
      }
      return groupNode.children.findIndex(childId => childId === id)
    },
    [apiRef],
  )

  const handleDragStart = React.useCallback<GridEventListener<'rowDragStart'>>(
    (params, event) => {
      // Call the gridEditRowsStateSelector directly to avoid infnite loop
      const editRowsState = gridEditRowsStateSelector(apiRef.current.state)
      if (isRowReorderDisabled || Object.keys(editRowsState).length !== 0) {
        return
      }

      logger.debug(`Start dragging row ${params.id}`)
      // Prevent drag events propagation.
      // For more information check here https://github.com/mui/mui-x/issues/2680.
      event.stopPropagation()

      dragRowNode.current = event.currentTarget
      dragRowNode.current.classList.add(classes.rowDragging)

      setDragRowId(params.id)

      removeDnDStylesTimeout.current = setTimeout(() => {
        dragRowNode.current!.classList.remove(classes.rowDragging)
      })

      originRowIndex.current = apiRef.current.getRowIndexRelativeToVisibleRows(
        params.id,
      )
    },
    [isRowReorderDisabled, classes.rowDragging, logger, apiRef],
  )

  const handleDragOver = React.useCallback<
    GridEventListener<'cellDragOver' | 'rowDragOver'>
  >(
    (params, event) => {
      if (dragRowId === '') {
        return
      }

      const dragRowNode = apiRef.current.getRowNode(dragRowId)
      const rowNode = apiRef.current.getRowNode(params.id)

      if (
        !dragRowNode ||
        !rowNode ||
        rowNode.type === 'group' ||
        rowNode.type === 'footer' ||
        rowNode.type === 'pinnedRow'
      ) {
        return
      }

      logger.debug(`Dragging over row ${params.id}`)

      event.preventDefault()
      // Prevent drag events propagation.
      // For more information check here https://github.com/mui/mui-x/issues/2680.
      event.stopPropagation()

      if (params.id !== dragRowId || dragRowNode.parent !== rowNode.parent) {
        const targetRowIndex = getRowIndexRelativeToGroup(
          rowNode.parent,
          params.id,
        )
        apiRef.current.setRowIndexWithNewParent(
          dragRowId,
          targetRowIndex,
          dragRowNode.parent !== rowNode.parent ? rowNode.parent : undefined,
        )
        if (dragRowNode.parent !== rowNode.parent) {
          apiRef.current.publishEvent('rowParentChange', {
            rowParams: {
              id: dragRowNode.id,
              row: apiRef.current.getRow(dragRowId),
              columns: apiRef.current.getAllColumns(),
            },
            oldParent: dragRowNode.parent!,
            newParent: rowNode.parent,
          })
          apiRef.current.publishEvent('rowEditCommit', dragRowNode.id)
        }
      }
    },
    [dragRowId, apiRef, logger, getRowIndexRelativeToGroup],
  )

  const handleDragEnd = React.useCallback<GridEventListener<'rowDragEnd'>>(
    (params, event): void => {
      // Call the gridEditRowsStateSelector directly to avoid infnite loop
      const editRowsState = gridEditRowsStateSelector(apiRef.current.state)
      if (
        dragRowId === '' ||
        isRowReorderDisabled ||
        Object.keys(editRowsState).length !== 0
      ) {
        return
      }

      logger.debug('End dragging row')
      event.preventDefault()
      // Prevent drag events propagation.
      // For more information check here https://github.com/mui/mui-x/issues/2680.
      event.stopPropagation()

      clearTimeout(removeDnDStylesTimeout.current)
      dragRowNode.current = null

      // Check if the row was dropped outside the grid.
      if (event.dataTransfer.dropEffect === 'none') {
        // Accessing params.field may contain the wrong field as header elements are reused
        apiRef.current.setRowIndex(dragRowId, originRowIndex.current!)
        originRowIndex.current = null
      } else {
        // Emit the rowOrderChange event only once when the reordering stops.
        const rowOrderChangeParams: GridRowOrderChangeParams = {
          row: apiRef.current.getRow(dragRowId)!,
          targetIndex: apiRef.current.getRowIndexRelativeToVisibleRows(
            params.id,
          ),
          oldIndex: originRowIndex.current!,
        }

        apiRef.current.publishEvent('rowOrderChange', rowOrderChangeParams)
      }

      setDragRowId('')
    },
    [isRowReorderDisabled, logger, apiRef, dragRowId],
  )

  useGridApiEventHandler(apiRef, 'rowDragStart', handleDragStart)
  useGridApiEventHandler(apiRef, 'rowDragOver', handleDragOver)
  useGridApiEventHandler(apiRef, 'rowDragEnd', handleDragEnd)
  useGridApiEventHandler(apiRef, 'cellDragOver', handleDragOver)
  useGridApiOptionHandler(apiRef, 'rowOrderChange', props.onRowOrderChange)
}
