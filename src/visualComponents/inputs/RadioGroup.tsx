import { findFirst } from 'fp-ts/lib/Array'
import React, { ChangeEvent, FC } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

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
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'
import { Label } from '@monorail/visualComponents/inputs/Label'
import { ErrorProps, StdErr } from '@monorail/visualComponents/inputs/StdErr'
import { ViewInput } from '@monorail/visualComponents/inputs/ViewInput'

const Container = styled.div<
  ContainerProps & { display?: string } & { hideStdErr?: boolean }
>(
  ({ display, hideStdErr, cssOverrides }) => css`
    ${flexFlow('column')};

    ${display !== DisplayType.Edit && !hideStdErr && `margin-bottom: 24px;`}

    ${cssOverrides};
  `,
)

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

type ContainerProps = {
  cssOverrides?: SimpleInterpolation
  className?: string
}

export type ChoiceOption = {
  label: string
  key: string
  info?: string
  disabled?: boolean
  'data-test-id'?: string
}

export type RadioGroupProps = ErrorProps &
  ContainerProps & {
    name?: string
    label?: string
    options: Array<ChoiceOption>
    onSelect?: (key: string, val: React.MouseEvent<Element, MouseEvent>) => void
    value: string
    required?: boolean
    htmlValidation?: boolean
    display?: DisplayType
    hideStdErr?: boolean
  }

const defaultOptions = {
  label: '',
  key: '',
  info: '',
  disabled: false,
  'data-test-id': '',
  htmlValidation: true,
}

export const RadioGroup: FC<RadioGroupProps> = props => {
  const {
    label = '',
    options,
    onSelect,
    value = '',
    required = false,
    htmlValidation = true,
    err = false,
    msg = '',
    name,
    className = '',
    hideStdErr = false,
    display = DisplayType.Edit,
    ...otherProps
  } = props

  return (
    <Container className={className} display={display} hideStdErr={hideStdErr}>
      {display === DisplayType.Edit ? (
        <>
          <Label
            label={label}
            required={required}
            err={err}
            display={display}
            css={err ? errorStyles : `${flexFlow('row')}`}
          />
          {err && <BorderJoiner />}
          <RadioGroupWrapper {...otherProps} err={err}>
            {options.map((o: ChoiceOption = defaultOptions, k) => (
              <div key={k + o.label}>
                <Choice
                  type="radio"
                  name={name || label}
                  data-test-id={o['data-test-id']}
                  checked={o.key === value}
                  value={o.key}
                  onClick={e => {
                    onSelect && onSelect(o.key, e)
                  }}
                  required={htmlValidation && required}
                  readOnly={false}
                  disabled={o.disabled}
                >
                  {o.label}
                </Choice>
                <InfoText>{o.key === value && !isEmptyString(o.info)}</InfoText>
              </div>
            ))}
          </RadioGroupWrapper>
          {!hideStdErr && <StdErr err={err} msg={msg} />}
        </>
      ) : (
        <ViewInput
          label={label}
          value={findFirst((o: ChoiceOption) => o.key === value)(options)
            .map(o => o.label)
            .toUndefined()}
        />
      )}
    </Container>
  )
}
