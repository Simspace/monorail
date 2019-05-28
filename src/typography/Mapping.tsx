import React from 'react'
import styled, { css } from 'styled-components'

import {
  borderRadius,
  BorderRadius,
  Colors,
  FontSizes,
  FontWeights,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import { FCwDP } from '@monorail/sharedHelpers/react'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'

/*
 * Styles
 */

const MappingContainer = styled.div<DefaultProps>(
  ({ margin }) => css`
    ${typography(400, FontSizes.Title5, margin)};

    font-family: 'Gotham SSm', sans-serif;
  `,
)

export const MappingID = styled.span`
  ${borderRadius(BorderRadius.Small)};

  background: ${getColor(Colors.Grey94)};
  color: ${getColor(Colors.Black74)};
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
    monospace;
  font-weight: ${FontWeights.Book};
  margin-right: 5px;
  padding: 1px 2px 0 2px;
`

/*
 * Types
 */

type DefaultProps = {
  margin: string
}

type MappingType = {
  key: string
  type: string
  name: string
  description: string
}

type Props = {
  mapping: MappingType
}

/*
 * Component
 */

export const Mapping: FCwDP<Props, DefaultProps> = ({
  mapping,
  ...domProps
}) => (
  <MappingContainer {...domProps}>
    <MappingID>{mapping.key}</MappingID>
    {!isEmptyString(mapping.name.trim())
      ? mapping.name.trim()
      : mapping.description.trim()}
  </MappingContainer>
)

Mapping.defaultProps = {
  margin: '',
}
