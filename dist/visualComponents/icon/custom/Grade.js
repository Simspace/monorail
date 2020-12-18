"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grade = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Grade = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  viewBox: "0 0 24 24"
}, props), /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5.08 6.107a.58.58 0 000-.823L15.717 6.92a.58.58 0 00-.823 0l-1.067 1.068 2.187 2.187 1.068-1.067zM6.75 15.063v2.187h2.188l6.451-6.452-2.187-2.187-6.452 6.451z",
  clipRule: "evenodd"
}));

exports.Grade = Grade;