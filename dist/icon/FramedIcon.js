"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FramedIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _borderRadius = require("../helpers/borderRadius");

var _color = require("../helpers/color");

var _styledComponents = _interopRequireWildcard(require("../helpers/styled-components"));

var _zIndex = require("../helpers/zIndex");

var _Icon = require("./Icon");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FramedIcon =
/*#__PURE__*/
(0, _styledComponents.default)(({
  frameColor,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, otherProps))(({
  frameColor
}) => (0, _styledComponents.css)(["", ";position:relative;color:", ";&::after{", ";", ";background:", ";content:'';position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;}"], (0, _zIndex.zIndex)(_zIndex.ZIndexNodeName.FramedIcon), (0, _color.getColor)(_color.Colors.White), (0, _zIndex.zIndex)(_zIndex.ZIndexNodeName.FramedIconBackground), (0, _borderRadius.borderRadius)(_borderRadius.BorderRadius.Small), (0, _color.getColor)(frameColor)));
exports.FramedIcon = FramedIcon;