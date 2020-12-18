"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Upload = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Upload = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  d: "M15 10v6H9v-6H5l7-7 7 7h-4zm4 10v-2H5v2h14z",
  clipRule: "evenodd"
}));

exports.Upload = Upload;