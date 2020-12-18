import {
  FontSizes,
  gothamFontFamily,
  typographyFont,
} from '@monorail/helpers/exports'
import styled from '@monorail/helpers/styled-components'

export const TagInputContent = styled.div`
  ${gothamFontFamily}
  ${typographyFont(500, FontSizes.Title5)}
  
  padding: 16px;
  background: #fff;
  width: 256px;
`
