import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import {
  BorderRadius,
  borderRadius,
  Colors,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'

/*
 * Styles
 */

const MappingContainer = styled.div<ContainerProps>(
  ({ margin }) => css`
    ${typography(400, FontSizes.Title5, margin)};

    font-family: 'Gotham SSm', sans-serif;
  `,
)

export const MappingID = styled.span`
  ${borderRadius(BorderRadius.Small)};

  background: ${getColor(Colors.Grey94)};
  color: ${getColor(Colors.Black74a)};
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
    monospace;
  font-weight: 600;
  margin-right: 5px;
  padding: 1px 2px 0 2px;
`

/*
 * Types
 */

type MappingType = {
  key: string
  type: string
  name: string
  description: string
}

type ContainerProps = {
  margin?: string
}

type Props = ContainerProps & {
  mapping: MappingType
}

/*
 * Component
 */

export const Mapping: FC<Props> = props => {
  const { mapping, ...domProps } = props

  return (
    <MappingContainer {...domProps}>
      <MappingID>{mapping.key}</MappingID>
      {!isEmptyString(mapping.name.trim())
        ? mapping.name.trim()
        : mapping.description.trim()}
    </MappingContainer>
  )
}
