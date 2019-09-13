import React, { ChangeEvent, Component, MouseEvent } from 'react'
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
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { Label } from '@monorail/visualComponents/inputs/Label'

/*
 * Styles
 */

const BBTextFieldContainer = styled.label<ContainerProps>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    float: none;
    width: 256px;
    position: relative; /* position: relative; so that the icons can be absolutely positioned. */

    ${cssOverrides}
  `,
)

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

export const BBTextFieldInput = styled.input<
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
    min-height: 24px; /* IE11 needs min-height for reasons Izak doesn't understand. */
    flex: 1;
    outline: none;
    padding: 4px ${iconRight ? 30 : 6}px 4px ${iconLeft ? 30 : 6}px;
    width: 100%;

    ${buttonTransition};

    &[htmlType='number'] {
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
      border-color: ${disabled ? '' : getColor(Colors.Black, 0.3)};
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

export type InputHTMLType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

type ContainerProps = {
  cssOverrides: SimpleInterpolation
  className: string
}

type ExtraProps = {
  chromeless: boolean
  min: number
  max: number
  maxLength: number
}

type BasicProps = {
  iconLeft: string
  iconRight: string
  label: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onClick?: (event: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  placeholder: string
  value: string | number // TODO - split into number component
  disabled: boolean
  readOnly: boolean
  required: boolean
  htmlType?: InputHTMLType
  autoFocus: boolean
  pattern?: string
  name?: string
}

export type TextFieldProps = ContainerProps & BasicProps & ExtraProps

export const defaultTextFieldProps: TextFieldProps = {
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
  htmlType: 'text',
  min: 0,
  max: 9999,
  maxLength: 1000,
  className: '',
  autoFocus: false,
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
      onBlur,
      placeholder,
      value,
      disabled,
      readOnly,
      required,
      htmlType,
      min,
      max,
      maxLength,
      className,
      ...otherProps
    } = this.props

    return (
      <BBTextFieldContainer className={className} cssOverrides={cssOverrides}>
        <Label label={label} required={required} />
        {!isEmptyString(iconLeft) && <StyledLeftIcon icon={iconLeft} />}
        {!isEmptyString(iconRight) && <StyledRightIcon icon={iconRight} />}
        <BBTextFieldInput
          data-lpignore="true" // 🖕 u LastPass: https://goo.gl/Ez3eS1
          chromeless={chromeless}
          className="new-input"
          iconLeft={iconLeft}
          iconRight={iconRight}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          type={htmlType}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          min={min}
          max={max}
          maxLength={maxLength}
          {...otherProps}
        />
      </BBTextFieldContainer>
    )
  }
}
