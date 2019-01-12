import styled from 'styled-components'
import { Colors, colors, flexFlow } from 'src/CommonStyles'
import { CommonComponent } from 'src/types'

export const PageContainer = styled<CommonComponent, 'section'>('section')`
  ${flexFlow()};

  background: ${colors(Colors.Grey98)};
  flex: 1 1 100%;
  overflow-y: auto;

  ${({ css: cssOverride }) => cssOverride};
`
