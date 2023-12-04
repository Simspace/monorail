import React from 'react'
import { useGridVisibleRows } from '@mui/x-data-grid/internals'
import type { DataGridProcessedProps } from '@mui/x-data-grid/models/props/DataGridProps.js'
import type { DataGridPremiumProcessedProps } from '@mui/x-data-grid-premium/models/dataGridPremiumProps'
import type { GridApiPremium } from '@mui/x-data-grid-premium/models/gridApiPremium'

import { PaginationItem } from '@monorail/components/PaginationItem'
import {
  combineSxProps,
  composeClasses,
  styled,
  useLatch,
  usePrevious,
} from '@monorail/utils'

import { Box } from '../../Box.js'
import { FormControlLabel } from '../../FormControlLabel.js'
import { MenuItem } from '../../MenuItem.js'
import type {
  PaginationProps,
  PaginationRenderItemParams,
} from '../../Pagination.js'
import { Pagination } from '../../Pagination.js'
import type { SelectChangeEvent } from '../../Select.js'
import { Select } from '../../Select.js'
import { SelectionFooter } from '../../SelectionFooter.js'
import { Stack } from '../../Stack.js'
import { Typography } from '../../Typography.js'
import {
  dataGridClasses,
  getDataGridUtilityClass,
  gridExpandedRowCountSelector,
  gridFilteredTopLevelRowCountSelector,
  gridPageCountSelector,
  gridPageSelector,
  gridPageSizeSelector,
  gridRowCountSelector,
  gridRowsLoadingSelector,
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
  padding: theme.spacing(0, 6),
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
  const clientPageCount = useGridSelector(apiRef, gridPageCountSelector)
  const totalRowCount = useGridSelector(apiRef, gridRowCountSelector)
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector)

  const paginationMode = rootProps.paginationMode

  const { firstRow, lastRow, totalRows } = useGridRowRange(apiRef, rootProps)

  const pageCount = React.useMemo(() => {
    if (paginationMode === 'client') {
      return clientPageCount
    }

    if (paginationMode === 'server') {
      if (pageSize > 0 && totalRowCount > 0) {
        return Math.ceil(totalRowCount / pageSize)
      }

      return 0
    }
  }, [clientPageCount, pageSize, paginationMode, totalRowCount])

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
      <Box display="flex" flex="1 1 0" alignItems="center">
        {rootProps.hideFooterSelectedRowCount !== true && (
          <Typography
            variant="body2"
            className={dataGridClasses.selectedRowCount}
          >
            {apiRef.current.state.rowSelection.length} Selected
          </Typography>
        )}
      </Box>
      <Pagination
        count={pageCount}
        page={page + 1}
        onChange={handlePageChange}
        siblingCount={1}
        renderItem={renderPaginationItem}
        {...paginationProps}
        sx={combineSxProps(
          theme => ({
            display: 'flex',
            minWidth: theme.spacing(90),
            flex: '1 0 0',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }),
          paginationProps.sx,
        )}
      />
      <Stack
        flex="1 1 0"
        alignItems="center"
        justifyContent="flex-end"
        direction="row"
      >
        {disablePageSizeSelect !== true && (
          <FormControlLabel
            sx={theme => ({
              marginRight: theme.spacing(2),
              my: 2,
            })}
            control={
              <Select<number>
                size="small"
                sx={theme => ({
                  backgroundColor: theme.palette.background.paper,
                  minWidth: theme.spacing(24),
                })}
                value={gridPageSizeSelector(apiRef)}
                onChange={handlePageSizeChange}
              >
                {rootProps.pageSizeOptions.map(pageSize => (
                  <MenuItem value={pageSize} key={`${pageSize}`}>
                    {pageSize}
                  </MenuItem>
                ))}
              </Select>
            }
            slotProps={{
              typography: {
                marginRight: 2,
                variant: 'subtitle1',
              },
            }}
            label="Show:"
            labelPlacement="start"
          />
        )}
        <Typography
          textAlign="right"
          variant="subtitle2"
          sx={theme => ({ margin: theme.spacing(2, 0, 2, 2) })}
        >
          {firstRow} - {lastRow} of {totalRows}
        </Typography>
      </Stack>
    </DataGridFooterRoot>
  )
}

function useGridRowRange(
  apiRef: React.MutableRefObject<GridApiPremium>,
  rootProps: DataGridPremiumProcessedProps,
): { firstRow: string; lastRow: string; totalRows: string } {
  const paginationMode = rootProps.paginationMode

  const loading = useGridSelector(apiRef, gridRowsLoadingSelector) ?? false

  const latch =
    (paginationMode === 'server' && !loading) || paginationMode === 'client'

  const page = useGridSelector(apiRef, gridPageSelector)

  const loadedPage = useLatch(latch, usePrevious(page))

  const pageSize = useGridSelector(apiRef, gridPageSizeSelector)

  const visibleRows = useGridVisibleRows(apiRef, rootProps)

  const clientRowCount = useGridSelector(apiRef, gridExpandedRowCountSelector)
  const totalRowCount = useGridSelector(apiRef, gridRowCountSelector)

  if (!visibleRows?.range) {
    return {
      firstRow: '...',
      lastRow: '...',
      totalRows: (paginationMode === 'client'
        ? clientRowCount
        : totalRowCount
      ).toString(10),
    }
  }

  if (paginationMode === 'client') {
    return {
      firstRow: (visibleRows.range.firstRowIndex + 1).toString(10),
      lastRow: (visibleRows.range.lastRowIndex + 1).toString(10),
      totalRows: clientRowCount.toString(10),
    }
  } else {
    return {
      firstRow: (loadedPage * pageSize + 1).toString(10),
      lastRow: (
        visibleRows.range.lastRowIndex +
        1 +
        loadedPage * pageSize
      ).toString(10),
      totalRows: totalRowCount.toString(10),
    }
  }
}
