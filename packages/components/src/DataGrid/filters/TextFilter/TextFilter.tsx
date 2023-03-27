import React from 'react'

import {
  composeClasses,
  styled,
  useForceUpdate,
  useThemeProps,
} from '@monorail/utils'

import { MenuItem } from '../../../MenuItem.js'
import type { SelectChangeEvent } from '../../../Select.js'
import { Select } from '../../../Select.js'
import { TextField } from '../../../TextField.js'
import { useGridApiContext } from '../../internal.js'
import { ClearFilterButton } from '../components/ClearFilterButton.js'
import { FilterContainer } from '../components/FilterContainer.js'
import { useDebouncedSyncFilter } from '../hooks/useDebouncedSyncFilter.js'
import type { TextFilterClasses } from './constants/textFilterClasses.js'
import { getTextFilterUtilityClass } from './constants/textFilterClasses.js'
import { useInitializeTextFilterState } from './hooks/useInitializeTextFilterState.js'
import type { TextFilterDefinition } from './models.js'
import type { TextFilterOperator } from './models/TextFilterOperator.js'

const TextFilterRoot = styled(FilterContainer, {
  name: 'MonorailTextFilter',
  slot: 'Root',
  overridesResolver: (props, styles) => styles,
})({})

export interface TextFilterProps extends Omit<TextFilterDefinition, 'field'> {
  classes?: Partial<TextFilterClasses>
  field: string
}

export function TextFilter(inProps: TextFilterProps) {
  const props = useThemeProps({
    name: 'MonorailTextFilter',
    props: inProps,
  })

  const { field, external, slotProps = {} } = props

  const classes = useUtilityClasses(props)

  const apiRef = useGridApiContext()
  useInitializeTextFilterState(field, 'contains', external)

  const state = apiRef.current.state.textFilter.get(field)!

  const isFiltered =
    state.operator !== 'contains' || state.searchText.length !== 0

  const forceUpdate = useForceUpdate()

  const beforeSyncFilter = () => {
    apiRef.current.state.filterSubscriptions.get(field)?.forEach(f => {
      f(state)
    })
  }

  const syncFilter = useDebouncedSyncFilter(
    apiRef,
    'text',
    field,
    state,
    state => state.searchText.length !== 0,
    beforeSyncFilter,
  )

  const localeText = React.useMemo(
    () => apiRef.current.getLocaleText('TextFilter'),
    [apiRef],
  )

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    state.searchText = event.target.value
    forceUpdate()
    syncFilter()
  }

  const handleOperatorSelectChange = (
    event: SelectChangeEvent<TextFilterOperator>,
  ) => {
    state.operator = event.target.value as TextFilterOperator
    forceUpdate()
    syncFilter()
  }

  const handleClearFilterButtonClick = () => {
    state.operator = 'contains'
    state.searchText = ''
    forceUpdate()
    syncFilter()
  }

  return (
    <TextFilterRoot className={classes.root}>
      <Select
        onBlur={event => {
          event.stopPropagation()
        }}
        onChange={handleOperatorSelectChange}
        value={state.operator}
        {...slotProps.select}
      >
        <MenuItem value="contains">{localeText.contains}</MenuItem>
        <MenuItem value="exact">{localeText.exact}</MenuItem>
      </Select>
      <TextField
        value={state.searchText}
        placeholder={localeText.inputPlaceholder}
        onChange={handleSearchTextChange}
        {...slotProps.textField}
      />
      <ClearFilterButton
        isFiltered={isFiltered}
        onClick={handleClearFilterButtonClick}
        {...slotProps.clearFilterButton}
      >
        {localeText.clearFilterButton}
      </ClearFilterButton>
    </TextFilterRoot>
  )
}

function useUtilityClasses(props: TextFilterProps) {
  const { classes } = props

  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getTextFilterUtilityClass, classes)
}
