import React from 'react'

import { Colors, flexFlow, getColor } from '@monorail/helpers/exports'
import styled, { ThemeProvider } from '@monorail/helpers/styled-components'
import { monorailTheme } from '@monorail/helpers/theme'

const StyledContainer = styled.div`
  ${flexFlow('row')}

  background: ${getColor(Colors.Gray12)};
  min-height: 280px;
  justify-content: center;
  align-items: center;
  padding: 32px;
  overflow: auto;
`

export const ShowCase = props => (
  <ThemeProvider theme={monorailTheme}>
    <StyledContainer>{props.children}</StyledContainer>
  </ThemeProvider>
)
