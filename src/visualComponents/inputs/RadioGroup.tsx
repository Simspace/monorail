import React, { ChangeEvent, SFC } from 'react'
import styled, { css } from 'styled-components'

import { flexFlow, FontSizes, typography } from '@monorail/helpers/exports'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { Label } from '@monorail/visualComponents/inputs/Label'

import { Choice } from './Choice'

const RadioGroupWrapper = styled.fieldset`
  ${flexFlow('column')};

  margin: 0;
  padding: 0;
  border: 0;
`

const InfoText = styled.p`
  ${typography(300, FontSizes.Title5)};
  margin-left: 32px;
`

export type ChoiceOption = {
  label: string
  key: string
  info?: string
  disabled?: boolean
  'data-test-id'?: string
}

export type RadioGroupProps = {
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
  disabled: false,
  'data-test-id': '',
}

export const RadioGroup: SFC<RadioGroupProps> = ({
  label,
  options,
  onSelect,
  value,
  required,
  ...otherProps
}) => {
  return (
    <RadioGroupWrapper {...otherProps}>
      <Label
        label={label}
        required={required}
        css={css`
          margin-bottom: 8px;
        `}
      />
      {options.map((o: ChoiceOption = defaultOptions, k) => (
        <div key={k + o.label}>
          <Choice
            type="radio"
            name={label}
            data-test-id={o['data-test-id']}
            checked={o.key === value}
            value={o.key}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onSelect(o.key, e)
            }}
            required={required}
            readOnly={false}
            disabled={o.disabled}
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
