 
import React from 'react'
import MoreVert from '@mui/icons-material/MoreVert'
import Sort from '@mui/icons-material/Sort'
import type { Theme } from '@mui/material'
import type { SxProps } from '@mui/system'
import { gridClasses } from '@mui/x-data-grid-premium'
import clsx from 'clsx'

import { Badge } from '../../Badge.js'
import { IconButton } from '../../IconButton.js'
import { Filter, SortAscending, SortDescending } from '../../icons.js'
import { Menu } from '../../Menu.js'
import { Popover } from '../../Popover.js'
import { Stack } from '../../Stack.js'
import { Typography } from '../../Typography.js'
import { CustomFilter } from '../filters/CustomFilter.js'
import { DateFilter } from '../filters/DateFilter.js'
import { GridEnumFilter } from '../filters/GridEnumFilter.js'
import { GridNumericFilter } from '../filters/GridNumericFilter.js'
import { TextFilter } from '../filters/TextFilter.js'
import type {
  GridColDef,
  GridColumnHeaderParams,
  GridEvents,
  GridSortDirection,
} from '../internal.js'
import {
  gridSortColumnLookupSelector,
  useGridApiContext,
  useGridRootProps,
  useGridSelector,
} from '../internal.js'

interface DataGridColumnHeaderProps extends GridColumnHeaderParams {
  className?: string
}

