import { lookup } from 'fp-ts/lib/Record'
import React, { SFC } from 'react'
import styled from 'styled-components'

import { FontSizes, typography } from '@monorail/helpers/exports'
import { css } from '@monorail/helpers/styled-components'
import { Label } from '@monorail/visualComponents/inputs/Label'

const NumberInputGroupWrapper = styled.div``

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
        <Label
          label={label}
          required={required}
          css={css`
            margin-bottom: 8px;
            height: 16px;
          `}
        />
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
