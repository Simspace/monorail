"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextDeprecated = exports.Text = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _color = require("../../helpers/color");

var _typography = require("../../helpers/typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _StyledSpan = /*#__PURE__*/(0, _styledComponents.default)("span").withConfig({
  displayName: "Text___StyledSpan",
  componentId: "ejbz23-0"
})(["", ";color:", ";font-style:", ";", ""], p => p._css, p => p._css2, p => p._css3, p => p._css4);

const Text = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    fontSize = _typography.FontSizes.Title5,
    fontStyle = _typography.FontStyles.Initial,
    fontWeight = _typography.FontWeights.Medium,
    margin = '',
    color = _color.Colors.Black89a,
    noWrap = false,
    children,
    ...domProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(_StyledSpan, _extends({}, domProps, {
    ref: ref,
    _css: (0, _typography.typography)(fontWeight, fontSize, margin),
    _css2: (0, _color.getColor)(color),
    _css3: fontStyle,
    _css4: noWrap ? (0, _styledComponents.css)(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]) : (0, _styledComponents.css)(["overflow-wrap:break-word;"])
  }), children);
});
/**
 * @deprecated Use Text instead. This exist for supporting legacy code only
 * */


exports.Text = Text;

var _StyledSpan2 = /*#__PURE__*/(0, _styledComponents.default)("span").withConfig({
  displayName: "Text___StyledSpan2",
  componentId: "ejbz23-1"
})(["", ";color:", ";"], p => p._css5, p => p._css6);

const TextDeprecated = props => {
  const {
    fontSize = _typography.FontSizes.Title5,
    fontWeight = _typography.FontWeights.Medium,
    margin = '',
    color = _color.Colors.Black89a,
    children,
    ...domProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(_StyledSpan2, _extends({}, domProps, {
    _css5: (0, _typography.typographyDeprecated)(fontWeight, fontSize, margin),
    _css6: (0, _color.getColor)(color)
  }), children);
};

exports.TextDeprecated = TextDeprecated;