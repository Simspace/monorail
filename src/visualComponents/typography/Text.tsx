import React, { FC, ReactNode } from 'react'
import { css } from 'styled-components'

import { Colors, getColor } from '@monorail/helpers/color'
import {
  FontSizes,
  FontWeights,
  typography,
} from '@monorail/helpers/typography'

type Props = {
  as?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'i'
    | 'b'
    | 'span'
    | 'li'
    | 'div'
  fontSize: FontSizes
  fontWeight: FontWeights
  margin?: string
  color?: Colors
  children: string | number | ReactNode
}

export const Text: FC<Props> = props => {
  const {
    fontSize,
    fontWeight,
    margin = '',
    color = Colors.Black89,
    children,
    ...domProps
  } = props

  return (
    <span
      {...domProps}
      css={css`
        ${typography(fontWeight, fontSize, margin)};
        color: ${getColor(color)};
      `}
    >
      {children}
    </span>
  )
}
