import React, {
  ChangeEvent,
  forwardRef,
  ForwardRefExoticComponent,
  MouseEvent,
  PropsWithoutRef,
  RefAttributes,
  useState,
} from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  baseDisabledStyles,
  baseErrorBorderStyles,
  borderRadius,
  buttonTransition,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { Icon, IconProps } from '@monorail/visualComponents/icon/Icon'
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'
import { Label } from '@monorail/visualComponents/inputs/Label'
import { ErrorProps, StdErr } from '@monorail/visualComponents/inputs/StdErr'
import { ViewInput } from '@monorail/visualComponents/inputs/ViewInput'

/*
 * Styles
 */

const Container = styled.label<
  ContainerProps & { display?: DisplayType } & { hideStdErr?: boolean }
>(
  ({ cssOverrides, display, hideStdErr }) => css`
    ${flexFlow()};

    float: none;
    width: 256px;
    position: relative; /* position: relative; so that the icons can be absolutely positioned. */

    ${display !== DisplayType.Edit && !hideStdErr && `margin-bottom: 24px;`}

    ${cssOverrides}
  `,
)

export const IconsAndInputContainer = styled.div`
  ${flexFlow('column')};

  flex: 1;
  position: relative;
`

const baseIconStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const StyledLeftIcon = styled(
  ({ canToggleVisibility, err, msg, ...iconProps }: StyledIconProps) => (
    <Icon {...iconProps} css={err ? `color: ${getColor(Colors.Red)};` : ''} />
  ),
)<StyledIconProps>`
  ${baseIconStyles};

  left: 8px;
`

const StyledRightIcon = styled(
  ({ canToggleVisibility, err, msg, ...iconProps }: StyledIconProps) => (
    <Icon {...iconProps} css={err ? `color: ${getColor(Colors.Red)};` : ''} />
  ),
)<StyledIconProps>(
  ({ canToggleVisibility }: StyledIconProps) => css`
    ${baseIconStyles};

    right: ${canToggleVisibility ? '32px' : '8px'};
  `,
)

const StyledVisibilityIcon = styled(Icon)`
  ${baseIconStyles};

  cursor: pointer;
  right: 8px;
`

export const StyledInput = styled.input<TextFieldProps>(
  ({
    chromeless,
    iconLeft,
    iconRight,
    disabled,
    canToggleVisibility,
    err,
  }) => css`
    ${disabled && baseDisabledStyles};
    ${typography(400, FontSizes.Title5)};
    ${borderRadius()};

    border-color: ${getColor(Colors.Black, 0.12)};
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    color: ${getColor(Colors.Black89)};
    height: 24px;
    min-height: 24px; /* IE11 needs min-height for reasons Izak doesn't understand. */
    flex: 1;
    outline: none;
    padding: 4px
      ${iconRight
        ? canToggleVisibility
          ? 56
          : 30
        : canToggleVisibility
        ? 30
        : 6}px
      4px ${iconLeft ? 30 : 6}px;
    width: 100%;

    ${buttonTransition};

    &[htmlType='number'] {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        opacity: 1;
      }
    }

    &:hover {
      border-color: ${getColor(Colors.Black, 0.3)};
    }

    &:focus,
    &:active {
      border-color: ${getColor(Colors.BrandLightBlue)};
    }

    ::placeholder {
      color: ${getColor(Colors.Black54)};
      font-style: italic;
    }

    ${chromeless &&
      css`
        border-color: transparent;
      `};

    /* 
      Remove :-moz-ui-invalid styles so that invalid form states look similar across browsers 
      https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-ui-invalid 
    */
    :-moz-ui-invalid {
      box-shadow: none;
    }

    ${err && baseErrorBorderStyles};

    ${disabled && baseDisabledStyles};
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
  cssOverrides?: SimpleInterpolation
  className?: string
}

type VisibilityProps = {
  canToggleVisibility?: boolean
}

type ExtraProps = {
  chromeless?: boolean
  min?: number
  max?: number
  maxLength?: number
}

type BasicProps = {
  iconLeft?: string
  iconRight?: string
  label?: string
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  onClick?: (event: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  placeholder?: string
  value?: string | number // TODO - split into number component
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  htmlValidation?: boolean
  htmlType?: InputHTMLType
  autoFocus?: boolean
  pattern?: string
  name?: string
  hideStdErr?: boolean
  display?: DisplayType
}

type StyledIconProps = VisibilityProps & IconProps & ErrorProps

export type TextFieldProps = ContainerProps &
  VisibilityProps &
  BasicProps &
  ExtraProps &
  ErrorProps

/*
 * Component
 */

export const TextField: ForwardRefExoticComponent<PropsWithoutRef<
  TextFieldProps
> &
  RefAttributes<HTMLInputElement>> = forwardRef<
  HTMLInputElement,
  TextFieldProps
>(props => {
  const [hide, setHide] = useState(true)

  const {
    autoFocus = false,
    canToggleVisibility = false,
    chromeless = false,
    cssOverrides = '',
    htmlValidation = true,
    iconLeft = '',
    iconRight = '',
    label = '',
    onChange = () => {},
    onBlur,
    placeholder = '',
    value,
    disabled = false,
    display = DisplayType.Edit,
    readOnly = false,
    required = false,
    htmlType = canToggleVisibility && hide ? 'password' : 'text',
    min = 0,
    max = 9999,
    maxLength = 1000,
    className = '',
    err = false,
    msg = '',
    hideStdErr = false,
    ...otherProps
  } = props

  return (
    <Container
      className={className}
      cssOverrides={cssOverrides}
      display={display}
      hideStdErr={hideStdErr}
    >
      {display === DisplayType.Edit ? (
        <>
          <Label
            label={label}
            required={required}
            err={err}
            display={display}
          />
          <IconsAndInputContainer>
            {!isEmptyString(iconLeft) && (
              <StyledLeftIcon icon={iconLeft} err={err} />
            )}
            <StyledInput
              data-lpignore="true" // 🖕 u LastPass: https://goo.gl/Ez3eS1
              canToggleVisibility={canToggleVisibility}
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
              required={htmlValidation && required}
              min={min}
              max={max}
              maxLength={maxLength}
              err={err}
              {...otherProps}
            />
            {!isEmptyString(iconRight) && (
              <StyledRightIcon
                icon={iconRight}
                canToggleVisibility={canToggleVisibility}
                err={err}
              />
            )}
            {canToggleVisibility && (
              <StyledVisibilityIcon
                icon={hide ? 'visibility' : 'visibility_off'}
                onClick={() => setHide(!hide)}
              />
            )}
          </IconsAndInputContainer>
          {!hideStdErr && <StdErr err={err} msg={msg} />}
        </>
      ) : htmlType !== 'password' ? (
        <ViewInput label={label} value={value} />
      ) : (
        <></>
      )}
    </Container>
  )
})
