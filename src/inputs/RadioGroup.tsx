import React, { SFC, ChangeEvent } from 'react'
import styled, { css } from 'styled-components'

import { typography, FontSizes } from '@monorail/CommonStyles'

import { Choice } from './Choice'

const RadioGroupWrapper = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
`

const Label = styled.p`
  ${typography(500, FontSizes.Title5)};
  margin-bottom: 8px;
  height: 16px;
`

type ChoiceOption = {
  label: string
  key: string
}

type Props = {
  label?: string
  options: ChoiceOption[]
  onSelect: (key: string, val: ChangeEvent<HTMLInputElement>) => void
  value: string
  required?: boolean
}

export const RadioGroup: SFC<Props> = ({
  label,
  options,
  onSelect,
  value,
  required,
}) => {
  return (
    <RadioGroupWrapper>
      {label && (
        <Label>
          {label}
          {required && '*'}
        </Label>
      )}
      {options.map((o: ChoiceOption, k) => (
        <Choice
          type="radio"
          name={label}
          checked={o.key === value}
          key={k}
          value={o.key}
          onChange={e => onSelect(o.key, e)}
          required={required}
          readOnly={false}
          cssOverrides={{ margin: '8px 0' }}
        >
          {o.label}
        </Choice>
      ))}
    </RadioGroupWrapper>
  )
}
