import React from 'react'
import { CSSInterpolation, styled, SxProps, Theme } from '@mui/material'

import { useRequestAnimationFrame } from '../../utils/hooks/useRequestAnimationFrame'
import { excludeProps } from '../../utils/styled/excludeProps'
import { sx } from '../../utils/sx'

const ScrollShadowContainer = styled('div')(
  sx({
    display: 'flex',
    flexFlow: 'column nowrap',
    overflow: 'hidden',
    height: '100%',
    position: 'relative',
  }),
)

const ScrollContainer = styled('div')(
  sx({
    flex: 1,
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
  }),
)

interface ShadowProps {
  position: 'top' | 'bottom'
}

const Shadow = styled('div', {
  shouldForwardProp: excludeProps('position'),
})<ShadowProps>(({ position }) =>
  sx(theme => {
    const styles: CSSInterpolation = {
      backgroundColor: theme.palette.common.white,
      height: theme.spacing(4),
      pointerEvents: 'none',
      zIndex: 5,
      opacity: 0,
      transition: 'opacity 100ms',
      position: 'absolute',
      left: theme.spacing(-2),
      right: theme.spacing(-2),
      boxShadow: theme.shadows[6],
    }
    switch (position) {
      case 'top': {
        styles.top = theme.spacing(-4.5)
        break
      }
      case 'bottom': {
        styles.bottom = theme.spacing(-4.5)
        styles.transform = 'rotate(180deg)'
        break
      }
    }
    return styles
  }),
)

const MAX_SCROLL_AMOUNT = 128

interface ScrollShadowProps extends React.ComponentPropsWithRef<'div'> {
  bottomShadow?: boolean
  children: React.ReactNode
  sx?: SxProps<Theme>
}

export const ScrollShadow: React.ForwardRefExoticComponent<ScrollShadowProps> =
  React.forwardRef(
    (props: ScrollShadowProps, ref: React.ForwardedRef<HTMLDivElement>) => {
      const { bottomShadow = false, children, ...other } = props

      const scrollContainerRef = React.useRef<HTMLDivElement | null>(null)
      const topShadowRef = React.useRef<HTMLDivElement>(null)
      const bottomShadowRef = React.useRef<HTMLDivElement | null>(null)

      const scheduleAnimation = useRequestAnimationFrame()

      const updateShadows = () => {
        const scrollContainerElement = scrollContainerRef.current
        if (scrollContainerElement === null) {
          return
        }

        if (topShadowRef.current !== null) {
          const topShadowElement = topShadowRef.current
          const scrollTop = scrollContainerElement.scrollTop

          if (shouldAnimateShadowOpacity(topShadowElement, scrollTop)) {
            scheduleAnimation(() => {
              topShadowElement.style.opacity = calculateScrollOpacity(scrollTop)
            })
          }
        }

        if (bottomShadowRef.current !== null) {
          const bottomShadowElement = bottomShadowRef.current
          const scrollBottom =
            scrollContainerElement.scrollHeight -
            scrollContainerElement.clientHeight -
            scrollContainerElement.scrollTop

          if (shouldAnimateShadowOpacity(bottomShadowElement, scrollBottom)) {
            scheduleAnimation(() => {
              bottomShadowElement.style.opacity =
                calculateScrollOpacity(scrollBottom)
            })
          }
        }
      }

      const handleScrollContainerRefCallback = (
        element: HTMLDivElement | null,
      ) => {
        scrollContainerRef.current = element
        if (!bottomShadow) {
          scheduleAnimation(updateShadows)
        }
      }

      const handleBottomShadowRefCallback = (
        element: HTMLDivElement | null,
      ) => {
        bottomShadowRef.current = element
        scheduleAnimation(updateShadows)
      }

      return (
        <ScrollShadowContainer ref={ref} {...other}>
          <Shadow ref={topShadowRef} position="top" />
          <ScrollContainer
            onScroll={updateShadows}
            ref={handleScrollContainerRefCallback}
          >
            {children}
          </ScrollContainer>
          {bottomShadow && (
            <Shadow ref={handleBottomShadowRefCallback} position="bottom" />
          )}
        </ScrollShadowContainer>
      )
    },
  )

function shouldAnimateShadowOpacity(
  shadowElement: HTMLDivElement,
  scrollAmount: number,
) {
  if (
    scrollAmount >= MAX_SCROLL_AMOUNT &&
    shadowElement.style.opacity !== '1'
  ) {
    return true
  }
  if (scrollAmount < MAX_SCROLL_AMOUNT) {
    return true
  }
  return false
}

function calculateScrollOpacity(scrollAmount: number) {
  if (scrollAmount === 0) {
    return '0'
  }
  if (scrollAmount >= MAX_SCROLL_AMOUNT) {
    return '1'
  }
  return Math.min((1 / MAX_SCROLL_AMOUNT) * scrollAmount, 1).toString(10)
}
