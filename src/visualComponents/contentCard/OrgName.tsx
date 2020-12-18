import styled from 'styled-components'

import {
  Colors,
  ellipsis,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'

export const OrgName = styled.div`
  ${ellipsis}
  ${typography(500, FontSizes.Title5, '0 0 8px 0')};
  color: ${getColor(Colors.Gray89)};
`
