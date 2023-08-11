/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { useThemeProps } from '@mui/material'

import { EnumFilter } from '@monorail/components/EnumFilter'
import { useForceUpdate } from '@monorail/utils'

import { useGridApiContext } from '../../internal.js'
import { useDebouncedSyncFilter } from '../hooks/useDebouncedSyncFilter.js'
import { useInitializeEnumFilterState } from './hooks.js'
import type { GridEnumFilterProps } from './models/GridEnumFilterProps.js'

export function GridEnumFilter(inProps: GridEnumFilterProps) {
  const props = useThemeProps({
    name: 'MonorailEnumFilter',
    props: inProps,
  })

  const {
    field,
    renderValue,
    values,
    external,
    compare,
    slotProps = {},
  } = props

  const apiRef = useGridApiContext()
  const forceUpdate = useForceUpdate()
  useInitializeEnumFilterState({ field, compare, external })

  const state = apiRef.current.state.enumFilter.get(field)!

  const beforeSyncFilter = () => {
    apiRef.current.state.filterSubscriptions.get(field)?.forEach(f => {
      f(state)
    })
  }

  const syncFilter = useDebouncedSyncFilter(
    apiRef,
    'enum',
    field,
    state,
    state => state.selected.size > 0,
    beforeSyncFilter,
  )

  const handleChange = React.useCallback(
    (values: Set<any>) => {
      state.selected = values
      forceUpdate()
      syncFilter()
    },
    [state, syncFilter, forceUpdate],
  )

  return (
    <EnumFilter
      selected={state.selected}
      values={values}
      renderValue={renderValue}
      onChange={handleChange}
      localeText={apiRef.current.getLocaleText('EnumFilter')}
      slotProps={slotProps}
    />
  )
}
