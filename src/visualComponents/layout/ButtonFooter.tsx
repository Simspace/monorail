import React, { FC } from 'react'

import { Colors, getColor } from '@monorail/helpers/color'
import { ElevationRange, getElevationShadow } from '@monorail/helpers/elevation'
import { flexFlow } from '@monorail/helpers/flex'
import { pageSizePadding } from '@monorail/helpers/size'
import styled from '@monorail/helpers/styled-components'

const ButtonFooterContainer = styled.div`
  ${flexFlow('row')};
  ${getElevationShadow(ElevationRange.Elevation5)};

  align-items: center;
  background-color: ${getColor(Colors.White)};
  height: 40px;
  flex-shrink: 0;
  position: relative; /* Needs pos: rel so that the shadow appears above the content. */
`

const ButtonFooterContent = styled.div`
  ${flexFlow('row-reverse')};
  ${pageSizePadding()};

  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const ButtonFooter: FC = ({ children }) => {
  return (
    <ButtonFooterContainer>
      <ButtonFooterContent>{children}</ButtonFooterContent>
    </ButtonFooterContainer>
  )
}
