"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyOrg = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const MyOrg = props => /*#__PURE__*/_react.default.createElement(_core.SvgIcon, _extends({}, props, {
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
  fill: `url(${window.location.pathname}#catalogBackground)`
}), /*#__PURE__*/_react.default.createElement("rect", {
  width: "32",
  height: "32",
  x: "4",
  y: "4",
  fill: "url(#paint0_ss_v2_myorg_linear)",
  rx: "4"
}), /*#__PURE__*/_react.default.createElement("path", {
  fill: "#19BFC1",
  fillRule: "evenodd",
  d: "M25.298 22.02c.92.567 2.003.895 3.164.895A6.002 6.002 0 0031.657 22c2.53.89 4.343 3.3 4.343 6.134v1.363c0 .122-.003.243-.01.363v2.138a4 4 0 01-4 4H22a1 1 0 01-1-1V28.65c0-.048.003-.095.01-.141v-.375a6.503 6.503 0 014.288-6.114z",
  clipRule: "evenodd"
}), /*#__PURE__*/_react.default.createElement("rect", {
  width: "8",
  height: "8",
  fill: "#19BFC1",
  rx: "4",
  transform: "matrix(-1 0 0 1 32.5 14)"
}), /*#__PURE__*/_react.default.createElement("path", {
  fill: "#19BFC1",
  fillRule: "evenodd",
  d: "M12.976 22.548a6.138 6.138 0 003.215.904h.536a6.138 6.138 0 003.247-.924 6.503 6.503 0 014.526 6.195v.777c0 .126-.003.25-.01.375v5.894h-4.766c-.549.15-1.127.231-1.724.231h-2.99c-.596 0-1.175-.08-1.724-.231H8.5v-6.775c0-.05.004-.098.01-.146v-.125a6.503 6.503 0 014.466-6.175z",
  clipRule: "evenodd"
}), /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12.4813 23.0134C13.484 23.6589 14.6778 24.0334 15.959 24.0334C17.2533 24.0334 18.4584 23.6512 19.4675 22.9934C22.0956 23.8271 24 26.2863 24 29.1903V31.246C24 31.3717 23.9964 31.4966 23.9894 31.6205V36.7464C23.9894 37.2987 23.5417 37.7464 22.9894 37.7464H9C8.44772 37.7464 8 37.2987 8 36.7464V29.997C8 29.9473 8.00362 29.8985 8.01061 29.8508V29.1903C8.01061 26.3091 9.88522 23.8658 12.4813 23.0134Z",
  fill: "#fff"
}), /*#__PURE__*/_react.default.createElement("rect", {
  width: "10",
  height: "10",
  fill: "#19BFC1",
  rx: "5",
  transform: "matrix(-1 0 0 1 21.5 12.5)"
}), /*#__PURE__*/_react.default.createElement("rect", {
  width: "10",
  height: "10",
  fill: "#fff",
  rx: "5",
  transform: "matrix(-1 0 0 1 21 13)"
}), /*#__PURE__*/_react.default.createElement("path", {
  fill: "#19BFC1",
  d: "M15.165 28.167h1.724l1.186 9.91-1.994 1.85L14 38.078l1.165-9.91zM15.155 25.086h1.838l.38.942-.38 1.558h-1.838l-.42-1.558.42-.942z"
}), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
  id: "paint0_ss_v2_myorg_linear",
  x1: "36",
  x2: "4",
  y1: "4",
  y2: "36",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/_react.default.createElement("stop", {
  offset: "0.0291726",
  stopColor: "#099A9C"
}), /*#__PURE__*/_react.default.createElement("stop", {
  offset: "0.9999",
  stopColor: "#097A7B"
}), /*#__PURE__*/_react.default.createElement("stop", {
  offset: "1",
  stopColor: "#058284"
}))));

exports.MyOrg = MyOrg;