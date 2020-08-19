import styled, { css } from 'styled-components'

import {
  FontSizes,
  FontWeights,
  typography,
  typographyFont,
} from '@monorail/helpers/exports'
import { CommonComponentType, TypographyComponent } from '@monorail/types'

export const SectionTitle = styled.h1<
  CommonComponentType & TypographyComponent
>(
  ({ margin = '16px', cssOverrides }) => css`
    ${typography(500, FontSizes.Title3, margin)};

    ${cssOverrides};
  `,
)

export const Bold = styled.strong`
  ${typographyFont(FontWeights.Bold, FontSizes.Title5)}
`
