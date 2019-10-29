import React, { FC } from 'react'

import { useInputDebounce } from '@monorail/helpers/hooks'
import { Search, SearchProps } from '@monorail/visualComponents/inputs/Search'

type Props = {
  name?: string
  onChange: SearchProps['onChange']
  placeholder?: string
  value: string
}

export const DebouncedSearch: FC<Props> = props => {
  const { name, onChange, placeholder, value, ...domProps } = props

  const [localValue, updateLocalValue] = useInputDebounce<string>({
    initialValue: value,
    onChange,
  })

  return (
    <Search
      name={name}
      onChange={updateLocalValue}
      placeholder={placeholder}
      value={localValue}
      {...domProps}
    />
  )
}
