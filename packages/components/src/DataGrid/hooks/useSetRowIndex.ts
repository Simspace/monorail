/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import type { GridGroupNode, GridRowId } from '@mui/x-data-grid'
import {
  GRID_ROOT_GROUP_ID,
  gridRowTreeSelector,
  useGridLogger,
} from '@mui/x-data-grid'
import type { GridPrivateApiPro } from '@mui/x-data-grid-pro/models/gridApiPro'

export function useSetRowIndex(
  apiRef: React.MutableRefObject<GridPrivateApiPro>,
) {
  const logger = useGridLogger(apiRef, 'useSetRowIndex')

  const setRowIndex = React.useCallback(
    (
      rowId: GridRowId,
      targetIndex: number,
      newParent: GridRowId | undefined,
    ) => {
      const node = apiRef.current.getRowNode(rowId)

      if (!node) {
        throw new Error(`MUI: No row with id #${rowId} found`)
      }

      if (node.type !== 'leaf') {
        throw new Error(
          `MUI: The row reordering do not support reordering of footer or grouping rows`,
        )
      }

      apiRef.current.setState(state => {
        if (newParent) {
          if (newParent === GRID_ROOT_GROUP_ID) {
            return state
          }

          const originalGroup = gridRowTreeSelector(
            state,
            apiRef.current.instanceId,
          )[node.parent] as GridGroupNode

          const newGroup = gridRowTreeSelector(
            state,
            apiRef.current.instanceId,
          )[newParent] as GridGroupNode

          const oldRows = originalGroup.children
          const oldIndex = oldRows.findIndex(row => row === rowId)

          if (oldIndex === -1 || oldIndex === targetIndex) {
            return state
          }

          const updatedOldGroup = [...originalGroup.children]
          const updatedNewGroup = [...newGroup.children]

          const newRowNode = {
            ...gridRowTreeSelector(state, apiRef.current.instanceId)[rowId],
            parent: newParent,
          }

          updatedNewGroup.splice(
            targetIndex,
            0,
            updatedOldGroup.splice(oldIndex, 1)[0],
          )

          logger.debug(
            `Moving row ${rowId} to index ${targetIndex} in parent ${newParent}`,
          )

          return {
            ...state,
            rows: {
              ...state.rows,
              dataRowIdToModelLookup: {
                ...state.rows.dataRowIdToModelLookup,
                [rowId]: {
                  ...state.rows.dataRowIdToModelLookup[rowId],
                  [newGroup.groupingField!]: newGroup.groupingKey,
                },
              },
              tree: {
                ...state.rows.tree,
                [rowId]: newRowNode,
                [node.parent]: {
                  ...originalGroup,
                  children: updatedOldGroup,
                },
                [newParent]: {
                  ...newGroup,
                  children: updatedNewGroup,
                },
              },
            },
          }
        } else {
          const group = gridRowTreeSelector(state, apiRef.current.instanceId)[
            node.parent
          ] as GridGroupNode
          const allRows = group.children
          const oldIndex = allRows.findIndex(row => row === rowId)

          if (oldIndex === -1 || oldIndex === targetIndex) {
            return state
          }

          logger.debug(`Moving row ${rowId} to index ${targetIndex}`)

          const updatedRows = [...allRows]
          updatedRows.splice(targetIndex, 0, updatedRows.splice(oldIndex, 1)[0])
          return {
            ...state,
            rows: {
              ...state.rows,
              tree: {
                ...state.rows.tree,
                [node.parent]: {
                  ...group,
                  children: updatedRows,
                },
              },
            },
          }
        }
      })
      apiRef.current.publishEvent('rowsSet')
    },
    [apiRef, logger],
  )

  // @ts-expect-error
  apiRef.current.setRowIndex = setRowIndex
  apiRef.current.setRowIndexWithNewParent = setRowIndex
}
