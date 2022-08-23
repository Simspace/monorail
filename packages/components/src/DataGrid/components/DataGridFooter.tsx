import React from 'react'

import { Box } from '../../Box.js'
import { FormControlLabel } from '../../FormControlLabel.js'
import { MenuItem } from '../../MenuItem.js'
import { Pagination } from '../../Pagination.js'
import { Select, SelectChangeEvent } from '../../Select.js'
import { SelectionFooter } from '../../SelectionFooter.js'
import { Stack } from '../../Stack.js'
import { Typography } from '../../Typography.js'
import {
  GridApi,
  gridPageCountSelector,
  gridPageSelector,
  gridPageSizeSelector,
  gridRowCountSelector,
  useGridApiContext,
  useGridRootProps,
  useGridSelector,
} from '../internal.js'

export function DataGridFooter() {
  const rootProps = useGridRootProps()
  if (rootProps.pagination === true) {
    return <DataGridPaginationFooter />
  } else {
    return <DataGridSimpleFooter />
  }
}

function DataGridSimpleFooter() {
  const apiRef = useGridApiContext()
  const rowCount = useGridSelector(apiRef, gridRowCountSelector)
  return (
    <SelectionFooter
      selectedCount={apiRef.current.state.selection.length}
      shownCount={rowCount}
      totalCount={rowCount}
    />
  )
}

export function DataGridPaginationFooter() {
  const apiRef = useGridApiContext()
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

  return (
    <Box
      sx={theme => ({
        height: theme.spacing(14),
        backgroundColor: theme.palette.default.lowEmphasis.main,
        // TODO: codify this upper drop shadow
        boxShadow: '0 -2px 1px -1px rgba(0,0,0,.2)',
        padding: theme.spacing(0, 6),
      })}
    >
      <Stack height={1} direction="row" justifyContent="space-between">
        <Box display="flex" flex="1 1 0" alignItems="center">
          <Typography variant="body2">
            {apiRef.current.state.selection.length} Selected
          </Typography>
        </Box>
        <Pagination
          count={gridPageCountSelector(apiRef)}
          page={page + 1}
          onChange={onPageChangeHandler}
          siblingCount={1}
          sx={theme => ({
            display: 'flex',
            minWidth: theme.spacing(90),
            flex: '1 0 0',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        />
        <Stack
          flex="1 1 0"
          alignItems="center"
          justifyContent="flex-end"
          direction="row"
        >
          <FormControlLabel
            sx={theme => ({
              marginRight: theme.spacing(2),
            })}
            control={
              <Select<number>
                sx={theme => ({
                  backgroundColor: theme.palette.background.default,
                  minHeight: theme.spacing(10),
                  maxHeight: theme.spacing(10),
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
            componentsProps={{
              typography: {
                marginRight: 2,
                variant: 'subtitle1',
              },
            }}
            label="Show:"
            labelPlacement="start"
          />
          <Typography
            textAlign="right"
            variant="subtitle2"
            sx={theme => ({ margin: theme.spacing(2, 0, 2, 2) })}
          >
            {firstRow} - {lastRow} of {gridRowCountSelector(apiRef)}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

function getPageRange(apiRef: React.MutableRefObject<GridApi>): {
  firstRow: number
  lastRow: number
} {
  const firstRow = gridPageSelector(apiRef) * gridPageSizeSelector(apiRef)
  const lastRow = Math.min(
    firstRow + gridPageSizeSelector(apiRef),
    gridRowCountSelector(apiRef),
  )
  return { firstRow: firstRow + 1, lastRow }
}
