import React from 'react'
import { CSSInterpolation, MenuItemProps, Theme } from '@mui/material'
import { SystemStyleObject } from '@mui/system'
import { DataGridPremium, useGridApiRef } from '@mui/x-data-grid-premium'

import { Divider } from '../Divider'
import { DataGridColumnHeader } from './components/DataGridColumnHeader'
import { DataGridFooter } from './components/DataGridFooter'
import { DataGridHeader } from './components/DataGridHeader'
import { DataGridRow } from './components/DataGridRow'
import {
  dataGridClasses,
  DataGridProps,
  GridEnrichedColDef,
  GridValidRowModel,
} from './internal'

interface HeaderActionsParams {
  closeMenu: () => void
}

declare module '@mui/x-data-grid/models/colDef/gridColDef' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  interface GridColDef<R extends GridValidRowModel = any, V = any, F = V> {
    /** @internal */
    originalColDef?: GridEnrichedColDef<R, V, F>
    headerActions?: (
      params: HeaderActionsParams,
    ) => ReadonlyArray<React.ReactElement<MenuItemProps>>
  }
}

declare module '@mui/x-data-grid-premium/models/dataGridPremiumProps' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  interface DataGridPremiumProps<R extends GridValidRowModel = any> {
    stripedRows?: boolean
  }
}

export const DataGrid: <R extends GridValidRowModel>(
  props: DataGridProps<R> & React.RefAttributes<HTMLDivElement>,
) => React.ReactElement | null = React.forwardRef(function DataGrid(
  initProps: DataGridProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const { columns, sx, ...props } = initProps

  const apiRef = useGridApiRef()
  React.useImperativeHandle(props.apiRef, () => apiRef.current)

  const processedColumns: Array<GridEnrichedColDef> = React.useMemo(
    () =>
      columns.map(col => ({
        ...col,
        originalColDef: col,
        renderHeader: DataGridColumnHeader,
        disableColumnMenu: true,
        hideSortIcons: true,
        headerAlign: 'left',
        flex: 1,
      })),
    [columns],
  )

  const dataGridStyles = React.useCallback(
    (theme: Theme) => getDataGridStyles(initProps, theme),
    [initProps],
  )

  return (
    <DataGridPremium
      {...props}
      disableSelectionOnClick
      apiRef={apiRef}
      ref={ref}
      columns={processedColumns}
      components={{
        Footer: DataGridFooter,
        Row: DataGridRow,
        Header: DataGridHeader,
        ColumnResizeIcon: Divider,
      }}
      groupingColDef={{
        renderHeader: DataGridColumnHeader,
        disableColumnMenu: true,
        hideSortIcons: true,
        headerAlign: 'left',
        flex: 1,
      }}
      sx={[
        dataGridStyles,
        ...(sx !== undefined ? (Array.isArray(sx) ? sx : [sx]) : []),
      ]}
    />
  )
})

function getDataGridStyles(
  props: DataGridProps,
  theme: Theme,
): SystemStyleObject<Theme> {
  const overrides: CSSInterpolation = {}
  if (props.stripedRows === true) {
    overrides[`& .${dataGridClasses.row}:nth-of-type(even)`] = {
      backgroundColor: theme.palette.default.mediumEmphasis.main,
    }
  }
  return overrides
}
