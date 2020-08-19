import React, { FC } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { baseErrorBorderStyles, flexFlow } from '@monorail/helpers/exports'
import { CommonComponentType } from '@monorail/types'
import { Label } from '@monorail/visualComponents/inputs/Label'
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'

const SelectGroupWrapper = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow('column')};

    border: 0;
    margin: 0;
    padding: 0;
    width: 256px;

    ${cssOverrides};
  `,
)

const SelectElementWrapper = styled.div<{ err?: boolean }>(
  ({ err }) => css`
    background-color: white;
    width: 100%;
    height: 24px;
    border: 1px solid #e5e5e5;
    padding: 0 0 0 0;
    border-radius: 3px;

    &:hover {
      cursor: pointer;
    }

    ${err && baseErrorBorderStyles};
  `,
)

const SelectElement = styled.select`
  width: calc(100% - 8px);
  height: 22px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
  }
`

export type SelectOption = {
  label: string
  value: string
}

export type SelectProps = {
  cssOverrides?: SimpleInterpolation
  disabled?: boolean
  display?: DisplayType
  err?: boolean
  label?: string
  name?: string
  onBlur?: (e: React.SyntheticEvent) => void
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onSelect?: (e: string | Array<string> | number | undefined) => void
  options: Array<SelectOption>
  placeholder?: string
  required?: boolean
  value?: string | Array<string> | number
}

export const Select: FC<SelectProps> = props => {
  const {
    cssOverrides,
    disabled,
    display = DisplayType.View,
    err,
    label,
    name,
    onBlur,
    onChange,
    onSelect,
    options,
    placeholder,
    required,
    value,
    ...domProps
  } = props

  return (
    <SelectGroupWrapper cssOverrides={cssOverrides} {...domProps}>
      <Label label={label} required={required} display={display} />
      <SelectElementWrapper err={err}>
        <SelectElement
          disabled={disabled}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={e => {
            onChange && onChange(e)
            onSelect && onSelect(e.target.value)
          }}
        >
          {placeholder ? (
            // NOTE: native <select> elements do not have a placeholder prop
            <option value="placeholder" disabled hidden>
              {placeholder}
            </option>
          ) : (
            <option value="placeholder" disabled hidden>
              Select
            </option>
          )}
          {options.map((o: SelectOption, key: number) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </SelectElement>
      </SelectElementWrapper>
    </SelectGroupWrapper>
  )
}
