"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Copy = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Copy = props => _react.default.createElement("svg", _extends({
  fill: "none",
  height: 24,
  width: 24,
  viewBox: "0 0 24 24"
}, props), _react.default.createElement("path", {
  clipRule: "evenodd",
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM8 21h11V7H8v14z",
  fill: "#000",
  fillOpacity: 0.54,
  fillRule: "evenodd"
}));

exports.Copy = Copy;