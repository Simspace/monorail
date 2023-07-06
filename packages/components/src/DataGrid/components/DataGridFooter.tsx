import React from 'react'
import type { DataGridProcessedProps } from '@mui/x-data-grid/models/props/DataGridProps.js'

import { PaginationItem } from '@monorail/components/PaginationItem'
import { combineSxProps, composeClasses, styled } from '@monorail/utils'

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
import type { GridApi } from '../internal.js'
import {
  getDataGridUtilityClass,
  gridExpandedRowCountSelector,
  gridPageCountSelector,
  gridPageSelector,
  gridPageSizeSelector,
  useGridApiContext,
  useGridRootProps,
  useGridSelector,
} from '../internal.js'

export interface DataGridFooterProps extends PaginationProps {
  disablePageSizeSelect?: boolean
  disablePageButtons?: boolean
  disableSelectionCount?: boolean
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
  const rowCount = useGridSelector(apiRef, gridExpandedRowCountSelector)
  return (
    <SelectionFooter
      selectedCount={apiRef.current.state.rowSelection.length}
      shownCount={rowCount}
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
    disableSelectionCount,
    hasNextPage,
    hasPreviousPage,
    ...paginationProps
  } = props
  const apiRef = useGridApiContext()
  const rootProps = useGridRootProps()

  const classes = useUtilityClasses(rootProps)

  const page = useGridSelector(apiRef, gridPageSelector)

  const { firstRow, lastRow } = getPageRange(apiRef)

  const onPageChangeHandler = React.useCallback(
    (_event: React.ChangeEvent<unknown>, page: number) => {
      apiRef.current.setPage(page - 1)
    },
    [apiRef],
  )

  const onPageSizeChangeHandler = React.useCallback(
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
        {disableSelectionCount !== true && (
          <Typography variant="body2">
            {apiRef.current.state.rowSelection.length} Selected
          </Typography>
        )}
      </Box>
      <Pagination
        count={gridPageCountSelector(apiRef)}
        page={page + 1}
        onChange={onPageChangeHandler}
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
                onChange={onPageSizeChangeHandler}
              >
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
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
          {firstRow} - {lastRow} of {gridExpandedRowCountSelector(apiRef)}
        </Typography>
      </Stack>
    </DataGridFooterRoot>
  )
}

function getPageRange(apiRef: React.MutableRefObject<GridApi>): {
  firstRow: number
  lastRow: number
} {
  const firstRow = gridPageSelector(apiRef) * gridPageSizeSelector(apiRef)
  const lastRow = Math.min(
    firstRow + gridPageSizeSelector(apiRef),
    gridExpandedRowCountSelector(apiRef),
  )
  return { firstRow: firstRow + 1, lastRow }
}
