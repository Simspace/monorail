"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tile = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _BaseLink = require("../hyperLink/BaseLink");

var _FramedIcon = require("../icon/FramedIcon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Styles
 */
const TileTitleContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Tile__TileTitleContainer",
  componentId: "sc-17lalsi-0"
})(["", ";align-items:center;padding:16px;"], (0, _exports.flexFlow)('row'));

const TileTitle =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Tile__TileTitle",
  componentId: "sc-17lalsi-1"
})(["", ";color:", ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"], (0, _exports.typography)(500, _exports.FontSizes.Title5), (0, _theme.getThemeColor)(_theme.ThemeColors.Text900)); // eslint-disable-next-line no-unexpected-multiline


const TileContainer =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Tile__TileContainer",
  componentId: "sc-17lalsi-2"
})(({
  to
}) => (0, _styledComponents2.css)(["", ";", ";background:", ";border:1px solid ", ";height:184px;width:184px;user-select:none;", ""], (0, _exports.borderRadius)(_exports.BorderRadius.Large), (0, _exports.flexFlow)('column'), (0, _exports.getColor)(_exports.Colors.White), (0, _exports.getColor)(_exports.Colors.Black24), to && (0, _styledComponents2.css)(["&:hover{", "{background:", ";}", "{color:", ";}}&.is-active,&:active{", "{background:", ";}", "{color:", ";}}"], TileTitleContainer, (0, _exports.getColor)(_exports.Colors.BrandLightBlue, 0.1), TileTitle, (0, _exports.getColor)(_exports.Colors.BrandLightBlue), TileTitleContainer, (0, _exports.getColor)(_exports.Colors.BrandLightBlue, 0.2), TileTitle, (0, _exports.getColor)(_exports.Colors.BrandLightBlue))));

const TileBody =
/*#__PURE__*/
_styledComponents2.default.div.withConfig({
  displayName: "Tile__TileBody",
  componentId: "sc-17lalsi-3"
})(["", ";align-items:center;height:136px;justify-content:center;"], (0, _exports.flexFlow)('column'));
/*
 * Types
 */


/*
 * Component
 */
const Tile = ({
  name,
  icon,
  image,
  frameColor,
  to,
  isArchived,
  ...domProps
}) => _react.default.createElement(TileContainer, _extends({
  as: _BaseLink.BaseLink,
  to: to
}, domProps), _react.default.createElement(TileBody, null, _react.default.createElement(_FramedIcon.FramedIcon, {
  frameColor: frameColor,
  icon: icon,
  size: 64,
  isArchived: isArchived
})), _react.default.createElement(TileTitleContainer, null, _react.default.createElement(_StyledFramedIcon, {
  frameColor: frameColor,
  icon: icon,
  size: 16,
  isArchived: isArchived
}), _react.default.createElement(TileTitle, null, name)));

exports.Tile = Tile;

var _StyledFramedIcon = (0, _styledComponents.default)(_FramedIcon.FramedIcon)`margin-right:16px;`;