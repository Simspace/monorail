import React, { ReactNode } from 'react'

import {
  Colors,
  flexFlow,
  FontSizes,
  getColor,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { Label } from '@monorail/visualComponents/inputs/Label'
import { Text, TextProps } from '@monorail/visualComponents/typography/Text'

export enum Orientation {
  Row = 'row',
  Column = 'column',
}

type ViewInputProps = {
  disabled?: boolean
  label?: string | number
  orientation?: Orientation
  placeholder?: string
  value?: string | number | ReactNode
  textProps?: Omit<TextProps, 'children'>
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
  textProps,
  ...domProps
}: ViewInputProps) => {
  return (
    <Container orientation={orientation} {...domProps}>
      <Label
        label={label}
        css={css`
          ${disabled && `color: ${getColor(Colors.Black54a)};`}
        `}
      />
      {!isNil(value) ? (
        <Text
          fontWeight={400}
          fontSize={FontSizes.Title5}
          color={disabled ? Colors.Black54a : Colors.Black89a}
          margin={orientation === Orientation.Column ? '4px 0' : '0 0 0 4px'}
          {...textProps}
        >
          {value}
        </Text>
      ) : (
        <Text
          fontWeight={200}
          fontSize={FontSizes.Title5}
          color={Colors.Black54a}
          margin={orientation === Orientation.Column ? '4px 0' : '0 0 0 4px'}
          css={css`
            font-style: italic;
          `}
          {...textProps}
        >
          {placeholder || 'None'}
        </Text>
      )}
    </Container>
  )
}
