import styled from 'styled-components'

import {
  Colors,
  ellipsis,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'

export const Title = styled.div`
  ${ellipsis}
  ${typography(700, FontSizes.Title4, '0 0 8px 0')};
  color: ${getColor(Colors.Gray89)};
`
