import React from 'react'

import { Colors } from '@monorail/helpers/color'
import { FontSizes, FontWeights } from '@monorail/helpers/exports'

import { Text } from '../typography/Text'

export type EnrollmentProps = {
  readonly selfEnroll: boolean
}

export const Enrollment = (props: EnrollmentProps) => (
  <Text
    color={Colors.Gray54}
    fontSize={FontSizes.Title5}
    fontWeight={FontWeights.Bold}
    margin="0"
  >
    {props.selfEnroll ? 'Self-Enroll' : 'Manager-Led'}
  </Text>
)
