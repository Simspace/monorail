import React from 'react'

import {
  Colors,
  flexFlow,
  FontSizes,
  getColor,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { Label } from '@monorail/visualComponents/inputs/Label'
import { Text } from '@monorail/visualComponents/typography/Text'

export enum Orientation {
  Row = 'row',
  Column = 'column',
}

type ViewInputProps = {
  disabled?: boolean
  label?: string | number
  orientation?: Orientation
  placeholder?: string
  value?: string | number
}

const Container = styled.div<{ orientation?: Orientation }>(
  ({ orientation }) => css`
    ${flexFlow(orientation)};
  `,
)

export const ViewInput = ({
  label,
  value,
  placeholder,
  orientation = Orientation.Column,
  disabled,
  ...domProps
}: ViewInputProps) => {
  return (
    <Container orientation={orientation} {...domProps}>
      <Label
        label={label}
        css={css`
          ${disabled && `color: ${getColor(Colors.Black54)};`}
        `}
      />
      {value ? (
        <Text
          fontWeight={400}
          fontSize={FontSizes.Title5}
          color={disabled ? Colors.Black54 : Colors.Black89}
          margin={orientation === Orientation.Column ? '4px 0' : '0 0 0 4px'}
        >
          {value}
        </Text>
      ) : (
        <Text
          fontWeight={200}
          fontSize={FontSizes.Title5}
          color={Colors.Black54}
          margin={orientation === Orientation.Column ? '4px 0' : '0 0 0 4px'}
          css={css`
            font-style: italic;
          `}
        >
          {placeholder || 'None'}
        </Text>
      )}
    </Container>
  )
}
