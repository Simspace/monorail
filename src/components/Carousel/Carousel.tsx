import React, { FC } from 'react'
import Glider, { GliderProps } from 'react-glider'
import useId from '@mui/utils/useId'

import { IconButtonProps } from '../..'
import { isNotNil } from '../../test-helpers/typeGuards'
import { Arrows } from './Arrows'
import { GliderCarousel, Wrapper } from './Carousel.styled'

type Props = {
  itemWidth?: number
}

export type CarouselProps = Props & { GliderProps?: Partial<GliderProps> } & {
  IconButtonProps?: Partial<IconButtonProps>
}

export const Carousel: FC<CarouselProps> = props => {
  const { children, itemWidth } = props
  const uid = useId()!
  if (isNotNil(children)) {
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
