import React, { FC } from 'react'

import { flexFlow } from '@monorail/helpers/flex'
import { pageSizePadding } from '@monorail/helpers/size'
import styled, { CSSProp } from '@monorail/helpers/styled-components'
import { ScrollAnimation } from '@monorail/visualComponents/layout/ScrollAnimation'

const ContentBodyContainer = styled.div`
  ${pageSizePadding({ paddingTop: 24, paddingBottom: 24 })};

  ${flexFlow('column')};
`

export const ContentBody: FC<{ scrollCSS?: CSSProp }> = ({
  children,
  scrollCSS,
  ...domProps
}) => {
  return (
    <ScrollAnimation css={scrollCSS}>
      <ContentBodyContainer {...domProps}>{children}</ContentBodyContainer>
    </ScrollAnimation>
  )
}
