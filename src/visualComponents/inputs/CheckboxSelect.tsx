import React, { SFC } from 'react'
import { css, SimpleInterpolation } from 'styled-components'

import { flexFlow } from '@monorail/helpers/exports'
import {
  BBChoiceFakeLabel,
  Choice,
} from '@monorail/visualComponents/inputs/Choice'
import { Label } from '@monorail/visualComponents/inputs/Label'
import { Select, SelectOption } from '@monorail/visualComponents/inputs/Select'

const checkboxSelectStyles = css`
  width: 400px;
  ${BBChoiceFakeLabel} {
    ${flexFlow('row')};

    align-items: center;
    justify-content: space-between;
  }

  i {
    top: 12px;
  }
`

export type CheckboxSelectValue = { enabled: boolean; value: string }

export type CheckboxSelectProps = {
  onChange: (value: CheckboxSelectValue) => void
  value: CheckboxSelectValue
  cssOverrides?: SimpleInterpolation
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  name?: string
  label?: string
  options: Array<SelectOption>
  placeholder?: string
}

export const CheckboxSelect: SFC<CheckboxSelectProps> = ({
  value,
  label,
  options,
  onChange,
  cssOverrides,
  ...domProps
}) => {
  return (
    <Choice
      {...domProps}
      type="checkbox"
      checked={value ? value.enabled : false}
      onChange={() => {
        onChange({
          enabled: value ? !value.enabled : false,
          value: value ? value.value : '',
        })
      }}
      cssOverrides={cssOverrides}
      css={checkboxSelectStyles}
    >
      <Label label={label} css="margin: 0" />
      <Select
        options={options}
        disabled={!value.enabled}
        onChange={e => {
          if (e.target.value !== undefined) {
            onChange({
              enabled: value ? value.enabled : false,
              value: e.target.value,
            })
          }
        }}
        value={value ? value.value : ''}
        css="width: 256px;"
      />
    </Choice>
  )
}
