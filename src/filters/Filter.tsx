import React, { Component, ReactNode } from 'react'
import { isNil } from 'src/common/util/CoreUtils'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { Icon } from 'icon/Icon'
import {
  basePrimaryStyles,
  baseSecondaryStyles,
  borderRadius,
  buttonTransiton,
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography,
} from 'CommonStyles'
import { PopOver } from 'popOver/PopOver'
import { Menu } from 'menu/Menu'

const CCFilter = styled<CCFilterProps, 'div'>('div')`
  ${({ isOpen, isActive }) =>
    isActive || isOpen
      ? basePrimaryStyles(Colors.BrandDarkBlue)
      : css`
          ${baseSecondaryStyles(Colors.BrandDarkBlue, isOpen)};
          color: ${colors(Colors.Black74)};
        `};

  ${borderRadius()};
  ${buttonTransiton};
  ${flexFlow('row')};

  align-items: center;
  cursor: pointer;
  height: 24px;
  padding: 0 4px 0 8px;
  user-select: none;
  width: fit-content;

  ${({ css: cssOverrides }) => cssOverrides};
`

const FilterText = styled('span')`
  ${flexFlow('row')};
  ${typography(700, FontSizes.Title5)};

  color: currentColor;
  text-transform: uppercase;
  white-space: nowrap;
`

const FilterIcon = styled(Icon)`
  color: currentColor;
`

type CCFilterProps = {
  css?: SimpleInterpolation
  isOpen: boolean
  isActive: boolean
}

type Props = CCFilterProps & {
  title: ReactNode
  content?: ReactNode
}

export class Filter extends Component<Props> {
  render() {
    const { css: cssOverrides, title, content, isActive } = this.props

    return (
      <PopOver
        toggle={props => (
          <CCFilter {...props} css={cssOverrides} isActive={isActive}>
            <FilterText>{title}</FilterText>
            <FilterIcon icon="arrow_drop_down" />
          </CCFilter>
        )}
        popOver={props => !isNil(content) && <Menu {...props}>{content}</Menu>}
      />
    )
  }
}
