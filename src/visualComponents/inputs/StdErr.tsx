import React from 'react'

import { Colors, flexFlow, FontSizes } from '@monorail/helpers/exports'
import styled from '@monorail/helpers/styled-components'
import { Text } from '@monorail/visualComponents/typography/Text'

const StdErrContainer = styled.div`
  ${flexFlow('row')};

  height: 24px;
`

export type ErrorProps = {
  err?: boolean
  msg?: string
  fontSize?: FontSizes
}

export const StdErr = ({ err, msg, fontSize, ...domProps }: ErrorProps) => {
  return (
    <StdErrContainer>
      <Text
        {...domProps}
        fontWeight={500}
        fontSize={fontSize ? fontSize : FontSizes.Micro}
        color={Colors.Red}
        margin="8px 0"
      >
        {err && msg}
      </Text>
    </StdErrContainer>
  )
}
