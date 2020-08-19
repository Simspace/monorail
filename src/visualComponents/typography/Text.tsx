import React, { FC, ReactNode } from 'react'
import { css } from 'styled-components'

import { Colors, getColor } from '@monorail/helpers/color'
import {
  FontSizes,
  FontWeights,
  typography,
  typographyDeprecated,
  FontStyles,
} from '@monorail/helpers/typography'

export type TextProps = {
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
    | 'label'
  margin?: string
  /*title is used for a native browser tooltip */
  title?: string
  children: string | number | ReactNode
  color?: Colors
  fontSize?: FontSizes
  fontStyle?: FontStyles
  fontWeight?: FontWeights
}

export const Text: FC<TextProps> = props => {
  const {
    fontSize = FontSizes.Title5,
    fontStyle = FontStyles.Initial,
    fontWeight = FontWeights.Medium,
    margin = '',
    color = Colors.Black89a,
    children,
    ...domProps
  } = props

  return (
    <span
      {...domProps}
      css={css`
        ${typography(fontWeight, fontSize, margin)};
        color: ${getColor(color)};
        font-style: ${fontStyle};
      `}
    >
      {children}
    </span>
  )
}

/**
 * @deprecated Use Text instead. This exist for supporting legacy code only
 * */
export const TextDeprecated: FC<TextProps> = props => {
  const {
    fontSize = FontSizes.Title5,
    fontWeight = FontWeights.Medium,
    margin = '',
    color = Colors.Black89a,
    children,
    ...domProps
  } = props

  return (
    <span
      {...domProps}
      css={css`
        ${typographyDeprecated(fontWeight, fontSize, margin)};
        color: ${getColor(color)};
      `}
    >
      {children}
    </span>
  )
}
