"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonFooter = void 0;

var _react = _interopRequireDefault(require("react"));

var _color = require("../../helpers/color");

var _elevation = require("../../helpers/elevation");

var _flex = require("../../helpers/flex");

var _size = require("../../helpers/size");

var _styledComponents = _interopRequireDefault(require("../../helpers/styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ButtonFooterContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ButtonFooter__ButtonFooterContainer",
  componentId: "sc-1a7a45-0"
})(["", ";", ";align-items:center;background-color:", ";height:40px;flex-shrink:0;position:relative;"], (0, _flex.flexFlow)('row'), (0, _elevation.getElevationShadow)(_elevation.ElevationRange.Elevation5), (0, _color.getColor)(_color.Colors.White));

const ButtonFooterContent =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ButtonFooter__ButtonFooterContent",
  componentId: "sc-1a7a45-1"
})(["", ";", ";align-items:center;justify-content:space-between;width:100%;"], (0, _flex.flexFlow)('row-reverse'), (0, _size.pageSizePadding)());

const ButtonFooter = ({
  children
}) => {
  return _react.default.createElement(ButtonFooterContainer, null, _react.default.createElement(ButtonFooterContent, null, children));
};

exports.ButtonFooter = ButtonFooter;