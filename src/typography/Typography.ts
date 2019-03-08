import styled from 'styled-components'
import { typography, FontSizes } from '@monorail/CommonStyles'
import { CommonComponentType, TypographyComponent } from '@monorail/types'

export const SectionTitle = styled<
  CommonComponentType & TypographyComponent,
  'h1'
>('h1')`
  ${({ margin = '16px' }) => typography(500, FontSizes.Title3, margin)};

  ${({ cssOverrides }) => cssOverrides};
`
