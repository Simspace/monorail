import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '@monorail/icon/Icon';
import { Colors, getColor, flexFlow, FontSizes, typography, } from '@monorail/helpers/exports';
const iconSize = 32;
export const CCAlertBox = styled.div(({ cssOverrides }) => css `
    ${flexFlow('row')};

    background-color: ${getColor(Colors.Red, 0.15)};
    border-radius: 4px;
    flex-shrink: 0;
    height: 48px;
    position: relative; /* ::icon is pos: abs to this element. */

    &::before {
      bottom: 8px;
      content: '';
      left: 16px;
      position: absolute;
      width: 32px;
    }

    ${cssOverrides};
  `);
const StyledIconLeft = styled(Icon) `
  color: #f44336;
  margin: 8px 12px 8px 16px;
  position: relative; /* give z-index so ::before bg is behind icon */
`;
const Title = styled.h1 `
  ${typography(700, FontSizes.Title3)};

  color: ${getColor(Colors.Black89)};
  margin: 16px 0;
`;
const AlertDetails = styled.span `
  ${typography(300, FontSizes.Content)};

  color: ${getColor(Colors.Black89)};
  margin: auto 48px auto auto;
`;
export class AlertBox extends Component {
    render() {
        const { icon, label, cssOverrides } = this.props;
        return (React.createElement(CCAlertBox, { label: label, cssOverrides: cssOverrides },
            React.createElement(StyledIconLeft, { icon: icon, size: iconSize }),
            label && React.createElement(Title, null, label),
            React.createElement(AlertDetails, null,
                React.createElement("ul", null,
                    React.createElement("li", null, "\u2022 Recertification overdue")))));
    }
}
//# sourceMappingURL=AlertBox.js.map