import React from 'react'
import styled, { css } from 'styled-components'

import { Colors, getColor } from '@monorail/helpers/color'
import {
  FontSizes,
  FontWeights,
  typography,
} from '@monorail/helpers/typography'

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'i' | 'b' | 'span'
  fontSize: FontSizes
  fontWeight: FontWeights
  margin?: string
  color?: Colors
}

export const Text = styled.span<Props>(
  ({ fontSize, fontWeight, margin = '', color = Colors.Black89 }) => css`
    ${typography(fontWeight, fontSize, margin)};

    color: ${getColor(color)};
  `,
)
