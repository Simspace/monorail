"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Filter = props => _react.default.createElement("svg", _extends({
  width: "12",
  height: "8",
  viewBox: "0 0 12 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M4.5 4L0.75 0.25L11.25 0.250001L7.49999 4L7.5 7.75H4.5V4Z"
}));

exports.Filter = Filter;