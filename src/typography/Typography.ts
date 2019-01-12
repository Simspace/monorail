import styled from 'styled-components'
import { typography, FontSizes } from 'src/CommonStyles'
import { CommonComponent, TypographyComponent } from 'src/types'

export const SectionTitle = styled<CommonComponent & TypographyComponent, 'h1'>(
  'h1',
)`
  ${({ margin = '16px' }) => typography(500, FontSizes.Title3, margin)};

  ${({ css: cssOverride }) => cssOverride};
`
