import React from 'react'

import styled from '@monorail/helpers/styled-components'
import { FontSizes, typography } from '@monorail/helpers/typography'

const StyledLabel = styled.p`
  ${typography(500, FontSizes.Title5)};
`

type InputLabelProps = {
  label?: string | number
  required?: boolean
}

export const Label = ({ label, required, ...domProps }: InputLabelProps) => {
  return (
    <StyledLabel {...domProps}>
      {label}
      {required && '*'}
    </StyledLabel>
  )
}
