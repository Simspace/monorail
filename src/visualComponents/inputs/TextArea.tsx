import {
  baseErrorBorderStyles,
  borderRadius,
  buttonTransition,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'
import { Label } from '@monorail/visualComponents/inputs/Label'
import { ErrorProps, StdErr } from '@monorail/visualComponents/inputs/StdErr'
import { ViewInput } from '@monorail/visualComponents/inputs/ViewInput'
import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useLayoutEffect,
  useRef,
} from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

/*
 * Styles
 */

export const TextAreaContainer = styled.label<
  TextAreaContainerProps & { display?: DisplayType }
>(
  ({ cssOverrides, display }) => css`
    ${flexFlow()};

    max-width: 256px;
    width: 100%;
    position: relative; /* position: relative; so that the icons can be absolutely positioned. */

    ${display !== DisplayType.Edit && `margin-bottom: 24px;`}

    ${cssOverrides}
  `,
)

export const TextAreaInput = styled.textarea<TextAreaInputProps>(
  ({ chromeless, compact, height, err }) => css`
    ${typography(400, FontSizes.Title5)};
    ${borderRadius()};

    border: 1px solid ${getColor(Colors.Black, 0.12)};
    box-sizing: border-box;
    color: ${getColor(Colors.Black89)};
    height: ${height ? height : '64'}px;
    outline: none;
    padding: 4px 6px 4px 6px;
    resize: none;
    width: 100%;

    ${buttonTransition};

    ::placeholder {
      color: ${getColor(Colors.Black54)};
      font-style: italic;
    }

    &:hover {
      border: 1px solid ${getColor(Colors.Black, 0.3)};
    }

    &:focus,
    &:active {
      border: 1px solid ${getColor(Colors.BrandLightBlue)};
    }

    ${chromeless &&
      css`
        border: 1px solid transparent;
      `};

    ${compact &&
      css`
        overflow: hidden;
      `};

    /*
      Remove :-moz-ui-invalid styles so that invalid form states look similar across browsers
      https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-ui-invalid
    */
    :-moz-ui-invalid {
      box-shadow: none;
    }

    ${err && baseErrorBorderStyles};
  `,
)

/*
 * Types
 */

type TextAreaContainerProps = {
  cssOverrides?: SimpleInterpolation
  className?: string
}

type TextAreaInputProps = {
  chromeless?: boolean
  compact?: boolean
  disabled?: boolean
  height?: number
  label?: string | number
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  value?: string
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  name?: string
  htmlValidation?: boolean
  hideStdErr?: boolean
  display?: DisplayType
  textareaRef?: React.RefObject<HTMLTextAreaElement>
} & ErrorProps

export type TextAreaProps = TextAreaContainerProps & TextAreaInputProps

/*
 * Component
 */

export const TextArea: FC<TextAreaProps> = props => {
  const {
    chromeless,
    compact,
    cssOverrides,
    disabled,
    display = DisplayType.Edit,
    height,
    label,
    onChange,
    onKeyDown,
    placeholder,
    readOnly,
    required,
    htmlValidation = true,
    value,
    onBlur,
    name,
    className,
    err,
    msg,
    hideStdErr = false,
    textareaRef,
    ...otherProps
  } = props

  const internalRef = useRef<HTMLTextAreaElement>(null)
  const textArea = textareaRef ?? internalRef

  const setCompactHeight = () => {
    if (compact && textArea) {
      const current = textArea.current

      if (!isNil(current)) {
        window.requestAnimationFrame(() => {
          current.style.height = 'auto'
          current.style.height = current.scrollHeight + 'px'
        })
      }
    }
  }

  useLayoutEffect(() => {
    setCompactHeight()
  })

  const onCompactChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCompactHeight()
    onChange && onChange(e)
  }

  return (
    <TextAreaContainer
      cssOverrides={cssOverrides}
      className={className}
      display={display}
    >
      {display === DisplayType.Edit ? (
        <>
          <Label
            label={label}
            required={required}
            err={err}
            display={display}
          />
          <TextAreaInput
            chromeless={chromeless}
            className="new-textarea"
            compact={compact}
            disabled={disabled}
            height={height}
            ref={textArea}
            onChange={onCompactChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            readOnly={readOnly}
            required={htmlValidation && required}
            rows={compact ? 1 : 3}
            value={value}
            onBlur={onBlur}
            name={name}
            err={err}
            {...otherProps}
          />
          {!hideStdErr && <StdErr err={err} msg={msg} />}
        </>
      ) : (
        <ViewInput label={label} value={value} />
      )}
    </TextAreaContainer>
  )
}
