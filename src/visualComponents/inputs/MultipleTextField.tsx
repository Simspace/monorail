import React, { Component, ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { flexFlow } from '@monorail/helpers/exports'
import { CommonComponentType } from '@monorail/types'
import { Label } from '@monorail/visualComponents/inputs/Label'

import { TextField, TextFieldProps } from './TextField'

// TODO - duplicate from text field container
const MultipleTextFieldContainer = styled.label<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    float: none;
    width: 100%;
    position: relative; /* position: relative; so that the icons can be absolutely positioned. */

    ${cssOverrides}
  `,
)

const TextFieldsWrapper = styled.div`
  display: flex;
  align-items: center;
`

type MultipleTextFieldProps = TextFieldProps & { key: string }

type Props = {
  label?: string
  onChange: (key: string, value: string | number) => void
  cssOverrides?: SimpleInterpolation
  textFields: Array<MultipleTextFieldProps>
  children?: ReactNode
}

export class MultipleTextField extends Component<Props> {
  render() {
    const { label, textFields, cssOverrides, onChange, children } = this.props
    return (
      <MultipleTextFieldContainer cssOverrides={cssOverrides}>
        <Label label={label} />
        <TextFieldsWrapper>
          {textFields.map((t: MultipleTextFieldProps, k: number) => (
            <TextField
              {...t}
              onChange={e =>
                onChange(
                  t.key,
                  t.htmlType === 'number'
                    ? Number(e.target.value)
                    : e.target.value,
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
