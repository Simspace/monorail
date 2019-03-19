import React, { Component, ReactNode } from 'react'
import { isNil } from '@monorail/CoreUtils/primitive-guards'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { Icon } from '@monorail/icon/Icon'
import {
  basePrimaryStyles,
  baseSecondaryStyles,
  borderRadius,
  buttonTransition,
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/CommonStyles'
import { PopOver } from '@monorail/popOver/PopOver'
import { Menu } from '@monorail/menu/Menu'

const CCFilter = styled<CCFilterProps, 'div'>('div')`
  ${({ isOpen, isActive }) =>
    isActive || isOpen
      ? basePrimaryStyles(Colors.BrandDarkBlue)
      : css`
          ${baseSecondaryStyles(Colors.BrandDarkBlue, isOpen)};
          color: ${colors(Colors.Black74)};
        `};

  ${borderRadius()};
  ${buttonTransition};
  ${flexFlow('row')};

  align-items: center;
  cursor: pointer;
  height: 24px;
  padding: 0 4px 0 8px;
  user-select: none;
  flex-shrink: 0; /* Needs this for IE11 but not Chrome. */

  ${({ cssOverrides }) => cssOverrides};
`

const FilterText = styled('span')`
  ${typography(700, FontSizes.Title5)};

  color: currentColor;
  text-transform: uppercase;
  white-space: nowrap;
`

const FilterIcon = styled(Icon)`
  color: currentColor;
`

type CCFilterProps = {
  cssOverrides?: SimpleInterpolation
  isOpen?: boolean
  isActive: boolean
  onToggle?: (isOpen: boolean) => void
}

type Props = CCFilterProps & {
  document?: Document
  title: ReactNode
  content: ReactNode
}

export class Filter extends Component<Props> {
  render() {
    const { cssOverrides, title, content, isActive, ...otherProps } = this.props

    return (
      <PopOver
        {...otherProps}
        toggle={props => (
          <CCFilter {...props} cssOverrides={cssOverrides} isActive={isActive}>
            <FilterText>{title}</FilterText>
            <FilterIcon icon="arrow_drop_down" />
          </CCFilter>
        )}
        popOver={props => !isNil(content) && <Menu {...props}>{content}</Menu>}
      />
    )
  }
}
