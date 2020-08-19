"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChevronDoubleDown = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ChevronDoubleDown = props => _react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M7.41 5.59L6 7L12 13L18 7L16.59 5.59L12 10.17L7.41 5.59ZM7.41 11.59L6 13L12 19L18 13L16.59 11.59L12 16.17L7.41 11.59Z"
}));

exports.ChevronDoubleDown = ChevronDoubleDown;