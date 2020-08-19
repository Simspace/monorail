import React, { ChangeEvent, CSSProperties, FC, ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  baseChromelessStyles,
  baseDisabledStyles,
  baseErrorBackgroundStyles,
  borderRadius,
  buttonTransition,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typographyFont,
  visible,
} from '@monorail/helpers/exports'
import { Icon, OnClick } from '@monorail/visualComponents/icon/Icon'

/*
 * Styles
 */

const disabledChromeless = css`
  background: transparent;
  border: 0;
`

const ChoiceInput = styled.input`
  opacity: 0; /* Hiding the input. */
  position: absolute; /* position: absolute; so that the Icons can be position: absolute; and so that the input doesn't effect the layout. */
  z-index: -1;
`

export const ChoiceFakeLabel = styled.div<AnsweredProps>(
  ({ answered, disabled, err }) => css`
    ${answered &&
      css`
        transform: translateX(24px);
      `};

    ${disabled && baseDisabledStyles};

    ${typographyFont(500, FontSizes.Title5)};
    ${err && `color: ${getColor(Colors.Red)};`}
    flex-grow: 1;
    word-break: break-word;

    transition: all ease 150ms;
  `,
)

const Container = styled.label<ContainerProps>(
  ({ dense, readOnly, incorrect, correct, disabled, err, cssOverrides }) => css`
    ${(readOnly || incorrect || correct) &&
      css`
        cursor: default;
        pointer-events: none;
      `};

    ${disabled ? disabledChromeless : baseChromelessStyles()};
    ${flexFlow('row')};
    ${borderRadius()};

    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    min-height: 24px;
    padding: ${dense ? '4px 4px 4px 24px' : '8px 8px 8px 32px'};
    pointer-events: ${disabled ? 'none' : ''};
    position: relative; /* position: relative; so that the input can be position: absolute; */
    user-select: none;
    width: 100%;

    ${buttonTransition};

    ${err && baseErrorBackgroundStyles};

    ${cssOverrides};
  `,
)

const baseIconStyles = (answered?: boolean, dense?: boolean) => css`
  font-size: 16px;
  left: ${dense ? '4px' : '8px'};
  position: absolute;
  top: ${dense ? '4px' : '8px'};
  transition: all ease 150ms;
  transform: translateX(${answered ? 24 : 0}px);
`

const centeredIconStyles = (answered?: boolean, dense?: boolean) => css`
  align-items: center;
  font-size: 16px;
  position: absolute;
  left: ${dense ? '4px' : '8px'};
  transition: all ease 150ms;
  transform: translateX(${answered ? 24 : 0}px);
`

/*
 * Types
 */

type AnsweredProps = {
  answered?: boolean
  centeredInput?: boolean
  dense?: boolean
  disabled?: boolean
  indeterminate?: boolean
  err?: boolean
}

type GradeIconProps = {
  correct?: boolean
  incorrect?: boolean
}

type ChoiceInputProps = AnsweredProps & {
  checked?: boolean
  checkColor?: Colors
  defaultChecked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onClick?: OnClick
  'data-test-id'?: string
}

type ContainerProps = AnsweredProps &
  GradeIconProps & {
    cssOverrides?: SimpleInterpolation
    readOnly?: boolean
    value?: string | number | Array<string>
    required?: boolean
    name?: string
  }

export type ChoiceProps = GradeIconProps &
  ContainerProps &
  ChoiceInputProps & {
    type?: 'radio' | 'checkbox'
    children?: ReactNode
    style?: CSSProperties
  }

/*
 * Component
 */

const UncheckedRadioIcon = styled(
  ({
    checked,
    answered,
    dense,
    centeredInput,
    disabled,
    err,
    ...otherProps
  }: ChoiceInputProps) => (
    <Icon icon="radio_button_unchecked" {...otherProps} />
  ),
)(
  ({ checked, answered, dense, centeredInput, disabled, err }) => css`
    ${visible(!checked)};
    ${centeredInput
      ? centeredIconStyles(answered, dense)
      : baseIconStyles(answered, dense)};

    color: ${err ? getColor(Colors.Red) : getColor(Colors.Black54a)};

    ${disabled && baseDisabledStyles};
  `,
)

const CheckedRadioIcon = styled(
  ({
    checked,
    answered,
    dense,
    centeredInput,
    disabled,
    ...otherProps
  }: ChoiceInputProps) => <Icon icon="radio_button_checked" {...otherProps} />,
)(
  ({ checked, answered, dense, centeredInput, disabled }) => css`
    ${visible(checked)};
    ${centeredInput
      ? centeredIconStyles(answered, dense)
      : baseIconStyles(answered, dense)};

    color: ${getColor(Colors.BrandLightBlue)};

    ${disabled && baseDisabledStyles};
  `,
)

const UncheckedCheckboxIcon = styled(
  ({
    checked,
    answered,
    dense,
    indeterminate,
    centeredInput,
    disabled,
    err,
    ...otherProps
  }: ChoiceInputProps) => (
    <Icon icon="check_box_outline_blank" {...otherProps} />
  ),
)(
  ({
    checked,
    answered,
    dense,
    indeterminate,
    centeredInput,
    disabled,
    err,
  }) => css`
    ${visible(!checked && !indeterminate)};
    ${centeredInput
      ? centeredIconStyles(answered, dense)
      : baseIconStyles(answered, dense)};

    color: ${err ? getColor(Colors.Red) : getColor(Colors.Black54a)};

    ${disabled && baseDisabledStyles};
  `,
)

