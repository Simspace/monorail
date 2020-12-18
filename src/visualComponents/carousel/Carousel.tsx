import React, {
  FC,
  ReactElement,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import styled, { css } from 'styled-components'
import { range } from 'fp-ts/lib/Array'

import { Colors, flexFlow, getColor } from '@monorail/helpers/exports'
import { useInterval } from '@monorail/helpers/hooks'
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

const SlidesContainer = styled.div<{
  slides: Array<unknown>
  slideWidth: number
  currentSlideIndex: number
}>`
  ${flexFlow('row')};
  width: ${props => 100 * props.slides.length}%;
  transform: ${props => `translateX(
    calc((-100% / ${props.slides.length}) * ${props.currentSlideIndex})
  )`};
  transition: ${props => `transform ease-out ${props.slideWidth / 2}ms`};
  height: 100%;
`

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
  loop: boolean
  nextSlide: () => void
  prevSlide: () => void
  currentSlide: number
  totalSlides: number
  content: ReactElement
}

type Props = {
  indicatorDots?: boolean
  dotColor?: Colors
  slides: Array<ReactNode>
  loop?: boolean
  autoPlay?: boolean
  timerInterval?: number
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
  loop = false,
  timerInterval = 3000,
  autoPlay = false,
  children,
}) => {
  const slideItemRef = useRef<HTMLDivElement>(null)

  const [currentSlideIndex, setCurrentSlideIndex] = useState(
    defaultCurrentSlideIndex,
  )
  const [translateValue, setTranslateValue] = useState(defaultTranslateValue)
  const [slideWidth, setSlideWidth] = useState(defaultSlideWidth)

  const [count, setCount] = useState(0)

  useInterval(() => {
    play()
    setCount(count + 1)
  }, timerInterval)

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
    const shouldResetIndex = currentSlideIndex === 0

    // If on first slide & loop is false - don't go to previous
    if (!loop && currentSlideIndex === 0) {
      return
    }

    const index = shouldResetIndex ? slides.length - 1 : currentSlideIndex - 1

    setCurrentSlideIndex(index)
    setTranslateValue(translateValue + slideWidth)
  }

  const nextSlide = () => {
    const shouldResetIndex = currentSlideIndex === slides.length - 1

    // If on last slide & loop is false - don't go to next
    if (!loop && currentSlideIndex === slides.length - 1) {
      return
    }

    const index = shouldResetIndex ? 0 : currentSlideIndex + 1

    setCurrentSlideIndex(index)
    setTranslateValue(translateValue - slideWidth)
  }

  const play = () => {
    if (!autoPlay || slides.length < 1) {
      return
    }
    nextSlide()
  }

  const gotToSlideIndex = (index: number) => {
    setCurrentSlideIndex(index)
  }

  return children({
    loop,
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
        <SlidesContainer
          slides={slides}
          slideWidth={slideWidth}
          currentSlideIndex={currentSlideIndex}
        >
          {slides.map((slide, index) => (
            <SlideItem ref={slideItemRef} key={`slide-${index}`}>
              {slide}
            </SlideItem>
          ))}
        </SlidesContainer>
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
