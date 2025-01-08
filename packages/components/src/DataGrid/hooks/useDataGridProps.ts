 
import React from 'react'
import type {
  GridColDef,
  GridRowClassNameParams,
  GridValidRowModel,
} from '@mui/x-data-grid'
import type {
  DataGridPremiumProps,
  GridGroupingColDefOverride,
  GridGroupingColDefOverrideParams,
} from '@mui/x-data-grid-premium'
import { useDataGridPremiumProps } from '@mui/x-data-grid-premium/DataGridPremium/useDataGridPremiumProps'
import type { DataGridPremiumProcessedProps } from '@mui/x-data-grid-premium/models/dataGridPremiumProps'
import clsx from 'clsx'

import { NUMERIC_FILTER_DEFAULT_LOCALE_TEXT } from '@monorail/components/NumericFilter'
import { useTheme } from '@monorail/utils'

import { DataGridCell } from '../components/DataGridCell.js'
import { DataGridColumnHeader } from '../components/DataGridColumnHeader.js'
import { DataGridColumnSeparator } from '../components/DataGridColumnSeparator.js'
import { DataGridFooter } from '../components/DataGridFooter.js'
import { DataGridHeader } from '../components/DataGridHeader.js'
import { DataGridRow } from '../components/DataGridRow.js'
import { DataGridRowReorderCell } from '../components/DataGridRowReorderCell.js'
import { DATE_FILTER_DEFAULT_LOCALE_TEXT } from '../filters/DateFilter.js'
import { ENUM_FILTER_DEFAULT_LOCALE_TEXT } from '../filters/GridEnumFilter.js'
import { TEXT_FILTER_DEFAULT_LOCALE_TEXT } from '../filters/TextFilter.js'

export function useDataGridProps<R extends GridValidRowModel>(
  initProps: DataGridPremiumProps<R>,
): DataGridPremiumProcessedProps {
  const { localeText, slots, slotProps, columns, groupingColDef } = initProps

  const theme = useTheme()

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

  const slotsProp = React.useMemo<DataGridPremiumProps['slots']>(
    () => ({
      footer: DataGridFooter,
      row: DataGridRow,
      toolbar: DataGridHeader,
      columnResizeIcon: DataGridColumnSeparator,
      cell: DataGridCell,
      ...slots,
    }),
    [slots],
  )

  const slotPropsProp = React.useMemo<DataGridPremiumProps['slotProps']>(
    () => ({
      ...slotProps,
      baseSelect: {
        native: false,
        variant: 'outlined',
        ...theme.components?.MuiSelect?.defaultProps,
        ...slotProps?.baseSelect,
      },
      baseTextField: {
        variant: 'outlined',
        InputProps: theme.components?.MuiOutlinedInput?.defaultProps,
        ...theme.components?.MuiTextField?.defaultProps,
        ...slotProps?.baseTextField,
      },
    }),
    [slotProps, theme],
  )

  const processedColumns: Array<GridColDef> = React.useMemo(
    () =>
      columns.map(col => {
        const flex =
          col.type === 'actions' || col.field === '__reorder__'
            ? undefined
            : col.flex ?? 1
        return {
          originalColDef: col,
          disableColumnMenu: true,
          hideSortIcons: true,
          headerAlign: 'left',
          flex,
          ...col,
          renderHeader: DataGridColumnHeader,
          ...(col.field === '__reorder__' && {
            renderCell: DataGridRowReorderCell,
          }),
        }
      }),
    [columns],
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

  const getRowClassName = React.useCallback(
    (params: GridRowClassNameParams) => {
      let rowClassName = ''
      if (initProps.getRowClassName) {
        rowClassName = initProps.getRowClassName(params)
      }
      if (initProps.stripedRows === true) {
        rowClassName = clsx(
          rowClassName,
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd',
        )
      }

      return rowClassName
    },
    [initProps],
  )

  const pageSizeOptions = initProps.pageSizeOptions ?? [20, 50, 100]

  return useDataGridPremiumProps({
    ...initProps,
    disableColumnFilter: true,
    disableRowSelectionOnClick: true,
    columns: processedColumns,
    localeText: localeTextProp,
    slots: slotsProp,
    slotProps: slotPropsProp,
    groupingColDef: groupingColDefProp,
    viewStyle: initProps.viewStyle ?? 'table',
    filter: initProps.filter ?? 'column',
    getRowClassName,
    pageSizeOptions,
  })
}
