import React from 'react'
import type { GridCellProps } from '@mui/x-data-grid'
import { GridCell } from '@mui/x-data-grid'
import type { GridGroupingColDefOverride } from '@mui/x-data-grid-premium'
import { useGridApiContext, useGridRootProps } from '@mui/x-data-grid-premium'
import clsx from 'clsx'

import { dataGridClasses } from '@monorail/components/DataGrid/constants'

export const DataGridCell = React.forwardRef<HTMLDivElement, GridCellProps>(
  (props, ref) => {
    const { colIndex, rowId, width, column, className } = props
    const apiRef = useGridApiContext()
    const rootProps = useGridRootProps()

    const isFirstCell = React.useMemo(
      () => (rootProps.checkboxSelection ? colIndex === 1 : colIndex === 0),
      [rootProps, colIndex],
    )

    const isFullWidth = React.useMemo(() => {
      return (
        apiRef.current.getRowNode(rowId)?.type === 'group' &&
        (column as GridGroupingColDefOverride).fullWidth === true
      )
    }, [apiRef, rowId, column])

    const isSiblingFullWidth = React.useMemo(() => {
      const rowNode = apiRef.current.getRowNode(rowId)
      if (
        rowNode !== null &&
        rowNode.type === 'group' &&
        rowNode.groupingField !== null
      ) {
        const groupColDef = apiRef.current.getColumn(
          '__row_group_by_columns_group__',
        )
        return (groupColDef as GridGroupingColDefOverride).fullWidth === true
      }
      return false
    }, [apiRef, rowId])

    const style = {
      ...(!isFullWidth && {
        minWidth: width,
        maxWidth: width,
      }),
      ...(isFullWidth && {
        flex: 1,
      }),
    }

    if (!isFirstCell && isSiblingFullWidth) {
      return null
    }

    return (
      <GridCell
        ref={ref}
        {...props}
        className={clsx(
          className,
          isFullWidth && dataGridClasses.cellFullWidth,
        )}
        data-colindex={isFullWidth ? `full-width-${colIndex}` : colIndex}
        style={style}
      />
    )
  },
)
