/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { combineSxProps, filterMap, useForceUpdate } from '@monorail/utils'
import { Search } from '@mui/icons-material'
import { SxProps, Theme } from '@mui/material'

import { Checkbox } from '../../../Checkbox'
import { InputAdornment } from '../../../InputAdornment'
import { List } from '../../../List'
import { ListItem } from '../../../ListItem'
import { ListItemButton, listItemButtonClasses } from '../../../ListItemButton'
import { ListItemIcon } from '../../../ListItemIcon'
import { ListItemText } from '../../../ListItemText'
import { ScrollShadow } from '../../../ScrollShadow'
import { Stack } from '../../../Stack'
import { TextField } from '../../../TextField'
import { useGridApiContext } from '../../internal'
import { ClearFilterButton } from '../components/ClearFilterButton'
import { useDebouncedSyncFilter } from '../hooks/useDebouncedSyncFilter'
import { useInitializeEnumFilterState } from './hooks'
import { EnumFilterProps } from './models/EnumFilterProps'

export function EnumFilter(props: EnumFilterProps) {
  const { field, renderValue, values, external } = props

  const apiRef = useGridApiContext()
  useInitializeEnumFilterState(field, external)

  const state = apiRef.current.state.enumFilter.get(field)!
  const selectedSize = state.uiSelected.size
  const searchText = state.searchText
  const isFiltered = selectedSize > 0

  const forceUpdate = useForceUpdate()

  const beforeSyncFilter = () => {
    state.selected = new Set(state.uiSelected)
    apiRef.current.state.filterSubscriptions.get(field)?.forEach(f => {
      f(state)
    })
  }

  const syncFilter = useDebouncedSyncFilter(
    apiRef,
    `enum-${field}`,
    field,
    state,
    state => state.selected.size > 0,
    beforeSyncFilter,
  )

  const handleMinWidthCallback = React.useCallback(
    (element: HTMLDivElement | null) => {
      if (element) {
        const width = element.clientWidth
        if (state.width < width) {
          state.width = width
        }
      }
    },
    [state],
  )

  const handleSearchTextChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      state.searchText = event.currentTarget.value
      forceUpdate()
    },
    [state, forceUpdate],
  )

  const handleFilterItemClick = React.useCallback(
    (value: unknown) => (_event: React.MouseEvent<HTMLDivElement>) => {
      if (state.uiSelected.has(value)) {
        state.uiSelected.delete(value)
      } else {
        state.uiSelected.add(value)
      }
      forceUpdate()
      syncFilter()
    },
    [state, forceUpdate, syncFilter],
  )

  const handleClearFilter = React.useCallback(() => {
    state.uiSelected.clear()
    forceUpdate()
    syncFilter()
  }, [state, forceUpdate, syncFilter])

  return (
    <Stack
      ref={handleMinWidthCallback}
      sx={theme => ({
        height: '100%',
        maxWidth: theme.spacing(120),
      })}
      style={{ minWidth: `${state.width}px` }}
      direction="column"
    >
      <TextField
        size="medium"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          sx: theme => ({
            borderRadius: theme.spacing(6),
          }),
        }}
        value={searchText}
        onChange={handleSearchTextChange}
        sx={theme => ({
          margin: theme.spacing(4),
        })}
        autoFocus
      />
      <ScrollShadow bottom={isFiltered}>
        <List
          disablePadding
          sx={theme => ({
            maxHeight: theme.spacing(76),
            flexDirection: 'column',
          })}
        >
          {filterMap(values, (value, index) => {
            if (String(value).includes(searchText)) {
              const label = renderValue?.(value) ?? value
              return (
                <EnumFilterItem
                  key={index}
                  label={label}
                  checked={state.uiSelected.has(value)}
                  onClick={handleFilterItemClick(value)}
                />
              )
            }
          })}
        </List>
      </ScrollShadow>
      <ClearFilterButton
        sx={theme => ({
          marginBottom: isFiltered ? '0px' : theme.spacing(-18),
          padding: theme.spacing(4),
        })}
        isFiltered={isFiltered}
        onClick={handleClearFilter}
      >
        {apiRef.current
          .getLocaleText('EnumFilter')
          .clearSelectionButton(selectedSize)}
      </ClearFilterButton>
    </Stack>
  )
}

interface EnumFilterItemProps {
  label: string
  checked: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
  sx?: SxProps<Theme>
}

const EnumFilterItem = React.memo(function EnumFilterItem(
  props: EnumFilterItemProps,
) {
  const { label, sx, checked, onClick } = props
  return (
    <ListItem
      disableGutters
      disablePadding
      dense
      sx={combineSxProps(
        {
          flex: 1,
          minWidth: 0,
          margin: 0,
          padding: 0,
          '& span': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        },
        sx,
      )}
    >
      <ListItemButton
        sx={theme => ({
          minHeight: theme.spacing(12),
          padding: 0,
          [`&.${listItemButtonClasses.focusVisible}`]: {
            outline: 'none',
            boxShadow: `inset 0 0 0 1px ${theme.palette.primary.focusRing.inner}, inset 0 0 0 4px ${theme.palette.primary.focusRing.outer}`,
            borderRadius: 0,
          },
        })}
        onClick={onClick}
      >
        <ListItemIcon
          sx={theme => ({
            margin: theme.spacing(0, 0, 0, 4),
          })}
        >
          <Checkbox tabIndex={-1} edge="start" checked={checked} disableHover />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  )
})
