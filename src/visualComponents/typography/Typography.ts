import styled, { css } from 'styled-components'

import { FontSizes, typography } from '@monorail/helpers/exports'
import { CommonComponentType, TypographyComponent } from '@monorail/types'

export const SectionTitle = styled.h1<
  CommonComponentType & TypographyComponent
>(
  ({ margin = '16px', cssOverrides }) => css`
    ${typography(500, FontSizes.Title3, margin)};

    ${cssOverrides};
  `,
)
