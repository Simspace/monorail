import React, {
  FC,
  ReactElement,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import styled, { css } from 'styled-components'

import { flexFlow } from '@monorail/helpers/exports'
import { isNil } from '@monorail/sharedHelpers/typeGuards'

/*
 * Styles
 */

const SlideContainer = styled.div`
  ${flexFlow('row')};
`

const SlideItem = styled.div`
  ${flexFlow('row')};
  justify-content: center;
  align-items: center;
`

/*
 * Types
 */

export type CarouselChildrenProps = {
  nextSlide: () => void
  prevSlide: () => void
  currentSlide: number
  totalSlides: number
  content: ReactElement
}

type Props = {
  slides: Array<ReactElement>
  children: (props: CarouselChildrenProps) => ReactElement
}

const defaultCurrentSlideIndex = 0
const defaultTranslateValue = 0
const defaultSlideWidth = 0

/*
 * Components
 */

export const Carousel: FC<Props> = ({ slides, children }) => {
  const slideItemRef = useRef<HTMLDivElement>(null)

  const [currentSlideIndex, setCurrentSlideIndex] = useState(
    defaultCurrentSlideIndex,
  )
  const [translateValue, setTranslateValue] = useState(defaultTranslateValue)
  const [slideWidth, setSlideWidth] = useState(defaultSlideWidth)

  /* eslint-disable react-hooks/exhaustive-deps */
  useLayoutEffect(() => {
    if (!isNil(slideItemRef) && !isNil(slideItemRef.current)) {
      const slideItem = slideItemRef.current

      if (slideItem) {
        setSlideWidth(slideItem.getBoundingClientRect().width)
      }
    }
  }, [slideItemRef.current, currentSlideIndex, translateValue, slideWidth])
  /* eslint-enable react-hooks/exhaustive-deps */

  const prevSlide = () => {
    const lastIndex = slides.length
    const shouldResetIndex = currentSlideIndex === 0

    // If on first slide - don't go to previous
    if (currentSlideIndex === 0) {
      return
    }

    const index = shouldResetIndex ? lastIndex : currentSlideIndex - 1

    setCurrentSlideIndex(index)
    setTranslateValue(translateValue + slideWidth)
  }

  const nextSlide = () => {
    const lastIndex = slides.length
    const shouldResetIndex = currentSlideIndex === lastIndex - 1

    // If on last slide - don't go to next
    if (currentSlideIndex === slides.length - 1) {
      return
    }

    const index = shouldResetIndex ? lastIndex : currentSlideIndex + 1

    setCurrentSlideIndex(index)
    setTranslateValue(translateValue - slideWidth)
  }

  return children({
    nextSlide,
    prevSlide,
    currentSlide: currentSlideIndex + 1,
    totalSlides: slides.length,
    content: (
      <SlideContainer
        css={css`
          transform: translateX(${translateValue}px);
          transition: transform ease-out ${slideWidth / 2}ms;
          width: ${slideWidth}px;
        `}
      >
        {slides.map((slide, index) => (
          <SlideItem ref={slideItemRef} key={`slide-${index}`}>
            {slide}
          </SlideItem>
        ))}
      </SlideContainer>
    ),
  })
}
