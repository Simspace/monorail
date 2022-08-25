import React from 'react'
import type { SelectChangeEvent } from '@mui/material'

import { useForceUpdate } from '@monorail/utils'

import { MenuItem } from '../../../MenuItem.js'
import { Select } from '../../../Select.js'
import { TextField } from '../../../TextField.js'
import { useGridApiContext } from '../../internal.js'
import { ClearFilterButton } from '../components/ClearFilterButton.js'
import { FilterContainer } from '../components/FilterContainer.js'
import { useDebouncedSyncFilter } from '../hooks/useDebouncedSyncFilter.js'
import { numericOperators } from './constants.js'
import { useInitializeNumericFilterState } from './hooks.js'
import type {
  NumericFilterDefinition,
  NumericFilterOperator,
  NumericFilterState,
} from './models.js'

interface NumericFilterProps extends Omit<NumericFilterDefinition, 'field'> {
  field: string
}

export function NumericFilter(props: NumericFilterProps) {
  const { field, external } = props

  const apiRef = useGridApiContext()
  useInitializeNumericFilterState(apiRef, field, external)

  const forceUpdate = useForceUpdate()

  const state = apiRef.current.state.numericFilter.get(field)!
  const isChanged = getIsChanged(state)

  const beforeSyncFilter = () => {
    apiRef.current.state.filterSubscriptions.get(field)?.forEach(f => {
      f(state)
    })
  }

  const syncFilter = useDebouncedSyncFilter(
    apiRef,
    `numeric-${field}`,
    field,
    state,
    getIsFiltered,
    beforeSyncFilter,
  )

  const handleOperatorSelectChange = React.useCallback(
    (event: SelectChangeEvent<string>) => {
      state.operator =
        numericOperators[event.target.value as NumericFilterOperator]
      forceUpdate()
      syncFilter()
    },
    [state, forceUpdate, syncFilter],
  )

  const handleFirstInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      state.first = parseNumber(event.currentTarget.value)
      forceUpdate()
      syncFilter()
    },
    [state, forceUpdate, syncFilter],
  )

  const handleSecondInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      state.second = parseNumber(event.currentTarget.value)
      forceUpdate()
      syncFilter()
    },
    [state, forceUpdate, syncFilter],
  )

  const handleClearFilterButtonClick = React.useCallback(() => {
    state.operator = numericOperators.greaterThan
    state.first = null
    state.second = null
    forceUpdate()
    syncFilter()
  }, [state, forceUpdate, syncFilter])

  const filterBody = React.useMemo(() => {
    switch (state.operator.type) {
      case 'oneField': {
        return (
          <TextField
            type="number"
            value={state.first ?? ''}
            onChange={handleFirstInputChange}
          />
        )
      }
      case 'twoField': {
        return (
          <>
            <TextField
              type="number"
              value={state.first ?? ''}
              onChange={handleFirstInputChange}
            />
            <TextField
              type="number"
              value={state.second ?? ''}
              onChange={handleSecondInputChange}
            />
          </>
        )
      }
    }
  }, [
    state.first,
    state.second,
    state.operator.type,
    handleFirstInputChange,
    handleSecondInputChange,
  ])

  return (
    <FilterContainer>
      <Select
        onBlur={event => event.stopPropagation()}
        value={state.operator.key}
        onChange={handleOperatorSelectChange}
      >
        {Object.values(numericOperators).map(value => (
          <MenuItem key={value.key} value={value.key}>
            {apiRef.current.getLocaleText('NumericFilter')[value.key]}
          </MenuItem>
        ))}
      </Select>
      {filterBody}
      <ClearFilterButton
        isFiltered={isChanged}
        onClick={handleClearFilterButtonClick}
      >
        {apiRef.current.getLocaleText('NumericFilter').clearFilterButton}
      </ClearFilterButton>
    </FilterContainer>
  )
}

function getIsChanged(state: NumericFilterState): boolean {
  if (state.operator.key !== 'greaterThan') {
    return true
  } else if (state.operator.type === 'oneField') {
    return state.first !== null
  } else if (state.operator.type === 'twoField') {
    return state.first !== null || state.second !== null
  } else {
    return false
  }
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

function parseNumber(value: string): number | null {
  if (value === '') {
    return null
  }
  const parsed = parseFloat(value)
  if (Number.isNaN(parsed)) {
    return null
  }
  return parsed
}
