import React, { Component } from 'react';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
import styled, { css } from 'styled-components';
import { Colors, getColor, flexFlow, FontSizes, typography, } from '@monorail/helpers/exports';
import { CCTag } from '@monorail/tags/Tag';
// Property Styles
const primaryPropertyStyles = css `
  ${typography(500, FontSizes.Content)};
  color: ${getColor(Colors.Black74)};
`;
const compactPropertyStyles = css `
  ${typography(500, FontSizes.Content)};
  color: ${getColor(Colors.Black54)};
  text-transform: uppercase;
`;
const largePropertyStyles = css `
  ${typography(700, FontSizes.Content)};
  color: ${getColor(Colors.Black74)};
`;
const BBDetailsProperty = styled.h2(({ compact, large, darkMode }) => css `
    ${() => {
    if (compact) {
        return compactPropertyStyles;
    }
    else if (large) {
        return largePropertyStyles;
    }
    else {
        return primaryPropertyStyles;
    }
}};

    ${darkMode &&
    css `
        color: ${getColor(Colors.White)};
      `};

    margin: 0;
  `);
// Value Styles
const primaryValueStyles = css `
  ${typography(200, FontSizes.Title3)};
  color: ${getColor(Colors.Black89)};
`;
const compactValueStyles = css `
  ${typography(600, FontSizes.Title5)};
  color: ${getColor(Colors.Black74)};
`;
const largeValueStyles = css `
  ${typography(200, FontSizes.Title1)};
  color: ${getColor(Colors.Black89)};
`;
const BBDetailsValue = styled.h2(({ compact, large, darkMode }) => css `
    ${() => {
    if (compact) {
        return compactValueStyles;
    }
    else if (large) {
        return largeValueStyles;
    }
    else {
        return primaryValueStyles;
    }
}};
    ${darkMode &&
    css `
        color: ${getColor(Colors.White)};
      `};

    margin: 0;
  `);
const BBDetailsContainer = styled.div(({ cssOverrides }) => css `
    ${flexFlow()};

    ${CCTag} {
      margin-top: 6px;
    }

    ${cssOverrides};
  `);
export class CCDetails extends Component {
    render() {
        const { children, compact, cssOverrides, darkMode, large, property, value, } = this.props;
        return (React.createElement(BBDetailsContainer, { cssOverrides: cssOverrides },
            React.createElement(BBDetailsProperty, { compact: compact, large: large, darkMode: darkMode }, property),
            !isNil(value) && (React.createElement(BBDetailsValue, { compact: compact, large: large, darkMode: darkMode }, value)),
            children));
    }
}
//# sourceMappingURL=Details.js.map