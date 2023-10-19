import React from 'react'
import type {
  IconButtonProps,
  SelectChangeEvent,
  SelectProps,
  TextFieldProps,
} from '@mui/material'
import { useControlled, useThemeProps } from '@mui/material'

import type { DataAttributes } from '@monorail/types'
import { composeClasses, styled } from '@monorail/utils'

import type { ClearFilterButtonProps } from '../ClearFilterButton.js'
import { ClearFilterButton } from '../ClearFilterButton.js'
import { MenuItem } from '../MenuItem.js'
import { Select } from '../Select.js'
import { TextField } from '../TextField.js'
import { numericOperators } from './constants.js'
import type { NumericFilterClasses } from './constants/numericFilterClasses.js'
import { getNumericFilterUtilityClass } from './constants/numericFilterClasses.js'
import type {
  NumericFilterLocaleText,
  NumericFilterOperator,
} from './models.js'

const NumericFilterRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: theme.spacing(81),
  padding: theme.spacing(4),
  gap: theme.spacing(4),
}))

export interface NumericFilterProps {
  localeText: NumericFilterLocaleText
  state?: {
    first: number | null
    second: number | null
    operator: NumericFilterOperator
  }
  onChange?: (
    first: number | null,
    second: number | null,
    operator: NumericFilterOperator,
  ) => void
  classes?: Partial<NumericFilterClasses>
  hideClearButton?: boolean
  slotProps?: {
    columnHeaderButton?: Partial<IconButtonProps & DataAttributes>
    select?: Omit<
      Partial<SelectProps<NumericFilterOperator> & DataAttributes>,
      'onChange' | 'value' | 'onBlur'
    >
    firstTextField?: Omit<
      Partial<TextFieldProps & DataAttributes>,
      'value' | 'onChange' | 'placeholder'
    >
    secondTextField?: Omit<
      Partial<TextFieldProps & DataAttributes>,
      'value' | 'onChange' | 'placeholder'
    >
    clearFilterButton?: Omit<
      Partial<ClearFilterButtonProps & DataAttributes>,
      'onClick' | 'isFiltered'
    >
  }
}

export function NumericFilter(inProps: NumericFilterProps) {
  const props = useThemeProps({
    name: 'MonorailNumericFilter',
    props: inProps,
  })

  const {
    localeText,
    state: stateProp,
    slotProps = {},
    onChange,
    hideClearButton,
  } = props

  const [state, setState] = useControlled({
    controlled: stateProp,
    default: {
      first: null,
      second: null,
      operator: 'greaterThan',
    },
    name: 'MonorailNumericFilter',
    state: 'state',
  })

  const isChanged = getIsChanged(state)

  const numericOperator = React.useMemo(
    () => numericOperators[state.operator],
    [state.operator],
  )

  const classes = useUtilityClasses(props)

  const handleOperatorSelectChange = React.useCallback(
    (event: SelectChangeEvent<string>) => {
      const operator = event.target.value as NumericFilterOperator
      setState(state => ({
        ...state,
        operator,
      }))
      onChange?.(state.first, state.second, operator)
    },
    [onChange, setState, state.first, state.second],
  )

  const handleFirstInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const first = parseNumber(event.currentTarget.value)
      setState(state => ({
        ...state,
        first,
      }))
      onChange?.(first, state.second, state.operator)
    },
    [onChange, setState, state.operator, state.second],
  )

  const handleSecondInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const second = parseNumber(event.currentTarget.value)
      setState(state => ({
        ...state,
        second,
      }))
      onChange?.(state.first, second, state.operator)
    },
    [onChange, setState, state.first, state.operator],
  )

  const handleClearFilterButtonClick = React.useCallback(() => {
    setState({
      first: null,
      second: null,
      operator: 'greaterThan',
    })
    onChange?.(null, null, 'greaterThan')
  }, [setState, onChange])

  const filterBody = React.useMemo(() => {
    switch (numericOperator.type) {
      case 'oneField': {
        return (
          <TextField
            type="number"
            autoFocus
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
              autoFocus
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
    numericOperator.type,
    handleFirstInputChange,
    handleSecondInputChange,
    slotProps.firstTextField,
    slotProps.secondTextField,
  ])

  return (
    <NumericFilterRoot className={classes.root}>
      <Select
        onBlur={event => event.stopPropagation()}
        value={numericOperator.key}
        onChange={handleOperatorSelectChange}
        {...slotProps.select}
      >
        {Object.values(numericOperators).map(value => (
          <MenuItem key={value.key} value={value.key}>
            {localeText[value.key]}
          </MenuItem>
        ))}
      </Select>
      {filterBody}
      {hideClearButton !== true && (
        <ClearFilterButton
          isFiltered={isChanged}
          onClick={handleClearFilterButtonClick}
        >
          {localeText.clearFilterButton}
        </ClearFilterButton>
      )}
    </NumericFilterRoot>
  )
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

function getIsChanged(state: {
  first: number | null
  second: number | null
  operator: NumericFilterOperator
}): boolean {
  if (state.operator !== 'greaterThan') {
    return true
  } else if (numericOperators[state.operator].type === 'oneField') {
    return state.first !== null
  } else if (numericOperators[state.operator].type === 'twoField') {
    return state.first !== null || state.second !== null
  } else {
    return false
  }
}
