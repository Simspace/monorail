import React from 'react'

import { Colors } from '@monorail/helpers/color'
import { FontSizes, FontWeights } from '@monorail/helpers/exports'
import { Fill, Rating, Size } from '@monorail/visualComponents/rating/Rating'

import { Text } from '../typography/Text'

export type StarRatingProps = {
  readonly rating: number
}

export const StarRating = (props: StarRatingProps) => (
  <div
    css={`
      display: flex;
      align-items: center;
    `}
  >
    <Rating rating={props.rating} fill={Fill.Gold} size={Size.Tiny} />
    <Text
      color={Colors.Gray54}
      fontSize={FontSizes.Title5}
      fontWeight={FontWeights.Bold}
      margin="0 0 0 4px"
    >
      {props.rating.toFixed(1)}
    </Text>
  </div>
)
