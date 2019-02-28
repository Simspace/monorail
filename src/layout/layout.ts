import styled from 'styled-components'
import { Colors, colors, flexFlow } from '@monorail/CommonStyles'
import { CommonComponentType } from '@monorail/types'

export const AppBody = styled<CommonComponentType, 'div'>('div')`
  ${flexFlow('row')};

  flex: 1;
  overflow: hidden;
`

export const AppContainer = styled<CommonComponentType, 'div'>('div')`
  ${flexFlow()};

  flex: 1;
  overflow: hidden;
`
export const PageContent = styled<CommonComponentType, 'div'>('div')`
  ${flexFlow()};

  flex: 1;
  overflow: hidden;
`
