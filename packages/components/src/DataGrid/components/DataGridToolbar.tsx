import React from 'react'
import { ViewColumn, ViewModule } from '@mui/icons-material'
import type { DataGridProcessedProps } from '@mui/x-data-grid/models/props/DataGridProps'
import {
  getDataGridUtilityClass,
  gridColumnLookupSelector,
  gridSortModelSelector,
  useGridApiContext,
  useGridRootProps,
  useGridSelector,
} from '@mui/x-data-grid-premium'

import { MenuItem } from '@monorail/components/MenuItem'
import type { DataAttributes } from '@monorail/types'
import {
  combineSxProps,
  composeClasses,
  styled,
  useForceUpdate,
} from '@monorail/utils'

import { Box } from '../../Box.js'
import type { SearchProps } from '../../Search.js'
import { Search } from '../../Search.js'
import { Select } from '../../Select.js'
import { ToggleButton } from '../../ToggleButton.js'
import { ToggleButtonGroup } from '../../ToggleButtonGroup.js'
import { Typography } from '../../Typography.js'
import { FILTER_DELAY_MS } from '../constants/dataGridConstants.js'

const MULTIPLE_SYMBOL = Symbol()

type OwnerState = DataGridProcessedProps

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState

  const slots = {
    root: ['toolbarContainer'],
  }

  return composeClasses(slots, getDataGridUtilityClass, classes)
}

const DataGridToolbarRoot = styled('div', {
  name: 'MuiDataGrid',
  slot: 'ToolbarContainer',
  overridesResolver: (_, styles) => styles.toolbarContainer,
})<{ ownerState: OwnerState }>(({ theme }) => ({
  padding: theme.spacing(4, 8),
  backgroundColor: theme.palette.default.lowEmphasis.light,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}))

export interface DataGridToolbarProps {
  children?: React.ReactNode
  disableSearch?: boolean
  disableQuickFilter?: boolean
  disableSortBy?: boolean
  disableViewStyleToggle?: boolean
  slotProps?: {
    search?: Partial<SearchProps & DataAttributes>
  }
}

export function DataGridToolbar(props: DataGridToolbarProps) {
  const {
    children,
    disableSearch,
    disableSortBy,
    disableViewStyleToggle,
    disableQuickFilter,
    slotProps = {},
  } = props

  const apiRef = useGridApiContext()
  const rootProps = useGridRootProps()

  const handleViewStyleChange = React.useCallback(
    (
      _event: React.MouseEvent<HTMLElement>,
      newViewStyle: 'table' | 'gallery',
    ) => {
      if (newViewStyle !== null) {
        apiRef.current.setViewStyle(newViewStyle)
      }
    },
    [apiRef],
  )

  const sortModel = useGridSelector(apiRef, gridSortModelSelector)
  const columnLookup = useGridSelector(apiRef, gridColumnLookupSelector)
  const classes = useUtilityClasses(rootProps)

  return (
    <DataGridToolbarRoot ownerState={rootProps} className={classes.root}>
      {disableSortBy !== true && (
        <Box display="flex" alignItems="baseline" gap={2}>
          <Typography lineClamp={1} variant="subtitle1">
            Sort By
          </Typography>
          <Select
            value={
              sortModel.length === 0
                ? ''
                : sortModel.length > 1
                ? MULTIPLE_SYMBOL
                : sortModel[0].field
            }
            renderValue={field =>
              field === ''
                ? 'Select a Column'
                : typeof field === 'symbol'
                ? 'Multiple'
                : columnLookup[field].headerName ?? field
            }
            onChange={event => {
              const field = event.target.value
              if (field === '' || typeof field === 'symbol') {
                return
              }

              apiRef.current.setSortModel([{ field, sort: 'desc' }])
            }}
            displayEmpty
            sx={theme => ({
              width: theme.spacing(60),
              backgroundColor: theme.palette.background.paper,
            })}
          >
            {apiRef.current?.state?.columns.orderedFields.map(field => {
              const colDef = apiRef.current.state.columns.lookup[field]
              if (colDef.sortable !== false) {
                return (
                  <MenuItem key={colDef.field} value={colDef.field}>
                    {colDef.headerName ?? colDef.field}
                  </MenuItem>
                )
              }
              return null
            })}
          </Select>
        </Box>
      )}
      <Box flex="1 1 0">{children}</Box>
      {disableSearch !== true && (
        <Box
          sx={theme => ({
            flexShrink: 1,
            width: theme.spacing(120),
          })}
        >
          <DataGridGlobalSearch
            disableQuickFilter={disableQuickFilter}
            {...slotProps.search}
          />
        </Box>
      )}
      {disableViewStyleToggle !== true && (
        <ToggleButtonGroup
          value={apiRef.current.state.viewStyle}
          exclusive
          onChange={handleViewStyleChange}
          sx={theme => ({
            backgroundColor: theme.palette.background.paper,
          })}
        >
          <ToggleButton aria-label="table view" value="table">
            <ViewColumn />
          </ToggleButton>
          <ToggleButton aria-label="gallery view" value="gallery">
            <ViewModule />
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    </DataGridToolbarRoot>
  )
}

interface DataGridGlobalSearchProps extends SearchProps {
  disableQuickFilter?: boolean
}

function DataGridGlobalSearch(props: DataGridGlobalSearchProps) {
  const { disableQuickFilter, ...others } = props

  const apiRef = useGridApiContext()
  const forceUpdate = useForceUpdate()
  apiRef.current.state.globalSearch.forceUpdate = forceUpdate

  const handleSearchChange = React.useCallback(
    (event: React.SyntheticEvent, value: string, reason: 'input' | 'clear') => {
      apiRef.current.setGlobalSearchValue(value)
      others.onChange?.(event, value, reason)
    },
    [apiRef, others],
  )

  const handleSearchChangeDebounced = React.useCallback(
    (event: React.SyntheticEvent, value: string, reason: 'input' | 'clear') => {
       
      if (disableQuickFilter !== true && apiRef.current.setFilterModel) {
        apiRef.current.setFilterModel({
          items: [],
          quickFilterValues: [value],
        })
      }
      others.onChangeDebounced?.(event, value, reason)
    },
    [apiRef, disableQuickFilter, others],
  )

  return (
    <Search
      {...others}
      value={apiRef.current.state.globalSearch.value}
      placeholder={others.placeholder ?? 'Search'}
      onChange={handleSearchChange}
      onChangeDebounced={handleSearchChangeDebounced}
      debounceTime={others?.debounceTime ?? FILTER_DELAY_MS}
      sx={combineSxProps(
        {
          width: '100%',
        },
        others?.sx,
      )}
      slotProps={{
        ...others.slotProps,
        Input: {
          ...others.slotProps?.Input,
          sx: combineSxProps(
            theme => ({
              backgroundColor: theme.palette.background.paper,
            }),
            others.slotProps?.Input?.sx,
          ),
        },
      }}
    />
  )
}
