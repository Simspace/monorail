import { isNil } from '@monorail/sharedHelpers/typeGuards'
import React, { ChangeEvent, Component } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  borderRadius,
  buttonTransition,
  Colors,
  getColor,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/helpers/exports'

/*
* Styles
*/

const BBTextAreaContainer = styled.label<TextAreaProps>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    max-width: 256px;
    width: 100%;
    position: relative; /* position: relative; so that the icons can be absolutely positioned. */

    ${cssOverrides};
  `,
)

const BBTextAreaLabel = styled.p`
  ${typography(500, FontSizes.Title5)};
  margin: 4px 0;
`

const BBTextAreaInput = styled.textarea<BBTextAreaInputProps>(
  ({ chromeless, compact }) => css`
    ${typography(400, FontSizes.Title5)};
    ${borderRadius()};

    border: 1px solid ${getColor(Colors.Black, 0.12)};
    box-sizing: border-box;
    color: ${getColor(Colors.Black89)};
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
  `,
)

/*
* Types
*/

type BBTextAreaContainerProps = {
  cssOverrides?: SimpleInterpolation
}

type BBTextAreaInputProps = {
  chromeless?: boolean
  compact?: boolean
  disabled?: boolean
  label?: string | number
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  value?: string
}

export type TextAreaProps = BBTextAreaContainerProps & BBTextAreaInputProps & {}

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
      label,
      onChange,
      placeholder,
      readOnly,
      required,
      value,
      ...otherProps
    } = this.props

    return (
      <BBTextAreaContainer cssOverrides={cssOverrides}>
        {!isNil(label) && <BBTextAreaLabel>{label}</BBTextAreaLabel>}
        <BBTextAreaInput
          chromeless={chromeless}
          className="new-textarea"
          compact={compact}
          disabled={disabled}
          ref={this.textArea}
          onChange={this.onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          rows={compact ? 1 : 3}
          value={value}
          {...otherProps}
        />
      </BBTextAreaContainer>
    )
  }
}
