import React, { DOMAttributes } from 'react'

import { FontSizes } from '@monorail/helpers/typography'
import { isEmptyString, isNil } from '@monorail/sharedHelpers/typeGuards'
import { Text } from '@monorail/visualComponents/typography/Text'

type InputLabelProps = DOMAttributes<HTMLParagraphElement> & {
  label?: string | number
  required?: boolean
}

export const Label = ({ label, required, ...domProps }: InputLabelProps) => {
  return !isNil(label) && !isEmptyString(label) ? (
    <Text
      {...domProps}
      fontWeight={500}
      fontSize={FontSizes.Title5}
      margin="0 0 8px"
    >
      {label}
      {required && '*'}
    </Text>
  ) : (
    <></>
  )
}
