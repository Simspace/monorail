import React, { Component, ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  basePrimaryStyles,
  baseSecondaryStyles,
  borderRadius,
  buttonTransition,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import { ThemeColors } from '@monorail/helpers/theme'
import { PopOver } from '@monorail/metaComponents/popOver/PopOver'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { Menu } from '@monorail/visualComponents/menu/Menu'

export const CCFilter = styled.div<CCFilterProps>(
  ({ isActive, cssOverrides }) => css`
    ${isActive
      ? basePrimaryStyles(ThemeColors.BrandSecondary)
      : css`
          ${baseSecondaryStyles(ThemeColors.BrandSecondary)};
          color: ${getColor(Colors.Black74)};
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

    ${cssOverrides};
  `,
)

export const FilterText = styled.span`
  ${typography(700, FontSizes.Title5)};

  color: currentColor;
  text-transform: uppercase;
  white-space: nowrap;
`

export const FilterIcon = styled(Icon)`
  color: currentColor;
`

type CCFilterProps = {
  cssOverrides?: SimpleInterpolation
  isActive: boolean
  onToggle?: (isOpen: boolean) => void
}

type Props = CCFilterProps & {
  document?: Document
  title: ReactNode
  content: ReactNode
  zIndex?: number
}

export class Filter extends Component<Props> {
  render() {
    const {
      cssOverrides,
      title,
      content,
      isActive,
      zIndex,
      ...otherProps
    } = this.props

    return (
      <PopOver
        toggle={props => (
          <CCFilter
            {...props}
            {...otherProps}
            cssOverrides={cssOverrides}
            isActive={isActive || props.isActive}
          >
            <FilterText>{title}</FilterText>
            <FilterIcon icon="arrow_drop_down" />
          </CCFilter>
        )}
        popOver={props =>
          !isNil(content) && (
            <Menu zIndex={zIndex} {...props}>
              {content}
            </Menu>
          )
        }
      />
    )
  }
}
