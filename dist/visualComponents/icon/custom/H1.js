"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H1 = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const H1 = props => _react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M13.3791 7V16H11.2647V12.31H7.11435V16H5V7H7.11435V10.5486H11.2647V7H13.3791Z"
}), _react.default.createElement("path", {
  d: "M19.1429 7V16H17.0285V8.67143H15.2013V7H19.1429Z"
}));

exports.H1 = H1;