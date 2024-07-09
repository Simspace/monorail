/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import type { DataGridPremiumProps } from '@mui/x-data-grid-premium'
import {
  GridBody,
  GridContextProvider,
  GridFooterPlaceholder,
  GridHeader,
  GridRoot,
} from '@mui/x-data-grid-premium'
// import { getReleaseInfo } from '@mui/x-data-grid-premium/utils/releaseInfo'
import { useLicenseVerifier, Watermark } from '@mui/x-license-pro'

import { getReleaseInfo } from '../DataGrid/internal.js'
import { DataGalleryBody } from './components/DataGallery/components/DataGalleryBody.js'
import { DataGalleryColumnHeaders } from './components/DataGallery/components/DataGalleryColumnHeaders.js'
import { DataGalleryVirtualScroller } from './components/DataGallery/components/DataGalleryVirtualScroller.js'
import { useDataGridComponent } from './hooks/useDataGridComponent.js'
import { useDataGridProps } from './hooks/useDataGridProps.js'
import type { GridValidRowModel } from './internal.js'

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
  props: DataGridPremiumProps<R> & React.RefAttributes<HTMLDivElement>,
) => React.ReactElement | null = React.forwardRef(function DataGrid(
  initProps: DataGridPremiumProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const props = useDataGridProps(initProps)

  const privateApiRef = useDataGridComponent(props.apiRef, props)

  useLicenseVerifier('x-data-grid-premium', releaseInfo)

  return (
    <GridContextProvider privateApiRef={privateApiRef} props={props}>
      <GridRoot
        className={props.className}
        style={props.style}
        sx={props.sx}
        ref={ref}
      >
        <GridHeader />
        {privateApiRef.current.state.viewStyle === 'table' && (
          <GridBody>
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
