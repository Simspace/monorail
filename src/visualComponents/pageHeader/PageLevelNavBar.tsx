import React, { FC, ReactNode } from 'react'

import { flexFlow } from '@monorail/helpers/flex'
import { sizes, Sizes } from '@monorail/helpers/size'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, ThemeColors } from '@monorail/helpers/theme'
import {
  HorizontalNavigationController,
  TabBarIndicatorProps,
} from '@monorail/metaComponents/horizontalNavigation/HorizontalNavigationController'

// TabBarIndicator is pos:abs to this element. Also we use offsetLeft on the Tab which references this position.
export const PageLevelNavBarContainer = styled.div(
  ({
    theme: {
      size: { page },
    },
  }) => css`
    ${flexFlow('row')};

    ${page.width !== 'auto' &&
      `max-width: ${page.width + sizes.page.sideSpace * 2}px;`};

    flex-shrink: 0;
    height: ${Sizes.DP40}px;
    margin-top: -4px;
    padding: 0 ${sizes.page.sideSpace}px 0 ${sizes.page.sideSpace - 12}px;
    position: relative;
  `,
)

const tabBarIndicatorSideWidth = 3
const tabBarIndicatorBodyWidth = 10

const PageLevelNavBarIndicatorContainer = styled(
  ({ left, width, duration, ...otherProps }: TabBarIndicatorProps) => (
    <div {...otherProps}>
      <PageLevelNavBarIndicatorLeft />
      <PageLevelNavBarIndicatorBody duration={duration} width={width} />
      <PageLevelNavBarIndicatorRight duration={duration} width={width} />
    </div>
  ),
)<TabBarIndicatorProps>(
  ({ left, duration }) => css`
    ${flexFlow('row')};
    bottom: 1px;
    height: 3px;
    left: 0;
    position: absolute;
    transition-duration: ${duration}ms;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transform-origin: bottom left;

    transform: translateX(${left}px);
  `,
)

const PageLevelNavBarIndicatorLeft = styled.div`
  background: ${getThemeColor(ThemeColors.ApplicationPrimary)};
  border-radius: 3px 0 0 0;
  height: 100%;
  width: ${tabBarIndicatorSideWidth + 1}px;
  position: absolute;
  left: 0;
`

type PageLevelNavBarIndicatorSideProps = { duration: number; width: number }

const PageLevelNavBarIndicatorRight = styled(
  ({ duration, width, ...otherProps }: PageLevelNavBarIndicatorSideProps) => (
    <div {...otherProps} />
  ),
)<PageLevelNavBarIndicatorSideProps>(
  ({ duration, width }) => css`
    background: ${getThemeColor(ThemeColors.ApplicationPrimary)};
    border-radius: 0 3px 0 0;
    height: 100%;
    width: ${tabBarIndicatorSideWidth + 1}px;
    transition-duration: ${duration}ms;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transform-origin: bottom left;

    transform: translateX(
      ${width - tabBarIndicatorBodyWidth - tabBarIndicatorSideWidth - 1}px
    );
  `,
)

const PageLevelNavBarIndicatorBody = styled(
  ({ duration, width, ...otherProps }: PageLevelNavBarIndicatorSideProps) => (
    <div {...otherProps} />
  ),
)<PageLevelNavBarIndicatorSideProps>(
  ({ duration, width }) => css`
    background: ${getThemeColor(ThemeColors.ApplicationPrimary)};
    height: 100%;
    width: ${tabBarIndicatorBodyWidth}px;
    transition-duration: ${duration}ms;
    transition-property: all;
    transition-timing-function: ease-in-out;
    transform-origin: bottom left;

    transform: translateX(${tabBarIndicatorSideWidth}px)
      scaleX(
        ${(width - tabBarIndicatorSideWidth * 2) / tabBarIndicatorBodyWidth}
      );
  `,
)

type PageLevelNavBarProps = {
  activeTabIndex?: number
  getActiveTabIndex?: (activeTabIndex: number) => void
  actions?: ReactNode
}

export const PageLevelNavBar: FC<PageLevelNavBarProps> = props => {
  const {
    actions,
    children,
    activeTabIndex,
    getActiveTabIndex,
    ...domProps
  } = props

  return (
    <PageLevelNavBarContainer {...domProps}>
      <HorizontalNavigationController
        actions={actions}
        tabBarIndicator={tabIndicatorProps =>
          React.Children.toArray(children).filter(child => !!child).length >
          0 ? (
            <PageLevelNavBarIndicatorContainer {...tabIndicatorProps} />
          ) : null
        }
        activeTabIndex={activeTabIndex}
        getActiveTabIndex={getActiveTabIndex}
      >
        {children}
      </HorizontalNavigationController>
    </PageLevelNavBarContainer>
  )
}
