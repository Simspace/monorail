import React from 'react'
import { CSSInterpolation, MenuItemProps, Theme } from '@mui/material'
import { SystemStyleObject } from '@mui/system'
import { DataGridPremium, useGridApiRef } from '@mui/x-data-grid-premium'

import { combineSxProps } from '../../utils/sx'
import { Divider } from '../Divider'
import { DataGridColumnHeader } from './components/DataGridColumnHeader'
import { DataGridFooter } from './components/DataGridFooter'
import { DataGridHeader } from './components/DataGridHeader'
import { DataGridRow } from './components/DataGridRow'
import {
  DATE_FILTER_DEFAULT_LOCALE_TEXT,
  DateFilterLocaleText,
} from './filters/DateFilter'
import {
  ENUM_FILTER_DEFAULT_LOCALE_TEXT,
  EnumFilterLocaleText,
} from './filters/EnumFilter'
import {
  NUMERIC_FILTER_DEFAULT_LOCALE_TEXT,
  NumericFilterLocaleText,
} from './filters/NumericFilter'
import {
  TEXT_FILTER_DEFAULT_LOCALE_TEXT,
  TextFilterLocaleText,
} from './filters/TextFilter'
import {
  dataGridClasses,
  DataGridProps,
  GridEnrichedColDef,
  GridValidRowModel,
} from './internal'
import { GridColumnFilterDefinition } from './models/GridColumnFilterDefinition'

interface HeaderActionsParams {
  closeMenu: () => void
}

declare module '@mui/x-data-grid/models/api/gridLocaleTextApi' {
  interface GridLocaleText {
    TextFilter: TextFilterLocaleText
    EnumFilter: EnumFilterLocaleText
    NumericFilter: NumericFilterLocaleText
    DateFilter: DateFilterLocaleText
  }
}

declare module '@mui/x-data-grid/models/colDef/gridColDef' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  interface GridColDef<R extends GridValidRowModel = any, V = any, F = V> {
    /** @internal */
    originalColDef?: GridEnrichedColDef<R, V, F>
    headerActions?: (
      params: HeaderActionsParams,
    ) => ReadonlyArray<React.ReactElement<MenuItemProps>>
    filter?: GridColumnFilterDefinition<R, V, F>
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
      backgroundColor: theme.palette.default.mediumEmphasis.main,
    }
  }
  return overrides
}
