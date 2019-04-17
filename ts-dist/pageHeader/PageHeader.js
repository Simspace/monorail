import React, { Component, createRef, } from 'react';
import styled, { css } from 'styled-components';
import { Colors, getColor, ElevationRange, flexFlow, FontSizes, getElevation, typography, } from '@monorail/helpers/exports';
import { Icon } from '@monorail/icon/Icon';
import { ButtonDisplay, ButtonSize } from '@monorail/buttons/buttonTypes';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
import { Button } from '@monorail/buttons/Button';
import { TabBarContainer } from '@monorail/tabs/TabBar';
/*
* Styles
*/
const PageHeaderContainer = styled.div(({ flush, cssOverrides, hasAboveContent }) => css `
    ${flexFlow('column')};

    background: ${getColor(Colors.White)};
    flex-shrink: 0;

    /* Instead of hiding overflow errors, let's see them and fix them. This was causing buttons to be hidden in error. */
    overflow: visible;

    position: relative; /* Has this so that the shadow goes over the content below it. */
    z-index: 1; /* Has this so that the shadow goes over the content below it. */

    &::before {
      ${flush &&
    css `
          border-bottom: 1px solid ${getColor(Colors.Grey94)};
        `};

      background: ${getColor(Colors.White)};
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
    css `
          margin-top: -8px;
        `};
    }

    ${cssOverrides};
  `);
const pageHeaderPadding = css `
  padding: 0 32px;
`;
const PageHeaderShadow = styled.div(({ willAnimateShadow, flush }) => css `
    bottom: -20px;
    left: 0;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -10;

    &:before {
      ${getElevation(ElevationRange.Elevation6)};

      background: ${getColor(Colors.White)};
      bottom: 26px;
      content: '';
      left: -10px;
      position: absolute;
      right: -10px;
      top: 0;
    }

    ${(flush || willAnimateShadow) &&
    css `
        opacity: 0;
      `};
  `);
const BreadCrumbsContainer = styled.div `
  ${flexFlow('row')};
  ${pageHeaderPadding};

  align-items: center;
  height: 32px;
`;
const BreadCrumb = styled.a `
  ${typography(500, FontSizes.Title5)};

  color: ${getColor(Colors.Black54)};
  cursor: pointer;
  padding: 6px 2px;
  text-transform: none;
  user-select: none;

  &:hover {
    color: ${getColor(Colors.BrandLightBlue)};
  }
`;
export const TitleContainer = styled.div(({ hasAboveContent }) => css `
    ${flexFlow('row')};
    ${pageHeaderPadding};

    align-items: center;
    flex-shrink: 0;
    grid-column: -1 / 1;
    height: ${hasAboveContent ? 48 : 64}px;
  `);
const Title = styled.h1 `
  ${typography(700, FontSizes.Title1)};

  color: ${getColor(Colors.BrandDarkBlue)};
  margin-left: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
/*
* Components
*/
export class PageHeader extends Component {
    constructor() {
        super(...arguments);
        this.pageHeaderContainerRef = createRef();
        this.renderBreadCrumbs = () => {
            const { breadCrumbs } = this.props;
            if (!breadCrumbs) {
                return null;
            }
            return breadCrumbs.map(({ title, path }, key) => [
                React.createElement(BreadCrumb, { onClick: path, key: key }, title),
                key !== breadCrumbs.length - 1 && (React.createElement(Icon, { icon: "chevron_right", size: 12, key: key + 'icon' })),
            ]);
        };
    }
    render() {
        const { action, breadCrumbs, children, cssOverrides, flush, goBack, shadowRef, title, willAnimateShadow, } = this.props;
        const hasAboveContent = !isNil(breadCrumbs) || !isNil(goBack);
        return (React.createElement(PageHeaderContainer, { cssOverrides: css `
          ${cssOverrides};
        `, hasAboveContent: hasAboveContent, ref: this.pageHeaderContainerRef, flush: flush },
            (!isNil(breadCrumbs) || !isNil(goBack)) && (React.createElement(BreadCrumbsContainer, null,
                goBack && (React.createElement(Button, { size: ButtonSize.Compact, display: ButtonDisplay.Chromeless, onClick: goBack, cssOverrides: css `
                  margin-left: -4px;
                  margin-right: 8px;
                ` },
                    React.createElement(Icon, { icon: "circle_arrow_left" }),
                    "Go Back")),
                this.renderBreadCrumbs())),
            React.createElement(TitleContainer, { hasAboveContent: hasAboveContent },
                React.createElement(Title, null, title),
                action),
            children,
            React.createElement(PageHeaderShadow, { willAnimateShadow: willAnimateShadow, flush: flush, ref: shadowRef })));
    }
}
PageHeader.defaultProps = {
    willAnimateShadow: false,
    flush: false,
};
//# sourceMappingURL=PageHeader.js.map