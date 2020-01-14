"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Home = props => _react.default.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "40",
  height: "40",
  fill: "none",
  viewBox: "0 0 40 40"
}, props), _react.default.createElement("path", {
  fill: "url(#paint0_linear)",
  d: "M4 8a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H8a4 4 0 01-4-4V8z"
}), _react.default.createElement("path", {
  fill: "#7BD1E4",
  d: "M19 18.442L29.635 9 38 15.148v13.019l-5.732 1.447V18.44l-6.232 1.54V31.18L19 33V18.442z"
}), _react.default.createElement("path", {
  fill: "#1985A7",
  d: "M9.67 15.248l8.33 3.6V33.39l-8.33-5.284V15.248z"
}), _react.default.createElement("path", {
  fill: "#E2E2E2",
  d: "M21.74 7L30 9l-11 9.5-8-3.5 10.74-8z"
}), _react.default.createElement("path", {
  fill: "#fff",
  d: "M21.24 6L31.5 9l-2 1.919-11 9.5-9.5-5L21.24 6z"
}), _react.default.createElement("path", {
  fill: "#1985A7",
  d: "M31.5 9l8.087 7.681-.45.45-.449.45-8.382-7.387L31.5 9z"
}), _react.default.createElement("path", {
  fill: "#fff",
  d: "M26 20l6-1.5-.05 11.188L26 31.19V20z"
}), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
  id: "paint0_linear",
  x1: "36",
  x2: "4",
  y1: "5",
  y2: "37",
  gradientUnits: "userSpaceOnUse"
}, _react.default.createElement("stop", {
  stopColor: "#33A3BB"
}))));

exports.Home = Home;