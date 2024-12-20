import React from 'react'
import type { CSSInterpolation } from '@mui/material'
import { styled, useThemeProps } from '@mui/material'
import composeClasses from '@mui/utils/composeClasses'
import clsx from 'clsx'

import { excludeProps, sx, useRequestAnimationFrame } from '@monorail/utils'

import { getScrollShadowUtilityClass } from './scrollShadowClasses.js'
import type { ScrollShadowProps } from './scrollShadowProps.js'

interface ScrollShadowOwnerState
  extends Omit<ScrollShadowProps, 'top' | 'bottom'> {
  top: boolean
  bottom: boolean
}

const ScrollShadowRoot = styled('div', {
  name: 'MonorailScrollShadow',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})({
  display: 'flex',
  flexFlow: 'column nowrap',
  overflow: 'hidden',
  height: '100%',
  position: 'relative',
})

const ScrollContainer = styled('div', {
  name: 'MonorailScrollShadow',
  slot: 'ScrollContainer',
  overridesResolver: (props, styles) => styles.scrollContainer,
})(
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
  name: 'MonorailScrollShadow',
  slot: 'Shadow',
  overridesResolver: (props: ShadowProps, styles) => {
    const { position } = props
    return position === 'top' ? styles.topShadow : styles.bottomShadow
  },
  shouldForwardProp: excludeProps('position'),
})<ShadowProps>(({ position, theme }) => {
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
})

const MAX_SCROLL_AMOUNT = 128

/**
 * A container for scrolling content that will display a shadow at the top and/or bottom
 * of the container when content overflows the Y axis.
 *
 * Demos:
 *
 * - [ScrollShadow](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/utils-scrollshadow--default)
 */
export const ScrollShadow = React.forwardRef(function ScrollShadow(
  inProps: ScrollShadowProps,
  ref,
) {
  const props = useThemeProps({
    name: 'MonorailScrollShadow',
    props: inProps,
  })
  const {
    className,
    top = true,
    bottom = false,
    children,
    slots = {},
    slotProps = {},
    ...other
  } = props

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

  const handleScrollContainerRefCallback = (element: HTMLDivElement | null) => {
    if (slotProps.scrollContainer?.ref !== undefined) {
      if (typeof slotProps.scrollContainer.ref === 'function') {
        slotProps.scrollContainer.ref(element)
      } else if (typeof slotProps.scrollContainer.ref === 'object') {
        // @ts-expect-error -- assigning to "readonly" property
        slotProps.scrollContainer.ref.current = element
      }
    }
    scrollContainerRef.current = element
    if (!bottom) {
      scheduleAnimation(updateShadows)
    }
  }

  const handleBottomShadowRefCallback = (element: HTMLDivElement | null) => {
    bottomShadowRef.current = element
    scheduleAnimation(updateShadows)
  }

  const ownerState: ScrollShadowOwnerState = {
    ...props,
    top,
    bottom,
  }

  const classes = useUtilityClasses(ownerState)

  return (
    <ScrollShadowRoot
      ref={ref}
      className={clsx(classes.root, className)}
      {...other}
    >
      {top && (
        <Shadow
          className={classes.topShadow}
          ref={topShadowRef}
          position="top"
        />
      )}
      <ScrollContainer
        as={slots.scrollContainer}
        className={clsx(
          classes.scrollContainer,
          slotProps.scrollContainer?.className,
        )}
        {...slotProps.scrollContainer}
        onScroll={updateShadows}
        ref={handleScrollContainerRefCallback}
      >
        {children}
      </ScrollContainer>
      {bottom && (
        <Shadow
          className={classes.bottomShadow}
          ref={handleBottomShadowRefCallback}
          position="bottom"
        />
      )}
    </ScrollShadowRoot>
  )
}) as <D extends React.ElementType = 'div'>(
  props: ScrollShadowProps<D>,
) => JSX.Element

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

function useUtilityClasses(ownerState: ScrollShadowOwnerState) {
  const { classes } = ownerState

  const slots = {
    root: ['root'],
    scrollContainer: ['scrollContainer'],
    topShadow: ['topShadow'],
    bottomShadow: ['bottomShadow'],
  }

  return composeClasses(slots, getScrollShadowUtilityClass, classes)
}
