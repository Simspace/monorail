import React, { MouseEvent } from 'react'
import styled, { css } from 'styled-components'

import {
  baseFocusStyles,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typographyFont,
} from '@monorail/helpers/exports'
import { CommonComponentType, LinkProps } from '@monorail/types'

export const Tab = styled.div<TabProps>(
  ({ cssOverrides }) => css`
    ${baseFocusStyles()};
    ${flexFlow('row')};
    ${typographyFont(700, FontSizes.Title5)};

    align-items: center;
    color: ${getColor(Colors.BrandLightBlue)};
    cursor: pointer;
    min-height: 24px;
    padding: 0 8px;
    text-transform: capitalize;
    user-select: none;

    &:hover,
    &:focus {
      text-decoration: none;
    }

    &:hover {
      background: ${getColor(Colors.BrandLightBlue, 0.08)};
    }

    &:active {
      background: ${getColor(Colors.BrandLightBlue, 0.16)};
    }

    ${cssOverrides};
  `,
)

export type TabProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  CommonComponentType &
  LinkProps & {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
  }
