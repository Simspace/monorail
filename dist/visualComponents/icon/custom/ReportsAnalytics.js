"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsAnalytics = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ReportsAnalytics = props => _react.default.createElement("svg", _extends({
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("rect", {
  x: "4",
  y: "4",
  width: "32",
  height: "32",
  rx: "4",
  fill: "url(#reportsBackground)"
}), _react.default.createElement("rect", {
  x: "19",
  y: "2",
  width: "6",
  height: "26",
  fill: "#C32C07"
}), _react.default.createElement("rect", {
  x: "11",
  y: "10",
  width: "6",
  height: "18",
  fill: "#C32C07"
}), _react.default.createElement("rect", {
  x: "20",
  y: "3",
  width: "6",
  height: "26",
  fill: "#fff"
}), _react.default.createElement("rect", {
  x: "27",
  y: "18",
  width: "6",
  height: "10",
  fill: "#D13711"
}), _react.default.createElement("rect", {
  x: "12",
  y: "11",
  width: "6",
  height: "18",
  fill: "#fff"
}), _react.default.createElement("rect", {
  x: "28",
  y: "19",
  width: "6",
  height: "10",
  fill: "#fff"
}), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
  id: "reportsBackground",
  x1: "36",
  y1: "4",
  x2: "4",
  y2: "36",
  gradientUnits: "userSpaceOnUse"
}, _react.default.createElement("stop", {
  stopColor: "#FD5931"
}), _react.default.createElement("stop", {
  offset: "1",
  stopColor: "#DE2D02"
}))));

exports.ReportsAnalytics = ReportsAnalytics;