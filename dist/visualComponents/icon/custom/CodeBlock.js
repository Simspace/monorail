"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeBlock = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CodeBlock = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/_react.default.createElement("rect", {
  width: "24",
  height: "24",
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("rect", {
  x: "2.75",
  y: "2.75",
  width: "18.5",
  height: "18.5",
  rx: "1.25",
  stroke: "#adadad",
  strokeWidth: "1.5",
  fill: "none"
}), /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M6.96 12L10.18 15.0667L9.2 16L5 12L9.2 8L10.18 8.93333L6.96 12ZM17.04 12L13.82 15.0667L14.8 16L19 12L14.8 8L13.82 8.93333L17.04 12Z"
}));

exports.CodeBlock = CodeBlock;