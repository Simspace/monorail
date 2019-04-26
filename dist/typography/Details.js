"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _typeGuards = require("../sharedHelpers/typeGuards");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../helpers/exports");

var _Tag = require("../tags/Tag");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Property Styles
const primaryPropertyStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["", ";color:", ";"], (0, _exports.typography)(500, _exports.FontSizes.Content), (0, _exports.getColor)(_exports.Colors.Black74));
const compactPropertyStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["", ";color:", ";text-transform:uppercase;"], (0, _exports.typography)(500, _exports.FontSizes.Content), (0, _exports.getColor)(_exports.Colors.Black54));
const largePropertyStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["", ";color:", ";"], (0, _exports.typography)(700, _exports.FontSizes.Content), (0, _exports.getColor)(_exports.Colors.Black74));

const BBDetailsProperty =
/*#__PURE__*/
_styledComponents.default.h2.withConfig({
  displayName: "Details__BBDetailsProperty",
  componentId: "xo061-0"
})(({
  compact,
  large,
  darkMode
}) => (0, _styledComponents.css)(["", ";", ";margin:0;"], () => {
  if (compact) {
    return compactPropertyStyles;
  } else if (large) {
    return largePropertyStyles;
  } else {
    return primaryPropertyStyles;
  }
}, darkMode && (0, _styledComponents.css)(["color:", ";"], (0, _exports.getColor)(_exports.Colors.White)))); // Value Styles


const primaryValueStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["", ";color:", ";"], (0, _exports.typography)(200, _exports.FontSizes.Title3), (0, _exports.getColor)(_exports.Colors.Black89));
const compactValueStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["", ";color:", ";"], (0, _exports.typography)(600, _exports.FontSizes.Title5), (0, _exports.getColor)(_exports.Colors.Black74));
const largeValueStyles =
/*#__PURE__*/
(0, _styledComponents.css)(["", ";color:", ";"], (0, _exports.typography)(200, _exports.FontSizes.Title1), (0, _exports.getColor)(_exports.Colors.Black89));

const BBDetailsValue =
/*#__PURE__*/
_styledComponents.default.h2.withConfig({
  displayName: "Details__BBDetailsValue",
  componentId: "xo061-1"
})(({
  compact,
  large,
  darkMode
}) => (0, _styledComponents.css)(["", ";", ";margin:0;"], () => {
  if (compact) {
    return compactValueStyles;
  } else if (large) {
    return largeValueStyles;
  } else {
    return primaryValueStyles;
  }
}, darkMode && (0, _styledComponents.css)(["color:", ";"], (0, _exports.getColor)(_exports.Colors.White))));

const BBDetailsContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "Details__BBDetailsContainer",
  componentId: "xo061-2"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", "{margin-top:6px;}", ";"], (0, _exports.flexFlow)(), _Tag.TagContainer, cssOverrides));

class CCDetails extends _react.Component {
  render() {
    const {
      children,
      compact,
      cssOverrides,
      darkMode,
      large,
      property,
      value
    } = this.props;
    return _react.default.createElement(BBDetailsContainer, {
      cssOverrides: cssOverrides
    }, _react.default.createElement(BBDetailsProperty, {
      compact: compact,
      large: large,
      darkMode: darkMode
    }, property), !(0, _typeGuards.isNil)(value) && _react.default.createElement(BBDetailsValue, {
      compact: compact,
      large: large,
      darkMode: darkMode
    }, value), children);
  }

}

exports.CCDetails = CCDetails;