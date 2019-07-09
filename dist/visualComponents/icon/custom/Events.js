"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Events = props => _react.default.createElement("svg", _extends({
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("rect", {
  x: "4",
  y: "5",
  width: "32",
  height: "30",
  rx: "4",
  fill: "url(#eventsBackground)"
}), _react.default.createElement("path", {
  d: "M38 29H11V11H38V29Z",
  fill: "#65DC7E"
}), _react.default.createElement("path", {
  d: "M23.8347 35V23.6537H18L26.3832 6V17.3463H32L23.8347 35Z",
  fill: "#56AC68"
}), _react.default.createElement("path", {
  d: "M24.8347 34V23.045H19L27.3832 6V16.955H33L24.8347 34Z",
  fill: "#fff"
}), _react.default.createElement("rect", {
  x: "29",
  y: "2",
  width: "4",
  height: "5",
  rx: "1",
  transform: "rotate(90 29 2)",
  fill: "#65DC7E"
}), _react.default.createElement("rect", {
  x: "15",
  y: "2",
  width: "4",
  height: "5",
  rx: "1",
  transform: "rotate(90 15 2)",
  fill: "#65DC7E"
}), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
  id: "eventsBackground",
  x1: "36",
  y1: "5",
  x2: "4",
  y2: "35",
  gradientUnits: "userSpaceOnUse"
}, _react.default.createElement("stop", {
  stopColor: "#3EA553"
}), _react.default.createElement("stop", {
  offset: "1",
  stopColor: "#2A6F38"
}))));

exports.Events = Events;