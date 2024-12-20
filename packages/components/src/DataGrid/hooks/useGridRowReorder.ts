 
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { unstable_composeClasses as composeClasses } from '@mui/utils'
import type {
  GridEventListener,
  GridGroupNode,
  GridRowId,
} from '@mui/x-data-grid'
import {
  getDataGridUtilityClass,
  GRID_ROOT_GROUP_ID,
  gridSortModelSelector,
  useGridApiEventHandler,
  useGridApiOptionHandler,
  useGridLogger,
  useGridSelector,
} from '@mui/x-data-grid'
import { gridEditRowsStateSelector } from '@mui/x-data-grid/internals'
import type { DataGridPremiumProcessedProps } from '@mui/x-data-grid-premium/models/dataGridPremiumProps'
import type { DataGridProProcessedProps } from '@mui/x-data-grid-pro/models/dataGridProProps'
import type { GridPrivateApiPro } from '@mui/x-data-grid-pro/models/gridApiPro'
import type { GridRowOrderChangeParams } from '@mui/x-data-grid-pro/models/gridRowOrderChangeParams'

import { dataGridClasses } from '../constants/dataGridClasses.js'

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
    DataGridPremiumProcessedProps,
    | 'customRowReordering'
    | 'onRowOrderChange'
    | 'classes'
    | 'updateRowWhenReparented'
    | 'pagination'
    | 'paginationMode'
    | 'isRowReorderable'
  >,
): void => {
  const logger = useGridLogger(apiRef, 'useGridRowReorder')
  const sortModel = useGridSelector(apiRef, gridSortModelSelector)
  const dragRowElement = React.useRef<HTMLElement | null>(null)
  const originRowIndex = React.useRef<number | null>(null)
  const removeDnDStylesTimeout = React.useRef<any>()
  const ownerState = { classes: props.classes }
  const classes = useUtilityClasses(ownerState)
  const [dragRowId, setDragRowId] = React.useState<GridRowId>('')

  const previousRowId = React.useRef<GridRowId | null>(null)
  const previousRowElement = React.useRef<HTMLElement | null>(null)

  const isRowReorderable = React.useMemo(
    () => props.isRowReorderable ?? (() => true),
    [props.isRowReorderable],
  )

  React.useEffect(() => {
    return () => {
      clearTimeout(removeDnDStylesTimeout.current)
    }
  }, [])

  const isRowReorderDisabled = React.useMemo((): boolean => {
    return (
      !props.customRowReordering ||
      (props.customRowReordering === true && !!sortModel.length)
    )
  }, [props.customRowReordering, sortModel])

  const getRowIndexRelativeToGroup = React.useCallback(
    (
      group: GridRowId,
      id: GridRowId,
      currentAbsoluteRowIndex: number,
      targetAbsoluteRowIndex: number,
    ) => {
      const groupNode = apiRef.current.getRowNode(group)
      if (!groupNode) {
        return -1
      }
      if (groupNode.type !== 'group') {
        return -1
      }

      const index = groupNode.children.findIndex(childId => childId === id)

      if (targetAbsoluteRowIndex > currentAbsoluteRowIndex) {
        return index + 1
      }

      return index
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

      dragRowElement.current = event.currentTarget
      dragRowElement.current.classList.add(classes.rowDragging)

      setDragRowId(params.id)

      removeDnDStylesTimeout.current = setTimeout(() => {
        dragRowElement.current!.classList.remove(classes.rowDragging)
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

      const rowElement = apiRef.current.getRowElement(params.id)

      if (
        !dragRowNode ||
        !rowNode ||
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

      if (previousRowId.current !== params.id) {
        const currentAbsoluteRowIndex =
          apiRef.current.getRowIndexRelativeToVisibleRows(dragRowNode.id)
        const targetAbsoluteRowIndex =
          apiRef.current.getRowIndexRelativeToVisibleRows(rowNode.id)

        previousRowElement.current?.classList.remove(
          dataGridClasses.rowDragOverBottom,
          dataGridClasses.rowDragOverTop,
        )
        if (targetAbsoluteRowIndex >= currentAbsoluteRowIndex) {
          rowElement?.classList.add(dataGridClasses.rowDragOverBottom)
        } else {
          rowElement?.classList.add(dataGridClasses.rowDragOverTop)
        }

        previousRowId.current = params.id
        previousRowElement.current = rowElement
      }
    },
    [dragRowId, apiRef, logger],
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
      dragRowElement.current = null
      previousRowElement.current?.classList.remove(
        dataGridClasses.rowDragOverBottom,
        dataGridClasses.rowDragOverTop,
      )

      if (previousRowId.current === null) {
        return
      }

      const dragRowNode = apiRef.current.getRowNode(dragRowId)
      const rowNode = apiRef.current.getRowNode(previousRowId.current)

      if (
        !dragRowNode ||
        !rowNode ||
        rowNode.type === 'footer' ||
        rowNode.type === 'pinnedRow'
      ) {
        return
      }

      const currentAbsoluteRowIndex =
        apiRef.current.getRowIndexRelativeToVisibleRows(dragRowNode.id)
      const targetAbsoluteRowIndex =
        apiRef.current.getRowIndexRelativeToVisibleRows(rowNode.id)

      if (
        !isRowReorderable(
          dragRowId,
          apiRef.current.getRowIdFromRowIndex(targetAbsoluteRowIndex),
        )
      ) {
        return
      }

      if (rowNode.type === 'group' && rowNode.parent === GRID_ROOT_GROUP_ID) {
        let targetGroupNode: GridGroupNode | undefined

        if (targetAbsoluteRowIndex >= currentAbsoluteRowIndex) {
          targetGroupNode = rowNode
        } else {
          for (const rowId of apiRef.current.getSortedRowIds()) {
            const node = apiRef.current.getRowNode(rowId)
            if (!node) {
              continue
            }
            if (node.id === rowNode.id) {
              break
            }
            if (node.type === 'group' && node.id !== GRID_ROOT_GROUP_ID) {
              targetGroupNode = node
            }
          }
        }

        if (!targetGroupNode) {
          return
        }

        const targetRowIndex =
          currentAbsoluteRowIndex < targetAbsoluteRowIndex
            ? 0
            : targetGroupNode.children.length

        apiRef.current.setRowIndexWithNewParent(
          dragRowId,
          targetRowIndex,
          targetGroupNode.id,
        )

        const rowOrderChangeParams: GridRowOrderChangeParams = {
          row: apiRef.current.getRow(dragRowId)!,
          rowId: dragRowId,
          targetRowId: rowNode.id,
          targetIndex: targetRowIndex,
          oldIndex: originRowIndex.current!,
          oldParent: dragRowNode.parent,
          newParent: targetGroupNode.id,
        }

        apiRef.current.publishEvent('rowOrderChange', rowOrderChangeParams)
      } else if (rowNode.type !== 'group') {
        const targetIndex =
          dragRowNode.parent === GRID_ROOT_GROUP_ID &&
          rowNode.parent === GRID_ROOT_GROUP_ID
            ? apiRef.current.getRowIndexRelativeToVisibleRows(rowNode.id)
            : getRowIndexRelativeToGroup(
                rowNode.parent,
                rowNode.id,
                currentAbsoluteRowIndex,
                targetAbsoluteRowIndex,
              )

        apiRef.current.setRowIndexWithNewParent(
          dragRowId,
          targetIndex,
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
        }

        const rowOrderChangeParams: GridRowOrderChangeParams = {
          row: apiRef.current.getRow(dragRowId)!,
          rowId: dragRowId,
          targetRowId: rowNode.id,
          targetIndex,
          oldIndex: originRowIndex.current!,
          ...(dragRowNode.parent !== rowNode.parent && {
            oldParent: dragRowNode.parent,
            newParent: rowNode.parent,
          }),
        }

        apiRef.current.publishEvent('rowOrderChange', rowOrderChangeParams)
      }

      setDragRowId('')
    },
    [
      apiRef,
      dragRowId,
      isRowReorderDisabled,
      logger,
      getRowIndexRelativeToGroup,
      isRowReorderable,
    ],
  )

  useGridApiEventHandler(apiRef, 'monorailRowDragStart', handleDragStart)
  useGridApiEventHandler(apiRef, 'monorailRowDragOver', handleDragOver)
  useGridApiEventHandler(apiRef, 'monorailRowDragEnd', handleDragEnd)
  useGridApiEventHandler(apiRef, 'cellDragOver', handleDragOver)
  useGridApiOptionHandler(apiRef, 'rowOrderChange', props.onRowOrderChange)
}
