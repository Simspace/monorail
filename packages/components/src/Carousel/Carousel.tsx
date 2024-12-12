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
  uid: string
  children?: React.ReactNode
}

export type CarouselProps = Props & { GliderProps?: Partial<GliderProps> } & {
  IconButtonProps?: Partial<IconButtonProps>
}

/**
 * A container for multiple pieces of uniform content - often `Card`s - arranged horizontally.
 * This content can be dragged or cycled through like a slideshow.
 *
 * Demos:
 *
 * - [Carousel](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/data-display-carousel--default)
 */
export const Carousel: FC<CarouselProps> = props => {
  const defaultUid = useId()!
  const { children, itemWidth, uid = defaultUid } = props
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
          <Arrows uid={uid} IconButtonProps={props.IconButtonProps} />
        </Wrapper>
      </GliderCarousel>
    )
  } else {
    return (
      <Arrows
        uid={uid}
        IconButtonProps={{ ...props.IconButtonProps, disabled: true }}
      />
    )
  }
}
