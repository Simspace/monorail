import React, { ChangeEvent, Component } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  borderRadius,
  buttonTransiton,
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography,
} from 'src/CommonStyles'

/*
 * Styles
 */

const BBTextAreaContainer = styled<TextAreaProps, 'label'>('label')`
  ${flexFlow()};

  max-width: 256px;
  width: 100%;
  position: relative; /* position: relative; so that the icons can be absolutely positioned. */

  ${({ css }) => css};
`

const BBTextAreaLabel = styled('p')`
  ${typography(500, FontSizes.Title5)};
  margin: 4px 0;
`

const BBTextAreaInput = styled<BBTextAreaInputProps, 'textarea'>('textarea')`
  ${typography(400, FontSizes.Title5)};
  ${borderRadius()};

  border: 1px solid ${colors(Colors.Black, 0.12)};
  box-sizing: border-box;
  color: ${colors(Colors.Black89)};
  outline: none;
  padding: 4px 6px 4px 6px;
  resize: none;
  width: 100%;

  ${buttonTransiton};

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

type BBTextAreaContainerProps = {
  css?: SimpleInterpolation
}

type BBTextAreaInputProps = {
  disabled?: boolean
  label?: string | number
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  readOnly?: boolean
  value?: string
}

type TextAreaProps = BBTextAreaContainerProps & BBTextAreaInputProps & {}

/*
 * Component
 */

export class TextArea extends Component<TextAreaProps> {
  render() {
    const {
      css,
      disabled,
      label,
      onChange,
      placeholder,
      readOnly,
      value,
      ...otherProps
    } = this.props

    return (
      <BBTextAreaContainer css={css}>
        {label !== undefined && <BBTextAreaLabel>{label}</BBTextAreaLabel>}
        <BBTextAreaInput
          className="new-input"
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          rows={3}
          value={value}
          {...otherProps}
        />
      </BBTextAreaContainer>
    )
  }
}
