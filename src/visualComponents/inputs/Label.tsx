import React, { DOMAttributes } from 'react'

import { Colors } from '@monorail/helpers/exports'
import { FontSizes } from '@monorail/helpers/typography'
import { isEmptyString, isNil } from '@monorail/sharedHelpers/typeGuards'
import { Text } from '@monorail/visualComponents/typography/Text'

type InputLabelProps = DOMAttributes<HTMLParagraphElement> & {
  label?: string | number
  required?: boolean
  err?: boolean
}

export const Label = ({
  label,
  required,
  err,
  ...domProps
}: InputLabelProps) => {
  return !isNil(label) && !isEmptyString(label) ? (
    <Text
      {...domProps}
      fontWeight={500}
      fontSize={FontSizes.Title5}
      color={err ? Colors.Red : Colors.Black89}
      margin="0 0 8px"
    >
      {label}
      {required && '*'}
    </Text>
  ) : (
    <></>
  )
}
