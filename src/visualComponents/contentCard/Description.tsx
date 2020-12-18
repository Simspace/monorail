import styled from 'styled-components'

import {
  Colors,
  ellipsis,
  FontSizes,
  FontWeights,
} from '@monorail/helpers/exports'

import { Text } from '../typography/Text'

export const Description = styled(Text).attrs(() => ({
  fontSize: FontSizes.Title5,
  fontWeight: FontWeights.Book,
  color: Colors.Gray62,
}))`
  ${ellipsis}
  height: 48px;
  margin-bottom: 8px;
  text-align: left;
`
