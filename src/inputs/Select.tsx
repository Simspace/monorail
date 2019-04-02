import React, { SFC } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { typography, FontSizes } from '@monorail/CommonStyles'
import { CommonComponentType } from '@monorail/types'

const SelectGroupWrapper = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    margin: 0;
    padding: 0;
    border: 0;

    ${cssOverrides};
  `,
)

const SelectElementWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 24px;
  border: 1px solid #e5e5e5;
  padding: 0 0 0 0;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`

const SelectElement = styled.select`
  width: calc(100% - 8px);
  height: 22px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

const Label = styled.p`
  ${typography(500, FontSizes.Title5)};
  margin-bottom: 4px;
  height: 16px;
`

export type SelectOption = {
  label: string
  value: string
}

type Props = {
  label?: string
  options: SelectOption[]
  onSelect?: (e: string | string[] | number | undefined) => void
  onBlur?: (e: React.SyntheticEvent) => void
  value?: string | string[] | number
  placeholder?: string
  required?: boolean
  cssOverrides?: SimpleInterpolation
  name?: string
  onChange?: ((event: React.ChangeEvent<HTMLSelectElement>) => void)
}

export const Select: SFC<Props> = ({
  label,
  onSelect,
  onBlur,
  value,
  required,
  placeholder,
  options,
  cssOverrides,
  name,
  onChange,
}) => {
  return (
    <SelectGroupWrapper cssOverrides={cssOverrides}>
      {label && (
        <Label>
          {label}
          {required && '*'}
        </Label>
      )}
      <SelectElementWrapper>
        <SelectElement
          name={name}
          placeholder={placeholder || 'Select'}
          value={value}
          onBlur={onBlur}
          onChange={e => {
            onChange && onChange(e)
            onSelect && onSelect(e.target.value)
          }}
        >
          {options.map((o: SelectOption, key: number) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </SelectElement>
      </SelectElementWrapper>
    </SelectGroupWrapper>
  )
}
