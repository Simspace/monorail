import React, { FC, useRef } from 'react'

import { Colors, getColor } from '@monorail/helpers/color'
import { ElevationRange, getElevationShadow } from '@monorail/helpers/elevation'
import { flexFlow } from '@monorail/helpers/flex'
import { useEventListener, useRefCallback } from '@monorail/helpers/hooks'
import styled, { css } from '@monorail/helpers/styled-components'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { CssOverridesType } from '@monorail/types'

const ScrollAnimationContainer = styled.div<ScrollAnimationProps>(
  ({ containerCssOverrides }) => css`
    ${flexFlow()};

    overflow: hidden;
    height: 100%;

    position: relative;

    ${containerCssOverrides};
  `,
)

const ScrollContainer = styled.div`
  ${flexFlow()};

  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  transform: translateZ(0);
`

const Shadow = styled.div`
  ${getElevationShadow(ElevationRange.Elevation6)};

  background: ${getColor(Colors.White)};
  height: 16px;
  left: -8px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: -8px;
  top: -18px;
  z-index: 5;
`

const SCROLL_AMOUNT = 128

type ScrollAnimationProps = {
  containerCssOverrides?: CssOverridesType
}

export const ScrollAnimation: FC<ScrollAnimationProps> = ({
  children,
  containerCssOverrides,
  ...domProps
}) => {
  const shadow = useRef<HTMLDivElement>(null)
  const [scrollContainer, scrollContainerRef] = useRefCallback<HTMLDivElement>()

  const handleScroll: EventListener = event => {
    if (!isNil(event.currentTarget) && !isNil(shadow)) {
      const { current: shadowElement } = shadow

      if (!isNil(shadowElement)) {
        const scrollElement = event.currentTarget as HTMLDivElement /* Josh don't hate me! */

        const scrollAmount = scrollElement.scrollTop

        // Only change the scroll position if the opacity isn't correct, or we are under the scroll amount.
        if (
          (scrollAmount >= SCROLL_AMOUNT &&
            shadowElement.style.opacity !== '0.9999') ||
          scrollAmount < SCROLL_AMOUNT
        ) {
          requestAnimationFrame(() => {
            shadowElement.style.cssText = calculateOpacity({
              scrollAmount,
              animationTermination: SCROLL_AMOUNT,
            })
          })
        }
      }
    }
  }

  useEventListener({
    eventName: 'scroll',
    eventListener: handleScroll,
    element: scrollContainer,
  })

  return (
    <ScrollAnimationContainer containerCssOverrides={containerCssOverrides}>
      <Shadow ref={shadow} />

      <ScrollContainer ref={scrollContainerRef} {...domProps}>
        {children}
      </ScrollContainer>
    </ScrollAnimationContainer>
  )
}

const calculateOpacity: (props: {
  scrollAmount: number
  animationTermination: number
}) => string = ({ scrollAmount, animationTermination }) => {
  if (scrollAmount === 0) {
    return 'opacity: 0;'
  }

  if (scrollAmount >= animationTermination) {
    return 'opacity: 0.9999;'
  }

  return `opacity: ${Math.min(
    (0.9999 / animationTermination) * scrollAmount,
    0.9999,
  )};`
}