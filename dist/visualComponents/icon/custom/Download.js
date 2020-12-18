"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Download = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Download = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  d: "M15 9H19L12 16L5 9H9V3H15V9ZM5 20V18H19V20H5Z",
  clipRule: "evenodd"
}));

exports.Download = Download;