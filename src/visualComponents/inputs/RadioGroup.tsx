import React, { FC } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { findFirst } from 'fp-ts/lib/Array'
import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'

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
import { ViewInput } from '@monorail/visualComponents/inputs/ViewInput'

const Container = styled.div<
  ContainerProps & { display?: string } & { hideStdErr?: boolean }
>(
  ({ display, hideStdErr, containerCssOverrides, direction }) => css`
    ${flexFlow(direction)};

    ${display !== DisplayType.Edit && !hideStdErr && `margin-bottom: 24px;`}

    ${containerCssOverrides};
  `,
)

const RadioGroupWrapper = styled.fieldset<{
  err?: boolean
  direction: 'row' | 'column'
}>(
  ({ err, direction }) => css`
    ${borderRadius()};
    display: flex;
    flex-direction: ${direction};
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
  containerCssOverrides?: SimpleInterpolation
  className?: string
  direction?: 'row' | 'column'
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
    cssOverrides?: SimpleInterpolation
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
    direction = 'column',
    containerCssOverrides,
    ...otherProps
  } = props

  return (
    <Container
      className={className}
      display={display}
      hideStdErr={hideStdErr}
      direction={direction}
      containerCssOverrides={containerCssOverrides}
    >
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
          <RadioGroupWrapper {...otherProps} err={err} direction={direction}>
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
          value={pipe(
            findFirst((o: ChoiceOption) => o.key === value)(options),
            O.map(o => o.label),
            O.toUndefined,
          )}
        />
      )}
    </Container>
  )
}
