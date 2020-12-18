"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cube = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Cube = props => /*#__PURE__*/_react.default.createElement("svg", _extends({
  fill: "none",
  height: 16,
  width: 14,
  viewBox: "0 0 14 16"
}, props), /*#__PURE__*/_react.default.createElement("path", {
  d: "M6.93.643a.64.64 0 00-.175.045l-6.24 2.56a.64.64 0 00-.395.595v8.32a.64.64 0 00.395.59l6.24 2.56a.642.642 0 00.49 0l6.24-2.56a.64.64 0 00.395-.59v-8.32a.64.64 0 00-.395-.595L7.245.688A.64.64 0 006.93.643zM7 1.973l4.55 1.87L7 5.708 2.45 3.843 7 1.973zM1.4 4.798l4.96 2.035v6.93L1.4 11.728v-6.93zm11.2 0v6.93l-4.96 2.035v-6.93l4.96-2.035z"
}));

exports.Cube = Cube;