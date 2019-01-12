import React, { Component, MouseEvent, ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  Colors,
  colors,
  ease,
  ElevationRange,
  flexFlow,
  FontSizes,
  getElevation,
  Sizes,
  typography,
} from 'CommonStyles'
import { Icon } from 'icon/Icon'
import { IconButton } from 'buttons/IconButton'

/*
 * Styles
 */

const pageHeaderHeight: (size?: Sizes) => number = (size = Sizes.DP40) => size
const breadCrumbsContainerHeight = 24

const pageHeaderPadding = css`
  padding: 0 16px;
`

const CCPageHeader = styled<CCPageHeaderProps, 'div'>('div')`
  ${flexFlow('column')};
  ${getElevation(ElevationRange.Elevation1)};

  background: ${colors(Colors.White)};
  flex-shrink: 0;
  height: ${({ breadCrumbs, size }) =>
    breadCrumbs
      ? pageHeaderHeight(size) + breadCrumbsContainerHeight
      : pageHeaderHeight(size)}px;
  overflow: hidden;
  position: relative; /* Has this so that the shadow goes over the content below it. */
  z-index: 1; /* Has this so that the shadow goes over the content below it. */

  ${({ css: cssOverride }) => cssOverride};
`

const CCBreadCrumbsContainer = styled<CCBreadCrumbsContainerProps, 'div'>(
  'div',
)`
  ${flexFlow('row')};
  ${pageHeaderPadding};

  align-items: center;
  background: ${colors(Colors.Grey97)};
  height: 24px;
`

const BreadCrumb = styled('a')`
  ${typography(500, FontSizes.Content)};

  color: ${colors(Colors.Black54)};
  cursor: pointer;
  padding: 6px 2px;
  user-select: none;

  &:hover {
    color: ${colors(Colors.BrandLightBlue)};
  }
`

const TitleContainer = styled<{ size?: Sizes }, 'div'>('div')`
  ${flexFlow('row')};
  ${pageHeaderPadding};

  align-items: center;
  height: ${({ size }) => pageHeaderHeight(size)}px;
  flex-shrink: 0;
`

const Title = styled('h1')`
  ${typography(700, FontSizes.Title3)};

  margin-left: 0;
`

/*
 * Types
 */

type CCBreadCrumbsContainerProps = {
  breadCrumbs?: {
    title: string
    path: (event: MouseEvent<HTMLAnchorElement>) => void
  }[]
}

type CCPageHeaderProps = CCBreadCrumbsContainerProps & {
  css?: SimpleInterpolation
  size?: Sizes
}

type PageHeaderProps = CCPageHeaderProps & {
  goBack?: (event: MouseEvent<Element>) => void
  title: string
  action?: ReactNode
}

/*
 * Components
 */

export class PageHeader extends Component<PageHeaderProps> {
  renderBreadCrumbs = () => {
    const { breadCrumbs } = this.props

    if (!breadCrumbs) {
      return null
    }

    return breadCrumbs.map(({ title, path }, key) => [
      <BreadCrumb onClick={path} key={key}>
        {title}
      </BreadCrumb>,
      key !== breadCrumbs.length - 1 && (
        <Icon icon="chevron_right" size={12} key={key + 'icon'} />
      ),
    ])
  }

  render() {
    const {
      title,
      goBack,
      children,
      css: overrideCss,
      breadCrumbs,
      size,
      action,
    } = this.props

    return (
      <CCPageHeader size={size} css={overrideCss} breadCrumbs={breadCrumbs}>
        <CCBreadCrumbsContainer breadCrumbs={breadCrumbs}>
          {this.renderBreadCrumbs()}
        </CCBreadCrumbsContainer>

        <TitleContainer size={size}>
          {goBack && !breadCrumbs && (
            <IconButton
              chromeless
              css={css`
                margin-left: -4px;
                margin-right: 12px;
              `}
              large
              icon="arrow_back"
              onClick={goBack}
            />
          )}
          <Title>{title}</Title>
          {action}
        </TitleContainer>
        {children}
      </CCPageHeader>
    )
  }
}
