"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Strikethrough = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Strikethrough = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/_react.default.createElement("path", {
  d: "M16.4669 13.4378C17.1317 14.9257 17.0984 18.9998 12.3256 18.9998C6.78837 19.0346 7.00108 14.4807 7.00108 14.4807L9.64009 14.5155C9.66003 16.8584 11.7407 16.8584 12.1528 16.8306C12.5782 16.7959 14.1669 16.8028 14.2932 15.1759C14.3464 14.4181 13.6152 13.8411 12.8175 13.4378H16.4669ZM16.9987 9.18987L14.3531 9.16901C14.3531 9.16901 14.4661 7.24318 12.1727 7.23623C9.87939 7.22232 10.0788 8.76577 10.0788 8.96044C10.1054 9.15511 10.3048 10.1146 12.073 10.5734H7.89183C7.89183 10.5734 5.5719 5.8944 11.2355 5.09487C17.0253 4.26057 17.012 9.20378 16.9987 9.18987Z"
}), /*#__PURE__*/_react.default.createElement("rect", {
  x: "5",
  y: "11.25",
  width: "14",
  height: "1.5"
}));

exports.Strikethrough = Strikethrough;