import React, { SFC } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { CommonComponentType } from '@monorail/types'
import { Label } from '@monorail/visualComponents/inputs/Label'

const SelectGroupWrapper = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    margin: 0;
    padding: 0;
    border: 0;

    ${cssOverrides};
  `,
)

const SelectElementWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 24px;
  border: 1px solid #e5e5e5;
  padding: 0 0 0 0;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`

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

type Props = {
  cssOverrides?: SimpleInterpolation
  disabled?: boolean
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

export const Select: SFC<Props> = ({
  cssOverrides,
  disabled,
  label,
  name,
  onBlur,
  onChange,
  onSelect,
  options,
  placeholder,
  required,
  value,
}) => {
  return (
    <SelectGroupWrapper cssOverrides={cssOverrides}>
      {label && (
        <Label
          label={label}
          required={required}
          css={css`
            margin-bottom: 4px;
            height: 16px;
          `}
        />
      )}
      <SelectElementWrapper>
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
