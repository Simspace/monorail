import { Link, LinkProps } from 'react-router'
import styled, { css } from 'styled-components'

import { baseHyperLinkStyles } from '@monorail/helpers/baseStyles'
import {
  FontSizes,
  FontWeights,
  typography,
} from '@monorail/helpers/typography'

export type HyperLinkProps = LinkProps & {
  fontSize?: FontSizes
  fontWeight?: FontWeights
  margin?: string
  isBreadcrumb?: boolean
}

export const HyperLink = styled(Link)<HyperLinkProps>(
  ({ fontSize = FontSizes.Title5, fontWeight = 500, margin = '' }) => css`
    ${typography(fontWeight, fontSize, margin)};
    ${baseHyperLinkStyles()};

    transition: color ease 25ms;
    text-decoration: underline;
  `,
)
