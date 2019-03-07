import React, { ChangeEvent, Component } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  borderRadius,
  buttonTransition,
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/CommonStyles'
import { Icon } from '@monorail/icon/Icon'

/*
* Styles
*/

const BBTextFieldContainer = styled<TextFieldProps, 'label'>('label')`
  ${flexFlow()};

  float: none;
  max-width: 256px;
  width: 100%;
  position: relative; /* position: relative; so that the icons can be absolutely positioned. */

  ${({ cssOverrides }) => cssOverrides};
`

export const BBTextFieldLabel = styled('p')`
  ${typography(500, FontSizes.Title5)};
  margin: 4px 0;
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

const BBTextFieldInput = styled<BBTextFieldInputProps, 'input'>('input')`
  ${typography(400, FontSizes.Title5)};
  ${borderRadius()};

  border: ${({ chromeless }) =>
    chromeless
      ? `1px solid transparent`
      : `1px solid ${colors(Colors.Black, 0.12)}`};
  box-sizing: border-box;
  color: ${colors(Colors.Black89)};
  height: 24px;
  outline: none;
  padding: 4px ${({ iconRight }) => (iconRight ? 30 : 6)}px 4px
    ${({ iconLeft }) => (iconLeft ? 30 : 6)}px;
  width: 100%;

  ${buttonTransition};

  &[type='number'] {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      opacity: 1;
    }
  }

  ::placeholder {
    color: ${colors(Colors.Black54)};
    font-style: italic;
  }

  &:hover {
    border-color: ${colors(Colors.Black, 0.3)};
  }

  &:focus,
  &:active {
    border-color: ${colors(Colors.BrandLightBlue)};
  }
`

// TODO: Much duplication from TextInput
const BBTextAreaInput = styled<BBTextFieldInputProps, 'textarea'>('textarea')`
  ${typography(400, FontSizes.Title5)};
  ${borderRadius()};

  border: 1px solid ${colors(Colors.Black, 0.12)};
  box-sizing: border-box;
  color: ${colors(Colors.Black89)};
  height: 5em;
  outline: none;
  padding: 4px ${({ iconRight }) => (iconRight ? 30 : 6)}px 4px
    ${({ iconLeft }) => (iconLeft ? 30 : 6)}px;
  width: 100%;

  ${buttonTransition};

  ::placeholder {
    color: ${colors(Colors.Black54)};
    font-style: italic;
  }

  &:hover {
    border-color: ${colors(Colors.Black, 0.3)};
  }

  &:focus,
  &:active {
    border-color: ${colors(Colors.BrandLightBlue)};
  }
`

/*
* Types
*/

type BBTextFieldContainerProps = {
  cssOverrides?: SimpleInterpolation
}

type BBTextFieldInputProps = {
  chromeless?: boolean
  iconLeft?: string
  iconRight?: string
  label?: string | number
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  placeholder?: string
  value?: string | number // TODO - split into number component
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  type?: string
}

export type TextFieldProps = BBTextFieldContainerProps &
  BBTextFieldInputProps & {}

/*
* Component
*/

export class TextField extends Component<TextFieldProps> {
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
      ...otherProps
    } = this.props

    return (
      <BBTextFieldContainer cssOverrides={cssOverrides}>
        {label !== undefined && <BBTextFieldLabel>{label}</BBTextFieldLabel>}
        {iconLeft && <StyledLeftIcon icon={iconLeft} />}
        {iconRight && <StyledRightIcon icon={iconRight} />}
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
          {...otherProps}
        />
      </BBTextFieldContainer>
    )
  }
}

// TODO: Much duplication from TextInput
export class TextArea extends Component<TextFieldProps> {
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
      ...otherProps
    } = this.props

    return (
      <BBTextFieldContainer cssOverrides={cssOverrides}>
        {label !== undefined && <BBTextFieldLabel>{label}</BBTextFieldLabel>}
        {iconLeft && <StyledLeftIcon icon={iconLeft} />}
        {iconRight && <StyledRightIcon icon={iconRight} />}
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
