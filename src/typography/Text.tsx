import {
  FontSizes,
  FontWeights,
  typography,
} from '@monorail/helpers/typography'
import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'i' | 'b' | 'span'
  fontSize: FontSizes
  fontWeight: FontWeights
  margin?: string
}

export const Text = styled.span<Props>(
  ({ fontSize, fontWeight, margin = '' }) => css`
    ${typography(fontWeight, fontSize, margin)};
  `,
)
