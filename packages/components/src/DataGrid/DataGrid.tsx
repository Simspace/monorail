import React from 'react'
import type { CSSInterpolation, Theme } from '@mui/material'
import type { SystemStyleObject } from '@mui/system'
import type {
  GridGroupingColDefOverride,
  GridGroupingColDefOverrideParams,
} from '@mui/x-data-grid-premium'
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
  const {
    columns,
    sx,
    groupingColDef,
    components,
    localeText,
    stripedRows,
    ...props
  } = initProps

  const apiRef = useGridApiRef()
  React.useImperativeHandle(props.apiRef, () => apiRef.current)

  const processedColumns: Array<GridEnrichedColDef> = React.useMemo(
    () =>
      columns.map(col => {
        const flex = col.type === 'actions' ? undefined : col.flex ?? 1
        return {
          originalColDef: col,
          disableColumnMenu: true,
          hideSortIcons: true,
          headerAlign: 'left',
          flex,
          ...col,
          renderHeader: DataGridColumnHeader,
        }
      }),
    [columns],
  )

  const dataGridStyles = React.useCallback(
    (theme: Theme) => getDataGridStyles(stripedRows, theme),
    [stripedRows],
  )

  const localeTextProp = React.useMemo(
    () => ({
      EnumFilter: ENUM_FILTER_DEFAULT_LOCALE_TEXT,
      TextFilter: TEXT_FILTER_DEFAULT_LOCALE_TEXT,
      NumericFilter: NUMERIC_FILTER_DEFAULT_LOCALE_TEXT,
      DateFilter: DATE_FILTER_DEFAULT_LOCALE_TEXT,
      ...localeText,
    }),
    [localeText],
  )

  const componentsProp = React.useMemo(
    () => ({
      Footer: DataGridFooter,
      Row: DataGridRow,
      Header: DataGridHeader,
      ColumnResizeIcon: Divider,
      ...components,
    }),
    [components],
  )

  const groupingColDefProp = React.useMemo(() => {
    const groupingColDefDefaults: GridGroupingColDefOverride = {
      renderHeader: DataGridColumnHeader,
      disableColumnMenu: true,
      hideSortIcons: true,
      headerAlign: 'left',
      flex: 1,
    }
    if (typeof groupingColDef === 'function') {
      return (params: GridGroupingColDefOverrideParams) => ({
        ...groupingColDefDefaults,
        ...groupingColDef(params),
      })
    } else {
      return {
        ...groupingColDefDefaults,
        ...groupingColDef,
      }
    }
  }, [groupingColDef])

  const sxProp = React.useMemo(
    () => combineSxProps(dataGridStyles, sx),
    [dataGridStyles, sx],
  )

  return (
    <DataGridPremium
      {...props}
      apiRef={apiRef}
      ref={ref}
      disableColumnFilter
      disableSelectionOnClick
      localeText={localeTextProp}
      columns={processedColumns}
      components={componentsProp}
      groupingColDef={groupingColDefProp}
      sx={sxProp}
    />
  )
})

function getDataGridStyles(
  stripedRows: boolean | undefined,
  theme: Theme,
): SystemStyleObject<Theme> {
  const overrides: CSSInterpolation = {}
  if (stripedRows === true) {
    overrides[`& .${dataGridClasses.row}:nth-of-type(even)`] = {
      backgroundColor: theme.palette.default.lowEmphasis.light,
    }
  }
  return overrides
}
