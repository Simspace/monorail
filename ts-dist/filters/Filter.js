import React, { Component } from 'react';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
import styled, { css } from 'styled-components';
import { Icon } from '@monorail/icon/Icon';
import { basePrimaryStyles, baseSecondaryStyles, borderRadius, buttonTransition, Colors, getColor, flexFlow, FontSizes, typography, } from '@monorail/helpers/exports';
import { PopOver } from '@monorail/popOver/PopOver';
import { Menu } from '@monorail/menu/Menu';
const CCFilter = styled.div(({ isOpen, isActive, cssOverrides }) => css `
    ${isActive || isOpen
    ? basePrimaryStyles(Colors.BrandDarkBlue)
    : css `
          ${baseSecondaryStyles(Colors.BrandDarkBlue)};
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
  `);
const FilterText = styled.span `
  ${typography(700, FontSizes.Title5)};

  color: currentColor;
  text-transform: uppercase;
  white-space: nowrap;
`;
const FilterIcon = styled(Icon) `
  color: currentColor;
`;
export class Filter extends Component {
    render() {
        const { cssOverrides, title, content, isActive, zIndex, ...otherProps } = this.props;
        return (React.createElement(PopOver, Object.assign({}, otherProps, { toggle: props => (React.createElement(CCFilter, Object.assign({}, props, { cssOverrides: cssOverrides, isActive: isActive }),
                React.createElement(FilterText, null, title),
                React.createElement(FilterIcon, { icon: "arrow_drop_down" }))), popOver: props => !isNil(content) && (React.createElement(Menu, Object.assign({ zIndex: zIndex }, props), content)) })));
    }
}
//# sourceMappingURL=Filter.js.map