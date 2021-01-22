import React, { FC, ReactNode } from 'react'
import { css } from 'styled-components'

import { Colors, getColor } from '@monorail/helpers/color'
import {
  FontSizes,
  FontStyles,
  FontWeights,
  typography,
  typographyDeprecated,
} from '@monorail/helpers/typography'
import { isNotNil, isNotUndefined } from '@monorail/sharedHelpers/typeGuards'

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TextProps = {
  as?: HeadingTag | 'p' | 'i' | 'b' | 'span' | 'li' | 'div' | 'label' | 'pre'
  margin?: string
  /*title is used for a native browser tooltip */
  title?: string
  id?: string
  children: string | number | ReactNode
  color?: Colors
  fontSize?: FontSizes
  fontStyle?: FontStyles
  fontWeight?: FontWeights
  noWrap?: boolean
}

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  (props, ref) => {
    const {
      fontSize = FontSizes.Title5,
      fontStyle = FontStyles.Initial,
      fontWeight = FontWeights.Medium,
      margin = '',
      color = Colors.Black89a,
      noWrap = false,
      title,
      children,
      ...domProps
    } = props

    const spanRef = ref || React.useRef<HTMLSpanElement>(null)
    const [showDefaultTitle, setShowDefaultTitle] = React.useState(false)

    React.useEffect(() => {
      /**
       * If type of children is string, noWrap prop is set, and the text overflows its container,
       * automatically display a title; if user supplies a title, this logic will be ignored
       */
      if (typeof spanRef !== 'function' && noWrap) {
        const current = spanRef.current
        if (isNotNil(current)) {
          setShowDefaultTitle(current.offsetWidth < current.scrollWidth)
        }
      }
    }, [spanRef, children, noWrap])

    const displayTitle = React.useMemo(
      () =>
        isNotUndefined(title)
          ? title
          : showDefaultTitle && typeof children === 'string'
          ? children
          : undefined,
      [title, showDefaultTitle, children],
    )

    return (
      <span
        title={displayTitle}
        {...domProps}
        ref={spanRef}
        css={css`
          ${typography(fontWeight, fontSize, margin)};
          color: ${getColor(color)};
          font-style: ${fontStyle};
          ${noWrap
            ? css`
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              `
            : css`
                overflow-wrap: break-word;
              `}
        `}
      >
        {children}
      </span>
    )
  },
)

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
