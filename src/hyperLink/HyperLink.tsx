import styled, { css } from 'styled-components'
import { Colors, getColor } from '@monorail/helpers/color'
import {
  FontSizes,
  FontWeights,
  typography,
} from '@monorail/helpers/typography'
import { Link, LinkProps } from 'react-router'

export type HyperLinkProps = LinkProps & {
  fontSize?: FontSizes
  fontWeight?: FontWeights
  margin?: string
}

export const HyperLink = styled(Link).attrs({ className: 'new-link' })<
  HyperLinkProps
>(
  ({ fontSize = FontSizes.Title5, fontWeight = 500, margin = '' }) => css`
    ${typography(fontWeight, fontSize, margin)};

    color: ${getColor(Colors.BrandLightBlue)};

    transition: color ease 25ms;

    &:hover {
      color: ${getColor(Colors.BrandLightBlue, 0.8)};
    }

    &:active {
      color: ${getColor(Colors.BrandLightBlue, 0.7)};
    }

    &:visited {
      color: ${getColor(Colors.BrandLightBlue)};
    }
  `,
)
