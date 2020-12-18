import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useLayoutEffect,
  useRef,
} from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { TextProps } from '@monorail/exports'
import {
  baseErrorBorderStyles,
  borderRadius,
  buttonTransition,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typographyFont,
} from '@monorail/helpers/exports'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'
import { Label } from '@monorail/visualComponents/inputs/Label'
import { ErrorProps, StdErr } from '@monorail/visualComponents/inputs/StdErr'
import { ViewInput } from '@monorail/visualComponents/inputs/ViewInput'

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
    ${typographyFont(400, FontSizes.Title5)};
    ${borderRadius()};

    border: 1px solid ${getColor(Colors.Black, 0.12)};
    box-sizing: border-box;
    color: ${getColor(Colors.Black89a)};
    height: ${height ? height : '64'}px;
    outline: none;
    padding: 4px 6px 4px 6px;
    resize: none;
    width: 100%;

    ${buttonTransition};

    ::placeholder {
      color: ${getColor(Colors.Black54a)};
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
  focus?: boolean
  textProps?: Omit<TextProps, 'children'>
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
    focus = false,
    textProps,
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

  useLayoutEffect(() => {
    // If a parent element has `display: none` or something else that prevents
    // focus (as might be the case with a modal, e.g.), this hook could fire
    // before React updates that, and so the focus call will do nothing. Using
    // this setTimeout delays it for a tick, giving React time to do its update,
    // _then_ focusing the text area.
    if (focus) {
      setTimeout(() => {
        if (textArea.current) {
          textArea.current.focus()
          if (value) {
            textArea.current.setSelectionRange(value.length, value.length)
          }
        }
      }, 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textArea, focus])

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
        <ViewInput label={label} value={value} textProps={textProps} />
      )}
    </TextAreaContainer>
  )
}
