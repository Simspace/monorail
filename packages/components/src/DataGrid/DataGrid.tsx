import React from 'react'
import type { CSSInterpolation, Theme } from '@mui/material'
import type { SystemStyleObject } from '@mui/system'
import { DataGridPremium, useGridApiRef } from '@mui/x-data-grid-premium'

import { combineSxProps } from '@monorail/utils/sx'

import { Divider } from '../Divider.js'
import { DataGridColumnHeader } from './components/DataGridColumnHeader.js'
import { DataGridFooter } from './components/DataGridFooter.js'
import { DataGridHeader } from './components/DataGridHeader.js'
import { DataGridRow } from './components/DataGridRow.js'
import { DATE_FILTER_DEFAULT_LOCALE_TEXT } from './filters/DateFilter.js'
import { ENUM_FILTER_DEFAULT_LOCALE_TEXT } from './filters/EnumFilter.js'
import { NUMERIC_FILTER_DEFAULT_LOCALE_TEXT } from './filters/NumericFilter.js'
import { TEXT_FILTER_DEFAULT_LOCALE_TEXT } from './filters/TextFilter.js'
import type {
  DataGridProps,
  GridEnrichedColDef,
  GridValidRowModel,
} from './internal.js'
import { dataGridClasses } from './internal.js'

/**
 * Displays complex data in a scannable structure composed of columns, rows, headers, and cells.
 *
 * Demos:
 *
 * - [DataGrid](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook//?path=/docs/data-grid-datagrid--default)
 * - [DataGrid (MUI)](https://mui.com/x/react-data-grid/demo/)
 *
 * API:
 *
 * - [DataGrid API](https://mui.com/x/api/data-grid/)
 */
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
      apiRef={apiRef}
      ref={ref}
      disableColumnFilter
      disableSelectionOnClick
      localeText={{
        EnumFilter: ENUM_FILTER_DEFAULT_LOCALE_TEXT,
        TextFilter: TEXT_FILTER_DEFAULT_LOCALE_TEXT,
        NumericFilter: NUMERIC_FILTER_DEFAULT_LOCALE_TEXT,
        DateFilter: DATE_FILTER_DEFAULT_LOCALE_TEXT,
        ...props.localeText,
      }}
      columns={processedColumns}
      components={{
        Footer: DataGridFooter,
        Row: DataGridRow,
        Header: DataGridHeader,
        ColumnResizeIcon: Divider,
        ...props.components,
      }}
      groupingColDef={{
        renderHeader: DataGridColumnHeader,
        disableColumnMenu: true,
        hideSortIcons: true,
        headerAlign: 'left',
        flex: 1,
      }}
      sx={combineSxProps(dataGridStyles, sx)}
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
      backgroundColor: theme.palette.default.lowEmphasis.main,
    }
  }
  return overrides
}
