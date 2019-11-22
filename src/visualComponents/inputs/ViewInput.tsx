import React from 'react'

import { Colors, FontSizes } from '@monorail/helpers/exports'
import { css } from '@monorail/helpers/styled-components'
import { Label } from '@monorail/visualComponents/inputs/Label'
import { Text } from '@monorail/visualComponents/typography/Text'

type ViewInputProps = {
  label?: string | number
  value?: string | number
}

export const ViewInput = ({ label, value }: ViewInputProps) => {
  return (
    <>
      <Label label={label} />
      {value ? (
        <Text
          fontWeight={400}
          fontSize={FontSizes.Title5}
          color={Colors.Black89}
          margin="4px 0"
        >
          {value}
        </Text>
      ) : (
        <Text
          fontWeight={200}
          fontSize={FontSizes.Title5}
          color={Colors.Black54}
          margin="4px 0"
          css={css`
            font-style: italic;
          `}
        >
          None
        </Text>
      )}
    </>
  )
}
