import React, { FC } from 'react'

import { useInputDebounce } from '@monorail/helpers/hooks'
import { Search, SearchProps } from '@monorail/visualComponents/inputs/Search'

type Props = {
  name?: string
  onChange: SearchProps['onChange']
  onBlur?: SearchProps['onBlur']
  placeholder?: string
  value: string
  searchRef?: SearchProps['searchRef']
}

export const DebouncedSearch: FC<Props> = props => {
  const { name, onChange, onBlur, placeholder, value, ...domProps } = props

  const [localValue, updateLocalValue] = useInputDebounce<string>({
    initialValue: value,
    onChange,
  })

  return (
    <Search
      name={name}
      onChange={updateLocalValue}
      onBlur={onBlur}
      placeholder={placeholder}
      value={localValue}
      {...domProps}
    />
  )
}
