"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Download = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-restricted-imports
const Download = props => /*#__PURE__*/_react.default.createElement(_core.SvgIcon, props, /*#__PURE__*/_react.default.createElement("path", {
  fillRule: "evenodd",
  d: "M15 9H19L12 16L5 9H9V3H15V9ZM5 20V18H19V20H5Z",
  clipRule: "evenodd"
}));

exports.Download = Download;