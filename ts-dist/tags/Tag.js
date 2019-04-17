import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '@monorail/icon/Icon';
import { Colors, getColor, flexFlow, FontSizes, typography, } from '@monorail/helpers/exports';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
const tagHeight = 24;
const circleWidth = tagHeight - 4;
const circleRadius = circleWidth / 2;
const iconSize = tagHeight / 2;
export const CCTag = styled.div(({ label, cssOverrides }) => css `
    ${isNil(label) &&
    css `
        width: ${tagHeight}px;
      `};

    ${flexFlow('row')};
    display: inline-flex;
    align-items: center;
    background: ${getColor(Colors.Black, 0.07)};
    border-radius: ${tagHeight / 2}px;
    height: ${tagHeight}px;
    position: relative; /* ::before circle is pos: abs to this element. */
    text-transform: uppercase;
    user-select: none;

    &::before {
      background: ${getColor(Colors.White)};
      border-radius: ${circleRadius}px;
      bottom: 2px;
      content: '';
      left: 2px;
      position: absolute;
      top: 2px;
      width: ${circleWidth}px;
    }

    ${cssOverrides};
  `);
const StyledIconLeft = styled(Icon) `
  color: ${getColor(Colors.BrandLightBlue)};
  margin: 0 ${iconSize / 2}px;
  position: relative; /* give z-index so ::before bg is behind icon */
`;
const Title = styled.h1 `
  ${typography(700, FontSizes.Content)};
  color: ${getColor(Colors.Black89)};
  margin: 0 10px 0 2px;
`;
export class Tag extends Component {
    render() {
        const { icon, label, cssOverrides } = this.props;
        return (React.createElement(CCTag, { label: label, cssOverrides: cssOverrides },
            React.createElement(StyledIconLeft, { icon: icon, size: iconSize }),
            label && React.createElement(Title, null, label)));
    }
}
//# sourceMappingURL=Tag.js.map