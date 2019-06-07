import React, { ChangeEvent, SFC } from 'react'
import styled, { css } from 'styled-components'

import { FontSizes, typography } from '@monorail/helpers/exports'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'

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

const InfoText = styled.p`
  ${typography(300, FontSizes.Title5)};
  margin-left: 32px;
`

type ChoiceOption = {
  label: string
  key: string
  info: string
}

type Props = {
  label: string
  options: Array<ChoiceOption>
  onSelect: (key: string, val: ChangeEvent<HTMLInputElement>) => void
  value: string
  required: boolean
}

const defaultOptions = {
  label: '',
  key: '',
  info: '',
}

export const RadioGroup: SFC<Props> = ({
  label,
  options,
  onSelect,
  value,
  required,
  ...otherProps
}) => {
  return (
    <RadioGroupWrapper {...otherProps}>
      {!isEmptyString(label) && (
        <Label>
          {label}
          {required && '*'}
        </Label>
      )}
      {options.map((o: ChoiceOption = defaultOptions, k) => (
        <div key={k + o.label}>
          <Choice
            type="radio"
            name={label}
            checked={o.key === value}
            value={o.key}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onSelect(o.key, e)
            }
            required={required}
            readOnly={false}
          >
            {o.label}
          </Choice>
          <InfoText>{o.key === value && !isEmptyString(o.info)}</InfoText>
        </div>
      ))}
    </RadioGroupWrapper>
  )
}

RadioGroup.defaultProps = {
  label: '',
  required: false,
}
