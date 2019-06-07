import React, { ChangeEvent, CSSProperties, ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  baseChromelessStyles,
  baseDisabledStyles,
  borderRadius,
  buttonTransition,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
  visible,
} from '@monorail/helpers/exports'
import { Icon } from '@monorail/icon/Icon'
import { FCwDP } from '@monorail/sharedHelpers/react'

/*
 * Styles
 */

const BBChoiceInput = styled.input<BBChoiceInputProps>`
  opacity: 0; /* Hiding the input. */
  position: absolute; /* position: absolute; so that the Icons can be position: absolute; and so that the input doesn't effect the layout. */
  z-index: -1;
`

const BBChoiceFakeLabel = styled.div<AnsweredProps>(
  ({ answered, disabled }) => css`
    ${answered &&
      css`
        transform: translateX(24px);
      `};

    ${disabled && baseDisabledStyles};

    ${typography(500, FontSizes.Title5)};
    flex-grow: 1;
    word-break: break-word;

    transition: all ease 150ms;
  `,
)

const CCChoice = styled.label<CCChoiceProps>(
  ({ dense, readOnly, incorrect, correct, cssOverrides }) => css`
    ${(readOnly || incorrect || correct) &&
      css`
        cursor: default;
        pointer-events: none;
      `};

    ${baseChromelessStyles()};
    ${flexFlow('row')};
    ${borderRadius()};

    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    min-height: 24px;
    padding: ${dense ? '4px 4px 4px 24px' : '8px 8px 8px 32px'};
    position: relative; /* position: relative; so that the input can be position: absolute; */
    user-select: none;
    width: 100%;

    ${buttonTransition};

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
}

type BBGradeIconProps = {
  correct?: boolean
  incorrect?: boolean
}

type BBChoiceInputProps = AnsweredProps & {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

type CCChoiceProps = AnsweredProps &
  BBGradeIconProps & {
    cssOverrides?: SimpleInterpolation
    readOnly?: boolean
    value?: string | number | Array<string>
    required?: boolean
    name?: string
  }

export type ChoiceProps = BBGradeIconProps &
  CCChoiceProps &
  BBChoiceInputProps & {
    key?: string | number
    type?: 'radio' | 'checkbox'
    children?: ReactNode
    style?: CSSProperties
  }

type DefaultProps = {
  answered: boolean
  disabled: boolean
  indeterminate: boolean
  correct: boolean
  incorrect: boolean
  checked: boolean
  defaultChecked: boolean
  cssOverrides: SimpleInterpolation
  readOnly: boolean
  value: string | number | Array<string>
  required: boolean
  name: string
  key: string | number
  type: 'radio' | 'checkbox'
  children: ReactNode
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
    ...otherProps
  }: BBChoiceInputProps) => (
    <Icon icon="radio_button_unchecked" {...otherProps} />
  ),
)(
  ({ checked, answered, dense, centeredInput }) => css`
    ${visible(!checked)};
    ${centeredInput
      ? centeredIconStyles(answered, dense)
      : baseIconStyles(answered, dense)};

    color: ${getColor(Colors.Black54)};
  `,
)

const CheckedRadioIcon = styled(
  ({
    checked,
    answered,
    dense,
    centeredInput,
    ...otherProps
  }: BBChoiceInputProps) => (
    <Icon icon="radio_button_checked" {...otherProps} />
  ),
)(
  ({ checked, answered, dense, centeredInput }) => css`
    ${visible(checked)};
    ${centeredInput
      ? centeredIconStyles(answered, dense)
      : baseIconStyles(answered, dense)};

    color: ${getColor(Colors.BrandLightBlue)};
  `,
)

const UncheckedCheckboxIcon = styled(
  ({
    checked,
    answered,
    dense,
    indeterminate,
    centeredInput,
    ...otherProps
  }: BBChoiceInputProps) => (
    <Icon icon="check_box_outline_blank" {...otherProps} />
  ),
)(
  ({ checked, answered, dense, indeterminate, centeredInput }) => css`
    ${visible(!checked && !indeterminate)};
    ${centeredInput
      ? centeredIconStyles(answered, dense)
      : baseIconStyles(answered, dense)};

    color: ${getColor(Colors.Black54)};
  `,
)

const CheckedCheckboxIcon = styled(
  ({
    checked,
    answered,
    dense,
    centeredInput,
    ...otherProps
  }: BBChoiceInputProps) => <Icon icon="check_box" {...otherProps} />,
)(
  ({ checked, answered, dense, centeredInput }) => css`
    ${visible(checked)};
    ${centeredInput
      ? centeredIconStyles(answered, dense)
      : baseIconStyles(answered, dense)};

    color: ${getColor(Colors.BrandLightBlue)};
  `,
)

const IndeterminateIcon = styled(
  ({
    indeterminate,
    answered,
    dense,
    centeredInput,
    ...otherProps
  }: BBChoiceInputProps) => (
    <Icon icon="indeterminate_check_box" {...otherProps} />
  ),
)(
  ({ indeterminate, answered, dense, centeredInput }) => css`
    ${visible(indeterminate)};
    ${centeredInput
      ? centeredIconStyles(answered, dense)
      : baseIconStyles(answered, dense)};

    color: ${getColor(Colors.BrandLightBlue)};
  `,
)

const IncorrectIcon = styled(
  ({
    incorrect,
    answered,
    dense,
    ...otherProps
  }: BBChoiceInputProps & BBGradeIconProps) => (
    <Icon icon="cancel" {...otherProps} />
  ),
)(
  ({ incorrect, dense, answered }) => css`
    ${visible(incorrect)};
    ${baseIconStyles(answered, dense)};

    color: ${getColor(Colors.Red)};
  `,
)

const CorrectIcon = styled(
  ({
    correct,
    answered,
    dense,
    ...otherProps
  }: BBChoiceInputProps & BBGradeIconProps) => (
    <Icon icon="check_circle" {...otherProps} />
  ),
)(
  ({ correct, dense, answered }) => css`
    ${visible(correct)};
    ${baseIconStyles(answered, dense)};

    color: ${getColor(Colors.Green)};
  `,
)

const renderFakeInputIcons = (
  type: 'radio' | 'checkbox',
  centeredInput: boolean | undefined,
  checked: boolean,
  answered: boolean,
  dense: boolean | undefined,
  indeterminate: boolean,
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
          />
          <CheckedRadioIcon
            centeredInput={centeredInput}
            checked={checked}
            answered={answered}
            dense={dense}
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
          />
          <CheckedCheckboxIcon
            centeredInput={centeredInput}
            checked={checked}
            answered={answered}
            dense={dense}
          />
          <IndeterminateIcon
            centeredInput={centeredInput}
            indeterminate={indeterminate}
            dense={dense}
          />
        </>
      )
  }
}

export const Choice: FCwDP<ChoiceProps, DefaultProps> = ({
  answered,
  centeredInput,
  checked,
  correct,
  cssOverrides,
  dense,
  disabled,
  incorrect,
  indeterminate,
  onChange,
  children,
  readOnly,
  type,
  value,
  required,
  name,
  style,
  ...domProps
}) => (
  <CCChoice
    style={style}
    correct={correct}
    cssOverrides={cssOverrides}
    incorrect={incorrect}
    dense={dense}
    disabled={disabled}
    readOnly={readOnly}
    answered={answered}
    indeterminate={indeterminate}
    {...domProps}
  >
    <BBChoiceInput
      disabled={disabled}
      onChange={onChange}
      checked={checked}
      type={type}
      readOnly={readOnly}
      value={value}
      required={required}
      name={name}
    />
    <IncorrectIcon incorrect={incorrect} />
    <CorrectIcon correct={correct} />
    {renderFakeInputIcons(
      type,
      centeredInput,
      checked,
      answered,
      dense,
      indeterminate,
    )}
    <BBChoiceFakeLabel answered={answered} disabled={disabled}>
      {children}
    </BBChoiceFakeLabel>
  </CCChoice>
)

Choice.defaultProps = {
  answered: false,
  centeredInput: false,
  dense: false,
  disabled: false,
  indeterminate: false,
  correct: false,
  incorrect: false,
  checked: false,
  defaultChecked: false,
  cssOverrides: '',
  readOnly: false,
  value: '',
  required: false,
  name: '',
  key: '',
  type: 'radio',
  children: '',
}
