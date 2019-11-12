"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FramedIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _borderRadius = require("../../helpers/borderRadius");

var _color = require("../../helpers/color");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _zIndex = require("../../helpers/zIndex");

var _Icon = require("./Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const FramedIcon = (0, _styledComponents.default)(({
  frameColor,
  isArchived,
  icon,
  ...otherProps
}) => _react.default.createElement(_Icon.Icon, _extends({
  icon: isArchived ? 'archive' : icon
}, otherProps)))(({
  frameColor,
  isArchived
}) => _styledComponents.css`
    ${(0, _zIndex.zIndex)(_zIndex.ZIndexNodeName.FramedIcon)};

    position: relative;
    color: ${(0, _color.getColor)(_color.Colors.White)};

    &::after {
      ${(0, _zIndex.zIndex)(_zIndex.ZIndexNodeName.FramedIconBackground)};
      ${(0, _borderRadius.borderRadius)(_borderRadius.BorderRadius.Small)};

      background: ${(0, _color.getColor)(isArchived ? _color.Colors.Black38 : frameColor)};
      content: '';
      position: absolute;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
    }
  `);
exports.FramedIcon = FramedIcon;