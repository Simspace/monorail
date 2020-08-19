import React, { FC } from 'react'

import { Colors, getColor } from '@monorail/helpers/color'
import { ElevationRange, getElevationShadow } from '@monorail/helpers/elevation'
import { flexFlow } from '@monorail/helpers/flex'
import { pageSizePadding } from '@monorail/helpers/size'
import styled, { css } from '@monorail/helpers/styled-components'
import { FlattenSimpleInterpolation } from 'styled-components'

const ButtonFooterContainer = styled.div<Props>`
  ${flexFlow('row')};
  ${getElevationShadow(ElevationRange.Elevation5)};

  align-items: center;
  background-color: ${getColor(Colors.White)};
  height: 40px;
  flex-shrink: 0;
  position: relative; /* Needs pos: rel so that the shadow appears above the content. */
  ${props => props.cssOverrides}
`

const ButtonFooterContent = styled.div<Props>(
  ({ justifyContent }) => css`
    ${flexFlow('row')};
    ${pageSizePadding()};

    align-items: center;
    justify-content: ${justifyContent ? justifyContent : `flex-end`};
    width: 100%;

    & > * {
      margin-left: 4px;
      margin-right: 4px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  `,
)

type Props = {
  justifyContent?: string
  cssOverrides?: FlattenSimpleInterpolation
}

export const ButtonFooter: FC<Props> = ({
  children,
  justifyContent,
  cssOverrides,
}) => {
  return (
    <ButtonFooterContainer cssOverrides={cssOverrides}>
      <ButtonFooterContent justifyContent={justifyContent}>
        {children}
      </ButtonFooterContent>
    </ButtonFooterContainer>
  )
}
