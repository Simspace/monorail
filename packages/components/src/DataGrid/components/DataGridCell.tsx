import React from 'react'
import type { GridCellProps } from '@mui/x-data-grid'
import { GridCell } from '@mui/x-data-grid'
import type { GridGroupingColDefOverride } from '@mui/x-data-grid-premium'
import { useGridApiContext, useGridRootProps } from '@mui/x-data-grid-premium'

export const DataGridCell = React.forwardRef<HTMLDivElement, GridCellProps>(
  (props, ref) => {
    const { colIndex, rowId, field, width, height } = props
    const apiRef = useGridApiContext()
    const rootProps = useGridRootProps()

    const isFirstCell = React.useMemo(
      () => (rootProps.rowSelection ? colIndex === 1 : colIndex === 0),
      [rootProps, colIndex],
    )

    const isFullWidth = React.useMemo(
      () =>
        apiRef.current.getRowNode(rowId)?.type === 'group' &&
        (apiRef.current.getColumn(field) as GridGroupingColDefOverride)
          .fullWidth === true,
      [rowId, field, apiRef],
    )

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
      minHeight: height,
      maxHeight: height === 'auto' ? 'none' : height, // max-height doesn't support "auto"
    }

    if (!isFirstCell && isSiblingFullWidth) {
      return null
    }

    return (
      <GridCell
        ref={ref}
        {...props}
        data-colindex={isFullWidth ? `full-width-${colIndex}` : colIndex}
        style={style}
      />
    )
  },
)
