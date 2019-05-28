import { lookup } from 'fp-ts/lib/Record'
import React, { SFC } from 'react'
import styled from 'styled-components'

import { FontSizes, typography } from '@monorail/helpers/exports'

const NumberInputGroupWrapper = styled.div``

const Label = styled.p`
  ${typography(500, FontSizes.Title5)};
  margin-bottom: 8px;
  height: 16px;
`

const Input = styled.input`
  flex: 0 0 50px;
  height: 24px !important;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    opacity: 1;
  }
`

const InputItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  padding: 0 0 0 8px;
`

const InputItemLabel = styled.p`
  ${typography(500, FontSizes.Title5)};
`

type InputItem = {
  label: string
  key: string
  min?: number
  max?: number
}

type Props = {
  label?: string
  items: Array<InputItem>
  onSelect: (key: string, value: number) => void
  value: Record<string, number>
  required?: boolean
}

export const NumberInputGroup: SFC<Props> = ({
  label,
  items,
  onSelect,
  value,
  required,
}) => {
  return (
    <NumberInputGroupWrapper>
      {label && (
        <Label>
          {label}
          {required && '*'}
        </Label>
      )}
      {items.map((item: InputItem, k) => {
        const val = lookup(item.key, value).getOrElse(0)
        return (
          <InputItemWrapper key={k}>
            <InputItemLabel>{item.label}</InputItemLabel>
            <Input
              min={item.min}
              max={item.max}
              type="number"
              name={label}
              key={k}
              value={val}
              onChange={v => onSelect(item.key, Number(v.target.value))}
              required={required}
            />
          </InputItemWrapper>
        )
      })}
    </NumberInputGroupWrapper>
  )
}
