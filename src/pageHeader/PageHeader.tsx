import React, {
  Component,
  createRef,
  MouseEventHandler,
  ReactNode,
  RefObject,
} from 'react'

import { Button } from '@monorail/buttons/Button'
import { ButtonDisplay, ButtonSize } from '@monorail/buttons/buttonTypes'
import { baseHyperLinkStyles } from '@monorail/helpers/baseStyles'
import {
  Colors,
  convertHSLAMapToCss,
  ElevationRange,
  flexFlow,
  FontSizes,
  getColor,
  getElevationShadow,
  typography,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import {
  getThemeColor,
  getThemeColorBase,
  Mode,
  ThemeColors,
} from '@monorail/helpers/theme'
import { BaseLink } from '@monorail/hyperLink/BaseLink'
import { HyperLink } from '@monorail/hyperLink/HyperLink'
import { Icon } from '@monorail/icon/Icon'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { TabBarContainer } from '@monorail/tabs/TabBar'
import { CommonComponentType } from '@monorail/types'

/*
 * Styles
 */

const PageHeaderContainer = styled.div<PageHeaderContainerProps>(
  ({ cssOverrides, hasAboveContent }) => css`
    ${flexFlow('column')};

    background: ${props =>
      convertHSLAMapToCss({
        ...getThemeColorBase(ThemeColors.ApplicationPrimary)(props),
        l: 98,
      })};
    flex-shrink: 0;

    /* Instead of hiding overflow errors, let's see them and fix them. This was causing buttons to be hidden in error. */
    overflow: visible;

    position: relative; /* Has this so that the shadow goes over the content below it. */
    z-index: 1; /* Has this so that the shadow goes over the content below it. */

    &::before {
      border-bottom: 2px solid ${getThemeColor(ThemeColors.ApplicationPrimary)};
      background: inherit;
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -5;
    }

    ${TabBarContainer} {
      padding: 0 24px;

      ${!hasAboveContent &&
        css`
          margin-top: -8px;
        `};
    }

    ${cssOverrides};
  `,
)

const pageHeaderPadding = css`
  padding: 0 32px;
`

const PageHeaderNavigation = styled.div<PageHeaderNavigationProps>`
  ${flexFlow('row')};
  ${pageHeaderPadding};

  align-items: center;
  height: 32px;
`

const BreadCrumbsContainer = styled.div`
  ${flexFlow('row')};
  align-items: center;

  &::before {
    background: ${getThemeColor(ThemeColors.Text200)};
    width: 1px;
    height: 20px;
    content: '';
    margin-right: 12px;
  }
`

export const TitleContainer = styled.div<{ hasAboveContent: boolean }>(
  ({ hasAboveContent }) => css`
    ${flexFlow('row')};
    ${pageHeaderPadding};

    align-items: center;
    flex-shrink: 0;
    grid-column: -1 / 1;
    height: ${hasAboveContent ? 48 : 64}px;
  `,
)

const Title = styled.h1`
  ${typography(700, FontSizes.Title1)};

  color: ${getThemeColor(ThemeColors.Text900)};
  margin-left: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const PageName = styled.h5`
  ${pageHeaderPadding};
  ${typography(500, FontSizes.Title5)};

  color: ${getThemeColor(ThemeColors.Text1000)};
  margin: 8px 0 -8px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const BreadCrumbLink = styled(HyperLink)`
  ${baseHyperLinkStyles(ThemeColors.Text500)};

  padding: 6px 2px;
  user-select: none;
  text-decoration: none;
`

/*
 * Types
 */

export type BreadCrumbsType = Array<{
  title: string
  path: string
}>

type PageHeaderNavigationProps = {
  breadCrumbs?: BreadCrumbsType
}

type PageHeaderContainerProps = CommonComponentType & {
  hasAboveContent: boolean
}

export type PageHeaderProps = CommonComponentType &
  PageHeaderNavigationProps & {
    goBack?: MouseEventHandler | string
    title: string
    pageName?: string
    actions?: ReactNode
  }

/*
 * Components
 */

export class PageHeader extends Component<PageHeaderProps> {
  pageHeaderContainerRef = createRef<HTMLDivElement>()

  renderBreadCrumbs = () => {
    const { breadCrumbs } = this.props

    if (!breadCrumbs) {
      return null
    }

    return breadCrumbs.map(({ title, path }, key) => [
      <BreadCrumbLink to={path} key={key}>
        {title}
      </BreadCrumbLink>,
      key !== breadCrumbs.length - 1 && (
        <Icon icon="chevron_right" size={12} key={key + 'icon'} />
      ),
    ])
  }

  render() {
    const {
      actions,
      breadCrumbs,
      children,
      cssOverrides,
      goBack,
      pageName,
      title,
      ...domProps
    } = this.props

    const hasAboveContent = !isNil(breadCrumbs) || !isNil(goBack)

    return (
      <PageHeaderContainer
        cssOverrides={cssOverrides}
        hasAboveContent={hasAboveContent}
        ref={this.pageHeaderContainerRef}
        {...domProps}
      >
        {(!isNil(breadCrumbs) || !isNil(goBack)) && (
          <PageHeaderNavigation>
            {!isNil(goBack) && typeof goBack === 'string' ? (
              <Button
                size={ButtonSize.Compact}
                display={ButtonDisplay.Chromeless}
                as={BaseLink}
                to={goBack}
                cssOverrides={css`
                  margin-left: -4px;
                  margin-right: 8px;
                `}
                iconLeft="circle_arrow_left"
              >
                Go Back
              </Button>
            ) : (
              <Button
                size={ButtonSize.Compact}
                display={ButtonDisplay.Chromeless}
                onClick={goBack}
                cssOverrides={css`
                  margin-left: -4px;
                  margin-right: 8px;
                `}
                iconLeft="circle_arrow_left"
              >
                Go Back
              </Button>
            )}
            {breadCrumbs && (
              <BreadCrumbsContainer>
                {this.renderBreadCrumbs()}
              </BreadCrumbsContainer>
            )}
          </PageHeaderNavigation>
        )}
        {pageName && <PageName>{pageName}</PageName>}
        <TitleContainer hasAboveContent={hasAboveContent}>
          <Title>{title}</Title>
          {actions}
        </TitleContainer>

        {children}
      </PageHeaderContainer>
    )
  }
}
