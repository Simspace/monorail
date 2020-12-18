"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FramedIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _borderRadius = require("../../helpers/borderRadius");

var _color = require("../../helpers/color");

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _Icon = require("./Icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Frame = _styledComponents.default.div(({
  frameColor,
  isArchived,
  frameSize
}) => (0, _styledComponents.css)`
    ${(0, _borderRadius.borderRadius)(_borderRadius.BorderRadius.Small)};
    ${(0, _exports.flexFlow)('row')}

    align-items: center;
    background: ${(0, _color.getColor)(isArchived ? _color.Colors.Gray38 : frameColor)};
    flex-shrink: 0;
    height: ${frameSize}px;
    justify-content: center;
    width: ${frameSize}px;
  `);
/** @deprecated see `v2/IconFrame` */


const FramedIcon = props => {
  const {
    frameColor,
    isArchived,
    icon,
    frameSize = 20,
    ...otherProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(Frame, _extends({
    frameColor: frameColor,
    isArchived: isArchived,
    frameSize: frameSize
  }, otherProps), /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    size: frameSize - 4,
    icon: isArchived ? 'archive' : icon,
    color: _color.Colors.White
  }));
};

exports.FramedIcon = FramedIcon;