import { range } from 'fp-ts/lib/Array'
import React, {
  FC,
  ReactElement,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import styled, { css } from 'styled-components'

import {
  baseSecondaryStyles,
  Colors,
  flexFlow,
  getColor,
} from '@monorail/helpers/exports'
import { isNil } from '@monorail/sharedHelpers/typeGuards'

/*
 * Styles
 */

const SlideContainer = styled.div`
  ${flexFlow('row')};
`

const SlideItem = styled.div`
  ${flexFlow('row')};
  flex: 1;
  justify-content: center;
  align-items: center;
`

const DotContainer = styled.div`
  ${flexFlow('row')};
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
`

const DotClickArea = styled.div<DotClickAreaProps>`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  display: inline-block;
`

const Dot = styled.div<DotProps>(
  ({ isActive, dotColor }) => css`
    ${isActive
      ? `background: ${getColor(dotColor, 0.5)};`
      : `background: ${getColor(dotColor, 0.12)};
  border: 0;
  color: ${getColor(dotColor)};

  &:hover {
    background: ${getColor(dotColor, 0.18)};
  }

  &:active {
    background: ${getColor(dotColor, 0.22)};
  }`}
    /* TODO: Pass color to baseSe... */
    height: 8px;
    width: 8px;
    border-radius: 50%;
    display: inline-block;
    margin: 4px;
  `,
)

/*
 * Types
 */

type DotClickAreaProps = {
  onClick: () => void
}

type DotProps = {
  isActive: boolean
  dotColor: Colors
}

export type CarouselChildrenProps = {
  nextSlide: () => void
  prevSlide: () => void
  currentSlide: number
  totalSlides: number
  content: ReactElement
}

type Props = {
  indicatorDots?: boolean
  dotColor?: Colors
  slides: Array<ReactElement>
  children: (props: CarouselChildrenProps) => ReactElement
}

const defaultCurrentSlideIndex = 0
const defaultTranslateValue = 0
const defaultSlideWidth = 0

/*
 * Components
 */

export const Carousel: FC<Props> = ({
  slides,
  indicatorDots = false,
  dotColor = Colors.BrandLightBlue,
  children,
}) => {
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

  const gotToSlideIndex = (index: number) => {
    setCurrentSlideIndex(index)
  }

  return children({
    nextSlide,
    prevSlide,
    currentSlide: currentSlideIndex,
    totalSlides: slides.length - 1,
    content: (
      <SlideContainer
        css={css`
          width: 100%;
          display: block;
          overflow: visible;
          position: relative;
        `}
      >
        <div
          css={css`
            ${flexFlow('row')};
            width: ${100 * slides.length}%;
            transform: translateX(
              calc((-100% / ${slides.length}) * ${currentSlideIndex})
            );
            transition: transform ease-out ${slideWidth / 2}ms;
            height: 100%;
          `}
        >
          {slides.map((slide, index) => (
            <SlideItem ref={slideItemRef} key={`slide-${index}`}>
              {slide}
            </SlideItem>
          ))}
        </div>
        {indicatorDots && (
          <DotContainer>
            {!isNil(slides.length - 1) &&
              range(0, slides.length - 1).map(index => (
                // TODO: Make this a pseudo-element
                <DotClickArea
                  onClick={() => gotToSlideIndex(index)}
                  key={index}
                >
                  <Dot
                    key={index}
                    dotColor={dotColor}
                    isActive={index === currentSlideIndex}
                  />
                </DotClickArea>
              ))}
          </DotContainer>
        )}
      </SlideContainer>
    ),
  })
}
