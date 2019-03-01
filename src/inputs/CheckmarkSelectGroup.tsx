import React, { SFC } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { SelectOption, Select } from './Select'
import { typography, FontSizes } from '@monorail/CommonStyles'
import { Choice } from './Choice'

const CheckmarkSelectGroupWrapper = styled<
  { cssOverrides?: SimpleInterpolation },
  'div'
>('div')`
  ${({ cssOverrides }) => cssOverrides};
`

const Label = styled.p`
  ${typography(500, FontSizes.Title5)};
  margin-bottom: 4px;
  height: 16px;
`

const CheckmarkSelectWrapper = styled<
  { cssOverrides?: SimpleInterpolation },
  'div'
>('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${({ cssOverrides }) => cssOverrides};
`

const CheckmarkSelectLabel = styled.p`
  ${typography(500, FontSizes.Title5)};
  flex-grow: 1;
`

const CheckmarkSelectContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

type CheckmarkSelect = {
  label: string
  key: string
  options: SelectOption[]
  value: string
  enabled: boolean
}

type Props = {
  css?: SimpleInterpolation
  label?: string
  items: CheckmarkSelect[]
  onSelect: (key: string, value: any) => void // TODO
  onCheck: (key: string, checked: boolean) => void
}

export const CheckmarkSelectGroup: SFC<Props> = ({
  css: cssOverrides,
  label,
  items,
  onSelect,
  onCheck,
}) => {
  return (
    <CheckmarkSelectGroupWrapper cssOverrides={cssOverrides}>
      {label && <Label>{label}</Label>}
      {items.map((item: CheckmarkSelect, k) => {
        const { label: itemLabel, enabled, ...otherProps } = item
        return (
          <CheckmarkSelectWrapper
            key={k}
            cssOverrides={{ marginBottom: k !== items.length ? '8px' : 0 }}
          >
            <Choice
              type="checkbox"
              checked={enabled}
              onChange={() => onCheck(otherProps.key, !enabled)}
            >
              <CheckmarkSelectContent>
                <CheckmarkSelectLabel>{itemLabel}</CheckmarkSelectLabel>
                <Select
                  {...otherProps}
                  onSelect={v => onSelect(otherProps.key, v)}
                  css={{
                    flex: '0 0 100px',
                  }}
                />
              </CheckmarkSelectContent>
            </Choice>
          </CheckmarkSelectWrapper>
        )
      })}
    </CheckmarkSelectGroupWrapper>
  )
}
