import React, { Children, } from 'react';
import styled, { css } from 'styled-components';
import { baseFocusStyles, buttonTransition, Colors, getColor, ellipsis, flexFlow, FontSizes, Sizes, typography, } from '@monorail/helpers/exports';
import { Icon } from '@monorail/icon/Icon';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
/*
*
* List Container
*
*/
/*
* Styles
*/
const BBListContainer = styled.div(({ cssOverrides }) => css `
    ${flexFlow()};

    overflow-y: auto;
    padding: 8px 0;

    ${cssOverrides};
  `);
/*
* Component
*/
export const ListContainer = ({ children, cssOverrides, emptyText = "I'm empty :(", }) => (React.createElement(BBListContainer, { cssOverrides: cssOverrides }, Children.count(children) > 0 ? (children) : (React.createElement(ListItem, { cssOverrides: css `
          color: ${getColor(Colors.Black54)};
        ` }, emptyText))));
/*
* Styles
*/
export const ListItemText = styled.div(({ cssOverrides }) => css `
    /* This is row wrap instead of column nowrap because IE11 doesn't give the item height when it is a column. */
    ${flexFlow('row', 'wrap')};

    overflow: hidden;
    width: 100%;

    ${cssOverrides};
  `);
export const ListItemPrimaryText = styled.span(({ cssOverrides }) => css `
    ${typography(500, FontSizes.Title5, 'auto 6px')};
    ${ellipsis};

    color: currentColor;
    flex: 1 1 100%;

    ${cssOverrides};
  `);
export const ListItemSecondaryText = styled.span(({ cssOverrides }) => css `
    ${typography(500, FontSizes.Content, 'auto 6px')};
    ${ellipsis};

    color: ${getColor(Colors.Black62)};
    flex: 1 1 100%;

    ${cssOverrides};
  `);
export const ListItemGraphic = styled(({ dense, ...otherProps }) => (React.createElement(Icon, Object.assign({}, otherProps))))(({ dense, cssOverrides }) => css `
    margin: auto ${dense ? 4 : 6}px;

    ${buttonTransition};

    ${cssOverrides};
  `);
export const ListItem = styled(({ cssOverrides, children, activeClassName, ...otherProps }) => (React.createElement("div", Object.assign({}, otherProps), children)))(({ as, cssOverrides, dense, disabled, onClick, size = Sizes.DP24 }) => css `
    ${!isNil(onClick) || !isNil(as)
    ? css `
          background: transparent;
          color: ${getColor(Colors.BrandDarkBlue)};
          cursor: pointer;
          text-transform: none; /* IE 11 */
          user-select: none;

          ${buttonTransition};

          &:hover,
          &.is-active {
            background: hsla(225, 6%, 13%, 0.06);
          }

          &:active {
            background: #e0eafd;
            opacity: 1;
          }

          /* stylelint-disable selector-type-no-unknown */
          &.is-active,
          &:active,
          &:active ${ListItemGraphic}, &.is-active ${ListItemGraphic} {
            color: ${getColor(Colors.BrandLightBlue)};
          }
          /* stylelint-enable selector-type-no-unknown */

          ${baseFocusStyles()};
        `
    : css `
          color: ${getColor(Colors.Black89)};
          background: transparent;
        `};
    ${disabled &&
    css `
        opacity: 0.54;
        pointer-events: none;
      `};

    ${flexFlow('row')};

    align-items: center;
    box-sizing: border-box;
    color: ${getColor(Colors.Black89)};
    flex-shrink: 0;
    min-height: ${size}px;
    padding: 0 ${dense ? 4 : 10}px;
    position: relative;
    text-transform: initial;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
    }

    ${cssOverrides};
  `);
ListItem.defaultProps = {
    activeClassName: 'is-active',
};
export const SimpleListItem = ({ leftIcon, rightIcon, primaryText, secondaryText, children, dense, meta, size, ...otherProps }) => (React.createElement(ListItem, Object.assign({ dense: dense, size: size }, otherProps),
    !isNil(leftIcon) && React.createElement(ListItemGraphic, { icon: leftIcon, dense: dense }),
    isNil(secondaryText) || isNil(meta) ? (React.createElement(ListItemPrimaryText, null, primaryText)) : (React.createElement(ListItemText, null,
        React.createElement(ListItemPrimaryText, null, primaryText),
        isNil(secondaryText) ? null : (React.createElement(ListItemSecondaryText, null, secondaryText)),
        meta)),
    !isNil(rightIcon) && React.createElement(ListItemGraphic, { icon: rightIcon, dense: dense }),
    children));
//# sourceMappingURL=List.js.map