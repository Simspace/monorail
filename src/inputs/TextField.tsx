import React, { ChangeEvent, Component } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { Omit } from 'typelevel-ts'

import {
  baseDisabledStyles,
  borderRadius,
  buttonTransition,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import { Icon } from '@monorail/icon/Icon'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'

/*
 * Styles
 */

const BBTextFieldContainer = styled.label<ContainerProps>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    float: none;
    width: 256px;
    position: relative; /* position: relative; so that the icons can be absolutely positioned. */

    ${cssOverrides};
  `,
)

export const BBTextFieldLabel = styled.p`
  ${typography(500, FontSizes.Title5)};
`

const baseIconStyles = css`
  position: absolute;
  bottom: 4px;
`

const StyledLeftIcon = styled(Icon)`
  ${baseIconStyles};

  left: 8px;
`
const StyledRightIcon = styled(Icon)`
  ${baseIconStyles};

  right: 8px;
`

const BBTextFieldInput = styled.input<
  Omit<TextFieldProps, 'value' | 'label' | 'cssOverrides'>
>(
  ({ chromeless, iconLeft, iconRight, disabled }) => css`
    ${disabled && baseDisabledStyles};
    ${typography(400, FontSizes.Title5)};
    ${borderRadius()};

    border: ${chromeless
      ? `1px solid transparent`
      : `1px solid ${getColor(Colors.Black, 0.12)}`};
    box-sizing: border-box;
    color: ${getColor(Colors.Black89)};
    height: 24px;
    flex: 1;
    outline: none;
    padding: 4px ${iconRight ? 30 : 6}px 4px ${iconLeft ? 30 : 6}px;
    width: 100%;

    ${buttonTransition};

    &[type='number'] {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        opacity: 1;
      }
    }

    ::placeholder {
      color: ${getColor(Colors.Black54)};
      font-style: italic;
    }

    &:hover {
      border-color: ${getColor(Colors.Black, 0.3)};
    }

    &:focus,
    &:active {
      border-color: ${getColor(Colors.BrandLightBlue)};
    }
  `,
)

// TODO: Much duplication from TextInput
const BBTextAreaInput = styled.textarea<
  Omit<TextAreaProps, 'value' | 'label' | 'cssOverrides'>
>(
  ({ iconLeft, iconRight }) => css`
    ${typography(400, FontSizes.Title5)};
    ${borderRadius()};

    border: 1px solid ${getColor(Colors.Black, 0.12)};
    box-sizing: border-box;
    color: ${getColor(Colors.Black89)};
    outline: none;
    resize: none;
    padding: 4px ${iconRight ? 30 : 6}px 4px ${iconLeft ? 30 : 6}px;
    flex: 1;
    height: 56px;
    margin-top: 4px;

    ${buttonTransition};

    ::placeholder {
      color: ${getColor(Colors.Black54)};
      font-style: italic;
    }

    &:hover {
      border-color: ${getColor(Colors.Black, 0.3)};
    }

    &:focus,
    &:active {
      border-color: ${getColor(Colors.BrandLightBlue)};
    }
  `,
)

/*
 * Types
 */

type ContainerProps = {
  cssOverrides: SimpleInterpolation
  className: string
}

type ExtraProps = {
  chromeless: boolean
  min: number
  max: number
}

type BasicProps = {
  iconLeft: string
  iconRight: string
  label: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder: string
  value: string | number // TODO - split into number component
  disabled: boolean
  readOnly: boolean
  required: boolean
  type: string // TO DO - List specific valid input types
}

export type TextFieldProps = ContainerProps & BasicProps & ExtraProps

export type TextAreaProps = ContainerProps & BasicProps

export const defaultTextFieldProps = {
  cssOverrides: '',
  chromeless: false,
  iconLeft: '',
  iconRight: '',
  label: '',
  onChange: () => {},
  placeholder: '',
  value: '',
  disabled: false,
  readOnly: false,
  required: false,
  type: 'text',
  min: 0,
  max: 9999,
  className: '',
}

export const defaultTextAreaProps = {
  cssOverrides: '',
  iconLeft: '',
  iconRight: '',
  label: '',
  onChange: () => {},
  placeholder: '',
  value: '',
  disabled: false,
  readOnly: false,
  required: false,
  type: 'text',
  className: '',
}

/*
 * Component
 */

export class TextField extends Component<TextFieldProps> {
  static defaultProps = defaultTextFieldProps

  render() {
    const {
      chromeless,
      cssOverrides,
      iconLeft,
      iconRight,
      label,
      onChange,
      placeholder,
      value,
      disabled,
      readOnly,
      required,
      type,
      min,
      max,
      className,
      ...otherProps
    } = this.props

    return (
      <BBTextFieldContainer className={className} cssOverrides={cssOverrides}>
        {!isEmptyString(label) && <BBTextFieldLabel>{label}</BBTextFieldLabel>}
        {!isEmptyString(iconLeft) && <StyledLeftIcon icon={iconLeft} />}
        {!isEmptyString(iconRight) && <StyledRightIcon icon={iconRight} />}
        <BBTextFieldInput
          data-lpignore="true" // 🖕 u LastPass: https://goo.gl/Ez3eS1
          chromeless={chromeless}
          className="new-input"
          iconLeft={iconLeft}
          iconRight={iconRight}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          min={min}
          max={max}
          {...otherProps}
        />
      </BBTextFieldContainer>
    )
  }
}

// TODO: Much duplication from TextInput
export class TextArea extends Component<TextAreaProps> {
  static defaultProps = defaultTextAreaProps

  render() {
    const {
      cssOverrides,
      iconLeft,
      iconRight,
      label,
      onChange,
      placeholder,
      value,
      disabled,
      readOnly,
      required,
      type,
      className,
      ...otherProps
    } = this.props

    return (
      <BBTextFieldContainer className={className} cssOverrides={cssOverrides}>
        {!isEmptyString(label) && <BBTextFieldLabel>{label}</BBTextFieldLabel>}
        {!isEmptyString(iconLeft) && <StyledLeftIcon icon={iconLeft} />}
        {!isEmptyString(iconRight) && <StyledRightIcon icon={iconRight} />}
        <BBTextAreaInput
          className="new-textarea"
          iconLeft={iconLeft}
          iconRight={iconRight}
          onChange={onChange}
          placeholder={placeholder}
          type={type || 'string'}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          {...otherProps}
        />
      </BBTextFieldContainer>
    )
  }
}
