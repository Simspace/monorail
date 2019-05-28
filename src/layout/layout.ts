import styled from 'styled-components'

import { flexFlow, gothamFontFamily } from '@monorail/helpers/exports'
import { CommonComponentType } from '@monorail/types'

export const AppContainer = styled.div<CommonComponentType>`
  ${flexFlow()};

  flex: 1;
  overflow: hidden;

  &.catalog,
  &.events:not(.execution),
  &.reports-analytics {
    ${gothamFontFamily};
  }
`

export const PageContent = styled.div<CommonComponentType>`
  ${flexFlow()};

  flex: 1;
  overflow: hidden;
`
