import React from 'react'

import { Colors } from '@monorail/helpers/color'
import { FontSizes, FontWeights } from '@monorail/helpers/exports'

import { Text } from '../typography/Text'

const formatMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  return hours > 0 ? `${hours}h ${remainingMinutes}m` : `${remainingMinutes}m`
}

export type DurationProps = {
  readonly durationMin: number
}

export const Duration = (props: DurationProps) => (
  <Text
    color={Colors.Gray54}
    fontSize={FontSizes.Title5}
    fontWeight={FontWeights.Medium}
  >
    {formatMinutes(props.durationMin)}
  </Text>
)
