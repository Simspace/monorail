import type { FC } from 'react'
import React from 'react'
import type { GliderProps } from 'react-glider'
import Glider from 'react-glider'
import useId from '@mui/utils/useId'

import type { IconButtonProps } from '../IconButton.js'
import { Arrows } from './Arrows.js'
import { GliderCarousel, Wrapper } from './Carousel.styled.js'

type Props = {
  itemWidth?: number
}

export type CarouselProps = Props & { GliderProps?: Partial<GliderProps> } & {
  IconButtonProps?: Partial<IconButtonProps>
}

export const Carousel: FC<CarouselProps> = props => {
  const { children, itemWidth } = props
  const uid = useId()!
  if (children !== null) {
    return (
      <GliderCarousel>
        <Wrapper>
          <Glider
            id={uid}
            draggable
            hasArrows
            slidesToShow="auto"
            slidesToScroll="auto"
            itemWidth={itemWidth}
            exactWidth
            arrows={{
              prev: `#prev-arrow-${uid}`,
              next: `#next-arrow-${uid}`,
            }}
            {...props.GliderProps}
          >
            {children}
          </Glider>
          <Arrows
            uniqueIdentifier={uid}
            IconButtonProps={props.IconButtonProps}
          />
        </Wrapper>
      </GliderCarousel>
    )
  } else {
    return (
      <Arrows
        uniqueIdentifier={uid}
        IconButtonProps={{ ...props.IconButtonProps, disabled: true }}
      />
    )
  }
}
