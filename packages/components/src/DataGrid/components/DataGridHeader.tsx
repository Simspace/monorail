import React from 'react'
import { useGridApiContext, useGridRootProps } from '@mui/x-data-grid-premium'

import { useInitializeGridSubState } from '../hooks/useInitializeGridSubState.js'
import { dataGridClasses } from '../internal.js'
import { DataGridToolbar } from './DataGridToolbar.js'

export interface DataGridHeaderProps {
  onViewStyleChange?: (
    event: React.MouseEvent<HTMLElement>,
    newViewStyle: 'table' | 'gallery',
  ) => void
}

export function DataGridHeader(props: DataGridHeaderProps) {
  const { onViewStyleChange } = props
  const apiRef = useGridApiContext()
  const { toolbar, galleryProps } = useGridRootProps()

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

  if (toolbar !== false) {
    return (
      <DataGridToolbar
        disableViewStyleToggle={galleryProps === undefined}
        onViewStyleChange={onViewStyleChange}
      />
    )
  }

  return null
}
