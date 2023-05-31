/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { unstable_composeClasses as composeClasses } from '@mui/utils'
import type { GridEventListener, GridRowId } from '@mui/x-data-grid'
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

  React.useEffect(() => {
    return () => {
      clearTimeout(removeDnDStylesTimeout.current)
    }
  }, [])

  // TODO: remove sortModel check once row reorder is sorting compatible
  // remove treeDepth once row reorder is tree compatible
  const isRowReorderDisabled = React.useMemo((): boolean => {
    return !props.customRowReordering || !!sortModel.length
  }, [props.customRowReordering, sortModel])

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

      if (previousRowId.current !== params.id) {
        const currentRowIndex =
          dragRowNode.parent === GRID_ROOT_GROUP_ID
            ? apiRef.current.getRowIndexRelativeToVisibleRows(dragRowNode.id)
            : getRowIndexRelativeToGroup(dragRowNode.parent!, dragRowNode.id)

        const targetRowIndex =
          dragRowNode.parent === GRID_ROOT_GROUP_ID &&
          rowNode.parent === GRID_ROOT_GROUP_ID
            ? apiRef.current.getRowIndexRelativeToVisibleRows(rowNode.id)
            : getRowIndexRelativeToGroup(rowNode.parent, rowNode.id)

        previousRowElement.current?.classList.remove(
          dataGridClasses.rowDragOverBottom,
          dataGridClasses.rowDragOverTop,
        )
        if (
          targetRowIndex >= currentRowIndex &&
          dragRowNode.parent === rowNode.parent
        ) {
          rowElement?.classList.add(dataGridClasses.rowDragOverBottom)
        } else {
          rowElement?.classList.add(dataGridClasses.rowDragOverTop)
        }

        previousRowId.current = params.id
        previousRowElement.current = rowElement
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
        rowNode.type === 'group' ||
        rowNode.type === 'footer' ||
        rowNode.type === 'pinnedRow'
      ) {
        return
      }

      const targetRowIndex =
        dragRowNode.parent === GRID_ROOT_GROUP_ID &&
        rowNode.parent === GRID_ROOT_GROUP_ID
          ? apiRef.current.getRowIndexRelativeToVisibleRows(rowNode.id)
          : getRowIndexRelativeToGroup(rowNode.parent, rowNode.id)

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
        props.updateRowWhenReparented &&
          apiRef.current.publishEvent('rowEditCommit', dragRowNode.id)
      }

      const rowOrderChangeParams: GridRowOrderChangeParams = {
        row: apiRef.current.getRow(dragRowId)!,
        targetIndex: apiRef.current.getRowIndexRelativeToVisibleRows(params.id),
        oldIndex: originRowIndex.current!,
      }

      apiRef.current.publishEvent('rowOrderChange', rowOrderChangeParams)

      setDragRowId('')
    },
    [
      apiRef,
      dragRowId,
      isRowReorderDisabled,
      logger,
      getRowIndexRelativeToGroup,
      props.updateRowWhenReparented,
    ],
  )

  useGridApiEventHandler(apiRef, 'monorailRowDragStart', handleDragStart)
  useGridApiEventHandler(apiRef, 'monorailRowDragOver', handleDragOver)
  useGridApiEventHandler(apiRef, 'monorailRowDragEnd', handleDragEnd)
  useGridApiEventHandler(apiRef, 'cellDragOver', handleDragOver)
  useGridApiOptionHandler(apiRef, 'rowOrderChange', props.onRowOrderChange)
}
