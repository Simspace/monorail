import React from 'react'
import MoreVert from '@mui/icons-material/MoreVert'
import Sort from '@mui/icons-material/Sort'
import { Theme } from '@mui/material'
import { SxProps } from '@mui/system'

import { Badge } from '../../Badge.js'
import { IconButton } from '../../IconButton.js'
import { Filter, SortAscending, SortDescending } from '../../icons.js'
import { Menu } from '../../Menu.js'
import { Popover } from '../../Popover.js'
import { Stack } from '../../Stack.js'
import { Typography } from '../../Typography.js'
import { DateFilter } from '../filters/DateFilter.js'
import { EnumFilter } from '../filters/EnumFilter.js'
import { NumericFilter } from '../filters/NumericFilter.js'
import { TextFilter } from '../filters/TextFilter.js'
import {
  GridColumnHeaderEventLookup,
  GridColumnHeaderParams,
  GridEnrichedColDef,
  GridEventsStr,
  gridSortColumnLookupSelector,
  GridSortDirection,
  useGridApiContext,
  useGridSelector,
} from '../internal.js'

interface DataGridColumnHeaderProps extends GridColumnHeaderParams {}

export function DataGridColumnHeader(props: DataGridColumnHeaderProps) {
  const { field, colDef } = props
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

  const handleFilterPopoverClose = React.useCallback(() => {
    setFilterAnchorEl(null)
  }, [])

  const isFiltered =
    apiRef.current.state.filter.filterModel.items.find(
      item => item.columnField === field,
    ) !== undefined

  const publishEvent = React.useCallback(
    function <E extends keyof GridColumnHeaderEventLookup>(
      eventName: E,
    ): (event: GridColumnHeaderEventLookup[E]['event']) => void {
      return event => {
        if (!event.currentTarget.contains(event.target as Element)) {
          return
        }
        apiRef.current.publishEvent(
          eventName as GridEventsStr,
          apiRef.current.getColumnHeaderParams(field),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          event as any,
        )
      }
    },
    [apiRef, field],
  )

  const filter = React.useMemo(() => {
    if (colDef.filter) {
      switch (colDef.filter.type) {
        case 'enum': {
          return <EnumFilter field={colDef.field} {...colDef.filter} />
        }
        case 'numeric': {
          return <NumericFilter field={colDef.field} {...colDef.filter} />
        }
        case 'date': {
          return <DateFilter field={colDef.field} {...colDef.filter} />
        }
        case 'text': {
          return <TextFilter field={colDef.field} {...colDef.filter} />
        }
      }
    }
  }, [colDef])

  const headerActions = React.useMemo(() => {
    // eslint-disable-next-line eqeqeq
    if (colDef.headerActions == null) {
      return null
    }
    return colDef.headerActions({
      closeMenu: handleActionsMenuClose,
    })
  }, [handleActionsMenuClose, colDef])

  return (
    <Stack
      direction="row"
      alignItems="center"
      flex="1 1 0"
      sx={theme => ({ margin: theme.spacing(0, 2) })}
      onClick={publishEvent('columnHeaderClick')}
      onKeyDown={publishEvent('columnHeaderKeyDown')}
    >
      <DataGridColumnHeaderLabel
        field={field}
        colDef={colDef}
        originalColDef={originalColDef}
      />
      {colDef.filter !== undefined && (
        <>
          <IconButton
            aria-label="filter"
            color="default"
            variant="chromeless"
            size="small"
            tabIndex={-1}
            onClick={handleFilterButtonClick}
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
  originalColDef?: GridEnrichedColDef
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
    >
      <Stack alignItems="center" direction="row" gap={2}>
        {headerComponent !== null ? (
          headerComponent
        ) : (
          <Typography variant="body2">{colDef.headerName}</Typography>
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
