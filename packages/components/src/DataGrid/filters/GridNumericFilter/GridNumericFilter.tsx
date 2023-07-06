import React from 'react'
import { useThemeProps } from '@mui/material'

import type {
  NumericFilterClasses,
  NumericFilterOperator,
} from '@monorail/components/NumericFilter'
import {
  NumericFilter,
  numericOperators,
} from '@monorail/components/NumericFilter'
import { useForceUpdate } from '@monorail/utils'

import { useGridApiContext } from '../../internal.js'
import { useDebouncedSyncFilter } from '../hooks/useDebouncedSyncFilter.js'
import { useInitializeNumericFilterState } from './hooks.js'
import type { NumericFilterDefinition, NumericFilterState } from './models.js'

export interface GridNumericFilterProps
  extends Omit<NumericFilterDefinition, 'field'> {
  classes?: Partial<NumericFilterClasses>
  field: string
}

export function GridNumericFilter(inProps: GridNumericFilterProps) {
  const props = useThemeProps({
    name: 'MonorailNumericFilter',
    props: inProps,
  })

  const { field, classes, external, slotProps = {} } = props

  const apiRef = useGridApiContext()
  useInitializeNumericFilterState(apiRef, field, external)

  const forceUpdate = useForceUpdate()

  const state = apiRef.current.state.numericFilter.get(field)!

  const beforeSyncFilter = () => {
    apiRef.current.state.filterSubscriptions.get(field)?.forEach(f => {
      f(state)
    })
  }

  const syncFilter = useDebouncedSyncFilter(
    apiRef,
    'numeric',
    field,
    state,
    getIsFiltered,
    beforeSyncFilter,
  )

  const handleChange = React.useCallback(
    (
      first: number | null,
      second: number | null,
      operator: NumericFilterOperator,
    ) => {
      state.first = first
      state.second = second
      state.operator = numericOperators[operator]
      syncFilter()
      forceUpdate()
    },
    [forceUpdate, state, syncFilter],
  )

  return (
    <NumericFilter
      state={{
        first: state.first,
        second: state.second,
        operator: state.operator.key,
      }}
      classes={classes}
      onChange={handleChange}
      localeText={apiRef.current.getLocaleText('NumericFilter')}
      slotProps={slotProps}
    />
  )
}

function getIsFiltered(state: NumericFilterState): boolean {
  if (state.operator.type === 'oneField') {
    return state.first !== null
  } else if (state.operator.type === 'twoField') {
    return state.first !== null && state.second !== null
  } else {
    return false
  }
}
