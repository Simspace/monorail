"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TechOps = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TechOps = props => /*#__PURE__*/_react.default.createElement(_core.SvgIcon, _extends({}, props, {
  viewBox: "0 0 40 40",
  height: "40",
  width: "40"
}), /*#__PURE__*/_react.default.createElement("rect", {
  x: "4",
  y: "4",
  width: "32",
  height: "32",
  rx: "4" // SVG fill #ids relative to path if base url path is set https://stackoverflow.com/a/53579924
  ,
  fill: `url(${window.location.pathname}#techopsBackground)`
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M28.5 30.4604L27.1104 29.1954C22.175 24.72 18.9167 21.7683 18.9167 18.1458C18.9167 15.1942 21.2358 12.875 24.1875 12.875C25.855 12.875 27.4554 13.6512 28.5 14.8779C29.5446 13.6512 31.145 12.875 32.8125 12.875C35.7642 12.875 38.0833 15.1942 38.0833 18.1458C38.0833 21.7683 34.825 24.72 29.8896 29.205L28.5 30.4604Z",
  fill: "#EE77BC"
}), /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M18.8042 11.003C19.2869 11.0402 19.6736 11.4179 19.7222 11.8995L20.8041 22.6101L21.3782 19.2785C21.4608 18.7988 21.8769 18.4483 22.3636 18.4483H26C26.5523 18.4483 27 18.896 27 19.4483C27 20.0006 26.5523 20.4483 26 20.4483H23.2061L21.5309 30.1698C21.446 30.6626 21.0102 31.0169 20.5105 30.9994C20.0108 30.9819 19.6008 30.598 19.5505 30.1005L18.2919 17.6405L17.2708 21.5624C17.1673 21.9597 16.8315 22.2534 16.4239 22.303C16.0163 22.3527 15.6198 22.1481 15.424 21.7872L13.3892 18.0362L12.377 20.455C12.2214 20.8269 11.8577 21.069 11.4545 21.069H6C5.44772 21.069 5 20.6213 5 20.069C5 19.5167 5.44772 19.069 6 19.069H10.789L12.3502 15.3381C12.4988 14.9831 12.838 14.7448 13.2224 14.7254C13.6068 14.7061 13.9682 14.909 14.1517 15.2473L15.9738 18.6062L17.7595 11.748C17.8815 11.2796 18.3216 10.9657 18.8042 11.003Z",
  fill: "#fff"
}), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
  id: "techopsBackground",
  x1: "36",
  y1: "4",
  x2: "4",
  y2: "36",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/_react.default.createElement("stop", {
  stopColor: "#CB3C8F"
}), /*#__PURE__*/_react.default.createElement("stop", {
  offset: "1",
  stopColor: "#952867"
}))));

exports.TechOps = TechOps;