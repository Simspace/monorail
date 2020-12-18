import React from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { elem } from 'fp-ts/lib/Array'
import { eqString } from 'fp-ts/lib/Eq'

import {
  baseErrorBorderStyles,
  borderRadius,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typographyFont,
} from '@monorail/helpers/exports'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { Choice } from '@monorail/visualComponents/inputs/Choice'
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'
import { Label } from '@monorail/visualComponents/inputs/Label'
import { ErrorProps, StdErr } from '@monorail/visualComponents/inputs/StdErr'

const Container = styled.div<
  ContainerProps & { display?: string } & { hideStdErr?: boolean }
>(
  ({ display, hideStdErr, cssOverrides }) => css`
    ${flexFlow('column')};

    ${display !== DisplayType.Edit && !hideStdErr && `margin-bottom: 24px;`}

    ${cssOverrides};
  `,
)

const MultiCheckboxGroupWrapper = styled.fieldset<{ err?: boolean }>(
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
  ${typographyFont(300, FontSizes.Title5)};
  margin-left: 32px;
`

type ContainerProps = {
  cssOverrides?: SimpleInterpolation
  className?: string
}

export type CheckboxChoiceOption = {
  label: string
  key: string
  info?: string
  disabled?: boolean
  'data-test-id'?: string
}

export type MultiCheckboxGroupProps = ErrorProps &
  ContainerProps & {
    name?: string
    label?: string
    options: Array<CheckboxChoiceOption>
    onChange?: (
      key: string,
      // exposing this is possibly useful, depends on implementation
      previousValues: Array<string>,
      event: React.MouseEvent<HTMLInputElement, MouseEvent>,
    ) => void
    values: Array<string>
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

const isSelectedKey = elem(eqString)

// This is just a modified version of RadioGroup used to get a feature done.
// It's not intended to be the long-term solution for checkbox groups.
export const MultiCheckboxGroup = (props: MultiCheckboxGroupProps) => {
  const {
    label = '',
    options,
    onChange,
    values = [],
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
    <Container
      className={className}
      display={display}
      hideStdErr={hideStdErr}
      aria-invalid={err}
    >
      {
        <>
          <Label
            label={label}
            required={required}
            err={err}
            display={display}
            css={err ? errorStyles : `${flexFlow('row')}`}
          />
          {err && <BorderJoiner />}
          <MultiCheckboxGroupWrapper {...otherProps} err={err}>
            {options.map((o: CheckboxChoiceOption = defaultOptions, k) => {
              const isChecked = isSelectedKey(o.key)(values)
              const isDisabled = o.disabled
              const isReadOnly = display === DisplayType.View
              return (
                <div key={o.key}>
                  <Choice
                    type="checkbox"
                    name={name || label}
                    data-test-id={o['data-test-id']}
                    checked={isChecked}
                    value={o.key}
                    onClick={e => {
                      onChange &&
                        onChange(
                          o.key,
                          values,
                          // This assertion is required due to the
                          // incorrect Event typings in Choice
                          (e as unknown) as React.MouseEvent<
                            HTMLInputElement,
                            MouseEvent
                          >,
                        )
                    }}
                    required={htmlValidation && required}
                    readOnly={isReadOnly}
                    disabled={isDisabled}
                  >
                    {o.label}
                  </Choice>
                  <InfoText>
                    {isSelectedKey(o.key)(values) && !isEmptyString(o.info)}
                  </InfoText>
                </div>
              )
            })}
          </MultiCheckboxGroupWrapper>
          {!hideStdErr && <StdErr err={err} msg={msg} />}
        </>
      }
    </Container>
  )
}
