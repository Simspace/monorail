"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvertedInformation = InvertedInformation;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function InvertedInformation(props) {
  return /*#__PURE__*/_react.default.createElement(_core.SvgIcon, _extends({
    width: "10",
    height: "10",
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM4.5 7.5V4.5H5.5V7.5H4.5ZM4.5 2.5V3.5H5.5V2.5H4.5Z"
  }));
}