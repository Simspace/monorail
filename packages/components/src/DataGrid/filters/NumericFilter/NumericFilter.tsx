import React from 'react'
import type { SelectChangeEvent } from '@mui/material'
import { useThemeProps } from '@mui/material'

import { composeClasses, styled, useForceUpdate } from '@monorail/utils'

import { MenuItem } from '../../../MenuItem.js'
import { Select } from '../../../Select.js'
import { TextField } from '../../../TextField.js'
import { useGridApiContext } from '../../internal.js'
import { ClearFilterButton } from '../components/ClearFilterButton.js'
import { FilterContainer } from '../components/FilterContainer.js'
import { useDebouncedSyncFilter } from '../hooks/useDebouncedSyncFilter.js'
import { numericOperators } from './constants.js'
import type { NumericFilterClasses } from './constants/numericFilterClasses.js'
import { getNumericFilterUtilityClass } from './constants/numericFilterClasses.js'
import { useInitializeNumericFilterState } from './hooks.js'
import type {
  NumericFilterDefinition,
  NumericFilterOperator,
  NumericFilterState,
} from './models.js'

const NumericFilterRoot = styled(FilterContainer, {
  name: 'MonorailNumericFilter',
  slot: 'Root',
  overridesResolver: (props, styles) => styles,
})({})

export interface NumericFilterProps
  extends Omit<NumericFilterDefinition, 'field'> {
  classes?: Partial<NumericFilterClasses>
  field: string
}

export function NumericFilter(inProps: NumericFilterProps) {
  const props = useThemeProps({
    name: 'MonorailNumericFilter',
    props: inProps,
  })

  const { field, external, slotProps = {} } = props

  const classes = useUtilityClasses(props)

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
    'numeric',
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
            {...slotProps.firstTextField}
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
              {...slotProps.firstTextField}
            />
            <TextField
              type="number"
              value={state.second ?? ''}
              onChange={handleSecondInputChange}
              {...slotProps.secondTextField}
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
    slotProps.firstTextField,
    slotProps.secondTextField,
  ])

  return (
    <NumericFilterRoot className={classes.root}>
      <Select
        onBlur={event => event.stopPropagation()}
        value={state.operator.key}
        onChange={handleOperatorSelectChange}
        {...slotProps.select}
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
        {...slotProps.clearFilterButton}
      >
        {apiRef.current.getLocaleText('NumericFilter').clearFilterButton}
      </ClearFilterButton>
    </NumericFilterRoot>
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

function useUtilityClasses(props: NumericFilterProps) {
  const { classes } = props

  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getNumericFilterUtilityClass, classes)
}
