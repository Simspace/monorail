import React from 'react'

import { useForceUpdate } from '@monorail/utils'

import { useGridApiContext } from '../../internal.js'
import { useDebouncedSyncFilter } from '../hooks/useDebouncedSyncFilter.js'
import { useInitializeCustomFilterState } from './hooks/useInitializeCustomFilterState.js'
import type { CustomFilterDefinition } from './models.js'

export interface CustomFilterProps
  extends Omit<CustomFilterDefinition, 'type'> {
  field: string
}

export function CustomFilter(props: CustomFilterProps) {
  const { operator, field, getIsFiltered, renderFilter } = props

  const apiRef = useGridApiContext()

  useInitializeCustomFilterState(apiRef, props, field)

  const forceUpdate = useForceUpdate()

  const state = apiRef.current.state.customFilter.get(field)

  const beforeSyncFilter = () => {
    apiRef.current.state.filterSubscriptions.get(field)?.forEach(f => {
      f(state)
    })
  }

  const syncFilter = useDebouncedSyncFilter(
    apiRef,
    operator,
    field,
    state,
    getIsFiltered,
    beforeSyncFilter,
  )

  const setState = React.useCallback(
    (state: React.SetStateAction<unknown>) => {
      const oldState = apiRef.current.state.customFilter.get(field)

      let newState: unknown

      if (typeof state === 'function') {
        newState = state(oldState)
      } else {
        newState = state
      }

      apiRef.current.state.customFilter.set(field, newState)

      forceUpdate()
      syncFilter()
    },
    [apiRef, field, forceUpdate, syncFilter],
  )

  return renderFilter({ state, setState })
}
