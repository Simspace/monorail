/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { Search } from '@mui/icons-material'

import { filterMap } from '../../../../utils/array'
import { useForceUpdate } from '../../../../utils/hooks/useForceUpdate'
import { combineSxProps } from '../../../../utils/sx'
import { Checkbox } from '../../../Checkbox'
import {
  FormControlLabel,
  FormControlLabelProps,
} from '../../../FormControlLabel'
import { InputAdornment } from '../../../InputAdornment'
import { ScrollShadow } from '../../../ScrollShadow'
import { Stack } from '../../../Stack'
import { TextField } from '../../../TextField'
import { Typography } from '../../../Typography'
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

  const handleFilterItemChange = React.useCallback(
    (value: unknown) =>
      (event: React.SyntheticEvent<Element, Event>, checked: boolean) => {
        if (checked) {
          state.uiSelected.add(value)
        } else {
          state.uiSelected.delete(value)
        }
        forceUpdate()
        syncFilter()
      },
    [state, forceUpdate, syncFilter],
  )

  const handleFilterItemKeyUp = React.useCallback(
    (value: unknown) => (event: React.KeyboardEvent<HTMLLabelElement>) => {
      if (event.key === 'Enter') {
        if (state.uiSelected.has(value)) {
          state.uiSelected.delete(value)
        } else {
          state.uiSelected.add(value)
        }
        forceUpdate()
        syncFilter()
      }
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
      <ScrollShadow bottomShadow={isFiltered}>
        <Stack
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
                  value={value}
                  checked={state.uiSelected.has(value)}
                  onChange={handleFilterItemChange(value)}
                  onKeyUp={handleFilterItemKeyUp(value)}
                />
              )
            }
          })}
        </Stack>
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

interface EnumFilterItemProps<V>
  extends Omit<FormControlLabelProps, 'control'> {
  value: V
}

const EnumFilterItem = React.memo(function EnumFilterItem<V>(
  props: EnumFilterItemProps<V>,
) {
  const { label, value, sx, onChange, ...other } = props
  return (
    <FormControlLabel
      {...other}
      onChange={onChange}
      value={value}
      label={
        <Typography
          sx={theme => ({ margin: theme.spacing(0, 0, 0, 2) })}
          variant="body1"
        >
          {label}
        </Typography>
      }
      control={<Checkbox />}
      sx={combineSxProps(
        theme => ({
          minHeight: theme.spacing(12),
          flex: 1,
          minWidth: 0,
          margin: 0,
          padding: theme.spacing(0, 0, 0, 4),

          '&:hover': {
            backgroundColor: theme.palette.default.mediumEmphasis.main,
          },
          '& > p': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        }),
        sx,
      )}
    />
  )
})
