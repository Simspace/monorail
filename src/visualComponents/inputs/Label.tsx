import React, { DOMAttributes } from 'react'

import { Colors } from '@monorail/helpers/exports'
import { FontSizes } from '@monorail/helpers/typography'
import { isEmptyString, isNil } from '@monorail/sharedHelpers/typeGuards'
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes'
import { Text } from '@monorail/visualComponents/typography/Text'

type InputLabelProps = DOMAttributes<HTMLParagraphElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  label?: string | number
  title?: string
  required?: boolean
  err?: boolean
  display?: DisplayType
}

export const Label = ({
  label,
  required,
  err,
  display = DisplayType.View,
  ...domProps
}: InputLabelProps) => {
  return !isNil(label) && !isEmptyString(label) ? (
    <Text
      fontWeight={500}
      fontSize={FontSizes.Title5}
      color={err ? Colors.Red : Colors.Black89a}
      margin="0 0 8px"
      {...domProps}
    >
      {label}
      {required && display === DisplayType.Edit && '*'}
    </Text>
  ) : (
    <></>
  )
}
