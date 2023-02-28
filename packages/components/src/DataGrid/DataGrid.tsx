/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import type { CSSInterpolation, Theme } from '@mui/material'
import type { SystemStyleObject } from '@mui/system'
import type {
  GridGroupingColDefOverride,
  GridGroupingColDefOverrideParams,
  GridSlotsComponent,
  GridSlotsComponentsProps,
} from '@mui/x-data-grid-premium'
import {
  GridBody,
  GridContextProvider,
  GridErrorHandler,
  GridFooterPlaceholder,
  GridHeaderPlaceholder,
  GridRoot,
} from '@mui/x-data-grid-premium'
import { useDataGridPremiumComponent } from '@mui/x-data-grid-premium/DataGridPremium/useDataGridPremiumComponent'
import { useDataGridPremiumProps } from '@mui/x-data-grid-premium/DataGridPremium/useDataGridPremiumProps'
import { getReleaseInfo } from '@mui/x-data-grid-premium/utils/releaseInfo'
import {
  DataGridProColumnHeaders,
  DataGridProVirtualScroller,
} from '@mui/x-data-grid-pro/internals'
import { useLicenseVerifier, Watermark } from '@mui/x-license-pro'

import { combineSxProps } from '@monorail/utils/sx'

import { Divider } from '../Divider.js'
import { DataGalleryBody } from './components/DataGallery/components/DataGalleryBody.js'
import { DataGalleryColumnHeaders } from './components/DataGallery/components/DataGalleryColumnHeaders.js'
import { DataGalleryVirtualScroller } from './components/DataGallery/components/DataGalleryVirtualScroller.js'
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

const releaseInfo = getReleaseInfo()

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
  const { localeText, components, columns, groupingColDef, componentsProps } =
    initProps

  const [viewStyle, setViewStyle] = React.useState<'table' | 'gallery'>('table')

  const handleViewStyleChange = React.useCallback(
    (
      _event: React.MouseEvent<HTMLElement>,
      newViewStyle: 'table' | 'gallery',
    ) => {
      setViewStyle(newViewStyle)
    },
    [],
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

  const componentsProp = React.useMemo<Partial<GridSlotsComponent>>(
    () => ({
      Footer: DataGridFooter,
      Row: DataGridRow,
      Header: DataGridHeader,
      ColumnResizeIcon: Divider,
      ...components,
    }),
    [components],
  )

  const componentsPropsProp = React.useMemo<Partial<GridSlotsComponentsProps>>(
    () => ({
      header: {
        ...componentsProps?.header,
        onViewStyleChange: handleViewStyleChange,
      },
      ...componentsProps,
    }),
    [componentsProps, handleViewStyleChange],
  )

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

  const props = useDataGridPremiumProps({
    ...initProps,
    disableColumnFilter: true,
    disableSelectionOnClick: true,
    columns: processedColumns,
    localeText: localeTextProp,
    components: componentsProp,
    groupingColDef: groupingColDefProp,
    componentsProps: componentsPropsProp,
  })

  const apiRef = useDataGridPremiumComponent(props.apiRef, props)

  const { sx, stripedRows } = props

  React.useImperativeHandle(props.apiRef, () => apiRef.current)

  const dataGridStyles = React.useCallback(
    (theme: Theme) => getDataGridStyles(stripedRows, theme),
    [stripedRows],
  )

  const sxProp = React.useMemo(
    () => combineSxProps(dataGridStyles, sx),
    [dataGridStyles, sx],
  )

  useLicenseVerifier('x-data-grid-premium', releaseInfo)

  return (
    <GridContextProvider apiRef={apiRef} props={props}>
      <GridRoot
        className={props.className}
        style={props.style}
        sx={sxProp}
        ref={ref}
      >
        <GridErrorHandler>
          <GridHeaderPlaceholder />
          {viewStyle === 'table' && (
            <GridBody
              ColumnHeadersComponent={DataGridProColumnHeaders}
              VirtualScrollerComponent={DataGridProVirtualScroller}
            >
              <Watermark
                packageName="x-data-grid-premium"
                releaseInfo={releaseInfo}
              />
            </GridBody>
          )}
          {viewStyle === 'gallery' && (
            <DataGalleryBody
              ColumnHeadersComponent={DataGalleryColumnHeaders}
              VirtualScrollerComponent={DataGalleryVirtualScroller}
            >
              <Watermark
                packageName="x-data-grid-premium"
                releaseInfo={releaseInfo}
              />
            </DataGalleryBody>
          )}
          <GridFooterPlaceholder />
        </GridErrorHandler>
      </GridRoot>
    </GridContextProvider>
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
