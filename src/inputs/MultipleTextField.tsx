import React, { Component, ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { isNil } from '@monorail/sharedHelpers/typeGuards'

import { TextFieldProps, TextField } from './TextField'
import { flexFlow, typography, FontSizes } from '@monorail/CommonStyles'
import { CommonComponentType } from '@monorail/types'

// TODO - duplicate from text field container
const MultipleTextFieldContainer = styled.label<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    float: none;
    width: 100%;
    position: relative; /* position: relative; so that the icons can be absolutely positioned. */

    ${cssOverrides};
  `,
)
// TODO - consolidate label into a common component
export const BBTextFieldLabel = styled.p`
  ${typography(500, FontSizes.Title5)};
  margin: 4px 0;
`

const TextFieldsWrapper = styled.div`
  display: flex;
  align-items: center;
`

type MultipleTextFieldProps = TextFieldProps & { key: string }

type Props = {
  label?: string
  onChange: (key: string, value: string | number) => void
  cssOverrides?: SimpleInterpolation
  textFields: MultipleTextFieldProps[]
  children?: ReactNode
}

export class MultipleTextField extends Component<Props> {
  render() {
    const { label, textFields, cssOverrides, onChange, children } = this.props
    return (
      <MultipleTextFieldContainer cssOverrides={cssOverrides}>
        {!isNil(label) && <BBTextFieldLabel>{label}</BBTextFieldLabel>}
        <TextFieldsWrapper>
          {textFields.map((t: MultipleTextFieldProps, k: number) => (
            <TextField
              key={k}
              {...t}
              onChange={e =>
                onChange(
                  t.key,
                  t.type === 'number' ? Number(e.target.value) : e.target.value,
                )
              }
              cssOverrides={{
                paddingLeft: k === 0 ? '0px' : '4px',
                paddingRight: k === textFields.length - 1 ? '0px' : '4px',
                ...((t.cssOverrides || {}) as object), // TODO - hacky
              }}
            />
          ))}
          {children && children}
        </TextFieldsWrapper>
      </MultipleTextFieldContainer>
    )
  }
}
