import React, { ChangeEvent, SFC } from 'react'
import styled, { css } from 'styled-components'

import {
  baseErrorBorderStyles,
  borderRadius,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { Choice } from '@monorail/visualComponents/inputs/Choice'
import { Label } from '@monorail/visualComponents/inputs/Label'
import { ErrorProps, StdErr } from '@monorail/visualComponents/inputs/StdErr'

const Container = styled.div`
  ${flexFlow('column')};
`

const RadioGroupWrapper = styled.fieldset<{ err?: boolean }>(
  ({ err }) => css`
    ${borderRadius()};

    margin: 0;
    padding: 0;
    border-style: solid;
    border-width: 1px;
    border-color: transparent;

    ${err &&
      css`
        ${baseErrorBorderStyles}

        border-top: none;
        border-top-left-radius: 0 0;
        border-top-right-radius: 0 0;
      `};
  `,
)

const BorderJoiner = styled.div`
  border-style: solid;
  border-width: 1px;
  border-top: none;
  border-bottom: none;
  border-left: none;
  border-color: ${getColor(Colors.Red)};
  height: 8px;
  margin-top: -7px;
`

const errorStyles = css`
  ${flexFlow('row')}

  overflow: hidden;
  white-space: nowrap;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 6px;
    position: relative;
    border-right: 1px solid ${getColor(Colors.Red)};
    border-top: 1px solid ${getColor(Colors.Red)};
    border-top-right-radius: 3px;
    margin: auto 0 auto 8px;
    top: 3px;
  }
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

export type RadioGroupProps = ErrorProps & {
  label: string
  options: Array<ChoiceOption>
  onSelect: (key: string, val: ChangeEvent<HTMLInputElement>) => void
  value: string
  required?: boolean
  hasRequiredAsterisk?: boolean
}

const defaultOptions = {
  label: '',
  key: '',
  info: '',
  disabled: false,
  'data-test-id': '',
  hasRequiredAsterisk: false,
}

export const RadioGroup: SFC<RadioGroupProps> = ({
  label,
  options,
  onSelect,
  value,
  required,
  hasRequiredAsterisk,
  err,
  msg,
  ...otherProps
}) => {
  return (
    <Container>
      <Label
        label={label}
        required={hasRequiredAsterisk || required}
        err={err}
        css={err ? errorStyles : `${flexFlow('row')}`}
      />
      {err && <BorderJoiner />}
      <RadioGroupWrapper {...otherProps} err={err}>
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
      <StdErr err={err} msg={msg} />
    </Container>
  )
}

RadioGroup.defaultProps = {
  label: '',
  required: false,
}
