"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TargetEmpty = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TargetEmpty = props => _react.default.createElement("svg", _extends({
  width: "56",
  height: "56",
  viewBox: "0 0 56 56",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: "10",
  d: "M28.105 47.2c10.764 0 19.49-8.725 19.49-19.488 0-10.764-8.726-19.49-19.49-19.49-10.763 0-19.489 8.726-19.489 19.49 0 10.763 8.726 19.489 19.49 19.489z"
}), _react.default.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: "10",
  d: "M28.105 42.773c8.318 0 15.061-6.743 15.061-15.061 0-8.319-6.743-15.062-15.06-15.062-8.319 0-15.062 6.743-15.062 15.062 0 8.318 6.743 15.06 15.061 15.06zM37.033 24.624a9.444 9.444 0 11-3.03-4.289M33.453 27.712a5.347 5.347 0 11-2.5-4.527M28.105 27.712l23.322-15.894"
}), _react.default.createElement("path", {
  fill: "currentColor",
  d: "M30.986 28.718h-4.462l1.084-4.156 3.378 4.156z"
}));

exports.TargetEmpty = TargetEmpty;