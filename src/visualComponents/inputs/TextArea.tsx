import React, { ChangeEvent, Component } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

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
import { Label } from '@monorail/visualComponents/inputs/Label'
import { ErrorProps, StdErr } from '@monorail/visualComponents/inputs/StdErr'

/*
 * Styles
 */

export const TextAreaContainer = styled.label<TextAreaContainerProps>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    max-width: 256px;
    width: 100%;
    position: relative; /* position: relative; so that the icons can be absolutely positioned. */

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
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  value?: string
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  name?: string
  hasRequiredAsterisk?: boolean
  hideStdErr?: boolean
} & ErrorProps

export type TextAreaProps = TextAreaContainerProps & TextAreaInputProps

/*
 * Component
 */

export class TextArea extends Component<TextAreaProps> {
  textArea = React.createRef<HTMLTextAreaElement>()

  setCompactHeight = () => {
    const { compact } = this.props

    if (compact) {
      const current = this.textArea.current

      if (!isNil(current)) {
        window.requestAnimationFrame(() => {
          current.style.height = 'auto'
          current.style.height = current.scrollHeight + 'px'
        })
      }
    }
  }

  componentDidUpdate() {
    this.setCompactHeight()
  }

  componentDidMount() {
    this.setCompactHeight()
  }

  onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { onChange } = this.props

    this.setCompactHeight()

    onChange && onChange(e)
  }

  render() {
    const {
      chromeless,
      compact,
      cssOverrides,
      disabled,
      height,
      label,
      onChange,
      placeholder,
      readOnly,
      required,
      hasRequiredAsterisk,
      value,
      onBlur,
      name,
      className,
      err,
      msg,
      hideStdErr = false,
      ...otherProps
    } = this.props

    return (
      <TextAreaContainer cssOverrides={cssOverrides} className={className}>
        <Label
          label={label}
          required={hasRequiredAsterisk || required}
          err={err}
        />
        <TextAreaInput
          chromeless={chromeless}
          className="new-textarea"
          compact={compact}
          disabled={disabled}
          height={height}
          ref={this.textArea}
          onChange={this.onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          rows={compact ? 1 : 3}
          value={value}
          onBlur={onBlur}
          name={name}
          err={err}
          {...otherProps}
        />
        {!hideStdErr && err && <StdErr err={err} msg={msg} />}
      </TextAreaContainer>
    )
  }
}