const CheckedCheckboxIcon = styled(
  ({
    checked,
    answered,
    dense,
    centeredInput,
    checkColor,
    disabled,
    ...otherProps
  }: ChoiceInputProps) => <Icon icon="check_box" {...otherProps} />,
)(
  ({ checked, answered, dense, centeredInput, disabled, checkColor }) => css`
    ${visible(checked)};
    ${centeredInput
      ? centeredIconStyles(answered, dense)
      : baseIconStyles(answered, dense)};

    color: ${checkColor
      ? getColor(checkColor)
      : getColor(Colors.BrandLightBlue)};

    ${disabled && baseDisabledStyles};
  `,
)

const IndeterminateIcon = styled(
  ({
    indeterminate,
    answered,
    dense,
    centeredInput,
    disabled,
    ...otherProps
  }: ChoiceInputProps) => (
    <Icon icon="indeterminate_check_box" {...otherProps} />
  ),
)(
  ({ indeterminate, answered, dense, centeredInput, disabled }) => css`
    ${visible(indeterminate)};
    ${centeredInput
      ? centeredIconStyles(answered, dense)
      : baseIconStyles(answered, dense)};

    color: ${getColor(Colors.BrandLightBlue)};

    ${disabled && baseDisabledStyles};
  `,
)

const IncorrectIcon = styled(
  ({
    incorrect,
    answered,
    dense,
    disabled,
    ...otherProps
  }: ChoiceInputProps & GradeIconProps) => (
    <Icon icon="cancel" {...otherProps} />
  ),
)(
  ({ incorrect, dense, answered, disabled }) => css`
    ${visible(incorrect)};
    ${baseIconStyles(answered, dense)};

    color: ${getColor(Colors.Red)};

    ${disabled && baseDisabledStyles};
  `,
)

const CorrectIcon = styled(
  ({
    correct,
    answered,
    dense,
    disabled,
    ...otherProps
  }: ChoiceInputProps & GradeIconProps) => (
    <Icon icon="check_circle" {...otherProps} />
  ),
)(
  ({ correct, dense, answered, disabled }) => css`
    ${visible(correct)};
    ${baseIconStyles(answered, dense)};

    color: ${getColor(Colors.Green)};

    ${disabled && baseDisabledStyles};
  `,
)

const renderFakeInputIcons = (
  type: 'radio' | 'checkbox',
  centeredInput: boolean | undefined,
  checked: boolean,
  answered: boolean,
  dense: boolean | undefined,
  indeterminate: boolean,
  disabled: boolean,
  checkColor?: Colors,
  err?: boolean,
) => {
  switch (type) {
    default:
    case 'radio':
      return (
        <>
          <UncheckedRadioIcon
            centeredInput={centeredInput}
            checked={checked}
            answered={answered}
            dense={dense}
            disabled={disabled}
            err={err}
          />
          <CheckedRadioIcon
            centeredInput={centeredInput}
            checked={checked}
            answered={answered}
            dense={dense}
            disabled={disabled}
          />
        </>
      )
    case 'checkbox':
      return (
        <>
          <UncheckedCheckboxIcon
            centeredInput={centeredInput}
            checked={checked}
            answered={answered}
            dense={dense}
            disabled={disabled}
            err={err}
          />
          <CheckedCheckboxIcon
            centeredInput={centeredInput}
            checked={checked}
            answered={answered}
            checkColor={checkColor}
            dense={dense}
            disabled={disabled}
          />
          <IndeterminateIcon
            centeredInput={centeredInput}
            indeterminate={indeterminate}
            dense={dense}
            disabled={disabled}
          />
        </>
      )
  }
}

export const Choice: FC<ChoiceProps> = props => {
  const {
    answered = false,
    centeredInput = false,
    checkColor,
    checked = false,
    correct = false,
    cssOverrides,
    dense = false,
    disabled = false,
    incorrect = false,
    indeterminate = false,
    onChange,
    children = '',
    readOnly = false,
    type = 'radio',
    value = '',
    required = false,
    name = '',
    style,
    err = false,
    'data-test-id': dataTestId,
    onClick,
    ...domProps
  } = props

  return (
    <Container
      style={style}
      correct={correct}
      cssOverrides={cssOverrides}
      incorrect={incorrect}
      dense={dense}
      disabled={disabled}
      readOnly={readOnly}
      answered={answered}
      indeterminate={indeterminate}
      err={err}
      {...domProps}
    >
      <ChoiceInput
        data-test-id={dataTestId}
        disabled={disabled}
        onChange={e => {
          /**
           * This component is both a controlled _and_ an
           * uncontrolled component because it uses both
           * defaultChecked _and_ checked to control its
           * internal state. This leads to unexpected behavior.
           * For example, PS-7964 where after it's given its
           * defaultChecked value it will fire off an onChange
           * event only once.
           *
           * https://reactjs.org/docs/uncontrolled-components.html#default-values
           *
           * This should be updated to either be completely controlled or
           * modified to be able to be both controlled and uncontrolled.
           *
           * https://ticket.simspace.com/browse/PS-7978
           *
           * AR - 2020/03/19
           */
          onChange && onChange(e)
        }}
        defaultChecked={checked}
        type={type}
        readOnly={readOnly}
        value={value}
        required={required}
        name={name}
        onClick={onClick}
      />
      <IncorrectIcon incorrect={incorrect} disabled={disabled} />
      <CorrectIcon correct={correct} disabled={disabled} />
      {renderFakeInputIcons(
        type,
        centeredInput,
        checked,
        answered,
        dense,
        indeterminate,
        disabled,
        checkColor,
        err,
      )}
      <ChoiceFakeLabel answered={answered} disabled={disabled} err={err}>
        {children}
      </ChoiceFakeLabel>
    </Container>
  )
}
