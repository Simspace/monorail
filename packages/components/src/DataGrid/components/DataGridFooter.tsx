import React from 'react'
import { useGridVisibleRows } from '@mui/x-data-grid/internals'
import type { DataGridProcessedProps } from '@mui/x-data-grid/models/props/DataGridProps.js'
import type { DataGridPremiumProcessedProps } from '@mui/x-data-grid-premium/models/dataGridPremiumProps'
import type { GridApiPremium } from '@mui/x-data-grid-premium/models/gridApiPremium'

import { PaginationItem } from '@monorail/components/PaginationItem'
import { composeClasses, styled } from '@monorail/utils'

import type {
  PaginationProps,
  PaginationRenderItemParams,
} from '../../Pagination.js'
import { PaginationFooter } from '../../PaginationFooter.js'
import type { SelectChangeEvent } from '../../Select.js'
import { SelectionFooter } from '../../SelectionFooter.js'
import {
  getDataGridUtilityClass,
  gridExpandedRowCountSelector,
  gridFilteredTopLevelRowCountSelector,
  gridPageSelector,
  gridPageSizeSelector,
  gridRowCountSelector,
  useGridApiContext,
  useGridRootProps,
  useGridSelector,
} from '../internal.js'

export interface DataGridFooterProps extends PaginationProps {
  disablePageSizeSelect?: boolean
  disablePageButtons?: boolean
  hasNextPage?: boolean
  hasPreviousPage?: boolean
}

export function DataGridFooter(props: DataGridFooterProps) {
  const rootProps = useGridRootProps()
  if (rootProps.pagination === true) {
    return <DataGridPaginationFooter {...props} />
  } else {
    return <DataGridSimpleFooter />
  }
}

function DataGridSimpleFooter() {
  const apiRef = useGridApiContext()
  const shownCount = useGridSelector(
    apiRef,
    gridFilteredTopLevelRowCountSelector,
  )
  const rowCount = useGridSelector(apiRef, gridRowCountSelector)
  return (
    <SelectionFooter
      selectedCount={apiRef.current.state.rowSelection.length}
      shownCount={shownCount}
      totalCount={rowCount}
    />
  )
}

type OwnerState = DataGridProcessedProps

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState

  const slots = {
    root: ['footerContainer'],
  }

  return composeClasses(slots, getDataGridUtilityClass, classes)
}

const DataGridFooterRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'FooterContainer',
  overridesResolver: (props, styles) => styles.footerContainer,
})<{ ownerState: OwnerState }>(({ theme }) => ({
  backgroundColor: theme.palette.default.lowEmphasis.main,
  // TODO: codify this upper drop shadow
  boxShadow: '0 -2px 1px -1px rgba(0,0,0,.2)',
  padding: theme.spacing(1, 6),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}))

export function DataGridPaginationFooter(props: DataGridFooterProps) {
  const {
    disablePageSizeSelect,
    disablePageButtons,
    hasNextPage,
    hasPreviousPage,
    ...paginationProps
  } = props
  const apiRef = useGridApiContext()
  const rootProps = useGridRootProps()

  const classes = useUtilityClasses(rootProps)

  const page = useGridSelector(apiRef, gridPageSelector)
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector)

  const totalRowCount = useTotalRowCount(apiRef, rootProps)

  const visibleRows = useGridVisibleRows(apiRef, rootProps)

  const handlePageChange = React.useCallback(
    (_event: React.ChangeEvent<unknown>, page: number) => {
      apiRef.current.setPage(page - 1)
    },
    [apiRef],
  )

  const handlePageSizeChange = React.useCallback(
    (event: SelectChangeEvent<number>) => {
      apiRef.current.setPageSize(Number(event.target.value))
    },
    [apiRef],
  )

  const renderPaginationItem = React.useCallback(
    (params: PaginationRenderItemParams) => {
      if (disablePageButtons === true) {
        if (
          params.type === 'page' ||
          params.type === 'start-ellipsis' ||
          params.type === 'end-ellipsis'
        ) {
          return null
        }
      }

      if (params.type === 'next' && hasNextPage === false) {
        return <PaginationItem {...params} disabled />
      }

      if (params.type === 'previous' && hasPreviousPage === false) {
        return <PaginationItem {...params} disabled />
      }

      return <PaginationItem {...params} />
    },
    [disablePageButtons, hasNextPage, hasPreviousPage],
  )

  return (
    <DataGridFooterRoot ownerState={rootProps} className={classes.root}>
      <PaginationFooter
        totalItems={totalRowCount}
        selectedCount={
          rootProps.hideFooterSelectedRowCount === true
            ? undefined
            : apiRef.current.state.rowSelection.length
        }
        page={page + 1}
        onPageChange={handlePageChange}
        pageItems={visibleRows.rows.length}
        pageSize={pageSize}
        onPageSizeChange={
          disablePageSizeSelect === true ? undefined : handlePageSizeChange
        }
        pageSizeOptions={rootProps.pageSizeOptions}
        slotProps={{
          pagination: {
            ...paginationProps,
            renderItem: renderPaginationItem,
          },
        }}
      />
    </DataGridFooterRoot>
  )
}

function useTotalRowCount(
  apiRef: React.MutableRefObject<GridApiPremium>,
  rootProps: DataGridPremiumProcessedProps,
): number {
  const paginationMode = rootProps.paginationMode

  const visibleTopLevelRowCount = useGridSelector(
    apiRef,
    gridFilteredTopLevelRowCountSelector,
  )
  const clientRowCount = useGridSelector(apiRef, gridExpandedRowCountSelector)
  const totalRowCount = rootProps.rowCount ?? visibleTopLevelRowCount ?? 0

  if (paginationMode === 'client') {
    return clientRowCount
  } else {
    return totalRowCount
  }
}
