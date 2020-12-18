"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrashCanWithCheck = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TrashCanWithCheck = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, props), /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM16 12.3448L14.6552 11L10.849 14.8026L9.35153 13.3051L8 14.6471L10.8488 17.496L16 12.3448Z",
  fill: "#757575"
}));

exports.TrashCanWithCheck = TrashCanWithCheck;