"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _primitiveGuards = require("../../CoreUtils/primitive-guards");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../../CommonStyles");

var _Tag = require("../../tags/Tag");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Property Styles
const primaryPropertyStyles = _styledComponents.css`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Content)};
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black74)};
`;
const compactPropertyStyles = _styledComponents.css`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Content)};
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black54)};
  text-transform: uppercase;
`;
const largePropertyStyles = _styledComponents.css`
  ${(0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Content)};
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black74)};
`;
const BBDetailsProperty = (0, _styledComponents.default)('h2')`
  ${({
  compact,
  large
}) => {
  if (compact) {
    return compactPropertyStyles;
  } else if (large) {
    return largePropertyStyles;
  } else {
    return primaryPropertyStyles;
  }
}};

  ${({
  darkMode
}) => darkMode && _styledComponents.css`
      color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
    `};

  margin: 0;
`; // Value Styles

const primaryValueStyles = _styledComponents.css`
  ${(0, _CommonStyles.typography)(200, _CommonStyles.FontSizes.Title3)};
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black89)};
`;
const compactValueStyles = _styledComponents.css`
  ${(0, _CommonStyles.typography)(600, _CommonStyles.FontSizes.Title5)};
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black74)};
`;
const largeValueStyles = _styledComponents.css`
  ${(0, _CommonStyles.typography)(200, _CommonStyles.FontSizes.Title1)};
  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black89)};
`;
const BBDetailsValue = (0, _styledComponents.default)('h2')`
  ${({
  compact,
  large
}) => {
  if (compact) {
    return compactValueStyles;
  } else if (large) {
    return largeValueStyles;
  } else {
    return primaryValueStyles;
  }
}};
  ${({
  darkMode
}) => darkMode && _styledComponents.css`
      color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
    `};

  margin: 0;
`;
const BBDetailsContainer = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)()};

  ${_Tag.CCTag} {
    margin-top: 6px;
  }

  ${({
  css: cssOverrides
}) => cssOverrides};
`;

class CCDetails extends _react.Component {
  render() {
    const {
      children,
      compact,
      css: cssOverrides,
      darkMode,
      large,
      property,
      value
    } = this.props;
    return _react.default.createElement(BBDetailsContainer, {
      css: cssOverrides
    }, _react.default.createElement(BBDetailsProperty, {
      compact: compact,
      large: large,
      darkMode: darkMode
    }, property), !(0, _primitiveGuards.isNil)(value) && _react.default.createElement(BBDetailsValue, {
      compact: compact,
      large: large,
      darkMode: darkMode
    }, value), children);
  }

}

exports.CCDetails = CCDetails;