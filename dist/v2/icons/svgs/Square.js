"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Square = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-restricted-imports
const Square = props => /*#__PURE__*/_react.default.createElement(_core.SvgIcon, props, /*#__PURE__*/_react.default.createElement("path", {
  d: "M4 4h16v16H4V4z"
}));

exports.Square = Square;