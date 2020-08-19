import { range } from 'fp-ts/lib/Array'
import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { Icon } from '@monorail/visualComponents/icon/Icon'

export enum Size {
  Tiny = '10',
  Small = '16',
  Medium = '24',
  Large = '32',
}

export enum Fill {
  Black = '#000000',
  Gold = '#FFC107',
  Grey = '#DADADA',
}

const StyledStar = styled.span<{ isEditing?: boolean; interactFill?: Fill }>(
  ({ isEditing, interactFill }) =>
    isEditing &&
    interactFill &&
    css`
      svg {
        path {
          fill: ${interactFill} !important;
        }
      }
    `,
)

const RatingWrapper = styled.div<{
  fill: Fill
  isEditing: boolean
  spreadOut: boolean
}>(
  ({ isEditing, spreadOut, fill }) => css`
    display: flex;

    ${isEditing &&
      css`
        cursor: pointer;
      `};

    svg {
      path {
        fill: ${fill};
      }
    }

    ${StyledStar} {
      ${spreadOut &&
        css`
          margin-right: 10px;
        `};
    }
  `,
)
type StarIcon = 'star_outline' | 'star_half' | 'star_filled'

const handleNever = (err: string): never => {
  throw Error(err)
}

export const getRatingIcons = (rating: number): Array<[number, StarIcon]> => {
  return range(1, 5).map(value => {
    if (rating <= value - 1) {
      return [value, 'star_outline']
    } else if (rating < value && rating > value - 1) {
      return [value, 'star_half']
    } else if (rating >= value) {
      return [value, 'star_filled']
    }

    throw Error("Rating could not be determined. This shouldn't happen")
  })
}

type Props = {
  rating: number
  size?: Size
  fill?: Fill
  interactFill?: Fill
  spreadOut?: boolean
  onClickRating?: (value: number) => void
}

export const Rating = React.memo((props: Props) => {
  const { rating, size, fill, interactFill, spreadOut, onClickRating } = {
    size: Size.Small,
    fill: Fill.Gold,
    interactFill: Fill.Gold,
    spreadOut: false,
    ...props,
  }

  const getStar = (icon: StarIcon, value: number) => {
    switch (icon) {
      case 'star_outline':
        return (
          <StyledStar
            key={`rating-start-${value}`}
            onClick={() => {
              onClickRating && onClickRating(value)
            }}
          >
            <Icon
              icon="star_outline"
              cssOverrides={`
                    width: ${size}px;
                    height: ${size}px;
                  `}
            />
          </StyledStar>
        )
      case 'star_half':
        return (
          <StyledStar
            key={`rating-start-${value}`}
            onClick={() => onClickRating && onClickRating(value)}
          >
            <Icon
              icon="star_half"
              cssOverrides={`
                  width: ${size}px;
                  height: ${size}px;
                `}
            />
          </StyledStar>
        )
      case 'star_filled':
        return (
          <StyledStar
            key={`rating-start-${value}`}
            isEditing={Boolean(onClickRating)}
            interactFill={interactFill}
            onClick={() => onClickRating && onClickRating(value)}
          >
            <Icon
              icon="star_filled"
              cssOverrides={`
                    width: ${size}px;
                    height: ${size}px;
                  `}
            />
          </StyledStar>
        )
      default:
        return handleNever('Unknown star Icon')
    }
  }

  return (
    <RatingWrapper
      isEditing={Boolean(onClickRating)}
      fill={fill}
      spreadOut={spreadOut}
    >
      {getRatingIcons(rating).map(([value, icon]) => getStar(icon, value))}
    </RatingWrapper>
  )
})
