/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import type { CSSInterpolation, Theme } from '@mui/material'
import type { SystemStyleObject } from '@mui/system'
import type { DataGridPremiumProps } from '@mui/x-data-grid-premium'
import {
  GridBody,
  GridContextProvider,
  GridFooterPlaceholder,
  GridHeader,
  gridPinnedColumnsSelector,
  GridRoot,
  useGridSelector,
} from '@mui/x-data-grid-premium'
import { getReleaseInfo } from '@mui/x-data-grid-premium/utils/releaseInfo'
import { DataGridProVirtualScroller } from '@mui/x-data-grid-pro/internals'
import { useLicenseVerifier, Watermark } from '@mui/x-license-pro'

import { combineSxProps } from '@monorail/utils/sx'

import { DataGalleryBody } from './components/DataGallery/components/DataGalleryBody.js'
import { DataGalleryColumnHeaders } from './components/DataGallery/components/DataGalleryColumnHeaders.js'
import { DataGalleryVirtualScroller } from './components/DataGallery/components/DataGalleryVirtualScroller.js'
import { useDataGridComponent } from './hooks/useDataGridComponent.js'
import { useDataGridProps } from './hooks/useDataGridProps.js'
import type { GridValidRowModel } from './internal.js'
import { dataGridClasses } from './internal.js'

const releaseInfo = getReleaseInfo()

/**
 * Displays complex data in a scannable structure composed of columns, rows, headers, and cells.
 *
 * Demos:
 *
 * - [DataGrid](https://simspace.github.io/monorail/main/storybook/?path=/docs/data-grid-datagrid--default)
 * - [DataGrid (MUI)](https://mui.com/x/react-data-grid/demo/)
 *
 * API:
 *
 * - [DataGrid API](https://mui.com/x/api/data-grid/)
 */
export const DataGrid: <R extends GridValidRowModel>(
  props: DataGridPremiumProps<R> & React.RefAttributes<HTMLDivElement>,
) => React.ReactElement | null = React.forwardRef(function DataGrid(
  initProps: DataGridPremiumProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const props = useDataGridProps(initProps)

  const privateApiRef = useDataGridComponent(props.apiRef, props)

  const { sx, stripedRows } = props

  const dataGridStyles = React.useCallback(
    (theme: Theme) => getDataGridStyles(stripedRows, theme),
    [stripedRows],
  )

  const sxProp = React.useMemo(
    () => combineSxProps(dataGridStyles, sx),
    [dataGridStyles, sx],
  )

  const pinnedColumns = useGridSelector(
    privateApiRef,
    gridPinnedColumnsSelector,
  )

  useLicenseVerifier('x-data-grid-premium', releaseInfo)

  return (
    <GridContextProvider privateApiRef={privateApiRef} props={props}>
      <GridRoot
        className={props.className}
        style={props.style}
        sx={sxProp}
        ref={ref}
      >
        <GridHeader />
        {privateApiRef.current.state.viewStyle === 'table' && (
          <GridBody
            VirtualScrollerComponent={DataGridProVirtualScroller}
            ColumnHeadersProps={{ pinnedColumns }}
          >
            <Watermark
              packageName="x-data-grid-premium"
              releaseInfo={releaseInfo}
            />
          </GridBody>
        )}
        {privateApiRef.current.state.viewStyle === 'gallery' && (
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
