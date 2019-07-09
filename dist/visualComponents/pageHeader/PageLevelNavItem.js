"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageLevelNavItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tabBarIndicatorSideWidth = 21;
const tabBarIndicatorBodyWidth = 52;
const PageLevelIndicatorContainer =
/*#__PURE__*/
(0, _styledComponents.default)(props => // tslint:disable-next-line: no-unsafe-any
_react.default.createElement("div", props, _react.default.createElement(TabBarIndicatorLeft, {
  width: "21",
  height: "31",
  viewBox: "0 0 21 31",
  xmlns: "http://www.w3.org/2000/svg"
}, _react.default.createElement("path", {
  d: "M15.3085 3.62473L4.26866 27.2815C4.08422 27.6767 3.992 27.8743 3.88878 28.0475C3.24043 29.1356 2.11503 29.8523 0.854831 29.9797C0.6542 30 0.436134 30 0 30V31H21V0C20.8277 0 20.7416 0 20.662 0.0021127C18.4463 0.0609255 16.4436 1.3364 15.4533 3.31931C15.4178 3.39053 15.3813 3.46858 15.3085 3.62466L15.3085 3.62473Z"
})), _react.default.createElement(TabBarIndicatorBody, null), _react.default.createElement(TabBarIndicatorRight, {
  height: "31",
  viewBox: "0 0 21 31",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, _react.default.createElement("path", {
  d: "M5.69154 3.62473L16.7313 27.2815C16.9158 27.6767 17.008 27.8743 17.1112 28.0475C17.7596 29.1356 18.885 29.8523 20.1452 29.9797C20.3458 30 20.5639 30 21 30V31H0V0C0.172295 0 0.258442 0 0.338032 0.0021127C2.55367 0.0609255 4.55642 1.3364 5.54668 3.31931C5.58224 3.39053 5.61867 3.46858 5.69151 3.62466L5.69154 3.62473Z",
  fill: "#fff"
})))).withConfig({
  displayName: "PageLevelNavItem__PageLevelIndicatorContainer",
  componentId: "girswp-0"
})(["", ";bottom:-1px;height:31px;left:0;position:absolute;right:0;z-index:-5;"], (0, _exports.flexFlow)('row'));

const TabBarIndicatorLeft =
/*#__PURE__*/
_styledComponents.default.svg.withConfig({
  displayName: "PageLevelNavItem__TabBarIndicatorLeft",
  componentId: "girswp-1"
})(["fill:", ";height:100%;width:", "px;position:absolute;left:0;"], (0, _exports.getColor)(_exports.Colors.White), tabBarIndicatorSideWidth + 1);

const TabBarIndicatorRight =
/*#__PURE__*/
_styledComponents.default.svg.withConfig({
  displayName: "PageLevelNavItem__TabBarIndicatorRight",
  componentId: "girswp-2"
})(["fill:", ";height:100%;position:absolute;right:0;width:", "px;"], (0, _exports.getColor)(_exports.Colors.White), tabBarIndicatorSideWidth + 1);

const TabBarIndicatorBody =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "PageLevelNavItem__TabBarIndicatorBody",
  componentId: "girswp-3"
})(["background:", ";height:100%;width:calc(100% - ", "px);left:", "px;position:absolute;"], (0, _exports.getColor)(_exports.Colors.White), tabBarIndicatorSideWidth * 2, tabBarIndicatorSideWidth); // tslint:disable-next-line: no-unsafe-any


const PageLevelNavItem =
/*#__PURE__*/
(0, _styledComponents.default)(({
  children,
  ...otherProps
}) => // tslint:disable-next-line: no-unsafe-any
_react.default.createElement(_reactRouter.Link, otherProps, children, _react.default.createElement(PageLevelIndicatorContainer, null))).attrs({
  activeClassName: 'is-active'
})( // tslint:disable-next-line: no-unsafe-any
({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";", ";", ";align-items:center;color:", ";cursor:pointer;min-height:24px;padding:0 20px;position:relative;user-select:none;&:hover,&:focus{text-decoration:none;}", "{opacity:0.1;}&:hover ", "{opacity:0.2;}&:active ", "{opacity:0.3;}&.is-active{color:", ";", "{opacity:1;}}&:last-of-type{margin-right:-36px;}", ";"], (0, _exports.flexFlow)('row'), (0, _exports.typography)(700, _exports.FontSizes.Title5), (0, _exports.zIndex)(_exports.ZIndexNodeName.PageLevelNavItem), (0, _exports.getColor)(_exports.Colors.White), PageLevelIndicatorContainer, PageLevelIndicatorContainer, PageLevelIndicatorContainer, (0, _exports.getColor)(_exports.Colors.BrandDarkBlue), PageLevelIndicatorContainer, cssOverrides));
exports.PageLevelNavItem = PageLevelNavItem;