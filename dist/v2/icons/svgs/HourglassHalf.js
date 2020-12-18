"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HourglassHalf = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-restricted-imports
const HourglassHalf = props => /*#__PURE__*/_react.default.createElement(_core.SvgIcon, props, /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zM8 4v3.5l4 4 4-4V4H8z",
  clipRule: "evenodd"
}), /*#__PURE__*/_react.default.createElement("path", {
  d: "M15 5H9v2l3 3 3-3V5z"
}));

exports.HourglassHalf = HourglassHalf;