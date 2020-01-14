import React, {
  FC,
  MouseEventHandler,
  ReactNode,
  useContext,
  useRef,
} from 'react'
import { ThemeContext } from 'styled-components'

import { baseHyperLinkStyles } from '@monorail/helpers/baseStyles'
import { convertHSLAMapToCss } from '@monorail/helpers/color'
import { flexFlow } from '@monorail/helpers/flex'
import { pageSizeMargin } from '@monorail/helpers/size'
import styled, { css, ThemeProvider } from '@monorail/helpers/styled-components'
import {
  getThemeColor,
  getThemeColorBase,
  GlobalAppThemeInterface,
  Mode,
  ThemeColors,
} from '@monorail/helpers/theme'
import { FontSizes, typography } from '@monorail/helpers/typography'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType } from '@monorail/types'
import { Button } from '@monorail/visualComponents/buttons/Button'
import {
  ButtonDisplay,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { BaseLink } from '@monorail/visualComponents/hyperLink/BaseLink'
import { HyperLink } from '@monorail/visualComponents/hyperLink/HyperLink'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { TabBarContainer } from '@monorail/visualComponents/tabs/TabBar'

/*
 * Styles
 */

const PageHeaderContainer = styled.div<PageHeaderContainerProps>(
  ({ cssOverrides, hasAboveContent }) => css`
    ${flexFlow('column')};

    background: ${props =>
      convertHSLAMapToCss({
        ...getThemeColorBase(ThemeColors.ApplicationPrimary)(props),
        l: 99,
      })};
    flex-shrink: 0;

    /* Instead of hiding overflow errors, let's see them and fix them. This was causing buttons to be hidden in error. */
    overflow-x: auto;

    position: relative; /* Has this so that the shadow goes over the content below it. */
    z-index: 1; /* Has this so that the shadow goes over the content below it. */

    &::before {
      border-bottom: 1px solid ${getThemeColor(ThemeColors.ApplicationPrimary)};
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

const PageHeaderNavigation = styled.div<PageHeaderNavigationProps>`
  ${flexFlow('row')};
  ${pageSizeMargin()};

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
    ${pageSizeMargin()};

    align-items: center;
    flex-shrink: 0;
    grid-column: -1 / 1;
    height: ${hasAboveContent ? 48 : 64}px;
    justify-content: space-between;
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
  ${pageSizeMargin({ marginTop: 8, marginBottom: -8 })};
  ${typography(500, FontSizes.Title5)};

  color: ${getThemeColor(ThemeColors.Text1000)};
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

export type PageHeaderNavigationProps = {
  breadCrumbs?: BreadCrumbsType
}

type PageHeaderContainerProps = CommonComponentType & {
  hasAboveContent: boolean
}

export type PageHeaderProps = CommonComponentType &
  PageHeaderNavigationProps & {
    goBack?: MouseEventHandler | string
    title: ReactNode
    pageName?: string
    actions?: ReactNode
  }

/*
 * Components
 */

export const PageHeader: FC<PageHeaderProps> = props => {
  const {
    actions,
    breadCrumbs,
    children,
    cssOverrides,
    goBack,
    pageName,
    title,
    ...domProps
  } = props

  const themeContext = useContext<GlobalAppThemeInterface>(ThemeContext)

  const {
    pageHeader: { showBreadCrumbs },
  } = themeContext

  const pageHeaderContainerRef = useRef<HTMLDivElement>()

  const renderBreadCrumbs = () => {
    if (!breadCrumbs) {
      return null
    }

    return breadCrumbs.map(
      (
        breadCrumb: {
          title: string
          path: string
        },
        key,
      ) => [
        <BreadCrumbLink to={breadCrumb.path} key={key}>
          {breadCrumb.title}
        </BreadCrumbLink>,
        key !== breadCrumbs.length - 1 && (
          <Icon icon="chevron_right" size={12} key={key + 'icon'} />
        ),
      ],
    )
  }

  const hasAboveContent =
    (!isNil(breadCrumbs) || !isNil(goBack) || !isNil(pageName)) &&
    showBreadCrumbs

  return (
    <PageHeaderContainer
      cssOverrides={cssOverrides}
      hasAboveContent={hasAboveContent}
      ref={pageHeaderContainerRef}
      {...domProps}
    >
      {(!isNil(breadCrumbs) || !isNil(goBack)) && showBreadCrumbs && (
        <PageHeaderNavigation>
          {!isNil(goBack) && typeof goBack === 'string' ? (
            <Button
              size={ButtonSize.Compact}
              display={ButtonDisplay.Chromeless}
              passedAs={BaseLink}
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
            <BreadCrumbsContainer>{renderBreadCrumbs()}</BreadCrumbsContainer>
          )}
        </PageHeaderNavigation>
      )}
      <ThemeProvider
        theme={theme => ({
          ...theme,
          [Mode.Light]: {
            ...theme[Mode.Light],
            [ThemeColors.ActionPrimary]: theme[ThemeColors.ApplicationPrimary],
            [ThemeColors.ActionSecondary]:
              theme[ThemeColors.ApplicationSecondary],
          },
        })}
      >
        <>
          {pageName && <PageName>{pageName}</PageName>}
          <TitleContainer hasAboveContent={hasAboveContent}>
            <Title>{title}</Title>
            {actions}
          </TitleContainer>

          {children}
        </>
      </ThemeProvider>
    </PageHeaderContainer>
  )
}
