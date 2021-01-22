"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ribbon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Ribbon = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  width: 10,
  height: 13,
  viewBox: "0 0 10 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1.389 1.857v6.81L6.11 7.119l1.667.62V13l-3.89-1.857L0 13V3.095c0-.68.5-1.238 1.111-1.238h.278z"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M8.889 0H3.333c-.61 0-1.11.371-1.11.825V7.43L6.11 6.19 10 7.43V.825C10 .371 9.5 0 8.889 0z"
}));

exports.Ribbon = Ribbon;