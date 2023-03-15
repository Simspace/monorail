/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
import { useGridPrivateApiContext } from '@mui/x-data-grid/internals'
import { useGridRootProps } from '@mui/x-data-grid-premium'
import type { GridPrivateApiPremium } from '@mui/x-data-grid-premium/models/gridApiPremium'

import { dataGridClasses } from '../internal.js'
import type { DataGridToolbarProps } from './DataGridToolbar.js'
import { DataGridToolbar } from './DataGridToolbar.js'

export interface DataGridHeaderProps
  extends Omit<DataGridToolbarProps, 'children' | 'onViewStyleChange'> {
  renderChildren?: () => React.ReactNode
}

export function DataGridHeader(props: DataGridHeaderProps) {
  const apiRef = useGridPrivateApiContext<GridPrivateApiPremium>()
  const { hideToolbar, galleryProps } = useGridRootProps()

  const { renderChildren, disableViewStyleToggle, ...others } = props

  const isGrouped = React.useMemo(
    () => apiRef.current.state?.rowGrouping?.model.length !== 0,
    [apiRef],
  )

  React.useEffect(() => {
    if (isGrouped) {
      apiRef.current.columnHeadersContainerElementRef?.current?.classList.add(
        dataGridClasses.grouped,
      )
    } else {
      apiRef.current.columnHeadersContainerElementRef?.current?.classList.remove(
        dataGridClasses.grouped,
      )
    }
  }, [apiRef, isGrouped])

  if (hideToolbar !== true) {
    return (
      <DataGridToolbar
        {...others}
        disableViewStyleToggle={
          galleryProps === undefined || disableViewStyleToggle === true
        }
      >
        {renderChildren?.()}
      </DataGridToolbar>
    )
  }

  return null
}
