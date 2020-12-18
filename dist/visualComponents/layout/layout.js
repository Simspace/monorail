"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = exports.SectionContent = exports.PageContent = exports.AppContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _exports = require("../../helpers/exports");

var _ScrollAnimation = require("./ScrollAnimation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const AppContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Layout__AppContainer",
  componentId: "sc-1mbujag-0"
})(["", ";flex:1;overflow:hidden;&.catalog,&.events:not(.execution),&.reports-analytics{", ";}"], (0, _exports.flexFlow)(), _exports.gothamFontFamily);

exports.AppContainer = AppContainer;

const PageContent = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Layout__PageContent",
  componentId: "sc-1mbujag-1"
})(["", ";flex:1;overflow:hidden;"], (0, _exports.flexFlow)());

exports.PageContent = PageContent;
const SectionContent = /*#__PURE__*/(0, _styledComponents.default)(_ScrollAnimation.ScrollAnimation).withConfig({
  displayName: "Layout__SectionContent",
  componentId: "sc-1mbujag-2"
})(({
  cssOverrides
}) => (0, _styledComponents.css)(["", ";border-radius:inherit;height:100%;overflow:auto;width:100%;position:relative;", ";"], (0, _exports.flexFlow)(), cssOverrides));
exports.SectionContent = SectionContent;
const Section = /*#__PURE__*/(0, _styledComponents.default)( /*#__PURE__*/(0, _react.forwardRef)(({
  children,
  cssOverrides,
  hover,
  elevation,
  flat,
  cssCardContent,
  ...otherProps
}, ref) => /*#__PURE__*/_react.default.createElement("div", _extends({
  ref: ref
}, otherProps), /*#__PURE__*/_react.default.createElement(SectionContent, {
  cssOverrides: cssCardContent
}, children)))).withConfig({
  displayName: "Layout__Section",
  componentId: "sc-1mbujag-3"
})(({
  hover,
  cssOverrides,
  flat = false,
  elevation = _exports.ElevationRange.Section
}) => (0, _styledComponents.css)(["", ";", " ", ";", ";", ";background:", ";position:relative;", ";&::before{", ";border-radius:inherit;background:", ";bottom:0;content:'';left:0;position:absolute;right:0;top:0;}&::after{", ";", ";", ";background:", ";bottom:2px;content:'';left:2px;position:absolute;right:2px;top:2px;}"], hover && (0, _styledComponents.css)(["cursor:pointer;&:hover{&::after{transition:box-shadow ease 125ms;", ";}}"], flat ? (0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation0) : (0, _exports.getElevationShadow)(elevation)), flat && (0, _styledComponents.css)(["border:1px solid ", ";"], (0, _exports.getColor)(_exports.Colors.Black, 0.08)), (0, _exports.flexFlow)(), (0, _exports.borderRadius)(_exports.BorderRadius.Large), (0, _exports.zIndex)(_exports.ZIndexNodeName.CardBody), (0, _exports.getColor)(_exports.Colors.White), cssOverrides, (0, _exports.zIndex)(_exports.ZIndexNodeName.CardBackground), (0, _exports.getColor)(_exports.Colors.White), (0, _exports.borderRadius)(_exports.BorderRadius.Medium), flat ? (0, _exports.getElevationShadow)(_exports.ElevationRange.Elevation0) : (0, _exports.getElevationShadow)(elevation), (0, _exports.zIndex)(_exports.ZIndexNodeName.CardShadow), (0, _exports.getColor)(_exports.Colors.White)));
exports.Section = Section;