import { getOrElse } from 'fp-ts/lib/Option'
import { lookup } from 'fp-ts/lib/Record'
import React, { FC } from 'react'
import styled from 'styled-components'

import { FontSizes, typographyFont } from '@monorail/helpers/exports'
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
  ${typographyFont(500, FontSizes.Title5)};
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

export const NumberInputGroup: FC<Props> = props => {
  const { label, items, onSelect, value, required } = props

  return (
    <NumberInputGroupWrapper>
      <Label
        label={label}
        required={required}
        css={css`
          margin-bottom: 8px;
        `}
      />
      {items.map((item: InputItem, k) => {
        const val = getOrElse(() => 0)(lookup(item.key, value))
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
