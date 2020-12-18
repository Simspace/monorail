"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Catalog = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Catalog = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/_react.default.createElement("rect", {
  x: "4",
  y: "4",
  width: "32",
  height: "32",
  rx: "4" // SVG fill #ids relative to path if base url path is set https://stackoverflow.com/a/53579924
  ,
  fill: `url(${window.location.pathname}#catalogBackground)`
}), /*#__PURE__*/_react.default.createElement("rect", {
  width: "8.199",
  height: "8.199",
  transform: "scale(1.2483 .66466) rotate(45 -15.352 32.968)",
  fill: "#fff"
}), /*#__PURE__*/_react.default.createElement("rect", {
  x: "16.25",
  y: "9.838",
  width: "14.5",
  height: "7.676",
  fill: "#fff"
}), /*#__PURE__*/_react.default.createElement("rect", {
  x: "23.5",
  y: "9.838",
  width: "7.25",
  height: "11.515",
  fill: "#A789F0"
}), /*#__PURE__*/_react.default.createElement("rect", {
  width: "8.199",
  height: "8.199",
  transform: "scale(1.2483 .66466) rotate(45 -39.168 34.62)",
  fill: "#fff"
}), /*#__PURE__*/_react.default.createElement("rect", {
  x: "9",
  y: "21.353",
  width: "14.5",
  height: "7.676",
  fill: "#fff"
}), /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M23.5 21.353H16.25V32.6545H16.692L23.5 29.0295V21.353Z",
  fill: "#A789F0"
}), /*#__PURE__*/_react.default.createElement("rect", {
  width: "8.199",
  height: "8.199",
  transform: "scale(1.2483 .66466) rotate(45 -33.36 48.641)",
  fill: "#fff"
}), /*#__PURE__*/_react.default.createElement("rect", {
  x: "23.5",
  y: "21.353",
  width: "14.5",
  height: "7.676",
  fill: "#fff"
}), /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M38 21.353H30.75V32.6545H31.192L38 29.0295V21.353Z",
  fill: "#A789F0"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M23.5 6L30.7374 9.8536L23.5 13.7072L16.2625 9.8536L23.5 6Z",
  fill: "#3104A1"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M16.25 17.5147L23.4874 21.3683L16.25 25.2219L9.01254 21.3683L16.25 17.5147Z",
  fill: "#3104A1"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M30.75 17.5147L37.9874 21.3683L30.75 25.2219L23.5125 21.3683L30.75 17.5147Z",
  fill: "#3104A1"
}), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
  id: "catalogBackground",
  x1: "34.5",
  y1: "4",
  x2: "4",
  y2: "36",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/_react.default.createElement("stop", {
  stopColor: "#7B52E1"
}), /*#__PURE__*/_react.default.createElement("stop", {
  offset: "1",
  stopColor: "#5022C4"
}))));

exports.Catalog = Catalog;