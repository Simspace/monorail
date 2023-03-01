/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react'
import { useGridApiContext, useGridRootProps } from '@mui/x-data-grid-premium'

import { useInitializeGridSubState } from '../hooks/useInitializeGridSubState.js'
import { dataGridClasses } from '../internal.js'
import type { DataGridToolbarProps } from './DataGridToolbar.js'
import { DataGridToolbar } from './DataGridToolbar.js'

export interface DataGridHeaderProps
  extends Omit<DataGridToolbarProps, 'children'> {
  renderChildren?: () => JSX.Element
}

export function DataGridHeader(props: DataGridHeaderProps) {
  const apiRef = useGridApiContext()
  const { hideToolbar, galleryProps } = useGridRootProps()

  const { renderChildren, disableViewStyleToggle, ...others } = props

  useInitializeGridSubState(apiRef, 'textFilter', () => new Map())
  useInitializeGridSubState(apiRef, 'dateFilter', () => new Map())
  useInitializeGridSubState(apiRef, 'enumFilter', () => new Map())
  useInitializeGridSubState(apiRef, 'numericFilter', () => new Map())
  useInitializeGridSubState(apiRef, 'filterSubscriptions', () => new Map())
  useInitializeGridSubState(apiRef, 'viewStyle', () => 'table' as const)
  useInitializeGridSubState(apiRef, 'toolbarSearchValue', () => '')

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
