/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { Divider } from '@mui/material'
import type {
  GridColDef,
  GridSlotsComponent,
  GridValidRowModel,
} from '@mui/x-data-grid'
import type {
  DataGridPremiumProps,
  GridGroupingColDefOverride,
  GridGroupingColDefOverrideParams,
} from '@mui/x-data-grid-premium'
import { useDataGridPremiumProps } from '@mui/x-data-grid-premium/DataGridPremium/useDataGridPremiumProps'
import type { DataGridPremiumProcessedProps } from '@mui/x-data-grid-premium/models/dataGridPremiumProps'

import { DataGridColumnHeader } from '../components/DataGridColumnHeader.js'
import { DataGridFooter } from '../components/DataGridFooter.js'
import { DataGridHeader } from '../components/DataGridHeader.js'
import { DataGridRow } from '../components/DataGridRow.js'
import { DATE_FILTER_DEFAULT_LOCALE_TEXT } from '../filters/DateFilter.js'
import { ENUM_FILTER_DEFAULT_LOCALE_TEXT } from '../filters/EnumFilter.js'
import { NUMERIC_FILTER_DEFAULT_LOCALE_TEXT } from '../filters/NumericFilter.js'
import { TEXT_FILTER_DEFAULT_LOCALE_TEXT } from '../filters/TextFilter.js'

export function useDataGridProps<R extends GridValidRowModel>(
  initProps: DataGridPremiumProps<R>,
): DataGridPremiumProcessedProps {
  const { localeText, components, columns, groupingColDef } = initProps

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

  const componentsProp = React.useMemo<Partial<GridSlotsComponent>>(
    () => ({
      Footer: DataGridFooter,
      Row: DataGridRow,
      Toolbar: DataGridHeader,
      ColumnResizeIcon: Divider,
      ...components,
    }),
    [components],
  )

  const processedColumns: Array<GridColDef> = React.useMemo(
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

  return useDataGridPremiumProps({
    ...initProps,
    disableColumnFilter: true,
    disableRowSelectionOnClick: true,
    columns: processedColumns,
    localeText: localeTextProp,
    components: componentsProp,
    groupingColDef: groupingColDefProp,
    viewStyle: initProps.viewStyle ?? 'table',
  })
}
