"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChevronDoubleUp = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ChevronDoubleUp = props => _react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M16.59 18.41L18 17L12 11L6 17L7.41 18.41L12 13.83L16.59 18.41ZM16.59 12.41L18 11L12 5L6 11L7.41 12.41L12 7.83L16.59 12.41Z"
}));

exports.ChevronDoubleUp = ChevronDoubleUp;