import styled from 'styled-components'
import { flexFlow, gothamFontFamily } from '@monorail/CommonStyles'
import { CommonComponentType } from '@monorail/types'

export const AppContainer = styled.div<CommonComponentType>`
  ${flexFlow()};

  flex: 1;
  overflow: hidden;

  &.event-design,
  &.events:not(.execution),
  &.home {
    ${gothamFontFamily};
  }
`

export const PageContent = styled.div<CommonComponentType>`
  ${flexFlow()};

  flex: 1;
  overflow: hidden;
`
