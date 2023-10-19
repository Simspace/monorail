import React from 'react'
import {
  CalendarToday,
  DateRange as DateRangeIcon,
  EventBusy,
} from '@mui/icons-material'

import { ClearFilterButton } from '@monorail/components/ClearFilterButton'
import {
  composeClasses,
  styled,
  useForceUpdate,
  useThemeProps,
} from '@monorail/utils'

import { DatePicker } from '../../../DatePicker.js'
import { ChevronDoubleLeft, ChevronDoubleRight } from '../../../icons.js'
import { MenuItem } from '../../../MenuItem.js'
import type { SelectChangeEvent } from '../../../Select.js'
import { Select } from '../../../Select.js'
import { useGridApiContext } from '../../internal.js'
import { FilterContainer } from '../components/FilterContainer.js'
import { useDebouncedSyncFilter } from '../hooks/useDebouncedSyncFilter.js'
import { getDateOperators } from './constants.js'
import type { DateFilterClasses } from './constants/dateFilterClasses.js'
import { getDateFilterUtilityClass } from './constants/dateFilterClasses.js'
import { useInitializeDateFilterState } from './hooks.js'
import { useDateAdapter } from './hooks/useDateAdapter.js'
import type {
  DateFilterDefinition,
  DateFilterOperator,
  DateFilterState,
} from './models.js'

const DateFilterRoot = styled(FilterContainer, {
  name: 'MonorailDateFilter',
  slot: 'Root',
  overridesResolver: (props, styles) => styles,
})({})

export interface DateFilterProps extends Omit<DateFilterDefinition, 'type'> {
  classes?: Partial<DateFilterClasses>
  field: string
}

export function DateFilter(inProps: DateFilterProps) {
  const props = useThemeProps({
    name: 'MonorailDateFilter',
    props: inProps,
  })

  const { field, external, slotProps = {} } = props

  const classes = useUtilityClasses(props)

  const apiRef = useGridApiContext()
  const adapter = useDateAdapter()
  const dateOperators = React.useMemo(
    () => getDateOperators(adapter.utils),
    [adapter],
  )
  useInitializeDateFilterState(apiRef, adapter!.utils, field, external)

  const forceUpdate = useForceUpdate()

  const state = apiRef.current.state.dateFilter.get(field)!
  const isChanged = getIsChanged(state)

  const beforeSyncFilter = () => {
    apiRef.current.state.filterSubscriptions.get(field)?.forEach(f => {
      f(state)
    })
  }

  const syncFilter = useDebouncedSyncFilter(
    apiRef,
    'date',
    field,
    state,
    getIsFiltered,
    beforeSyncFilter,
  )

  const handleOperatorSelectChange = React.useCallback(
    (event: SelectChangeEvent<string>) => {
      state.operator = dateOperators[event.target.value as DateFilterOperator]
      forceUpdate()
      syncFilter()
    },
    [dateOperators, state, forceUpdate, syncFilter],
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
  }, [dateOperators.on, state, forceUpdate, syncFilter])

  const filterBody = React.useMemo(() => {
    switch (state.operator.type) {
      case 'oneField': {
        return (
          <DatePicker
            autoFocus
            {...slotProps.firstDatePicker}
            slots={{
              ...slotProps.firstDatePicker?.slots,
              openPickerIcon: getOpenPickerIcon(state.operator.key),
            }}
            slotProps={{
              inputAdornment: {
                ...slotProps.firstDatePicker?.slotProps?.inputAdornment,
                position: 'start',
              },
            }}
            value={state.first}
            onChange={handleFirstInputChange}
          />
        )
      }
      case 'twoField': {
        return (
          <>
            <DatePicker
              autoFocus
              {...slotProps.firstDatePicker}
              slots={{
                ...slotProps.firstDatePicker?.slots,
                openPickerIcon: getOpenPickerIcon(state.operator.key),
              }}
              slotProps={{
                inputAdornment: {
                  ...slotProps.firstDatePicker?.slotProps?.inputAdornment,
                  position: 'start',
                },
              }}
              value={state.first}
              onChange={handleFirstInputChange}
            />
            <DatePicker
              {...slotProps.secondDatePicker}
              slots={{
                ...slotProps.secondDatePicker?.slots,
                openPickerIcon: getOpenPickerIcon(state.operator.key),
              }}
              slotProps={{
                inputAdornment: {
                  ...slotProps.secondDatePicker?.slotProps?.inputAdornment,
                  position: 'start',
                },
              }}
              value={state.second}
              onChange={handleSecondInputChange}
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
    slotProps.firstDatePicker,
    slotProps.secondDatePicker,
  ])

  return (
    <DateFilterRoot className={classes.root}>
      <Select
        onBlur={event => event.stopPropagation()}
        value={state.operator.key}
        onChange={handleOperatorSelectChange}
        {...slotProps.select}
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
        {...slotProps.clearFilterButton}
      >
        {apiRef.current.getLocaleText('DateFilter').clearFilterButton}
      </ClearFilterButton>
    </DateFilterRoot>
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

function useUtilityClasses(props: DateFilterProps) {
  const { classes } = props

  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getDateFilterUtilityClass, classes)
}
