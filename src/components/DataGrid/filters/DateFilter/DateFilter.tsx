import React from 'react'
import {
  CalendarToday,
  DateRange as DateRangeIcon,
  EventBusy,
} from '@mui/icons-material'

import { ChevronDoubleLeft, ChevronDoubleRight } from '../../../../icons/Icons'
import { useForceUpdate } from '../../../../utils/hooks/useForceUpdate'
import { DatePicker } from '../../../DatePicker'
import { MenuItem } from '../../../MenuItem'
import { Select, SelectChangeEvent } from '../../../Select'
import { TextField } from '../../../TextField'
import { useGridApiContext } from '../../internal'
import { ClearFilterButton } from '../components/ClearFilterButton'
import { FilterContainer } from '../components/FilterContainer'
import { useDebouncedSyncFilter } from '../hooks/useDebouncedSyncFilter'
import { dateOperators } from './constants'
import { useInitializeDateFilterState } from './hooks'
import { DateFilterOperator, DateFilterState } from './models'

interface DateFilterProps {
  field: string
}

export function DateFilter(props: DateFilterProps) {
  const { field } = props

  const apiRef = useGridApiContext()
  useInitializeDateFilterState(apiRef, field)

  const forceUpdate = useForceUpdate()

  const state = apiRef.current.state.dateFilter.get(field)!
  const isChanged = getIsChanged(state)

  const syncFilter = useDebouncedSyncFilter(
    apiRef,
    `numeric-${field}`,
    field,
    state,
    getIsFiltered,
  )

  const handleOperatorSelectChange = React.useCallback(
    (event: SelectChangeEvent<string>) => {
      state.operator = dateOperators[event.target.value as DateFilterOperator]
      forceUpdate()
      syncFilter()
    },
    [state, forceUpdate, syncFilter],
  )

  const handleFirstInputChange = React.useCallback(
    (date: Date | null) => {
      state.first = date
      forceUpdate()
      syncFilter()
    },
    [state, forceUpdate, syncFilter],
  )

  const handleSecondInputChange = React.useCallback(
    (date: Date | null) => {
      state.second = date
      forceUpdate()
      syncFilter()
    },
    [state, forceUpdate, syncFilter],
  )

  const handleClearFilterButtonClick = React.useCallback(() => {
    state.operator = dateOperators.on
    state.first = null
    state.second = null
    forceUpdate()
    syncFilter()
  }, [state, forceUpdate, syncFilter])

  const filterBody = React.useMemo(() => {
    switch (state.operator.type) {
      case 'oneField': {
        return (
          <DatePicker
            components={{
              OpenPickerIcon: getOpenPickerIcon(state.operator.key),
            }}
            InputAdornmentProps={{
              position: 'start',
            }}
            value={state.first}
            onChange={handleFirstInputChange}
            renderInput={params => <TextField {...params} />}
          />
        )
      }
      case 'twoField': {
        return (
          <>
            <DatePicker
              components={{
                OpenPickerIcon: getOpenPickerIcon(state.operator.key),
              }}
              InputAdornmentProps={{
                position: 'start',
              }}
              value={state.first}
              onChange={handleFirstInputChange}
              renderInput={params => <TextField {...params} />}
            />
            <DatePicker
              components={{
                OpenPickerIcon: getOpenPickerIcon(state.operator.key),
              }}
              InputAdornmentProps={{
                position: 'start',
              }}
              value={state.second}
              onChange={handleSecondInputChange}
              renderInput={params => <TextField {...params} />}
            />
          </>
        )
      }
    }
  }, [
    state.operator,
    state.first,
    state.second,
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
        {Object.values(dateOperators).map(value => (
          <MenuItem key={value.key} value={value.key}>
            {apiRef.current.getLocaleText('DateFilter')[value.key]}
          </MenuItem>
        ))}
      </Select>
      {filterBody}
      <ClearFilterButton
        isFiltered={isChanged}
        onClick={handleClearFilterButtonClick}
      >
        {apiRef.current.getLocaleText('DateFilter').clearFilterButton}
      </ClearFilterButton>
    </FilterContainer>
  )
}

function getIsChanged(state: DateFilterState): boolean {
  if (state.operator.key !== 'on') {
    return true
  } else if (state.operator.type === 'oneField') {
    return state.first !== null
  } else if (state.operator.type === 'twoField') {
    return state.first !== null || state.second !== null
  } else {
    return false
  }
}

function getIsFiltered(state: DateFilterState): boolean {
  if (state.operator.type === 'oneField') {
    return state.first !== null
  } else if (state.operator.type === 'twoField') {
    return state.first !== null && state.second !== null
  } else {
    return false
  }
}

function getOpenPickerIcon(operator: DateFilterOperator) {
  switch (operator) {
    case 'on': {
      return CalendarToday
    }
    case 'notOn': {
      return EventBusy
    }
    case 'before': {
      return ChevronDoubleLeft
    }
    case 'after': {
      return ChevronDoubleRight
    }
    case 'between': {
      return DateRangeIcon
    }
    case 'notBetween': {
      return EventBusy
    }
    default: {
      return undefined
    }
  }
}