export function DataGridColumnHeader(props: DataGridColumnHeaderProps) {
  const { field, colDef } = props
  const rootProps = useGridRootProps()
  const apiRef = useGridApiContext()
  const [actionsAnchorEl, setActionsAnchorEl] =
    React.useState<HTMLButtonElement | null>(null)
  const originalColDef =
    apiRef.current.state.columns.lookup[field].originalColDef
  const isActionsMenuOpen = actionsAnchorEl !== null

  const [filterAnchorEl, setFilterAnchorEl] =
    React.useState<HTMLButtonElement | null>(null)

  const isFilterOpen = filterAnchorEl !== null

  const handleActionsButtonClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      setActionsAnchorEl(event.currentTarget)
    },
    [],
  )

  const handleActionsMenuClose = React.useCallback(() => {
    setActionsAnchorEl(null)
  }, [])

  const handleFilterButtonClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      setFilterAnchorEl(event.currentTarget)
    },
    [],
  )

  const handleOperatorFilterButtonClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      apiRef.current.showFilterPanel(field)
    },
    [apiRef, field],
  )

  const handleFilterPopoverClose = React.useCallback(() => {
    setFilterAnchorEl(null)
  }, [])

  const isFiltered =
    apiRef.current.state.filter.filterModel.items.find(
      item => item.field === field,
    ) !== undefined

  const publishEvent = React.useCallback(
    <E extends GridEvents>(
      eventName: E,
    ): (event: React.SyntheticEvent) => void => {
      return event => {
        if (!event.currentTarget.contains(event.target as Element)) {
          return
        }
        apiRef.current.publishEvent(
          eventName as GridEvents,
          apiRef.current.getColumnHeaderParams(field),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          event as any,
        )
      }
    },
    [apiRef, field],
  )

  const filter = React.useMemo(() => {
    if (colDef.filter && rootProps.filter === 'column') {
      switch (colDef.filter.type) {
        case 'enum': {
          return <GridEnumFilter field={colDef.field} {...colDef.filter} />
        }
        case 'numeric': {
          return <GridNumericFilter field={colDef.field} {...colDef.filter} />
        }
        case 'date': {
          return <DateFilter field={colDef.field} {...colDef.filter} />
        }
        case 'text': {
          return <TextFilter field={colDef.field} {...colDef.filter} />
        }
        case 'custom': {
          return <CustomFilter field={colDef.field} {...colDef.filter} />
        }
      }
    }
  }, [colDef, rootProps.filter])

  const headerActions = React.useMemo(() => {
     
    if (colDef.headerActions == null) {
      return null
    }
    return colDef.headerActions({
      closeMenu: handleActionsMenuClose,
    })
  }, [handleActionsMenuClose, colDef])

  return (
    <Stack
      className={clsx(props.className, gridClasses.columnHeaderTitle)}
      direction="row"
      alignItems="center"
      flex="1 1 0"
      minWidth={0}
      sx={theme => ({ margin: theme.spacing(0, 2) })}
      onClick={publishEvent('columnHeaderClick')}
      onKeyDown={publishEvent('columnHeaderKeyDown')}
    >
      <DataGridColumnHeaderLabel
        field={field}
        colDef={colDef}
        originalColDef={originalColDef}
      />
      {colDef.filterable && rootProps.filter === 'operator' && (
        <IconButton
          aria-label="filter"
          color="default"
          variant="chromeless"
          size="small"
          tabIndex={-1}
          onClick={handleOperatorFilterButtonClick}
        >
          <Badge color="primary" variant="dot" invisible={!isFiltered}>
            <Filter />
          </Badge>
        </IconButton>
      )}
      {colDef.filter !== undefined && (
        <>
          <IconButton
            aria-label="filter"
            color="default"
            variant="chromeless"
            size="small"
            tabIndex={-1}
            onClick={handleFilterButtonClick}
            {...colDef.filter.slotProps?.columnHeaderButton}
          >
            <Badge color="primary" variant="dot" invisible={!isFiltered}>
              <Filter />
            </Badge>
          </IconButton>
          <Popover
            onClose={handleFilterPopoverClose}
            open={isFilterOpen}
            anchorEl={filterAnchorEl}
            transformOrigin={{
              horizontal: 'right',
              vertical: 'top',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            PaperProps={{
              sx: {
                overflowY: 'hidden',
              },
            }}
          >
            {filter}
          </Popover>
        </>
      )}
      {headerActions !== null && (
        <React.Fragment>
          <IconButton
            aria-label="actions"
            color="default"
            variant="chromeless"
            size="small"
            tabIndex={-1}
            onClick={handleActionsButtonClick}
          >
            <MoreVert />
          </IconButton>
          <Menu
            anchorEl={actionsAnchorEl}
            open={isActionsMenuOpen}
            onClose={handleActionsMenuClose}
          >
            {headerActions}
          </Menu>
        </React.Fragment>
      )}
    </Stack>
  )
}

interface DataGridColumnHeaderLabelProps extends GridColumnHeaderParams {
  originalColDef?: GridColDef
}

function DataGridColumnHeaderLabel(props: DataGridColumnHeaderLabelProps) {
  const { field, colDef, originalColDef } = props
  const apiRef = useGridApiContext()
  const sortLookupColumn = useGridSelector(apiRef, gridSortColumnLookupSelector)
  const sortDirection = sortLookupColumn[field]?.sortDirection

  const isSortable = React.useMemo(() => {
    if (colDef.sortable === false) {
      return false
    }
    return true
  }, [colDef.sortable])

  let headerComponent: React.ReactNode | null = null
  if (originalColDef?.renderHeader) {
    headerComponent = originalColDef.renderHeader({
      colDef: {
        ...originalColDef,
        computedWidth: colDef.computedWidth,
        hasBeenResized: colDef.hasBeenResized,
      },
      field,
    })
  }

  return (
    <Stack
      flex="1 1 0"
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      minWidth={0}
    >
      <Stack alignItems="center" direction="row" gap={2} minWidth={0}>
        {headerComponent !== null ? (
          headerComponent
        ) : (
          <Typography minWidth={0} lineClamp={1} variant="body2">
            {colDef.headerName}
          </Typography>
        )}
      </Stack>
      {isSortable && (
        <SortIcon
          sx={theme => ({ margin: theme.spacing(0, 2, 0, 0) })}
          direction={sortDirection}
        />
      )}
    </Stack>
  )
}

interface SortIconProps {
  readonly direction: GridSortDirection
  readonly sx?: SxProps<Theme>
}

function SortIcon({ direction, sx }: SortIconProps) {
  switch (direction) {
    case undefined:
    case null:
      return <Sort sx={sx} color="default" />
    case 'asc':
      return <SortAscending sx={sx} color="default" />
    case 'desc':
      return <SortDescending sx={sx} color="default" />
  }
}
