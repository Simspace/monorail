import React from 'react'

import { useForceUpdate } from '../../../../utils/hooks/useForceUpdate'
import { MenuItem } from '../../../MenuItem'
import { Select, SelectChangeEvent } from '../../../Select'
import { TextField } from '../../../TextField'
import { useGridApiContext } from '../../internal'
import { ClearFilterButton } from '../components/ClearFilterButton'
import { FilterContainer } from '../components/FilterContainer'
import { useDebouncedSyncFilter } from '../hooks/useDebouncedSyncFilter'
import { useInitializeTextFilterState } from './hooks/useInitializeTextFilterState'
import { TextFilterDefinition } from './models'
import { TextFilterOperator } from './models/TextFilterOperator'

export interface TextFilterProps extends Omit<TextFilterDefinition, 'field'> {
  field: string
}

export function TextFilter(props: TextFilterProps) {
  const { field, external } = props

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
    `text-${field}`,
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
    <FilterContainer>
      <Select
        onBlur={event => {
          event.stopPropagation()
        }}
        onChange={handleOperatorSelectChange}
        value={state.operator}
      >
        <MenuItem value="contains">{localeText.contains}</MenuItem>
        <MenuItem value="exact">{localeText.exact}</MenuItem>
      </Select>
      <TextField
        value={state.searchText}
        placeholder={localeText.inputPlaceholder}
        onChange={handleSearchTextChange}
      />
      <ClearFilterButton
        isFiltered={isFiltered}
        onClick={handleClearFilterButtonClick}
      >
        {localeText.clearFilterButton}
      </ClearFilterButton>
    </FilterContainer>
  )
}